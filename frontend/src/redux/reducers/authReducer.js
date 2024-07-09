// frontend/src/redux/reducers/authReducer.js
const initialState = {
    user: null,
    isAuthenticated: false,
    loading: false,
    error: null,
  };
  
  const authReducer = (state = initialState, action) => {
    switch (action.type) {
      case 'SIGNUP':
      case 'LOGIN':
        return {
          ...state,
          user: action.payload.user,
          isAuthenticated: true,
          loading: false,
          error: null,
        };
      case 'LOGOUT':
        return {
          ...state,
          user: null,
          isAuthenticated: false,
          loading: false,
          error: null,
        };
      case 'AUTH_ERROR':
        return {
          ...state,
          error: action.payload.error,
          loading: false,
        };
      default:
        return state;
    }
  };
  
  export default authReducer;
  