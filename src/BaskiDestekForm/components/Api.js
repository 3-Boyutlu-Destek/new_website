import React from 'react';
import config from 'config';


function Api(methodUrl, data){
    const requestOptions = {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({data})
    };

    return fetch(`${config.apiUrl}/${methodUrl}`, requestOptions)
        .then(response=>response.json())
        .then(response => {
            return response;
        });
}
export default Api;