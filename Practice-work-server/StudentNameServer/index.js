import express from "express";
const app = express();
const PORT = 3000;
app.use(express.json());

const StudentNames = [
{
"studentName": "ABDUL HAQUE",
"University": "SUxCG 714",
"UniversityUID": "108444"
},
{
"studentName": "ADITYA KUMAR",
"University": "SUxCG 702",
"UniversityUID": "108716",
},
{
"studentName": "AMAN KUMAR",
"University": "SUxCG 702",
"UniversityUID":"108500"
},
{
"studentName": "AMRIT RAJ",
"University": "SUxCG 702",
"UniversityUID": "108587"
},

]

app.get('/students', (req, res) => {
    res.json(StudentNames);
});

app.post('/students', (req, res) => {
    console.log(req.body);
    const { studentName, University, UniversityUID } = req.body;
    if (!studentName || !University || !UniversityUID) {
        return res.status(400).json({ message: "All fields are required" });
    }  
    const newStudent = { studentName, University, UniversityUID };
    StudentNames.push(newStudent);
    res.status(201).json(newStudent);
});

app.put('/students/v1/:UniversityUID', (req, res) => {
    console.log(req.body);
    const gr_number = req.params.UniversityUID;
    const { studentName, University } = req.body;  
    const studentIndex = StudentNames.findIndex(
        s => s.UniversityUID === gr_number
    );
    if (studentIndex !== -1) {
        StudentNames[studentIndex] = {
            ...StudentNames[studentIndex],
            studentName: studentName || StudentNames[studentIndex].studentName,
            University: University || StudentNames[studentIndex].University,
        };
        res.json(StudentNames[studentIndex]);
    } else {
        res.status(404).json({ message: "Student not found" });
    }  
});

app.get("/students/test", (req, res) => {
    res.send("TEST ROUTE WORKS");
});

app.get("/students/v1/:UniversityUID", (req, res) => {
    const gr_number = req.params.UniversityUID; // STRING hi rehne do
    const student = StudentNames.find(
        s => s.UniversityUID === gr_number
    );
    if (student) {
        res.json(student);
    } else {
        res.status(404).json({ message: "Student not found" });
    }
});

app.get("/students/v2/:name", (req, res) => {
    const name = req.params.name.toLowerCase();
    const student = StudentNames.find(
        s => s.studentName.toLowerCase() === name
    );
    if (student) {
        res.json(student);
    } else {
        res.status(404).json({ message: "Student not found" });
    }
});


app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});