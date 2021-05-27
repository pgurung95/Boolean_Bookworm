// const router = require('express').Router();
// //const userRoutes = require('./userRoutes');

// //const prListRoutes = require('./prListRoutes');

// //router.use('/users', userRoutes);

// //router.use('/prList', prListRoutes);

// module.exports = router;

const router = require('express').Router();
const blogRoutes = require('./blogRoutes');

const userRoutes = require('./userRoutes');

router.use('/users', userRoutes);
router.use('/blog', blogRoutes);

module.exports = router;
