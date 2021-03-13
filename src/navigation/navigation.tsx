import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import HomeScreen from '@screens/HomeScreen';
import ShoppingScreen from '@screens/ShoppingScreen';
import PaymentScreen from '@screens/PaymentScreen';
import CardsScreen from '@screens/CardsScreen';
import TicketScreen from '@screens/TicketScreen';
import HomeIcon from '@svg/HomeIcon';
import { colors } from '@styles/colors';

const HomeStack = createStackNavigator();

function HomeStackScreen() {
  return (
    <HomeStack.Navigator>
      <HomeStack.Screen name="Home" component={HomeScreen} />
    </HomeStack.Navigator>
  );
}

const ShoppingStack = createStackNavigator();

function ShoppingStackScreen() {
  return (
    <ShoppingStack.Navigator>
      <ShoppingStack.Screen name="Shopping" component={ShoppingScreen} />
    </ShoppingStack.Navigator>
  );
}

const PaymentStack = createStackNavigator();

function PaymentStackScreen() {
  return (
    <PaymentStack.Navigator>
      <PaymentStack.Screen name="Payment" component={PaymentScreen} />
    </PaymentStack.Navigator>
  );
}

const CardsStack = createStackNavigator();

function CardsStackScreen() {
  return (
    <CardsStack.Navigator>
      <CardsStack.Screen name="Cards" component={CardsScreen} />
    </CardsStack.Navigator>
  );
}

const TicketStack = createStackNavigator();

function TicketStackScreen() {
  return (
    <TicketStack.Navigator>
      <TicketStack.Screen name="Ticket" component={TicketScreen} />
    </TicketStack.Navigator>
  );
}

const Tab = createBottomTabNavigator();

function App() {
  return (
    <NavigationContainer>
      <Tab.Navigator
        screenOptions={({ route }) => ({
          tabBarIcon: ({ focused, color, size }) => {
            return <HomeIcon />;
          },
        })}
        tabBarOptions={{
          activeTintColor: colors.pink,
          inactiveTintColor: colors.black,
        }}>
        <Tab.Screen name="Home" component={HomeStackScreen} />
        <Tab.Screen name="Shopping" component={ShoppingStackScreen} />
        <Tab.Screen name="Payment" component={PaymentStackScreen} />
        <Tab.Screen name="Cards" component={CardsStackScreen} />
        <Tab.Screen name="Ticket" component={TicketStackScreen} />
      </Tab.Navigator>
    </NavigationContainer>
  );
}

export default App;
