import React, {createContext, useContext, useState, useMemo} from 'react';
import {TypeAuthContext, AuthProviderProps} from '../types/typeAuthContext';

export const AuthContext = createContext<TypeAuthContext | undefined>(
  undefined,
);

export const AuthProvider = ({children}: AuthProviderProps) => {
  const SignIn = () => {
    return;
  };

  const AuthContextData = useMemo(() => {
    return {
      SignIn,
    };
  }, []);

  return (
    <AuthContext.Provider value={AuthContextData}>
      {children}
    </AuthContext.Provider>
  );
};
