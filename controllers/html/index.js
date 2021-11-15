const router = require('express').Router();
const withAuth = require('../../utils/auth');
const { User, Contact } = require('../../models');

router.get('/', (req, res) => {
  res.render('login');
});

router.get('/register', (req, res) => {
  res.render('register');
});

// Show the contacts for a logged in user
router.get('/addressbook', async (req, res) => {
  try {
    const userContacts = await User.findByPk(req.session.user_id, {
      attributes: { exclude: ['password'] },
      include: [{ model: Contact }],
    });

    const contact = userContacts.get({ plain: true });

    res.render('addressbook', {
      ...contact,
    });
  } catch (err) {
    res.status(500).json(err);
  }
});

// show details for an individual contact
router.get('/contacts/:id', async (req, res) => {
  try {
    const contactData = await Contact.findByPk(req.params.id, {});

    const contact = contactData.get({ plain: true });

    res.render('contactDetails', {
      ...contact,
      logged_in: req.session.logged_in,
    });
  } catch (err) {
    res.status(500).json(err);
  }
});

module.exports = router;
