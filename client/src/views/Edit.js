import React, { useEffect, useState } from 'react';
import axios from 'axios';
import AuthorForm from '../components/AuthorForm';

export default props => {
    const id  = props.id;
    const [ author, setAuthor ] = useState();
    const [ loaded, setLoaded ] = useState(false)

    useEffect(()=>{
        axios.get('http://localhost:8000/api/getAuthor/' + id)
            .then(response=>{
                console.log(response.data[0])
                setAuthor(response.data[0]);
                setLoaded(true);            
            })            
    }, [])

    const updateAuthor=author=>{
        axios.put('http://localhost:8000/api/updateAuthor/'+ id, author)
            .then(response => console.log(response))
    }

    return (
        <div>
            {loaded && 
                <AuthorForm 
                    onSubmitProp={updateAuthor} 
                    initialFirstName={author.FirstName} 
                    initialLastName={author.LastName} 
                />
            }
        </div>
    )
}