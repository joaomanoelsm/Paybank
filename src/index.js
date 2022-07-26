import React from 'react';
import ReactDOM from 'react-dom/client';
import { Provider } from 'react-redux';
import store from './store/store.js';
import App from './App';
import './styles/main.scss'
import { GlobalContext } from './store/useContext.js';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <GlobalContext>
      <Provider store={ store }>
        <App />
      </Provider>
    </GlobalContext>
  </React.StrictMode>
)
