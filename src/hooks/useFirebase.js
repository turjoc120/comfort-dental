import { getAuth, signInWithPopup, createUserWithEmailAndPassword, signInWithEmailAndPassword, GoogleAuthProvider, onAuthStateChanged, signOut } from "firebase/auth";
import { useEffect } from "react";
import { useState } from "react";
import initApp from "../firebase/firebase.init";


initApp()


const useFirebase = () => {
    const auth = getAuth()
    const [user, setUser] = useState({})
    const [error, setError] = useState('')
    const [email, setEmail] = useState('')
    const [pass, setPass] = useState('')
    const [loginEmail, setloginEmail] = useState('')
    const [loginPass, setloginPass] = useState('')
    const [name, setName] = useState('')
    const [isLoading, setLoading] = useState(true)
    console.log(email, pass);
    console.log(loginEmail, loginPass);

    const googleSignIn = () => {
        setLoading(true)
        const googleProvider = new GoogleAuthProvider();
        return signInWithPopup(auth, googleProvider)

    }

    const formSignUp = () => {
        setLoading(true)
        return createUserWithEmailAndPassword(auth, email, pass)

    }

    const formSignIn = () => {
        setLoading(true)
        return signInWithEmailAndPassword(auth, loginEmail, loginPass)

    }

    useEffect(() => {
        const unsubscribed = onAuthStateChanged(auth, (user) => {
            if (user) {

                setUser(user)
            } else {
                setUser({})
            }
            setLoading(false)
        });
        return () => unsubscribed
    }, [])


    const logOut = () => {
        signOut(auth)
            .then(() => {

            })
            .finally(() => setLoading(false))
    }


    return {
        loginEmail, setloginEmail,
        loginPass, setloginPass,
        formSignIn,
        formSignUp,
        setPass,
        setEmail,
        isLoading,
        user,
        error,
        setName,
        name,
        setError,
        googleSignIn,
        logOut,
        setUser,
        setLoading
    }

};

export default useFirebase;