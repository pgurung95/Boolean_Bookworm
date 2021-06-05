

const router = require('express').Router();
const userRoutes = require('./userRoutes.js');
const blogRoutes = require('./blogRoutes.js');
const prListRoutes = require('./prListRoutes.js');
const bookRoutes = require('./bookRoutes.js');

router.use('/users', userRoutes);
router.use('/blogs', blogRoutes);
router.use('/prList', prListRoutes);
router.use('/books', bookRoutes);

module.exports = router;
