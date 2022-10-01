import React from 'react';
import ReactDOM from 'react-dom/client';
import NavBar from './NavBar';
import Form from './Form';
import SideNavBar from './SideNavBar';
import App from './App'
import Carousel from './Carousel';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <NavBar/>
    <SideNavBar/>
    <Form/>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals

