import { createContext } from "react";
import React from 'react';
import { useState } from "react";
import {createUserWithEmailAndPassword, getAuth, GithubAuthProvider, GoogleAuthProvider, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut} from 'firebase/auth'
import app from "../firebase/firebase.config";
import { useEffect } from "react";




export const AuthContext = createContext();
const auth = getAuth(app);
const googleProvider = new GoogleAuthProvider();
const githubProvider = new GithubAuthProvider();


const UserContext = ({ children }) => {

    const [user, setUser] = useState({});
    const [loading, setLoading] = useState(true)


    const createUser = (email, password) => {
        setLoading(true)
       return createUserWithEmailAndPassword(auth, email, password)
    }
    const logInUser = (email, password) => {
        setLoading(true);
        return signInWithEmailAndPassword(auth, email, password)
    }
    const googleLogIn = () => {
        setLoading(true)
        return signInWithPopup(auth, googleProvider)
    }
    const githubLogIn = () => {
        setLoading(true);
        return signInWithPopup(auth, githubProvider);
    }
    const logOutUser = () => {
        setLoading(true)
        return signOut(auth)
    }



    useEffect( () => {
        const unsubscribe = onAuthStateChanged(auth, (currentUser)=>{
            setUser(currentUser);
            setLoading(false);
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
        logOutUser, 
        loading,
        githubLogIn
    
    };

    return (
       <AuthContext.Provider value={userInfo}>
        {children}
       </AuthContext.Provider>
    );
};

export default UserContext;