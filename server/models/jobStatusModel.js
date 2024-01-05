const mongoose = require('mongoose');

const jobStatusSchema = new mongoose.Schema({
    jobId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Job',
        required: true,
    },
    acceptance: {
        type: Boolean,
        default: false,
    },
    acceptedBy: String,
    completionStatus: {
        type: Boolean,
        default: false,
    },
});

const JobStatus = mongoose.model('JobStatus', jobStatusSchema);

module.exports = JobStatus;