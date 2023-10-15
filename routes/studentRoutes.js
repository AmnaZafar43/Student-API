const express = require("express");
const router = express.Router();
const studentController = require("../controllers/studentController");
// create a new student
router.post("/students", studentController.addStudent);
// get all students
router.get("/students", studentController.getAllStudent);
// update a student by id
router.put("/students/:id", studentController.updateStudent);
// delete a student by id
router.delete("/students/:id", studentController.deleteStudent);

module.exports = router;
