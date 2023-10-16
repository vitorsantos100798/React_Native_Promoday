import React from 'react';
import {Routes} from './src/routes/stack';
import {AuthProvider} from './src/context/auth';
const App = () => {
  return (
    <AuthProvider>
      <Routes />
    </AuthProvider>
  );
};

export default App;
