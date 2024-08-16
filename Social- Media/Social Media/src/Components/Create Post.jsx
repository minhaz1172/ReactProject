import React from 'react'

function CreatePost() {
  return (
    <form className='form-content'>
      <div className="mb-3">
        <label htmlFor="title" className="form-label">Post Title</label>
        <input type="text" className="form-control" id="title" placeholder='what are you feeling Today' />

      </div>
      <div className="mb-3">
        <label htmlFor="body" className="form-label">Post Content</label>

        <div class="">
          <textarea class="form-control" placeholder="Describe Your Feelings" id="floatingTextarea" rows="4"></textarea> {/*here row=4 will bigger the size of textarea */}

        </div>
      </div>
      <button type="submit" className="btn btn-primary">Submit</button>
    </form>
  )
}

export default CreatePost