const router = require('express').Router();
const { Travel } = require('../../models');
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

router.post('/', withAuth, async (req, res) => {
    try {
        const newTravel = await Travel.create({
            ...req.body,
            user_id: req.session.user_id,
        });

        res.status(200).json(newTravel);
    } catch (err) {
        res.status(400).json(err);
    }
});

router.delete('/:id', withAuth, async (req, res) => {
    try {
        const travelData = await Travel.destroy({
            where: {
                id: req.params.id,
                user_id: req.session.user_id,
            },
        });
        if (!travelData) {
            res.status(404).json({message: 'No project found with this id!'});
            return;
        }
        res.status(200).json(projectData);
        } catch (err) {
        res.status(500).json(err);
  }
});
   
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