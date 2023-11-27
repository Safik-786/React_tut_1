import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { BrowserRouter } from 'react-router-dom'
// import App2 from './App2';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <App />
      {/* <App2/> */}
    </BrowserRouter>
  </React.StrictMode>


  /* <React.StrictMode></React.StrictMode>  it is optional*/
);


