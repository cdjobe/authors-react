import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Link } from '@reach/router'
import AuthorList from '../components/AuthorList';

export default () => {

    const [ allAuthors, setAllAuthors ] = useState([]);
    const [ loaded, setLoaded ] = useState(false);

    useEffect(()=>{
        axios.get('http://localhost:8000/api/getAllAuthors')
            .then ( response=>{
                setAllAuthors( response.data )
                setLoaded( true );
            });
    }, [])

    const removeFromDom=authorId=>{
        setAllAuthors(allAuthors.filter(author=>author._id !== authorId));
    }

    return (
        <div>

            <Link to="/new">Add an Author</Link>
            {
                loaded &&
                <AuthorList allAuthors={allAuthors} removeFromDom={removeFromDom}/>
            }
        </div>
    )
}