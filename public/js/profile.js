// Add book to Personal Reading List
const newBook = async (e) => {
  e.preventDefault();

  const book_name = document.querySelector('#title').value.trim();
  const book_author = document.querySelector('#author').value.trim();
  const book_description = document.querySelector('#book-desc').value.trim();
  const user_id = document.querySelector('#user-id')

   if(book_name && book_author && user_id) {
    const response = await fetch('api/prList', {
      method: 'POST',
      body: JSON.stringify({ book_name, book_author, book_description }),
      headers: {
        'Content-Type': 'application/json',
      },
    });
  

    if (response.ok) {
      document.location.replace('/profile');
    } else {
      alert('Failed to add book');
    }
  }
};

document.querySelector('#submit').addEventListener('click', newBook);