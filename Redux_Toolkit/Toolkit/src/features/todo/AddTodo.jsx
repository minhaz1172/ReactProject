import React, { useState } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { AiFillDelete } from "react-icons/ai";
import { Add, removeTodo } from './todoSlice';
import CurrentDate from '../../date';


function AddTodo() {

  const [input, setInput] = useState('');
  const [message, setMessage] = useState('');
  const dispatch = useDispatch();

  const addTodoHandler = (e) => {
    e.preventDefault();

    if (input.trim() === '') {
      setMessage("Please enter a task");
    } else {
      dispatch(Add(input));
      setInput('');
      setMessage(''); // Clear the message after successful addition
    }
  }

  const todoList = useSelector(state => state.todoDemoList.todoDemo);
  console.log(todoList);

  return (
    <>
      <h1 className="text-center">Todo List</h1>
      <form onSubmit={addTodoHandler}>
        <div className="m-3 d-flex">
          <input
            type="text"
            className="form-control"
            placeholder='Enter Your todo here'
            value={input}
            onChange={(e) => setInput(e.target.value)}
          />
          <button type="submit" value="submit" className="btn btn-primary">Add</button>
        </div>
      </form>
      <p className="text-danger">{message}</p>

      <ol className="list-group">
        {todoList.map((todos) => (
          <li key={todos.id} className="list-group-item m-3">
            <div className="d-flex justify-content-between align-items-center">
              {todos.text} {/*adding texts from input */}
              {/*adding current date from date.jsx */}
              <p className='mt-4'>Date:<CurrentDate /></p>
              <button
                className="btn removebtn btn-outline-warning ml-2"
                onClick={() => dispatch(removeTodo(todos.id))}
              >
                <AiFillDelete />
              </button>
            </div>
          </li>
        ))}
      </ol>
    </>
  )
}

export default AddTodo;
