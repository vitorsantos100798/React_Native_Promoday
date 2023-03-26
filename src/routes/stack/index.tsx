import React from 'react';
import ContainerNavigation from '..';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import Login from '../../screens/Login';
import Splash from '../../screens/Splash';

const Stack = createNativeStackNavigator();

function Routes() {
  return (
    <ContainerNavigation>
      <Stack.Navigator initialRouteName="splash">
        <Stack.Screen name="login" component={Login} />
        <Stack.Screen name="splash" component={Splash} />
      </Stack.Navigator>
    </ContainerNavigation>
  );
}

export default Routes;
