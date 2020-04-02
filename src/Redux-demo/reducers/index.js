import { ADD_TODO } from "../constants/index";

const initialState = {
  tasks: [{ id: 0, title: "Learn HTML", done: true }]
};

const rootReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_TODO:
      return {
        ...state,
        tasks: [
          ...state.tasks,
          { id: state.tasks.length, title: action.title, done: false }
        ]
      };
    default:
      return state;
  }
};

export default rootReducer;
