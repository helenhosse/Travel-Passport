const router = require('express').Router();
const { json } = require('express');
const fetch = require('node-fetch');
const {parseString} = require('xml2js');

const options = {
    method: 'GET',
    headers: {
        'X-RapidAPI-Key': process.env.RAPID_API_KEY,
        'X-RapidAPI-Host': 'timetable-lookup.p.rapidapi.com',
        Accept: "application/json"
    }
};
// this will show the flight schedules
router.get('/', async (req, res) => {
    try {
        const response = await fetch('https://timetable-lookup.p.rapidapi.com/TimeTable/BOS/LAX/20191217/?format=json', options)
        const data = await response.text()
        console.log(data);
        parseString(data, (error, results) => {
            res.json(results)
        });
    } catch (err) { 
        console.error(err);
        res.status(500).json({
            message: "An error occurred, please try again. If the problem persists please contact us."
        });
    }
});
// shows the nonstop and direct flights for an airline
router.get('/', async (req, res) => {
    try {
        const response = await fetch('https://timetable-lookup.p.rapidapi.com/airlines/%7Bairlineiatacode%7D/routes/?format=json', options)
        const data = await response.text()
        console.log(data);
        parseString(data, (error, results) => {
            res.json(results)
        });
    } catch (err) { 
        console.error(err);
        res.status(500).json({
            message: "An error occurred, please try again. If the problem persists please contact us."
        });
    }
});
// this will show the airlines and the countries they operate in
router.get('/', async (req, res) => {
    try {
        const response = await fetch('https://timetable-lookup.p.rapidapi.com/airlines/?format=json', options)
        const data = await response.text()
        console.log(data);
        parseString(data, (error, results) => {
            res.json(results)
        });
    } catch (err) { 
        console.error(err);
        res.status(500).json({
            message: "An error occurred, please try again. If the problem persists please contact us."
        });
    }
});

module.exports = router;

// this is the page that works the best