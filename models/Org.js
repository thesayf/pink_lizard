const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const OrgSchema = new Schema({
    name: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true
    },
    address: {
        type: String,
        required: true
    },
    password: {
        type: String,
        required: true
    },
    img: {
        type: String,
        required: false
    },
    projects: [{
        type: Schema.Types.ObjectId,
        ref: 'Project'
    }],
    participants: [{
        type: Schema.Types.ObjectId,
        ref: 'User'
    }]
})

module.exports = Org = mongoose.model('Org', OrgSchema)