export type TypeAuthContext = {
  SignIn: () => void;
};

export type TypeUser = {
  user: number;
  token: string;
  refleshToken: string;
};

export type AuthProviderProps = {
  children: React.ReactNode;
};
