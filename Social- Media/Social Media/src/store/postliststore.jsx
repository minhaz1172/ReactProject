import { createContext, useReducer } from "react";

export const Postlist = createContext({
  createPostlist: [],
  addPost: () => { },
  deletePost: () => { },
});

//explaation:created posslist array by usereducer and returned as Currentpostlist now createPostlist array,addPost method and DeletePost method is pass as value to the context,this context name named PostListi added to the app.jsx


const postlistReducer = (currentPostlist, action) => {
  let newpostList = currentPostlist;

  if (action.type === 'DeletePost')
    newpostList = currentPostlist.filter(post => post.id !== action.payload.postID);//filter mathes payload postId AND currentPostLIST id ,,,if not match that will remain otherwise delete while click on the on icon 

  return newpostList;
}


const PostlistProvider = ({ children }) => {
  const [createPostlist, dispatchList] = useReducer(postlistReducer, DefaultPostList)
  const addPost = (userID, postTitle, postContent, reactions, tags) => {
    console.log(`${userID},${postTitle},${postContent},${reactions},${tags}`);


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


  return <Postlist.Provider value={{ createPostlist, addPost, deletePost }}>
    {children}
  </Postlist.Provider>
};


const DefaultPostList = [
  {
    id: '1',
    title: "Going to Chiitagong",
    body: "Hi friends ,i am going to chittagong today,enjoying too much",
    reactions: 2,
    userId: "user112",
    tags: ["vacation", "chittagong", "enjoyment"]
  },

  {
    id: "2",
    title: "planing For wedding",
    body: "my sister wedding today,she is very happy",
    reactions: 3,
    userId: "user114",
    tags: ["wedding", "sister", "enjoy"]
  }
]
export default PostlistProvider;