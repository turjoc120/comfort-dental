import React from 'react';
import { createContext } from 'react';
import useFirebase from '../hooks/useFirebase';





export const authContext = createContext()

const AuthProvider = ({ children }) => {
    const allcontext = useFirebase();

    return (
        <authContext.Provider value={allcontext}>
            {children}
        </authContext.Provider>
    );
};

export default AuthProvider;