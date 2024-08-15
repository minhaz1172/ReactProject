import React from 'react';
import { MdDelete } from "react-icons/md";
function Post({ post }) {  // Destructure the post object from props
  return (
    <div className="card" >
      <div className="card-body">
        <h5 className="card-title">{post.title}</h5>   {/* Access title */}
        <span class="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger">
          <MdDelete />

        </span>
        <p className="card-text">{post.body}</p>       {/* Access body */}

        {post.tags.map((tag, index) => (
          <span key={index} className="badge rounded-pill text-bg-primary ">
            {tag}
          </span>
        ))}
      </div>
    </div>
  );
}

export default Post;
