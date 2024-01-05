const express = require('express');
const multer = require('multer');
const path = require('path');
const Job = require('../models/Job');
const JobStatus = require('../models/jobStatusModel');

const router = express.Router();
const upload = multer({dest: 'uploads/'});


router.use('/uploads', express.static(path.join(__dirname, '../uploads')));


router.post('/api/jobs', upload.single('image'), async (req, res) => {
    try {

        const {jobTitle, jobDetails, category, startPrice, endPrice, userName} = req.body;


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


        await job.save();

        res.status(201).json({success: true, message: 'Job created successfully', job});
    } catch (error) {
        console.error(error);
        res.status(500).json({success: false, message: 'Internal server error'});
    }
});

router.post('/api/acceptJob/:jobId', async (req, res) => {
    try {
        const {jobId} = req.params;
        const {userName, completionStatus} = req.body;


        const jobStatus = new JobStatus({
            jobId,
            acceptance: true,
            acceptedBy: userName,
            completionStatus,
        });

        await jobStatus.save();

        res.status(200).json({success: true, message: 'Job accepted successfully'});
    } catch (error) {
        console.error('Error accepting job:', error);
        res.status(500).json({success: false, message: 'Internal Server Error'});
    }
});
router.get('/api/pendingJobs/:userName', async (req, res) => {
    try {
        const userName = req.params.userName;
        const pendingJobs = await Job.find({createdBy: userName});
        res.status(200).json(pendingJobs);
    } catch (error) {
        console.error(error);
        res.status(500).json({success: false, message: 'Internal server error'});
    }
});

router.get('/api/jobs', async (req, res) => {
    try {
        const jobs = await Job.find();
        res.status(200).json(jobs);
    } catch (error) {
        console.error(error);
        res.status(500).json({success: false, message: 'Internal server error'});
    }
});

module.exports = router;
