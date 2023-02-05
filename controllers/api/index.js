const router = require('express').Router();
const userRoutes = require('./userRoutes');
const travelRoutes = require('./travelRoutes');

router.use('/users', userRoutes);
router.use('/travel', travelRoutes);

module.exports = router;