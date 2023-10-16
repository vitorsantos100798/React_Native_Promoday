export type TypeAuthContext = {
  SignIn: (user: User) => TypePayLoadUser;
  isAuthenticated: boolean | undefined;
  setIsAuthenticated: () => void;
};

export type User = {
  email: string;
  password: string;
};

export type TypePayLoadUser = {
  user: number;
  token: string;
  refleshToken: string;
  success: boolean;
  data: string | undefined;
  error?: string;
  city: string;
};

export type AuthProviderProps = {
  children: React.ReactNode;
};
