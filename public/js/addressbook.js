const viewButtonHandler = async (event) => {};

const deleteButtonHandler = async (event) => {
  if (event.target.hasAttribute('data-id')) {
    const id = event.target.getAttribute('data-id');

    const response = await fetch(`/api/contacts/${id}`, {
      method: 'DELETE',
    });

    if (response.ok) {
      document.location.replace('/addressbook');
    } else {
      alert('Failed to delete project');
    }
  }
};

document
  .querySelector('.contacts')
  .addEventListener('click', deleteButtonHandler);
