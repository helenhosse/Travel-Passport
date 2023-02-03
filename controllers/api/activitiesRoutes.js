const router = require('express').Router();
const Activity = require('../../models/Activities');
const auth = require('../../utils/auth');

router.get('/', auth, async (req, res) => {
    try {
        const activitiesData = await Activity.findAll();
        const activities = ActivitiesData.map(
            (category) => category.get({ plain: true}));
            res.status(200).json(activities);
            res.render ('categories', {activities});
    } catch (err) {
        res.status(500).json({message: "An error occurred, please try again. If the problem persists please contact us."});
    }
});

module.exports = router;