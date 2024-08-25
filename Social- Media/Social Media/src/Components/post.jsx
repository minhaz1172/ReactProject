import React, { useContext } from 'react';
import { MdDelete } from "react-icons/md";
import { Postlist } from '../store/postliststore';

function Post({ post }) {  // Destructure the post object from props passing from Postlist.jsx
  const { deletePost } = useContext(Postlist); // Call deletePost by Postlist from postliststore using context API

  return (
    <div className="card">
      <div className="card-body">
        <h5 className="card-title">{post.title}</h5> {/* Access title */}

        <span
          className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger deleteicon"
          onClick={() => deletePost(post.id)}>
          <MdDelete />
        </span>

        <p className="card-text">{post.body}</p> {/* Access body */}

        {/* Ensure post.tags is defined before mapping */}
        {post.tags && post.tags.length > 0 && post.tags.map((tag, index) => (
          <span key={index} className="badge rounded-pill text-bg-primary">
            {tag}
          </span>
        ))}

        {/* Safely access post.reactions.likes */}
        <div className="alert alert-success mt-3" role="alert">
          Reactions: {post.reactions.likes}
        </div>
      </div>
    </div>
  );
}

export default Post;
