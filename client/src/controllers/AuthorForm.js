import React, { useState } from 'react';
import axios from 'axios';

export default props => {
    const { initialFirstName, initialLastName, onSubmitProp } = props;

    const [ FirstName, setFirstName ] = useState("");
    const [ LastName, setLastName ] = useState("");

    const onSubmitHandler=(e)=>{
        e.preventDefault();
        onSubmitProp({ FirstName, LastName })
    }

    return (
        <div>
            <form onSubmit={onSubmitHandler} className="form">
                <div className="form-group">
                    <label>First Name:</label>
                    <input
                        type="text"
                        name="FirstName"
                        defaultValue={FirstName}
                        onChange={(e)=>{ setFirstName( e.target.value ) }} />
                </div>
                <div className="form-group">
                    <label>Last Name:</label>
                    <input
                        type="text"
                        name="LastName"
                        defaultValue={LastName}
                        onChange={(e)=>{ setLastName( e.target.value ) }} />
                </div>
                <input type="submit" />
            </form>
        </div>
    )
}