import React from 'react';
import ContainerNavigation from '..';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import Login from '../../screens/Login';
import Splash from '../../screens/Splash';
import {SignUp} from '../../screens/SignUp';
import SucessRegistration from '../../screens/SucessRegistration';
import Profile from '../../screens/Profile';
import RegisterPromotion from '../../screens/RegisterPromotion';
import Feed from '../../screens/Feed';
import {Club} from '../../screens/Club';

const Stack = createNativeStackNavigator();

function Routes() {
  return (
    <ContainerNavigation>
      <Stack.Navigator initialRouteName="splash">
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
          name="profile"
          component={Profile}
          options={{
            title: '',
            headerTransparent: true,
          }}
        />
        <Stack.Screen
          name="club"
          component={Club}
          options={{
            title: '',
            headerTransparent: true,
            headerTintColor: 'white',
          }}
        />
        <Stack.Screen
          name="registerPromotion"
          component={RegisterPromotion}
          options={{
            title: '',
            // headerShown: false,
            headerTransparent: true,
          }}
        />
        <Stack.Screen
          name="feed"
          component={Feed}
          options={{
            title: '',
            headerShown: false,
            headerTransparent: true,
          }}
        />
      </Stack.Navigator>
    </ContainerNavigation>
  );
}

export default Routes;
