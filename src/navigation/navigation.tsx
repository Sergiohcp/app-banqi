import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

import HomeScreen from "@screens/HomeScreen";
import ShoppingScreen from "@screens/ShoppingScreen";
import PaymentScreen from "@screens/PaymentScreen";
import CardsScreen from "@screens/CardsScreen";
import TicketScreen from "@screens/TicketScreen";
import { colors } from "@styles/colors";
import TabItem from "./components/TabItem";

const HomeStack = createStackNavigator();

function HomeStackScreen() {
  return (
    <HomeStack.Navigator>
      <HomeStack.Screen
        name="Home"
        component={HomeScreen}
        options={{ headerShown: false }}
      />
    </HomeStack.Navigator>
  );
}

const ShoppingStack = createStackNavigator();

function ShoppingStackScreen() {
  return (
    <ShoppingStack.Navigator>
      <ShoppingStack.Screen
        name="Shopping"
        component={ShoppingScreen}
        options={{ headerShown: false }}
      />
    </ShoppingStack.Navigator>
  );
}

const PaymentStack = createStackNavigator();

function PaymentStackScreen() {
  return (
    <PaymentStack.Navigator>
      <PaymentStack.Screen
        name="Payment"
        component={PaymentScreen}
        options={{ headerShown: false }}
      />
    </PaymentStack.Navigator>
  );
}

const CardsStack = createStackNavigator();

function CardsStackScreen() {
  return (
    <CardsStack.Navigator>
      <CardsStack.Screen
        name="Cards"
        component={CardsScreen}
        options={{ headerShown: false }}
      />
    </CardsStack.Navigator>
  );
}

const TicketStack = createStackNavigator();

function TicketStackScreen() {
  return (
    <TicketStack.Navigator>
      <TicketStack.Screen
        name="Ticket"
        component={TicketScreen}
        options={{ headerShown: false }}
      />
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
            return <TabItem routeName={route.name} focused={focused} />;
          },
        })}
        tabBarOptions={{
          activeTintColor: colors.pink,
          inactiveTintColor: colors.black,
          showLabel: false,
        }}
      >
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
