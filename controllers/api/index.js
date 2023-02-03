const router = require('express').Router();
const userRoutes = require('./userRoutes');
const activitiesRoutes = require('./activitiesRoutes');
const travelRoutes = require('./travelRoutes');

router.use('/users', userRoutes);
router.use('/activities', activitiesRoutes);
router.use('/travel', travelRoutes);

module.exports = router;