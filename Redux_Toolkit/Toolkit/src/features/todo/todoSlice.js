import { createSlice, nanoid } from '@reduxjs/toolkit';

const initialState = {
  todoDemo: []

}

export const TodoSlice = createSlice({
  name: 'AddTodo',
  initialState,
  reducers: {
    Add: (state, action) => {
      const todo = {
        id: nanoid(),
        text: action.payload
      }
      state.todoDemo.push(todo);

    },
    removeTodo: (state, action) => {
      state.todoDemo = state.todoDemo.filter((todo) => todo.id !== action.payload)
    },

  }

})
export const { Add, removeTodo } = TodoSlice.actions;
export default TodoSlice.reducer;