import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import {
  createStackNavigator,
  HeaderBackButton,
} from "@react-navigation/stack";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

import HomeScreen from "@screens/HomeScreen";
import ShoppingScreen from "@screens/ShoppingScreen";
import PaymentScreen from "@screens/PaymentScreen";
import CardsScreen from "@screens/CardsScreen";
import TicketScreen from "@screens/TicketScreen";
import TransactionScreen from "@screens/TransactionScreen";
import TabItem from "./components/TabItem";
import { colors } from "@styles/colors";
import { fonts } from "@styles/fonts";
import InitialScreen from "@screens/InitialScreen";

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

function Tabs() {
  return (
    <Tab.Navigator
      initialRouteName={"Home"}
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
  );
}

const Stack = createStackNavigator();

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName={"Initial"}>
        <Stack.Screen
          name={"Initial"}
          component={InitialScreen}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name={"Tab"}
          component={Tabs}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="Transaction"
          component={TransactionScreen}
          options={({ navigation }) => ({
            title: "Transação",
            headerTintColor: colors.black,
            headerTitleStyle: {
              fontFamily: fonts.family.bold,
              fontSize: 20,
            },
            headerBackTitle: "Voltar",
            headerBackTitleStyle: {
              color: colors.pink,
            },
            headerLeft: () => (
              <HeaderBackButton
                tintColor={colors.pink}
                onPress={navigation.goBack}
              />
            ),
          })}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;
