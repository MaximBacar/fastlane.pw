import React from 'react'

import { useAuth } from '../../context/authContext'
import { useEffect } from 'react';

import Dashboard from '../Dashboard/dashboard';
export default function Index() {

    const {token} = useAuth();

    if (!token){
        return(<>Not logged</>)
    }


    return (

        <Dashboard/>
    )
}
