import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
import { FontAwesome } from '@expo/vector-icons';



const Tab = createMaterialBottomTabNavigator();
const HomeStack = createStackNavigator();

import SignIn from './pages/SignIn';

import Home from './pages/Home';
import DetailHome from './pages/DetailHome';

import Delivery from './pages/Delivery';
import CheckList from './pages/CheckList';

import Notification from './pages/Notification';



export default function Routes() {
  const HomeStackScren = () => (
    <Tab.Navigator 
    
    initialRouteName="Home"
      activeColor="#36CA63"
      inactiveColor="#fff"
      shifting={true}
      barStyle={{ backgroundColor: '#293B83',  paddingBottom: 12 }}
      >
      <Tab.Screen name="Home" component={Home}
        options={{
          tabBarLabel: 'Home',
          tabBarIcon: ({ color }) => (
            <FontAwesome name="home" color={color} size={26} />
          ),
        }}
      />
     
      <Tab.Screen name="Delivery" component={Delivery}
        options={{
          tabBarLabel: 'Entregas',
          tabBarIcon: ({ color }) => (
            <FontAwesome name="truck" color={color} size={26} />
          ),
        }}
      />
       <Tab.Screen name="Notifications" component={Notification}
        options={{
          tabBarLabel: 'Notificações',
          tabBarIcon: ({ color }) => (
            <FontAwesome name="bell" color={color} size={26} />
          ),
        }}
      />
    </Tab.Navigator>
  );


  return (
    <NavigationContainer>
      <HomeStack.Navigator screenOptions={{ headerShown: false }}>
        <HomeStack.Screen name="SignIn" component={SignIn} />
        <HomeStack.Screen name="Tabs" component={HomeStackScren} />
        <HomeStack.Screen name="DetailHome" component={DetailHome} />
        <HomeStack.Screen name="CheckList" component={CheckList} />
      </HomeStack.Navigator>
    </NavigationContainer>
  );

}