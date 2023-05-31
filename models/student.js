const mongoose = require('mongoose');

const studentSchema = mongoose.Schema({
  firstName: { type: String, required: true },
  lastName: { type: String, required: true },
  dob: { type: Date },
  studentCode: { type: String, required: true },
  gpa: { type: Number },
  subjects: [{
    name: { type: String },
    code: { type: String }
  }]
}, {
  timestamps: true,
  writeConcern: {
    w: 'majority',
    j: true,
    wtimeout: 30000
  },
  read: 'nearest'
});

const Model = mongoose.model('Student', studentSchema);
module.exports = Model;