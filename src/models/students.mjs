import mongoose from "mongoose";

const studentsSchema = new mongoose.Schema({
    name: String,
});

const Students = mongoose.model('Students', studentsSchema);

export default Students;