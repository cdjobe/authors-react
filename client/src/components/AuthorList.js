import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Link } from '@reach/router'

import EditAuthorButton from '../components/EditAuthorButton';
import DeleteAuthorButton from '../components/DeleteAuthorButton'

export default props => {
    var apiResponse = [];
    const [ allAuthors, setAllAuthors ] = useState(null);
    const [ loaded, setLoaded ] = useState(false);

    useEffect(()=>{
        axios.get('http://localhost:8000/api/getAllAuthors')
            .then(response=>{
                setAllAuthors(response.data);
                setLoaded(true);
        })
    }, [])
    
    const removeFromDom=authorId=>{
        setAllAuthors(allAuthors.filter(author=>author._id !== authorId));
    }

    return (
        <div>
            <table className="table">
                <thead>
                    <tr>
                        <th>Author</th>
                        <th>Actions Available</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        loaded &&
                        allAuthors.map((author, i)=>{
                            return <tr>
                                <td>{author.FirstName} {author.LastName}</td>
                                <td> 
                                    <EditAuthorButton authorId={author._id} />
                                    <DeleteAuthorButton authorId={author._id} removeFromDom={removeFromDom} />
                                </td>
                            </tr>
                        })
                    }
                </tbody>
            </table>
        </div>
    )
}