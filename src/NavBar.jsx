import React, { Component }  from 'react';
import Form from './Form';
import { Route, BrowserRouter as Router } from "react-router-dom";
import { Link } from 'react-router-dom';

const NavBar = () => {
  return (
    <Router>
      <header className="p-5 border-b bg-white shadow">
            <div className="container mx-auto flex justify-between items-center">
                <h1 className="text-3xl font-black">
                    PRÁCTICA
                </h1>

                <nav className="flex gap-3 items-center">
                    <Link className="font-bold uppercase text-gray-600 text-sm" to="/">Formulario</Link>
                </nav>
            </div>
      </header>

    <Route exact path='/formulario' component={Form}></Route>

    </Router>
    
  )
}

export default NavBar