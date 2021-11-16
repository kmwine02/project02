const { DateTime } = require('luxon');

const formattedDate = (dbDate) => {
  return DateTime.fromObject(dbDate, {
    zone: 'America/New_York',
  }).toLocaleString(DateTime.DATETIME_MED);
};

module.exports = formattedDate;
