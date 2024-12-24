const editFormHandler = async (event) => {
    event.preventDefault();
  
    const title = document.querySelector('#journal-title').value.trim();
    const description = document.querySelector('#journal-description').value.trim();

    const journalId = window.location.href.split("/").pop()
  
    if (title && description) {
      const response = await fetch(`/api/journals/${journalId}`, {
        method: 'PUT',
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
    .querySelector('.edit-journal-form')
    .addEventListener('submit', editFormHandler);
  
  