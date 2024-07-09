import axios from 'axios';

// Configure Axios instance with base URL
const api = axios.create({
  baseURL: 'http://localhost:5000', // Ensure this matches your backend server URL and port
  headers: {
    'Content-Type': 'application/json',
  },
});

export const signup = (email, password) => async (dispatch) => {
  try {
    const res = await api.post('/api/signup', { email, password });
    dispatch({ type: 'SIGNUP', payload: res.data });
  } catch (error) {
    console.error('Signup Error:', error.response || error.message);
    dispatch({ type: 'AUTH_ERROR', payload: { error: error.response ? error.response.data : error.message } });
  }
};

export const login = (email, password) => async (dispatch) => {
  try {
    const res = await api.post('/api/login', { email, password });
    dispatch({ type: 'LOGIN', payload: res.data });
  } catch (error) {
    console.error('Login Error:', error.response || error.message);
    dispatch({ type: 'AUTH_ERROR', payload: { error: error.response ? error.response.data : error.message } });
  }
};

export const logout = () => async (dispatch) => {
  try {
    // Implement logout logic here, if necessary
    dispatch({ type: 'LOGOUT' });
  } catch (error) {
    console.error('Logout Error:', error.response || error.message);
    dispatch({ type: 'AUTH_ERROR', payload: { error: error.response ? error.response.data : error.message } });
  }
};
