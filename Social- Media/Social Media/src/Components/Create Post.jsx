import React, { useContext, useRef } from 'react'
import { Postlist as Postlistdata } from '../store/postliststore'

function CreatePost() {
  const { addPost } = useContext(Postlistdata);
  const userIDref = useRef();
  const postTitleref = useRef();
  const postContentref = useRef();
  const reactionsref = useRef();
  const tagsref = useRef();

  const handlesubmit = (event) => {
    event.preventDefault();// Prevents the form from refreshing the page

    const userID = userIDref.current.value;
    const postTitle = postTitleref.current.value;
    const postContent = postContentref.current.value;
    const reactions = reactionsref.current.value;
    const tags = tagsref.current.value.split(' ');//split convert tags 'which are spaced' to array 
    addPost(userID, postTitle, postContent, reactions, tags);
  }
  return (

    <form className='form-content' onSubmit={handlesubmit} > {/*on submit event work for submit something  */}

      <div className="mb-3">
        <label htmlFor="user-id" className="form-label">Enter Your ID here</label>
        <input type="text" ref={userIDref} className="form-control" id="user-id" placeholder='Input Your UserId' />

      </div>

      <div className="mb-3">
        <label htmlFor="title" className="form-label">Post Title</label>
        <input type="text" className="form-control" id="title"
          ref={postTitleref} placeholder='what are you feeling Today...' />

      </div>
      <div className="mb-3">
        <label htmlFor="body" className="form-label">Post Content</label>

        <div class="">
          <textarea className="form-control" placeholder="Describe Your Feelings" ref={postContentref} id="floatingTextarea" rows="4"></textarea> {/*here row=4 will bigger the size of textarea */}

        </div>
      </div>

      <div className="mb-3">
        <label htmlFor="reactions" className="form-label">Reactions</label>
        <input type="text" ref={reactionsref} className="form-control" id="reactions" placeholder='how many people reacted' />
      </div>
      <div className="mb-3">
        <label htmlFor="tags" className="form-label">Tags</label>
        <input type="text" ref={tagsref} className="form-control" id="tags" placeholder='please enter tags using space' />
      </div>


      <button type="submit" className="btn btn-primary">Post</button>
    </form >
  )
}

export default CreatePost;