const mongoose = require('mongoose');

const jobSchema = new mongoose.Schema({
    jobTitle: {
        type: String,
        required: true,
    },
    jobDetails: {
        type: String,
        required: true,
    },
    category: {type: mongoose.Schema.Types.ObjectId, ref: 'Category', required: true},
    image: {type: String}, // Assuming the image is stored as a file path or URL
});

const Job = mongoose.model('Job', jobSchema);

module.exports = Job;