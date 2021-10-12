import React, { createContext } from 'react';
import useFirebse from '../hooks/useFirebse';

export const AuthContext = createContext();

const AuthProvider = ({ children }) => {
    // const {children}=props;
    const allcontext = useFirebse();
    return (
        <AuthContext.Provider value={allcontext}>
            {children}
        </AuthContext.Provider>

    );
};

export default AuthProvider;