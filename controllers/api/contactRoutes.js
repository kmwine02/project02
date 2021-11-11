const router = require('express').Router();
const Contact = require('../../models/Contact');


// GET all Contacts
router.get('/', (req, res) => {
    // Get all contacts for a single user
    Contact.findAll().then((contactData) => {
      res.json(contactData);
    });
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
    
          })
    })
      .then((newContact) => {
        res.json(newContact);
      })
      .catch((err) => {
        res.json(err);
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

      })

      .then((updatedContact) => {
        res.json(updatedContact);
      })
      .catch((err) => {
        console.log(err);
        res.json(err);
      });
  });
  
  // Delete a contact
  router.delete('/:id', (req, res) => {
    Contact.destroy({
      where: {
        id: req.params.id,
      },
    })
      .then((deletedContact) => {
        res.json(deletedContact);
      })
      .catch((err) => res.json(err));
  });

  // View a contact

  router.get('/:id', (req, res) => {
    Contact.findByPk(req.params.id).then((singlecontactData) => {
      res.json(singlecontactData);
    });
  });

  module.exports = router;
  