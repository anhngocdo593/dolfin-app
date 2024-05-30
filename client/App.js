import React from "react";
import { View } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import Onboarding1 from "./screens/Onboarding/Onboarding1";
import Onboarding2 from "./screens/Onboarding/Onboarding2";
import Onboarding3 from "./screens/Onboarding/Onboarding3";
import Home from "./screens/others/Home";
import Splash from "./screens/login/Splash";
import Login from "./screens/login/Login";
import Register from "./screens/register/Register";
import ResetPass from "./screens/login/ResetPass";
import AccountSetting from "./screens/account/AccountSetting";
import AccountEdit from "./screens/account/AccountEdit";
import AddScreen from "./screens/Adding/AddScreen";
import ExpenseList from "./components/ExpenseList";
const Stack = createStackNavigator();
const props = [
  {
    _id: "664ac73a0c029d94da94dce4",
    userID: "664188de46be3a6ada81240d",
    amount: 100000,
    description: "",
    category: "food",
    date: "2024-05-20T00:00:00.000+00:00",
    time: "12:30 PM",
  },
  {
    _id: "664b1937e5e4d5f41375e7da",
    userID: "664188de46be3a6ada81240d",
    amount: 500000,
    description: "car",
    category: "transport",
    date: "2024-05-14T00:00:00.000+00:00",
    time: "12:30 PM",
  },
];
export default function App() {
  return <ExpenseList props={props}></ExpenseList>;
  // return (
  //   <NavigationContainer>
  //     <Stack.Navigator>
  //       <Stack.Screen
  //         name="Splash"
  //         component={Splash}
  //         options={{ headerShown: false }}
  //       />
  //       <Stack.Screen
  //         name="AddScreen"
  //         component={AddScreen}
  //         options={{ headerShown: false }}
  //       />
  //       <Stack.Screen
  //         name="Login"
  //         component={Login}
  //         options={{ headerShown: false }}
  //       />
  //       <Stack.Screen
  //         name="Register"
  //         component={Register}
  //         options={{ headerShown: false }}
  //       />
  //       <Stack.Screen
  //         name="O1"
  //         component={Onboarding1}
  //         options={{ headerShown: false }}
  //       />
  //       <Stack.Screen
  //         name="O2"
  //         component={Onboarding2}
  //         options={{ headerShown: false }}
  //       />
  //       <Stack.Screen
  //         name="O3"
  //         component={Onboarding3}
  //         options={{ headerShown: false }}
  //       />
  //       <Stack.Screen
  //         name="Home"
  //         component={Home}
  //         options={{ headerShown: false }}
  //       />
  //       <Stack.Screen
  //         name="ResetPass"
  //         component={ResetPass}
  //         options={{ headerShown: false }}
  //       />
  //       <Stack.Screen
  //         name="AccountSetting"
  //         component={AccountSetting}
  //         options={{ headerShown: false }}
  //       />
  //       <Stack.Screen
  //         name="AccountEdit"
  //         component={AccountEdit}
  //         options={{ headerShown: false }}
  //       />
  //     </Stack.Navigator>
  //   </NavigationContainer>
  // );
}
