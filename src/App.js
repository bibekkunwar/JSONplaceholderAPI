
import React, { useState, useEffect } from 'react';
const App = ()=> {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/posts')
      .then(response => response.json())
      .then(data => setPosts(data))
      .catch(error => console.log(error));
  }, []);


  return (
    <div>
      <h1 className='postHeading'>JSONPlaceholder Posts </h1>
      <h1 className='postHeading'>Click the posts to view comments</h1>
      {posts.length === 0 ? (
        <p>Loading posts...</p>
      ) : (
        <ul id='listHeading'>
          {posts.map(post => (
            <li className='lists' key={post.id}>
              <div className='postbox'>
              <button id='btn'>{post.title}</button>
              </div>
              
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}






export default App;
