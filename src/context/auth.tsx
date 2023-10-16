import React, {createContext, useState, useMemo, useCallback} from 'react';
import {signInService} from '../services/signInService';
import AsyncStorage from '@react-native-async-storage/async-storage';

import {
  TypeAuthContext,
  AuthProviderProps,
  User,
  TypePayLoadUser,
} from '../types/typeAuthContext';

export const AuthContext = createContext<TypeAuthContext | undefined>(
  undefined,
);

export const AuthProvider = ({children}: AuthProviderProps) => {
  const [isAuthenticated, setIsAuthenticated] = useState<boolean>();

  const SignIn = async (objectValues: User) => {
    try {
      const response: Promise<TypePayLoadUser> = await signInService(
        objectValues,
      );

      const dataToStore: [string, string][] = [
        ['user', (await response).user.toString()],
        ['city', (await response).city],
        ['token', (await response).token],
        ['refreshToken', (await response).refleshToken],
      ];

      await AsyncStorage.multiSet(dataToStore);
      setIsAuthenticated(true);

      return {
        success: true,
        data: response,
        auth: true,
      };
    } catch (error: any) {
      if (error.response) {
        setIsAuthenticated(false);

        return {
          success: false,
          error: error.response.data,
        };
      }
    }
  };

  const AuthContextData = useMemo(() => {
    return {
      SignIn,
      isAuthenticated,
      setIsAuthenticated,
    };
  }, [SignIn, isAuthenticated, setIsAuthenticated]);

  return (
    <AuthContext.Provider value={AuthContextData}>
      {children}
    </AuthContext.Provider>
  );
};
