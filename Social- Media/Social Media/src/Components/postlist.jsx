import React, { useContext, useEffect, useState } from 'react';
import Post from './post';
import { Postlist as Postlistdata } from '../store/postliststore';
import Message from './Message';
import LoadingMsg from './LoadingMsg';

function Postlist() {
  const { createPostlist, AddInitialPosts } = useContext(Postlistdata);
  const [fetching, setFetching] = useState(false);


  //useEffect hook usintg
  useEffect(() => {                     //here ( is a anonymous function)

    setFetching(true);
    console.log('fetching is started')

    fetch('https://dummyjson.com/posts')



      .then(res => res.json())
      //console print 
      .then((data) => {
        console.log(data); // Log data from API
        AddInitialPosts(data.posts); // Add posts to state
        setFetching(false);
        console.log('fetching is returned')
      })
      .catch(error => console.error('Error fetching posts:', error))// Add error handling
    //console.log('fetching is completed')

  }, []);


  // If there are no posts, render the Message component
  if (!fetching && createPostlist.length === 0) {
    return (
      <center>
        <Message />  {/* Fallback content if no posts are found */}
      </center>
    );
  }
  return (
    <>
      {fetching && <LoadingMsg />}
      {!fetching && createPostlist.map((post) => (
        <Post key={post.id} post={post} />//createpostlist pass as post in Post.jsx using map method,,,createPostList imported by usecontext from postlist-store

      ))}

    </>
  );
}

export default Postlist;
