const { DateTime } = require('luxon');

const luxonDateTime = () => {
  let timeDate = document.querySelector('.navbar');
  const result = luxon.DateTime.now()
    .setZone('America/New_York')
    .toLocaleString(DateTime.DATETIME_MED_WITH_SECONDS);
  // timeDate.textContent = result.toString();
};

module.exports = { luxonDateTime };
