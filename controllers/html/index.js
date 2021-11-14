const router = require('express').Router();

router.get('/', (req, res) => {
    res.render('login');
})

router.get('/signup', (req, res) => {
    res.render('register');
})

router.get('/addressbook', (req, res) => {
    res.render('addressBook', { title: 'Shem\'s page' });
});

module.exports = router;
