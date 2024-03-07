const express = require('express');
const mongoose = require('mongoose');
const app = express();

mongoose.connect('mongodb+srv://ustp:TrHPMmbKYAVtycon@informationsystem.gra6mxe.mongodb.net/?retryWrites=true&w=majority&appName=informationsystem')
    // user: 'ustp',
    // password: 'TrHPMmbKYAVtycon'
.then(() => {
    console.log('Mongoose Connected...');
})
.catch((err) => {
    console.log('Error connecting into MongoDB...', err);
});


const EmployeeRoute = require('./Routes/Employee.route');
app.use(('/employee'), EmployeeRoute);

//Error for Wrong Endpoints
app.use((req, res, next) => {
    const err = new Error("Not Found");
    err.status = 404;
    next(err);
})

// Middleware
app.use((err, req, res, next) => {
    res.status(err.status || 500);
    res.send({
        error:{
            status: err.status || 500,
            message: err.message
        }
    })
});

app.listen(3000, () => {
    console.log('Listening on port 3000...');
});