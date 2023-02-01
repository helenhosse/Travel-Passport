const router = require('express').Router();
const userRoutes = require('./userRoutes');
const categoriesRoutes = require('controllers/categoriesRoutes');

router.use('/users', userRoutes);
router.use('/categories', categoriesRoutes);

module.exports = router;