const router = require('express').Router();
const userRoutes = require('./userRoutes');
const journalRoutes = require('./journalRoutes');
const commentRoutes = require ('./commentRoutes')

router.use('/users', userRoutes);
router.use('/journals', journalRoutes);
router.use('/comments', commentRoutes)

module.exports = router;
