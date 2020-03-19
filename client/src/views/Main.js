import React, { useEffect, useState } from 'react';
import axios from 'axios';

export default () => {
    const [ state, setState ] = useState();

    useEffect(()=>{
        axios.get("http://localhost:8000/api")
            .then(response=>console.log(response))
    }, []);
    return (
        <div>
            
        </div>
    )
}