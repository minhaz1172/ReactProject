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
    console.log('fetching is started');

    //using abort controller is important when fetching data and to cleanup api calling ,,,otherwise api call will contantly
    const controller = new AbortController(); // Create an instance of AbortController
    const signal = controller.signal;
    fetch('https://dummyjson.com/posts', { signal })
      .then(res => res.json())
      //console print 
      .then((data) => {
        console.log(data); // Log data from API
        AddInitialPosts(data.posts); // Add posts to state
        setFetching(false);
        console.log('fetching is returned')
      })
      .catch(error => {
        if (error.name === 'AbortError') {
          console.log('Fetch was aborted'); //checking abort is working or not
        } else {
          console.error('Error fetching posts:', error);
          setFetching(false);
        }
      });// Ensure fetching is set to false in case of error// Add error handling
    //console.log('fetching is completed')
    // cancel the fetch request when component unmounts
    return () => {
      console.log("cleaning up UseEffect");
      controller.abort(); // abort the fetch request when component unmounts
    }

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
        <Post key={post.id} post={post} /> // Ensure unique keys */}
        //createpostlist pass as post in Post.jsx using map method,,,createPostList imported by usecontext from postlist-store

      ))}

    </>
  );
}

export default Postlist;
