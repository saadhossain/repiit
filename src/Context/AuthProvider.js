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
    //User Registraiton
    const userRegistration = (email, password) => {
        return createUserWithEmailAndPassword(auth, email, password);
    }
    //User SignIn
    const userSignIn = (email, password) => {
        return signInWithEmailAndPassword(auth, email, password)
    }
    //Send email verification link after signup
    const userVerification = () => {
        return sendEmailVerification(auth.currentUser)
    }
    //Update User after login
    const updateUser = (name, profile) => {
        return updateProfile(auth.currentUser, {
            displayName: name,
            photoURL: profile
        })
    }
    //SignOut User
    const logOut = () => {
        return signOut(auth)
    }
    //Set user to a state to access it whrere need
    useEffect(()=> {
        const unSubscribe = onAuthStateChanged(auth, (currentUser) => {
            setUser(currentUser)
        })
        return () => unSubscribe()
    },[auth])
    const userInfo = { user, userRegistration, userSignIn, userVerification, updateUser, logOut}
    return (
        <div>
            <AuthContext.Provider value={userInfo}>
                {children}
            </AuthContext.Provider>
        </div>
    );
};

export default AuthProvider;