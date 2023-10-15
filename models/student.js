const mongoose = require("mongoose");

const studentSchema = new mongoose.Schema(
{
    name: String,
    fatherName: String,
    registrationNo: String,
    contact: String,
    dateOfBirth: Date
},
{ timestamps: true }
);
module.exports = mongoose.model("Student", studentSchema);
