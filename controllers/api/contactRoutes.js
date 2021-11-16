const router = require('express').Router();
const Contact = require('../../models/Contact');
const User = require('../../models/User');

// GET all Contacts for
router.get('/', (req, res) => {
  // Get all contacts for a single user
  Contact.findAll().then((contactData) => {
    res.json(contactData);
  });
});

// GET all contacts for a specific user
router.get('/user/:userId', async (req, res) => {
  try {
    // Get all contacts for a single user
    const allContacts = await Contact.findAll({
      where: {
        userId: req.params.userId,
      },
    });
    if (!allContacts) {
      res.status(404).json({ message: 'No contacts found' });
      return;
    }
    res.status(200).json(allContacts);
  } catch (err) {
    res.status(500).json(err);
  }
});

//Create a contact
router.post('/', (req, res) => {
  Contact.create({
    // All the fields you can update and the data attached to the request body.
    firstName: req.body.firstName,
    lastName: req.body.lastName,
    phoneNumber: req.body.phoneNumber,
    addressLine1: req.body.addressLine1,
    addressLine2: req.body.addressLine2,
    addressCity: req.body.addressCity,
    addressState: req.body.addressState,
    addressZip: req.body.addressZip,
    userId: req.session.user_id,
  })
    .then((newContact) => {
      res.json(newContact);
    })
    .catch((err) => {
      res.json(err);
    });
});

// Update a contact
router.put('/:id', (req, res) => {
  //Calls the update method on the Contact model
  Contact.update(
    {
      // All the fields you can update and the data attached to the request body.
      firstName: req.body.firstName,
      lastName: req.body.lastName,
      phoneNumber: req.body.phoneNumber,
      addressLine1: req.body.addressLine1,
      addressLine2: req.body.addressLine2,
      addressCity: req.body.addressCity,
      addressState: req.body.addressState,
      addressZip: req.body.addressZip,
    },
    {
      where: {
        id: req.params.id,
      },
    }
  )
    .then((updatedContact) => {
      res.json(updatedContact);
    })
    .catch((err) => {
      console.log(err);
      res.json(err);
    });
});

// Delete a contact
router.delete('/:id', async (req, res) => {
  try {
    const deletedContact = await Contact.destroy({
      where: {
        id: req.params.id,
      },
    });
    res.status(200).json(deletedContact);
  } catch (err) {
    res.status(500).json(err);
  }
});

// View a contact

router.get('/:id', (req, res) => {
  Contact.findByPk(req.params.id).then((singlecontactData) => {
    res.json(singlecontactData);
  });
});

module.exports = router;
