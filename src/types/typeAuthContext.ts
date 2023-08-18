export type SignInCredentials = {
  email: string;
  password: string;
};
export type AuthProviderType = {
  signIn(credentials: SignInCredentials): Promise<PayloadType>;
  err: string;
};
export type PayloadType = {
  accessToken: string;
  acessToken: string;
  expire: string;
};

export type AuthProviderProps = {
  children: React.ReactNode;
};
