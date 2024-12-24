const newFormHandler = async (event) => {
  event.preventDefault();

  const title = document.querySelector('#journal-title').value.trim();
  const description = document.querySelector('#journal-description').value.trim();

  if (title && description) {
    const response = await fetch(`/api/journals`, {
      method: 'POST',
      body: JSON.stringify({ title, description }),
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

document
  .querySelector('.new-journal-form')
  .addEventListener('submit', newFormHandler);

