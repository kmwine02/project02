const { DateTime } = require('luxon');

const formattedDate = (dbDate) => {
  return DateTime.fromObject(dbDate).toLocaleString(DateTime.DATETIME_MED);
};

module.exports = formattedDate;
