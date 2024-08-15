import { createContext, useReducer } from "react";

export const Postlist = createContext({
  createPostlist: [],
  addPost: () => { },
  deletePost: () => { },
});

//explaation:created posslist array by usereducer and returned as Currentpostlist now createPostlist array,addPost method and DeletePost method is pass as value to the context,this context name named PostListi added to the app.jsx


const postlistReducer = (currentPostlist, action) => {
  return currentPostlist;
}


const PostlistProvider = ({ children }) => {
  const [createPostlist, dispatchList] = useReducer(postlistReducer, DefaultPostList)
  const addPost = () => { };
  const deletePost = () => { };


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