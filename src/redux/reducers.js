import {
  LOADER_SET
} from './actions';

export const loader = (state = false, action) => {
  switch (action.type) {
    case LOADER_SET:
      return action.data;

    default:
      return state;
  }
};
