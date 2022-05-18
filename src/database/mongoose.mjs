import mongoose from 'mongoose';

mongoose.connect('mongodb://localhost:27017/students',
    {
        useNewUrlParser: true,
        useUnifiedTopology: true
    }
).then((client) => {
    console.log("MongoDB connected successfully");
    app.listen(8231, () => {
        console.log("Server SUCCESSFULLY Started at port number 8231")
    })
}).catch((err) => {
    console.log("Erorr====> " + err)
});