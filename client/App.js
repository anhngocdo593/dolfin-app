import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import { Provider } from "react-redux";
import store from "./store"; // Assuming store is correctly exported from store.js
import ChartPage from "./screens/Adding/ChartPage";
import Onboarding1 from "./screens/Onboarding/Onboarding1";
import Onboarding2 from "./screens/Onboarding/Onboarding2";
import Onboarding3 from "./screens/Onboarding/Onboarding3";
import ForgotPassword from "./screens/login/ForgotPassword";
import Splash from "./screens/login/Splash";
import Login from "./screens/login/Login";
import Register from "./screens/register/Register";
import AddScreen from "./screens/Adding/AddScreen";
import AccountSetting from "./screens/account/AccountSetting";
import AccountEdit from "./screens/account/AccountEdit";
import DefaultPage from "./screens/Adding/DefaultPage";

const Stack = createStackNavigator();

export default function App() {
  return (
    <Provider store={store}>
      <NavigationContainer>
        <Stack.Navigator>
          {/* <Stack.Screen
            name="Splash"
            component={Splash}
            options={{ headerShown: false }}
          /> */}
          <Stack.Screen
            name="DefaultPage"
            component={DefaultPage}
            options={{ headerShown: false }}
          />
          <Stack.Screen
            name="ChartPage"
            component={ChartPage}
            options={{ headerShown: false }}
          />
          <Stack.Screen
            name="AccountSetting"
            component={AccountSetting}
            options={{ headerShown: false }}
          />
          <Stack.Screen
            name="AccountEdit"
            component={AccountEdit}
            options={{ headerShown: false }}
          />
          <Stack.Screen
            name="Login"
            component={Login}
            options={{ headerShown: false }}
          />
          <Stack.Screen
            name="Register"
            component={Register}
            options={{ headerShown: false }}
          />
          <Stack.Screen
            name="Onboarding1"
            component={Onboarding1}
            options={{ headerShown: false }}
          />
          <Stack.Screen
            name="Onboarding2"
            component={Onboarding2}
            options={{ headerShown: false }}
          />
          <Stack.Screen
            name="Onboarding3"
            component={Onboarding3}
            options={{ headerShown: false }}
          />
          <Stack.Screen
            name="AddScreen"
            component={AddScreen}
            options={{ headerShown: false }}
          />
          <Stack.Screen
            name="ForgotPassword"
            component={ForgotPassword}
            options={{ headerShown: false }}
          />
        </Stack.Navigator>
      </NavigationContainer>
    </Provider>
  );
}
