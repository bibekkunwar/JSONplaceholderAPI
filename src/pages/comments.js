import React, { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';

const Comments = () => {
  const [, setComments] = useState([]);
  const [filteredComments, setFilteredComments] = useState([]);

  const location = useLocation();
  const queryParams = new URLSearchParams(location.search);
  const postId = queryParams.get('id');

  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/comments')
      .then(response_com => response_com.json())
      .then(data => {
        setComments(data);
        const filteredData = data.filter(comment => comment.postId == postId);
        setFilteredComments(filteredData);
      })
      .catch(error => console.log(error));
  }, [postId]);

  return (
    <div>
      <h1>Comments are here</h1>
      {filteredComments.length === 0 ? (
        <p>Loading comments...</p>
      ) : (
        <ul id='listHeading'>
          {filteredComments.map(comment => (
            <li className='lists' key={comment.id}>
              <div className='postbox'>
                <button id='btn btn-comment'>{comment.name}</button>
              </div>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default Comments;
