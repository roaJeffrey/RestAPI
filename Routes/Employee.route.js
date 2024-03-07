const express = require('express');
const router = express.Router();

router.get('/', (req, res, next) => {
    res.send('List of all Employees');
    // next(new Error("Cannot get all Employees"));
});

router.post('/', (req, res, next) => {
    res.send('Creating a new employee');
});

router.get('/:id', (req, res, next) => {
    res.send('Get a single employee');
});

router.patch('/:id', (req, res, next) => {
    res.send('Patch a single employee by its id');
});

router.delete('/:id', (req, res, next) => {
    res.send('Delete a single employee by its id');
});


module.exports = router;