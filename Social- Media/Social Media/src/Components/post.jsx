import React, { useContext } from 'react';
import { MdDelete } from "react-icons/md";
import { Postlist } from '../store/postliststore';
function Post({ post }) {  // Destructure the post object from props passing from poslist.jsx

  const { deletePost } = useContext(Postlist);//call deletePost by PostList from postliststore by context Api
  return (
    <div className="card" >
      <div className="card-body">
        <h5 className="card-title">{post.title}</h5>   {/* Access title */}
        {/* Access body */}
        <span
          className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger deleteicon" onClick={() => deletePost(post.id)} >
          <MdDelete />
        </span>
        <p className="card-text">{post.body}</p>


        {post.tags.map((tag, index) => (
          <span key={index} className="badge rounded-pill text-bg-primary ">
            {tag}
          </span>
        ))}
        <div class="alert alert-success mt-3 " role="alert">
          Reactions:{post.reactions}
        </div>
      </div>
    </div>
  );
}

export default Post;
