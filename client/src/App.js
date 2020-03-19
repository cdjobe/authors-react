import React, { useState } from 'react';
import { Router, navigate } from '@reach/router';
import axios from 'axios';

import Navbar from './components/Navbar';
import AuthorForm from './components/AuthorForm'
import Main from './views/Main';
import Edit from './views/Edit';
import MyContext from './context/MyContext';

import './bootstrap.css';
import './App.css';

function App() {

  const [errors, setErrors] = useState([])

  const createPerson=author=> {
    axios.post('http://localhost:8000/api/createAuthor', author)
      .then(response=>{
          // console.log(response)
          // navigate('/')   
      })
      .catch(err=>{
        const errorResponse = err.response.data.errors;
        const errorArr = [];
        for (const key of Object.keys(errorResponse)) {
          errorArr.push(errorResponse[key].message)
        }
        setErrors(errorArr);
      })
  }

  return (
    <div className="App">
      <Navbar />
      <Router>
        <Main path="/" />
        <AuthorForm path="/new" onSubmitProp={createPerson} initialFirstName="" initialLastName="" formErrors={errors}/>
        <Edit path="/edit/:id" formErrors={errors} />
      </Router>
      
    </div>
  );
}

export default App;