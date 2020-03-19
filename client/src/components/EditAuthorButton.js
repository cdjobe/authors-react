import React from 'react';
import { navigate } from '@reach/router';

export default props => {
    
    const onClickHandler=(e)=>{
        navigate('/edit/'+props.authorId)
    }

    return (
        <div>
            <button className="btn btn-warning" onClick={onClickHandler} >Edit</button>
        </div>
    )
}