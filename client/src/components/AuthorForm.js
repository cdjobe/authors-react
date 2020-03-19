import React, { useState } from 'react';
import axios from 'axios';
import { navigate } from '@reach/router'

export default props => {
    const { initialFirstName, initialLastName, onSubmitProp } = props;

    const [ FirstName, setFirstName ] = useState(initialFirstName);
    const [ LastName, setLastName ] = useState(initialLastName);

    const onSubmitHandler=(e)=>{
        e.preventDefault();
        onSubmitProp({FirstName, LastName});
        navigate('/');
    }

    return (
        <div>
            <form onSubmit={onSubmitHandler} className="form">
                <div className="form-group">
                    <label>First Name:</label>
                    <input
                        type="text"
                        name="FirstName"
                        defaultValue={initialFirstName}
                        onChange={(e)=>{ setFirstName( e.target.value ) }} />
                </div>
                <div className="form-group">
                    <label>Last Name:</label>
                    <input
                        type="text"
                        name="LastName"
                        defaultValue={initialLastName}
                        onChange={(e)=>{ setLastName( e.target.value ) }} />
                </div>
                <input type="submit" />
            </form>
        </div>
    )
}