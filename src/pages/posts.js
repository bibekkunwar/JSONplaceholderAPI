
import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';


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
  <li className='lists' >
    <div className='postbox'>
      <Link to={`/Comments?id=${post.id}`} className='btn btn-post'>{post.title}</Link>
    </div>
  </li>
))}

        </ul>
        
      )}


    </div>
  );
}






export default App;
