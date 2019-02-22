import * as usersActions from '../actions/users';

const INITIAL_STATE = {
  data:[],
  isLoading: false,
  isError: false
};

export default function users(store = INITIAL_STATE, action) {
  switch(action.type) {
    case usersActions.USERS_REQUEST_START:
      return {
        ...store,
        isLoading: true
      };
    case usersActions.USERS_REQUEST_SUCCESS:
      return {
        ...store,
        isLoading: false,
        data: action.users,
      };
    case usersActions.USERS_REQUEST_ERROR:
      return {
        ...store,
        isLoading: false,
        isError: true,
      };
    default:
      return store;
  }
}