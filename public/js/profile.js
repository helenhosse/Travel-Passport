const newFormHandler = async (event) => {
    event.preventDefault();
  
    const name = document.querySelector('#travel-name').value.trim();
    const description = document.querySelector('#travel-desc').value.trim();
  
    if (name && needed_funding && description) {
      const response = await fetch(`/api/travel`, {
        method: 'POST',
        body: JSON.stringify({ name, description }),
        headers: {
          'Content-Type': 'application/json',
        },
      });
  
      if (response.ok) {
        document.location.replace('/profile');
      } else {
        alert('Failed to start new trip');
      }
    }
  };
  
  const delButtonHandler = async (event) => {
    if (event.target.hasAttribute('data-id')) {
      const id = event.target.getAttribute('data-id');
  
      const response = await fetch(`/api/travel/${id}`, {
        method: 'DELETE',
      });
  
      if (response.ok) {
        document.location.replace('/profile');
      } else {
        alert('Failed to delete project');
      }
    }
  };
  
  document
    .querySelector('.new-travel-form')
    .addEventListener('submit', newFormHandler);
  
  document
    .querySelector('.travel-list')
    .addEventListener('click', delButtonHandler);
  
