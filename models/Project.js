const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const ProjectSchema = new Schema({
    org: {
        type: Schema.Types.ObjectId,
        ref: 'Org'
    },
    name: {
        type: String,
        required: true
    },
    description: {
        type: String,
        required: true
    },
    lon: {
        type: Number,
        required: true
    },
    lat: {
        type: Number,
        required: true
    },
    img: {
        type: String,
        required: false
    },
    subscribers: [{
        type: Schema.Types.ObjectId,
        ref: 'User'
    }],
    sessions: [{
        type: Schema.Types.ObjectId,
        ref: 'Session'
    }]
});

module.exports = Project = mongoose.model('Project', ProjectSchema);