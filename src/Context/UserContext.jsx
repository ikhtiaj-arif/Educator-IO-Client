import { createContext } from "react";
import React from 'react';
import { useState } from "react";
import {getAuth} from 'firebase/auth'
import app from "../firebase/firebase.config";




export const AuthContext = createContext()
const auth = getAuth(app);


const UserContext = ({ children }) => {

    const [user, setUser] = useState({});







    const userInfo = {
        user,
        setUser
    
    };

    return (
       <AuthContext.Provider value={userInfo}>
        {children}
       </AuthContext.Provider>
    );
};

export default UserContext;