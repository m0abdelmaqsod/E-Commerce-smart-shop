import React from 'react';
import ReactDOM from 'react-dom/client';
// import 'bootstrap/dist/css/bootstrap.min.css';
import './index.css'
import Home_Router from './pages/Home_Router.jsx';
import store from './store/store.js';
import { Provider } from 'react-redux';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Provider store={store}>
      <Home_Router />
    </Provider>
  </React.StrictMode>,
)
