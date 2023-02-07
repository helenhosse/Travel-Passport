const router = require('express').Router();
const { Travel, User } = require('../models');
const withAuth = require('../utils/auth');

router.get('/', async (req, res) => {
    try {
        const travelData = await Travel.findAll({
            include: [
                {
                    model: User,
                    attributes: ['name'],
                },
            ],
        });
        const travel = travelData.map((travel) => travel.get({ plain: true }));

        res.render('homepage', {
            travel,
            logged_in: req.session.logged_in
        });
    } catch (err) {
        res.status(500).json(err);
    }
});

router.get('/travel', (req, res) => {

    res.send('travel route')
    // try {
    //     const travelData = await Travel.findByPk(req.params.id, {
    //         include: [
    //             {
    //             model: User,
    //             attributes: ['name'],
    //         },
    //         ],
    //     });

    //     const travel = travelData.get({ plain: true });

    //     res.render('travel', {
    //         ...travel,
    //         logged_in: req.session.logged_in
    //     });
    // } catch (err) {
    //     res.status(500).json(err);
    // }
});

router.get('/homepage', withAuth, async (req, res) => {
    try {
        // Find the logged in user based on the session ID
        const userData = await User.findByPk(req.session.user_id, {
            attributes: { exclude: ['password'] },
            include: [{ model: Travel }],
        });

        const user = userData.get({ plain: true });

        res.render('profile', {
            ...user,
            logged_in: true
        });
    } catch (err) {
        res.status(500).json(err);
    }
});

router.get('/signup', async (req, res) => {
    res.render('signup')
});

router.get('/login', async (req, res) => {

    if (req.session.logged_in) {
        res.redirect('/travel');
        return;
    }
    res.render('login')
});

// router.get('/booking', async (req, res) => {
//    res.render('booking')
//});

module.exports = router;