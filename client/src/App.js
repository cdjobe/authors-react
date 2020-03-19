import React, { useState } from 'react';
import { Router } from '@reach/router';
import axios from 'axios';

import Navbar from './components/Navbar';
import AuthorForm from './components/AuthorForm'
import Main from './views/Main';
import Edit from './views/Edit';

import './bootstrap.css';
import './App.css';

function App() {

  const createPerson=author=> {
    axios.post('http://localhost:8000/api/createAuthor', author)
      .then(response=>console.log(response))
  }

  return (
    <div className="App">
      <Navbar />
      <Router>
        <Main path="/" />
        <AuthorForm path="/new" onSubmitProp={createPerson} initialFirstName="" initialLastName="" />
        <Edit path="/edit/:id" />
      </Router>
      
    </div>
  );
}

export default App;