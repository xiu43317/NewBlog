import { SET_LOGIN } from '../actions/todolist';

const initState = {
  showAdminBoard: false,
};

const todoReducer = (state = initState, action) => {
  switch (action.type) {
    case SET_LOGIN:
      return {
        ...state,
        showAdminBoard: action.posts,
      };
    default:
      return state;
  }
};

export default todoReducer;
