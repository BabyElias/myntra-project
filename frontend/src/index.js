import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware, compose } from 'redux';
import {thunk} from 'redux-thunk';
import rootReducer from './redux/reducers';  // Adjust path as per your file structure
import App from './App';  // Adjust path as per your file structure
import SignUp from './components/SignUp';  // Adjust path as per your file structure
import Login from './components/Login';  // Adjust path as per your file structure

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(
  rootReducer,
  composeEnhancers(applyMiddleware(thunk))
);

ReactDOM.render(
  <Provider store={store}>
    <Router>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/signin" element={<Login />} />
        {/* Add more routes for other pages/components */}
      </Routes>
    </Router>
  </Provider>,
  document.getElementById('root')
);
