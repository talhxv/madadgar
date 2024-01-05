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
    image: {type: String},
    priceRange: {
        start: String,
        end: String,
    },
    createdBy: String,
});

const Job = mongoose.model('Job', jobSchema);

module.exports = Job;