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
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {Image} from 'react-native';

const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();

export function TabNavigator() {
  return (
    <Tab.Navigator
      screenOptions={({route}) => ({
        headerShown: false,
        headerTransparent: true,
        tabBarLabelStyle: {
          fontSize: 14,
        },
        tabBarStyle: {
          backgroundColor: '#ffffff',
          width: '100%',
          height: '7%',
          borderTopWidth: 0.5,
          borderTopColor: 'grey',
        },
        tabBarActiveTintColor: 'grey',
      })}>
      <Tab.Screen
        name="feed"
        component={Feed}
        options={{
          tabBarLabel: 'Feed',
          tabBarIcon: ({focused, color, size}) => (
            <Image
              style={{
                tintColor: focused ? '#DB3026' : '#D3D3D3',
              }}
              source={require('../../assets/iconFeed.png')}
            />
          ),
        }}
      />
      <Tab.Screen
        name="club"
        component={Club}
        options={{
          tabBarLabel: 'Club',
          tabBarIcon: ({focused, color, size}) => (
            <Image
              style={{
                tintColor: focused ? '#DB3026' : '#D3D3D3',
              }}
              source={require('../../assets/iconClub.png')}
            />
          ),
        }}
      />

      <Tab.Screen
        name="profile"
        component={Profile}
        options={{
          tabBarLabel: 'Perfil',
          tabBarIcon: ({focused, color, size}) => (
            <Image
              style={{
                tintColor: focused ? '#DB3026' : '#D3D3D3',
              }}
              source={require('../../assets/iconProfileTwo.png')}
            />
          ),
        }}
      />
    </Tab.Navigator>
  );
}

export function Routes() {
  return (
    <ContainerNavigation>
      <Stack.Navigator initialRouteName="splash">
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
          name="profile"
          component={Profile}
          options={{
            title: 'Perfil',
            headerTransparent: true,
            headerShown: false,
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
