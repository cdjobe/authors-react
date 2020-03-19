import React from 'react';
import { navigate } from '@reach/router';
import axios from 'axios';

export default props => {
    
    var authorId = props.authorId;
    const deleteProduct=(authorId)=>{
        axios.delete('http://localhost:8000/api/deleteAuthor/'+authorId)
            .then(response=>{
                props.removeFromDom(authorId)
            });
        navigate('/');
    }

    return (
        <div>
            <button className="btn btn-danger" onClick={(e)=>deleteProduct(authorId)}>Delete</button>
        </div>
    )
}