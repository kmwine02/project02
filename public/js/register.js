const signupFormHandler = async (event) => {
  event.preventDefault();

  const firstName = document.querySelector('#register-first-name').value.trim();
  const lastName = document.querySelector('#register-last-name').value.trim();
  const email = document.querySelector('#register-email').value.trim();
  const password = document.querySelector('#register-password').value.trim();

  if (firstName && lastName && email && password) {
    const response = await fetch('/api/users/', {
      method: 'POST',
      body: JSON.stringify({ firstName, lastName, email, password }),
      headers: { 'Content-Type': 'application/json' },
    });

    if (response.ok) {
      document.location.replace('/');
    } else {
      alert('Failed to sign up.');
    }
  }
};

document
  .querySelector('.register-card')
  .addEventListener('submit', signupFormHandler);
