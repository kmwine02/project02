const router = require('express').Router();
const withAuth = require('../../utils/auth');
const { User, Contact } = require('../../models');

router.get('/', (req, res) => {
  res.render('login');
});

router.get('/signup', (req, res) => {
  res.render('register');
});

// router.get('/addressbook', (req, res) => {
//     res.render('addressBook', { title: 'Shem\'s page' });
// });

// Show the contacts for a logged in user
router.get('/addressbook', async (req, res) => {
  try {
    const userContacts = await User.findByPk(req.session.user_id, {
      attributes: { exclude: ['password'] },
      include: [{ model: Contact }],
    });

    const contact = userContacts.get({ plain: true });
    console.log(contact);

    res.render('addressbook', {
      ...contact,
    });
  } catch (err) {
    res.status(500).json(err);
  }
});

module.exports = router;
