import { ADD_TODO } from "../constants/action-types"
let nextTodoId = 1

export const addTodo = text => ({
  type: ADD_TODO,
  id: nextTodoId++,
  text
})

