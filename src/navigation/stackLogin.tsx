import { NavigationContainer } from "@react-navigation/native"
import React from "react";

import { createStackNavigator } from '@react-navigation/stack';
import { LoginScreen } from "../screens/loginScreen";
import { RegisterScreen } from "../screens/registerScreen";
import { StackMaterias } from "./stackMaterias";
export const StackLogin = () => {

    const Stack = createStackNavigator();
    return (
        < Stack.Navigator
            screenOptions={{
                headerShown:false,
            }}>
            <Stack.Screen name="LoginScreen" options={{ title: "Login" }} component={LoginScreen} />
            <Stack.Screen name="RegisterScreen" options={{ title: "Register" }} component={RegisterScreen} />
            <Stack.Screen name="StackMaterias" options={{ title: "Materias" }} component={StackMaterias} />
        </Stack.Navigator >
    );
}