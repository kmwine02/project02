const User = require('../models/User');
const Contact = require('../models/Contact');

Contact.belongsTo(User, {
    foreignKey: 'user_id',
  });

User.hasMany(Contact, {
    foreignKey:'user_id'
})
  

module.exports = { User, Contact };