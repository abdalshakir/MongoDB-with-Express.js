import express from 'express';
import cors from 'cors';
import morgan from 'morgan';
import mongoose from 'mongoose';
import Students from './src/models/students.mjs';

const app = express();
const port = process.env.PORT || 3000;

app.use(express.json());
app.use(cors());
app.use(morgan('short'));

mongoose.connect('mongodb://localhost:27017/school',
    {
        useNewUrlParser: true,
        useUnifiedTopology: true
    }
).then((client) => {
    console.log("MongoDB connected successfully");

}).catch((err) => {
    console.log("Erorr====> " + err)
});

// Create Students in Database
app.post('/students', (req, res) => {
    Students.create(req.body).then((data) => {
        res.status(201).send(data)
    }).catch((err) => {
        res.status(400).send(err)
    })
});

// Get all Students from Database
app.get('/students', (req, res) => {
    Students.find({}).then((data) => {
        res.send(data)
    }).catch((err) => {
        res.status(500).send(err)
    })
})

// Get One Student by Id
app.get('/student/:id', (req, res) => {
    // ----- First Method -----
    // Students.findById(req.params.id).then((data) => {
    //     if (!data) {
    //         res.status(404).send()
    //     }
    //     res.send(data)
    // }).catch((err) => {
    //     res.status(500).send(err)
    // })

    // ----- Second Method -----
    Students.findOne({ _id: req.params.id }).then((data) => {
        if (!data) {
            res.status(404).send()
        }
        res.send(data)
    }).catch((err) => {
        res.status(500).send(err)
    })
})


app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}..`)
})