export const USERS_REQUEST_START = 'USERS_REQUEST_START';
export const USERS_REQUEST_SUCCESS = 'USERS_REQUEST_SUCCESS';
export const USERS_REQUEST_ERROR = 'USERS_REQUEST_ERROR';

export const usersRequestStart = () => ({
  type: USERS_REQUEST_START,
});


export const usersRequestSuccess = (users) => ({
  type: USERS_REQUEST_SUCCESS,
  users
});


export const usersRequestError = (error) => ({
  type: USERS_REQUEST_ERROR,
  error
});

export const usersRequest = () => (dispatch) => {
  dispatch(usersRequestStart());
  fetch('https://jsonplaceholder.typicode.com/users')
    .then(response => response.json())
    .then(users => dispatch(usersRequestSuccess(users)))
    .catch(err => dispatch(usersRequestError(err)))
};