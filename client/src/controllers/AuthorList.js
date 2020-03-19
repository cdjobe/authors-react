import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Link } from '@reach/router'

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
    })
    
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
                                <td><Link to={`author/${author._id}`}>{author.FirstName} {author.LastName}</Link></td>
                                <td>

                                </td>
                            </tr>
                        })
                    }
                </tbody>
            </table>
        </div>
    )
}