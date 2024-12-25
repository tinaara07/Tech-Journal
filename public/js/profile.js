const newJournalButton= document.getElementById("new-journal")
newJournalButton.addEventListener("click", function(){
    window.location.href = "/createjournal"
})
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
    .querySelector('.journal-list')
    .addEventListener('click', delButtonHandler);
  