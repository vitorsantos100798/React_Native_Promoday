import React from 'react';
import ContainerNavigation from '..';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import Login from '../../screens/Login';
import Splash from '../../screens/Splash';
import {SignUp} from '../../screens/SignUp';
import SucessRegistration from '../../screens/SucessRegistration';
import RegisterPromotion from '../../screens/RegisterPromotion';
import {TabNavigator} from '../TabNavigator';

const Stack = createNativeStackNavigator();

export function Routes() {
  return (
    <ContainerNavigation>
      <Stack.Navigator initialRouteName="home">
        <Stack.Screen
          name="home"
          component={TabNavigator}
          options={{
            title: '',
            headerTransparent: true,
            headerShown: false,
            animation: 'none',
          }}
        />

        <Stack.Screen
          name="login"
          component={Login}
          options={{
            title: '',
            headerTransparent: true,
            headerShown: false,
            animation: 'none',
          }}
        />
        <Stack.Screen
          name="splash"
          component={Splash}
          options={{
            title: '',
            headerTransparent: true,
          }}
        />
        <Stack.Screen
          name="signup"
          component={SignUp}
          options={{
            title: '',
            headerShown: false,
            headerTransparent: true,
          }}
        />
        <Stack.Screen
          name="sucessRegistration"
          component={SucessRegistration}
          options={{
            title: '',
            headerShown: false,
            headerTransparent: true,
          }}
        />
        <Stack.Screen
          name="registerPromotion"
          component={RegisterPromotion}
          options={{
            title: '',
            headerTransparent: true,
          }}
        />
      </Stack.Navigator>
    </ContainerNavigation>
  );
}
