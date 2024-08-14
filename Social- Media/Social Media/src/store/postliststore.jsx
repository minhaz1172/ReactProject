import { createContext, useReducer } from "react";

const Postlist = createContext({
  createPostlist: [],
  addPost: () => { },
  deletePost: () => { },
});

//explaation:created posslist array by usereducer and returned as Currentpostlist now createPostlist array,addPost method and DeletePost method is pass as value to the context,this context name named PostListi added to the app.jsx


const postlistReducer = (currentPostlist, action) => {
  return currentPostlist;
}


const PostlistProvider = ({ children }) => {
  const [createPostlist, dispatchList] = useReducer(postlistReducer, [])
  const addPost = () => { };
  const deletePost = () => { };


  return <Postlist.Provider value={{ createPostlist, addPost, deletePost }}>
    {children}
  </Postlist.Provider>
}
export default PostlistProvider;
