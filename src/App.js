
import React, { useState, useEffect } from 'react';
import { Route } from 'react-router-dom';
import { BrowserRouter as Router } from 'react-router-dom';
const App = ()=> {
  const [posts, setPosts] = useState([]);
  const [comments, setComments] = useState([]);

  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/posts')
      .then(response => response.json())
      .then(data => setPosts(data))
      .catch(error => console.log(error));
  }, []);

  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/comments')
      .then(response_com => response_com.json())
      .then(data_com => setComments(data_com))
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



<h1>COmments are here</h1>

{comments.length === 0 ? (
        <p>Loading comments...</p>
      ) : (
        <ul id='listHeading'>
          {comments.map(Comment => (
            <li className='lists' key={Comment.postId}>
              <div className='postbox'>
              <button id='btn'>{Comment.body}</button>
              </div>
            </li>
          ))}
        </ul>
        
      )}


    </div>
  );
}






export default App;
