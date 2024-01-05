const express = require("express");
const mongoose = require('mongoose');
const multer = require('multer');
const jobsRouter = require('./routes/jobs');
const JobStatus = require('./models/jobStatusModel');
const cors = require("cors");
const ObjectId = mongoose.Types.ObjectId;
const app = express();
const http = require('http');
const socketIo = require('socket.io');
app.use(express.json());
const server = http.createServer(app);
const io = socketIo(server);
const PORT = 3002;
io.on('connection', (socket) => {
    console.log('A user connected');


    socket.on('updateLocation', (location) => {

        io.emit('locationUpdate', location);
    });

    socket.on('disconnect', () => {
        console.log('A user disconnected');
    });
});

server.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
app.use(cors());
const UsersModel = require('./models/users')
const CategoriesModel = require('./models/categories')
const Job = require("./models/Job");
mongoose.connect("mongodb://127.0.0.1:27017/madadgar", {
    useNewUrlParser: true,
    useUnifiedTopology: true,
})
const storage = multer.diskStorage({
    destination: function (req, file, cb) {
        cb(null, 'uploads/categories');
    },
    filename: function (req, file, cb) {
        cb(null, Date.now() + '-' + file.originalname);
    },
});

const upload = multer({storage: storage});
app.post("/login", (req, res) => {
    const {email, password} = req.body;
    UsersModel.findOne({email: email})
        .then(user => {
            if (user) {
                if (user.password === password) {
                    res.json({success: true, user: {name: user.name}});
                } else {
                    res.json({success: false, message: "Incorrect password"});
                }
            } else {
                res.json({success: false, message: "User not found"});
            }
        })
});

app.post("/Register", (req, res) => {
    UsersModel.create(req.body)
        .then(users => res.json(users))
        .catch(err => res.json(err))
})
app.get('/api/users', async (req, res) => {
    try {
        const users = await UsersModel.find();
        res.json(users);
    } catch (error) {
        res.status(500).json({error: 'Internal Server Error'});
    }
});
app.get("/api/categories", async (req, res) => {
    try {
        const categories = await CategoriesModel.find();
        res.json(categories);
    } catch (error) {
        res.status(500).json({error: 'Internal Server Error'});
    }
});

app.get('/api/jobstatuses', async (req, res) => {
    try {
        const jobStatuses = await JobStatus.find({completionStatus: false});
        res.json(jobStatuses);
    } catch (error) {
        console.error(error);
        res.status(500).json({message: 'Internal Server Error'});
    }
});
app.get('/api/jobs/:jobId', async (req, res) => {
    const jobId = req.params.jobId;

    if (!ObjectId.isValid(jobId)) {
        return res.status(400).json({message: 'Invalid jobId format'});
    }

    try {
        const job = await Job.findOne({_id: new ObjectId(jobId)});

        if (job) {
            res.json(job);
        } else {
            res.status(404).json({message: 'Job not found'});
        }
    } catch (error) {
        console.error('Error fetching job details:', error);
        res.status(500).json({message: 'Internal Server Error'});
    }
});

app.post("/api/categories", upload.single('img'), async (req, res) => {
    try {
        const {name} = req.body;
        const img = req.file.path; // File path after upload

        const newCategory = new CategoriesModel({name, img});
        await newCategory.save();

        res.status(201).json(newCategory);
    } catch (error) {
        console.error(error);
        res.status(500).send('Internal Server Error');
    }
});
app.post('/api/markAsCompleted/:jobId', async (req, res) => {
    const jobId = req.params.jobId;
    try {
        const jobStatus = await JobStatus.findOne({jobId: new ObjectId(jobId)});

        if (!jobStatus) {
            return res.status(404).json({message: 'JobStatus not found'});
        }

        jobStatus.completionStatus = true;
        await jobStatus.save();

        res.json({message: 'JobStatus marked as completed successfully'});
    } catch (error) {
        console.error('Error marking job as completed:', error);
        res.status(500).json({message: 'Internal server error'});
    }
});

app.use('/uploads', express.static('uploads'));


app.use(express.json());
app.use(jobsRouter);
app.listen(3001, () => {
    console.log("server is running")
})