import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
import { FontAwesome, FontAwesome5 } from '@expo/vector-icons';



const Tab = createMaterialBottomTabNavigator();
const HomeStack = createStackNavigator();

import SignIn from './pages/SignIn';

// Paginas para o entregador
import HomeDeliveryman from './pages/DeliveryMan/RequestList';
import DetailRequest from './pages/DeliveryMan/DetailRequest';
import DeliveryList from './pages/DeliveryMan/DeliveryList';
import DetailDelivery from './pages/DeliveryMan/DetailDelivery';
import CheckList from './pages/DeliveryMan/CheckList';


//Paginas para o gestor
import SolicitationList from './pages/Manenger/SolicitationList';
import DetailSolicitation from './pages/Manenger/DetailSolicitation';
import UsersList from './pages/Manenger/UsersList';
import OrderList from './pages/Manenger/OrderList';
import DetailOrder from './pages/Manenger/DetailOrder';
import DetailOrderFinalized from './pages/Manenger/DetailOderFinalized';



export default function Routes() {
  const DeliveryTabsScreen = () => (
    <Tab.Navigator 
    
    initialRouteName="Home"
      activeColor="#36CA63"
      inactiveColor="#C0C0C0"
      shifting={true}
      barStyle={{ backgroundColor: '#293B83',  paddingBottom: 12 }}
      >
      <Tab.Screen name="Home" component={HomeDeliveryman}
        options={{
          tabBarLabel: 'Home',
          tabBarIcon: ({ color }) => (
            <FontAwesome name="home" color={color} size={26} />
          ),
        }}
      />
     
      <Tab.Screen name="Delivery" component={DeliveryList}
        options={{
          tabBarLabel: 'Entregas',
          tabBarIcon: ({ color }) => (
            <FontAwesome name="truck" color={color} size={26} />
          ),
        }}
      />
      
    </Tab.Navigator>
  );

  const ManengerTabsScreen = () => (
    <Tab.Navigator 
    
    initialRouteName="SolicitationList"
      activeColor="#36CA63"
      inactiveColor="#C0C0C0"
      shifting={true}
      barStyle={{ backgroundColor: '#293B83',  paddingBottom: 12 }}
      >
        <Tab.Screen name="SolicitationList" component={SolicitationList}
        options={{
          tabBarLabel: 'Home',
          tabBarIcon: ({ color }) => (
            <FontAwesome name="home" color={color} size={26} />
          ),
        }}
      />
      <Tab.Screen name="UsersList" component={UsersList}
        options={{
          tabBarLabel: 'entregadores',
          tabBarIcon: ({ color }) => (
            <FontAwesome5 name="users" color={color} size={19} />
          ),
        }}
      />
      <Tab.Screen name="OrderList" component={OrderList}
        options={{
          tabBarLabel: 'encomendas',
          tabBarIcon: ({ color }) => (
            <FontAwesome5 name="boxes" color={color} size={22} />
          ),
        }}
      />
    </Tab.Navigator>
  );

  return (
    <NavigationContainer>
      <HomeStack.Navigator screenOptions={{ headerShown: false }}>
        <HomeStack.Screen name="SignIn" component={SignIn} />
        <HomeStack.Screen name="TabsDeliveryMan" component={DeliveryTabsScreen} />
        <HomeStack.Screen name="TabsManager" component={ManengerTabsScreen} />

        
        <HomeStack.Screen name="CheckList" component={CheckList} />

        <HomeStack.Screen name="DetailRequest" component={DetailRequest} />
        <HomeStack.Screen name="DetailSolicitation" component={DetailSolicitation} />
        <HomeStack.Screen name="DetailDelivery" component={DetailDelivery} />
        <HomeStack.Screen name="DetailOrder" component={DetailOrder} />
        <HomeStack.Screen name="DetailOrderFinalized" component={DetailOrderFinalized} />

      </HomeStack.Navigator>
    </NavigationContainer>
  );

}