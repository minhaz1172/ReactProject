import { createContext, useReducer } from "react";

export const Postlist = createContext({
  createPostlist: [],
  addPost: () => { },
  deletePost: () => { },
  AddInitialPosts: () => { }
});

//explaation:created posslist array by usereducer and returned as Currentpostlist now createPostlist array,addPost method and DeletePost method is pass as value to the context,this context name named PostListi added to the app.jsx


const postlistReducer = (currentPostlist, action) => {
  let newpostList = currentPostlist;
  //deletepost method working
  if (action.type === 'DeletePost')
    newpostList = currentPostlist.filter(post => post.id !== action.payload.postID);//filter mathes payload postId AND currentPostLIST id ,,,if not match that will remain otherwise delete while click on the on icon 

  //AddinitialPost method 
  else if (action.type == 'Addinitial_Post') {
    newpostList = action.payload.Jsonposts;
  }



  //adpost method working
  else if (action.type === 'AddPost') {
    newpostList = [action.payload, ...currentPostlist]; //add new post to the currentPostList array
    console.log(Date.now());
  }


  return newpostList;
}


const PostlistProvider = ({ children }) => {
  const [createPostlist, dispatchList] = useReducer(postlistReducer, [])
  const addPost = (userID, postTitle, postContent, reactions, tags) => {
    dispatchList(
      {
        type: "AddPost",
        payload:
        {
          id: Date.now().toString(),//date is converted to unique id
          title: postTitle,
          body: postContent,
          reactions: reactions,
          userId: userID,
          tags: tags
        }
      }
    )

    console.log(`${userID},${postTitle},${postContent},${reactions},${tags}`);


  };

  //Post which is come fromdummy json server
  const AddInitialPosts = (Jsonposts) => {
    dispatchList(
      {
        type: "Addinitial_Post",
        payload: {
          Jsonposts
        }
      }
    )

  };



  const deletePost = (postID) => {
    console.log(`called for post to delete: ${postID}`);
    dispatchList(
      {
        type: "DeletePost",
        payload:
          { postID }   //  payload refers to the additional data that is sent along with an action to the reducer. The payload contains the information needed by the reducer to update the state appropriately.

      }
    )
  };


  return <Postlist.Provider value={{ createPostlist, addPost, deletePost, AddInitialPosts }}>
    {children}
  </Postlist.Provider>
};



export default PostlistProvider;