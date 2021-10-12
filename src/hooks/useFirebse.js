import { useState } from "react"
import { GoogleAuthProvider, getAuth, signInWithPopup, onAuthStateChanged, signOut } from "firebase/auth";
import { useEffect } from "react";
import initializeAuthentication from "../Firebase/firebase.initialize";


initializeAuthentication();

const useFirebse = () => {
    const [user, setUser] = useState({});
    const [error, setError] = useState({});

    const googleProvider = new GoogleAuthProvider();
    const auth = getAuth();

    const signInwithGoogle = () => {
        return signInWithPopup(auth, googleProvider);
    };
    const logOut = () => {
        const auth = getAuth();
        signOut(auth).then(() => {
            setUser({});
        }).catch((error) => {
            setError(error);
        });

    }
    useEffect(() => {
        onAuthStateChanged(auth, (user) => {
            if (user) {
                setUser(user);
            }
        });

    }, [])
    return {
        signInwithGoogle, logOut,
        user, error
    }
};

export default useFirebse;