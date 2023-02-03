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
router.get('/', async (req, res) => {
    try {
        const response = await fetch('https://timetable-lookup.p.rapidapi.com/codes/entertainment/?format=json', options)
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
})

module.exports = router;