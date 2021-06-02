// create new comment
const newComment = async (e) => {
  e.preventDefault();

  const user_name = document.querySelector('#user-name').value.trim();
  const comment = document.querySelector('#comment-desc').value.trim();
  console.log(user_name);
  console.log(comment);

   if(user_name && comment) {
    const response = await fetch('api/blogs', {
      method: 'POST',
      body: JSON.stringify({ user_name, comment }),
      headers: {
        'Content-Type': 'application/json',
      },
    });
  

    if (response.ok) {
      document.location.replace('/');
    } else {
      alert('Failed to create comment');
    }
  }
};

// delete comment
// delete not working immediately after adding a new comment
const deletePost = async (e) => {
  if (e.target.hasAttribute('data-id')) {
        const id = e.target.getAttribute('data-id')
  console.log(id)
    const response = await fetch(`/api/blogs/${id}`, {
      method: 'DELETE',
      headers: { 'Content-Type': 'application/json' },
    });
  
    if (response.ok) {
      document.location.replace('/');
    } else {
      alert('Failed to delete.');
    }
  };
}

//edit comment
//add code here // post mvp

  document.querySelectorAll('.delete').forEach((item)=>{
    item.addEventListener('click', deletePost);
  })
  document.querySelector('#submit').addEventListener('click', newComment);

 