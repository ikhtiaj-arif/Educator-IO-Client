import { createContext } from "react";
import React from 'react';
import { useState } from "react";
import {createUserWithEmailAndPassword, getAuth, GoogleAuthProvider, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut} from 'firebase/auth'
import app from "../firebase/firebase.config";
import { useEffect } from "react";




export const AuthContext = createContext();
const auth = getAuth(app);
const googleProvider = new GoogleAuthProvider()


const UserContext = ({ children }) => {

    const [user, setUser] = useState({});


    const createUser = (email, password) => {
       return createUserWithEmailAndPassword(auth, email, password)
    }
    const logInUser = (email, password) => {
        return signInWithEmailAndPassword(auth, email, password)
    }
    const googleLogIn = () => {
        return signInWithPopup(auth, googleProvider)
    }
    const logOutUser = () => {
        return signOut(auth)
    }



    useEffect( () => {
        const unsubscribe = onAuthStateChanged(auth, (currentUser)=>{
            setUser(currentUser);
        })
        return () => {
            unsubscribe()
        }
    }, [])


    const userInfo = {
        user,
        setUser,
        createUser,
        logInUser,
        googleLogIn,
        logOutUser
    
    };

    return (
       <AuthContext.Provider value={userInfo}>
        {children}
       </AuthContext.Provider>
    );
};

export default UserContext;