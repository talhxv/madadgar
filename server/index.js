const express = require("express");
const mongoose = require('mongoose');
const cors = require("cors");
const app = express();
app.use(express.json());

app.use(cors());

const UsersModel = require('./models/users')
mongoose.connect("mongodb://127.0.0.1:27017/madadgar");

app.post("/login", (req, res) => {
    const{email, password} = req.body;
    UsersModel.findOne({email:email})
        .then(user=> {
            if(user) {
                if(user.password === password) {
                    res.json("Success")
                }
                else
                {
                    res.json("the password was Incorrect")
                }
            } else {
                res.json("No record exists")
            }
        })
})
app.post("/Register", (req, res)=>{
    UsersModel.create(req.body)
        .then(users => res.json(users))
        .catch(err=>res.json(err))
})
app.get('/api/users', async (req, res) => {
    try {
        const users = await UsersModel.find();
        res.json(users);
    } catch (error) {
        res.status(500).json({ error: 'Internal Server Error' });
    }
});
app.listen(3001, ()=> {
    console.log("server is running")
})

