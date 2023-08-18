import React, {createContext, useMemo} from 'react';
import {
  SignInCredentials,
  AuthProviderType,
  PayloadType,
  AuthProviderProps,
} from '../types/typeAuthContext';

const AuthContext = createContext({} as AuthProviderType);

const AuthProvider = ({children}: AuthProviderProps) => {
  const authContextData = useMemo(() => {
    return {};
  }, []);

  return (
    <AuthContext.Provider value={authContextData}>
      {children}
    </AuthContext.Provider>
  );
};

export default AuthProvider;
