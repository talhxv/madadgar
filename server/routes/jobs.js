// routes/jobs.js
const express = require('express');
const multer = require('multer');
const Job = require('../models/Job');

const router = express.Router();
const upload = multer({ dest: 'uploads/' }); // Adjust the destination folder as needed

// Route to handle job creation
router.post('/api/jobs', upload.single('image'), async (req, res) => {
    try {
        // Extract job data from the request body
        const { jobTitle, jobDetails, category } = req.body;

        // Create a new job instance
        const job = new Job({
            jobTitle,
            jobDetails,
            category,
            image: req.file ? req.file.path : null, // Save the file path or URL if an image is uploaded
        });

        // Save the job to the database
        await job.save();

        res.status(201).json({ success: true, message: 'Job created successfully', job });
    } catch (error) {
        console.error(error);
        res.status(500).json({ success: false, message: 'Internal server error' });
    }
});

module.exports = router;
