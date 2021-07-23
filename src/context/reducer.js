import { ADD_TODO, LOAD_TODO, REMOVE_TODO } from './action.types';

export default (state, action) => {
  switch (action.type) {
    case ADD_TODO:
      state = [...state, action.payload];
      localStorage.setItem('todos', JSON.stringify(state));
      return state;
    case REMOVE_TODO:
      state = state.filter(todo => todo.id !== action.payload);
      localStorage.setItem('todos', JSON.stringify(state));
      return state;
    default:
      return state;
  }
};
