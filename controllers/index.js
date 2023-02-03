const router = require ('express').Router();

const apiRoutes = require('./api/index.js')


router.use('/api', apiRoutes)
// localhost: /api/user/login 

module.exports = router;