import React, { useContext } from 'react'
import { AuthContext } from '../provider/AuthProvider'
import { Navigate } from 'react-router-dom';
import Loading from '../pages/Loading';

export default function PrivateRoute({children}) {

    const {user,loading} = useContext(AuthContext);
    if(loading){
        return <Loading></Loading>
    }
    if(user && user?.email){
        return children;
    }
    else{
        return <Navigate to={'/auth/login'}></Navigate>
    }
}
