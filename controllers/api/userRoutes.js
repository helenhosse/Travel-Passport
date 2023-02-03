const router = require('express').Router();
const User = require('../../models/User');
const bcrypt = require('bcrypt');

router.post('/login', async (req, res) => {
    try {
        const userDb = await User.findOne({
            where: {
                email: req.body.email,
            }
        });
        if (!userDb) {
            res.status(404).json({message: 'There is no user with that email. Please try again, or create a new account.'});
            return;
        }

        const validPassword = await bcrypt.compare(req.body.password, userDb.password);
        if (!validPassword) {
            res.status(404).json({message: 'Your passowrd is incorrect. Please try again.'});
            return;
        }

        req.session.save (() => {
            req.session.loggedIn = true;
            res.status(200).json({message: 'Login successful!'});
        });
    } catch(err) {
        res.status(500).json({message: "An error occurred, please try again. If problem persists, contact us."});
    }
});

router.post('/logout', (req,res) => {
    if (req.session.loggedIn) {
        req.session.destroy(() => {
            res.status(204).end();
        });
    } else {
        res.status(404).end();
    }
});

module.exports = router;