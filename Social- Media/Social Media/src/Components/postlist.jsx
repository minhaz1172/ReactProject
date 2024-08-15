import React, { useContext } from 'react';
import Post from './post';
import { Postlist as Postlistdata } from '../store/postliststore';

function Postlist() {
  const { createPostlist } = useContext(Postlistdata);

  if (!createPostlist) {
    return <p>No posts available.</p>; // Fallback content if no posts are found
  }

  return (
    <>
      {createPostlist.map((post) => (
        <Post key={post.id} post={post} />//createpostlist pass as post in Post.jsx using map method,,,createPostList imported by usecontext from postlist-store

      ))}

    </>
  );
}

export default Postlist;
