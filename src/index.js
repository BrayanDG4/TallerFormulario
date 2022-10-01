import React from 'react';
import ReactDOM from 'react-dom/client';
import Form from './Form';
import Delete from './Delete';
import Modify from './Modify';
import App from './App'
import Carousel from './Carousel';
import Layout from './containers/Layout';
import { BrowserRouter, Routes, Route } from 'react-router-dom';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Layout>
      <BrowserRouter basename='/'>
        <Routes>
          <Route exact path="/form" element={<Form/>} />
          <Route exact path="/delete" element={<Delete/>} />
          <Route exact path="/modify" element={<Modify/>} />
        </Routes>
      </BrowserRouter>
      
    </Layout>
    
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals

