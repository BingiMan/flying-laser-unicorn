import React from 'react';

export default function getTokenFromStorage(){
    return (
        localStorage.getItem('authToken')
    )
};
