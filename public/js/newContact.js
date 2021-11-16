const addContactHandler = async (event) => {
  event.preventDefault();
  console.log('save button pressed');

  const firstName = document.querySelector('#inputFirstName').value.trim();
  const lastName = document.querySelector('#inputLastName').value.trim();
  const phoneNumber = document.querySelector('#inputPhone').value.trim();
  const addressLine1 = document.querySelector('#inputAddress').value.trim();
  const addressLine2 = document.querySelector('#inputAddress2').value.trim();
  const addressCity = document.querySelector('#inputCity').value.trim();
  const addressState = document.querySelector('#inputState').value.trim();
  const addressZip = document.querySelector('#inputZip').value.trim();

  if (firstName && lastName) {
    if (event.target.hasAttribute('data-id')) {
      const response = await fetch(`/api/contacts/`, {
        method: 'POST',
        body: JSON.stringify({
          firstName,
          lastName,
          phoneNumber,
          addressLine1,
          addressLine2,
          addressCity,
          addressState,
          addressZip,
        }),
        headers: {
          'Content-Type': 'application/json',
        },
      });

      if (response.ok) {
        alert('Contact added');
      } else {
        alert('Failed to save contact');
      }
    }
  }
};

document
  .querySelector('.submit-button')
  .addEventListener('click', addContactHandler);
