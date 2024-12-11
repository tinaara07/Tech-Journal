const newFormHandler = async (event) => {
  event.preventDefault();

  const name = document.querySelector('#journal-name').value.trim();
  const description = document.querySelector('#journal-desc').value.trim();

  if (name && needed_funding && description) {
    const response = await fetch(`/api/projects`, {
      method: 'POST',
      body: JSON.stringify({ name, description }),
      headers: {
        'Content-Type': 'application/json',
      },
    });

    if (response.ok) {
      document.location.replace('/profile');
    } else {
      alert('Failed to create journal');
    }
  }
};

const delButtonHandler = async (event) => {
  if (event.target.hasAttribute('data-id')) {
    const id = event.target.getAttribute('data-id');

    const response = await fetch(`/api/journals/${id}`, {
      method: 'DELETE',
    });

    if (response.ok) {
      document.location.replace('/profile');
    } else {
      alert('Failed to delete journal');
    }
  }
};

document
  .querySelector('.new-journal-form')
  .addEventListener('submit', newFormHandler);

document
  .querySelector('.journal-list')
  .addEventListener('click', delButtonHandler);
