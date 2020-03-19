import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { navigate } from '@reach/router'

export default props => {

    const { initialFirstName, initialLastName, onSubmitProp} = props;
    const [ FirstName, setFirstName ] = useState(initialFirstName);
    const [ LastName, setLastName ] = useState(initialLastName);
    const [ errors, setErrors ] = useState([]);
    const [ submitted, setSubmitted ] = useState(false);

    console.log(errors)

    const onSubmitHandler=(e)=>{
        e.preventDefault();
        onSubmitProp({FirstName, LastName});
    }

    return (
        <div>
            <form onSubmit={onSubmitHandler} className="form">
                { errors &&
                props.formErrors.map((err, index) => <p key={index}>{err}</p>)}
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