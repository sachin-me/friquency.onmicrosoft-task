const mongoose = require('mongoose');

const Schema = mongoose.Schema;
const EventSchama = new Schema({
    eventname: { type: String },
    eventhost: { type: String },
    eventdate: { type: Date },
    eventplace: { type: String }
})

module.exports = mongoose.model('Event', EventSchama);