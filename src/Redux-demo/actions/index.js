import { ADD_TODO } from "../constants/index";

export function addTodo(title) {
  return { type: ADD_TODO, title };
}
