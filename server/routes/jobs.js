const express = require('express');
const multer = require('multer');
const path = require('path'); // Import the 'path' module
const Job = require('../models/Job');

const router = express.Router();
const upload = multer({ dest: 'uploads/' });

// Serve static files from the 'uploads' directory
router.use('/uploads', express.static(path.join(__dirname, '../uploads')));

// Route to handle job creation
router.post('/api/jobs', upload.single('image'), async (req, res) => {
    try {
        // Extract job data from the request body
        const { jobTitle, jobDetails, category, startPrice, endPrice, userName } = req.body;

        // Create a new job instance
        const job = new Job({
            jobTitle,
            jobDetails,
            category,
            image: req.file ? req.file.path : null,
            priceRange: {
                start: startPrice,
                end: endPrice,
            },
            createdBy: userName,
        });

        // Save the job to the database
        await job.save();

        res.status(201).json({ success: true, message: 'Job created successfully', job });
    } catch (error) {
        console.error(error);
        res.status(500).json({ success: false, message: 'Internal server error' });
    }
});

router.get('/api/pendingJobs/:userName', async (req, res) => {
    try {
        const userName = req.params.userName;
        const pendingJobs = await Job.find({ createdBy: userName });
        res.status(200).json(pendingJobs);
    } catch (error) {
        console.error(error);
        res.status(500).json({ success: false, message: 'Internal server error' });
    }
});

router.get('/api/jobs', async (req, res) => {
    try {
        const jobs = await Job.find();
        res.status(200).json(jobs);
    } catch (error) {
        console.error(error);
        res.status(500).json({ success: false, message: 'Internal server error' });
    }
});

module.exports = router;
