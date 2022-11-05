import { createUserWithEmailAndPassword, getAuth, onAuthStateChanged, sendEmailVerification, signInWithEmailAndPassword, signOut, updateProfile } from 'firebase/auth';
import React, { createContext } from 'react';
import { useState } from 'react';
import { useEffect } from 'react';
import app from '../Firebase/firebase.config';
export const AuthContext = createContext()
const AuthProvider = ({ children }) => {
    const auth = getAuth(app);

    //User State
    const [user, setUser] = useState()
    //Loading State
    const [loading, setLoading] = useState(true)
    //User Registraiton
    const userRegistration = (email, password) => {
        setLoading(true)
        return createUserWithEmailAndPassword(auth, email, password);
    }
    //User SignIn
    const userSignIn = (email, password) => {
        setLoading(true)
        return signInWithEmailAndPassword(auth, email, password)
    }
    //Send email verification link after signup
    const userVerification = () => {
        setLoading(true)
        return sendEmailVerification(auth.currentUser)
    }
    //Update User after login
    const updateUser = (name, profile) => {
        setLoading(true)
        return updateProfile(auth.currentUser, {
            displayName: name,
            photoURL: profile
        })
    }
    //SignOut User
    const logOut = () => {
        setLoading(true)
        return signOut(auth)
    }
    //Set user to a state to access it whrere need
    useEffect(()=> {
        const unSubscribe = onAuthStateChanged(auth, (currentUser) => {
            setUser(currentUser)
            setLoading(false)
        })
        return () => unSubscribe()
    },[auth])
    const userInfo = { user, userRegistration, userSignIn, userVerification, updateUser, logOut, loading}
    return (
        <div>
            <AuthContext.Provider value={userInfo}>
                {children}
            </AuthContext.Provider>
        </div>
    );
};

export default AuthProvider;