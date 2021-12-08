import { useState, useEffect } from "react";

import { getAuth, signInWithEmailAndPassword, createUserWithEmailAndPassword, signOut, onAuthStateChanged, updateProfile } from "firebase/auth";
import initializeFirebase from "../components/Authentication/Firebase/firebase.init";
//initalize firebase app
initializeFirebase()
const useFirebase = () => {
    const [user, setUser] = useState({})
    const auth = getAuth();
    const [authError, setAuthError] = useState('');
    //loading snipper
    const [isLoading, setIsLoading] = useState(true);
    const [admin, setAdmin] = useState(false);


    const registerUser = (email, password, name) => {
        setIsLoading(true)
        createUserWithEmailAndPassword(auth, email, password)
            .then((userCredential) => {
                setAuthError('');
                const newUser = { email, displayName: name }
                setUser(newUser)
                //save User to mongo Db
                saveUser(email, name)
                //update profile data to firebase
                updateProfile(auth.currentUser, {
                    displayName: name
                })
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
    //using useEffect to check and call api for checking user is admin or not

    useEffect(() => {
        console.log(user.email)
        fetch(`http://localhost:5000/users/${user.email}`)
            .then(response => response.json())
            .then(data => setAdmin(data.admin))

    }, [user.email])

    const logOut = () => {
        setIsLoading(true)
        signOut(auth).then(() => {
            // Sign-out successful.
        }).catch((error) => {
            // An error happened.
        })
            .finally(() => setIsLoading(false))
    }

    //save user to mongo DB
    const saveUser = (email, displayName) => {
        const user = { email, displayName };
        fetch('http://localhost:5000/users', {
            method: 'POST',
            headers: { 'content-type': 'application/json' },
            body: JSON.stringify(user)
        })
            .then()
    }


    return {
        user,
        registerUser,
        logOut,
        loginUser,
        isLoading,
        authError,
        saveUser,
        admin
    }
}
export default useFirebase;