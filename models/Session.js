const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const SessionSchema = new Schema({
    project: {
        type: Schema.Types.ObjectId,
        ref: 'Project',
        required: true
    },
    description: {
        type: String,
        required: true
    },
    attendees: [{
        type: Schema.Types.ObjectId,
        ref: 'User'
    }],
    lat: {
        type: Number,
        required: true
    },
    lon: {
        type: Number,
        required: true 
    }
});

module.exports = Session = mongoose.model('Session', SessionSchema);