const router = require('express').Router();
const userRoutes = require('./userRoutes');
const contactRoutes = require('./contactRoutes');

router.use('/users', userRoutes);
router.use('/contacts', contactRoutes);

module.exports = router;
