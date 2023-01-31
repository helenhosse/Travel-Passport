const router = require ('express').Router();

const categoriesRoutes = require('./categoriesRoutes');
const userApiRoutes = require('./api/userRoutes')

// need to put the API route here as well - no idea how to do

router.use('/categories', categoriesRoutes);

// router.use('/api/user', userApiRoutes); // localhost: /api/user/login - not totally sure how to do this

module.exports = router;