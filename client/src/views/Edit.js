import React, { useEffect, useState } from 'react';
import axios from 'axios';
import AuthorForm from '../components/AuthorForm';

export default props => {
    const id  = props.id;
    const [ author, setAuthor ] = useState();
    const [ loaded, setLoaded ] = useState(false);
    const [ errors, setErrors ] = useState(props.formErrors);

    useEffect(()=>{
        axios.get('http://localhost:8000/api/getAuthor/' + id)
            .then(response=>{
                setAuthor(response.data[0]);
                setLoaded(true);            
            })            
    }, [])

    const updateAuthor=(author)=>{
        axios.put('http://localhost:8000/api/updateAuthor/'+ id, author)
            .then(response => console.log(response))
            .catch(error=>{
                const errorResponse = error.response.data.errors;
                const errorArr = [];
                for (const key of Object.keys(errorResponse)) {
                    errorArr.push(errorResponse[key].message)
                }
                // set errors
                setErrors(errorArr)
                console.log(errorArr)
            })  
    }

    return (
        <div>
            {loaded && 
                <AuthorForm 
                    onSubmitProp={updateAuthor} 
                    initialFirstName={author.FirstName} 
                    initialLastName={author.LastName}
                    formErrors={errors}
                />
            }
        </div>
    )
}