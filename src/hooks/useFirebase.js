import { useState, useEffect } from "react";

import { getAuth, signInWithEmailAndPassword, createUserWithEmailAndPassword, signOut, onAuthStateChanged, updateProfile } from "firebase/auth";
import initializeFirebase from "../components/Authentication/Firebase/firebase.init";
//initalize firebase app
initializeFirebase()
const useFirebase = () => {
    const [user, setUser] = useState({})
    const [authError, setAuthError] = useState('');
    //loading snipper
    const [isLoading, setIsLoading] = useState(true);
    const auth = getAuth();

    const registerUser = (email, password) => {
        setIsLoading(true)
        createUserWithEmailAndPassword(auth, email, password)
            .then((userCredential) => {
                setAuthError('');

            })
            .catch((error) => {
                setAuthError(error.message)

            })
            .finally(() => setIsLoading(false))
    }

    //singin mentho for email password

    const loginUser = (email, password, location, history) => {
        setIsLoading(true)
        signInWithEmailAndPassword(auth, email, password)
            .then((userCredential) => {
                //if user came from private route then it will redirect that route after login
                const destination = location?.state?.from || '/';
                history.replace(destination)
                setAuthError('');
            })
            .catch((error) => {
                setAuthError(error.message)
            })
            .finally(() => setIsLoading(false))
    }



    //check that user is changeing state or not

    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, (user) => {
            if (user) {
                // User is signed in, see docs for a list of available properties

                const uid = user.uid;
                setUser(user)
            } else {
                // User is signed out
                setUser({})
            }
            setIsLoading(false)
        });
        return () => unsubscribe;
    }, [])


    const logOut = () => {
        setIsLoading(true)
        signOut(auth).then(() => {
            // Sign-out successful.
        }).catch((error) => {
            // An error happened.
        })
            .finally(() => setIsLoading(false))
    }
    return {
        user,
        registerUser,
        logOut,
        loginUser,
        isLoading,
        authError
    }
}
export default useFirebase;