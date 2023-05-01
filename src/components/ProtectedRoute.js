import React from 'react'
import { Navigate } from 'react-router-dom';

const ProtectedRoute = ({childern}) => {
let auth = 'true';
if(!auth){
 return <Navigate to='/' />
}

  return childern; 
};
export default ProtectedRoute;