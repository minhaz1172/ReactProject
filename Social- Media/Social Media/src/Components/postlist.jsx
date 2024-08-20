import React, { useContext } from 'react';
import Post from './post';
import { Postlist as Postlistdata } from '../store/postliststore';
import Message from './Message';

function Postlist() {
  const { createPostlist } = useContext(Postlistdata);

  //getpost mETHOD
  const Getpost = () => {
    console.log("get post clicked");

  }


  if (createPostlist.length === 0) {
    return (
      <>

        <center>
          <Message />  {/*Fallback content if no posts are found*/}
          <button type="button" class="btn btn-outline-success fw-bold mt-2" onClick={Getpost}>GetNewPosts From Server</button>
        </center>
      </>
    )
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
