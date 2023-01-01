import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
     <div class="main ui text container">
      <h1 class="ui dividing centered header">Popular Products</h1>
    </div>
    <App />
  </React.StrictMode>
);

