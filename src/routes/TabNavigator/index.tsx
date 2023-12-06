import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import Feed from '../../screens/Feed';
import {Club} from '../../screens/Club';
import {Image} from 'react-native';
import Profile from '../../screens/Profile';
import React from 'react';
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
          borderTopColor: '#9e9e9e',
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
