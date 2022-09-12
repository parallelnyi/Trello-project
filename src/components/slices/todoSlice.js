import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  todos: [
    {
      task: [],
    },
  ],
};

const todoSlice = createSlice({
  name: "todo",
  initialState,
  reducers: {
    addTodo(state, action) {
      console.log(action.payload, "pyloadd");
      state.todos.push(action.payload);
    },
  },
});

export const { addTodo } = todoSlice.actions;
export default todoSlice.reducer;
