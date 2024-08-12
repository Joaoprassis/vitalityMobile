import * as React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";


import Home from "../pages/home/index";
import Dashboard from "../pages/Dashboard";
import Dashboard2 from "../pages/Dashboard2";
import Dashboard3 from "../pages/Dashboard3";
import SignUp from "../pages/SignUp";
import Login from "../pages/Login";
import Homework from "../pages/Homework";

import Exercises from "../pages/Exercises";
import WalkScreen from "../pages/Walk";
import RunScreen from "../pages/Run";
import WeightliftherScreen from "../pages/Weightlifther";
import ArmScreen from "../pages/Arm";



import RecipesScreen from "../pages/Receits";
import RecipeDetailScreen from "../pages/Detalhes/RecipeDetail1";
import ConfiguracaoScreen from '../pages/Configuracao';
import AppearanceScreen from "../pages/Appearance";
import HelpandSupportScreen from "../pages/HelpandSupport";
import AccountScreen from '../pages/Conta';
import PersonalDataScreen from '../pages/DadosP';
import InviteFriendsScreen from "../pages/InviteFriends";
import PrivacyPolicyScreen from "../pages/PrivacyPolicy";




const Stack = createNativeStackNavigator();

export function AppRoutes() {
  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName="Walk" 
        screenOptions={{ headerShown: false }}
      >
        <Stack.Screen name="Home" component={Home} />
        <Stack.Screen name="Dashboard" component={Dashboard} />
        <Stack.Screen name="Dashboard2" component={Dashboard2} />
        <Stack.Screen name="Dashboard3" component={Dashboard3} />
        <Stack.Screen name="SignUp" component={SignUp} />
        <Stack.Screen name="Login" component={Login} />
        <Stack.Screen name="Homework" component={Homework} />

        <Stack.Screen name="Exercises" component={Exercises} />
        <Stack.Screen name="WalkScreen" component={WalkScreen} />
        <Stack.Screen name="Weightlifther" component={WeightliftherScreen} />
        <Stack.Screen name="Run" component={RunScreen } />
        <Stack.Screen name="Arm" component={ArmScreen} />

        <Stack.Screen name="Recipes" component={RecipesScreen} />
        <Stack.Screen name="RecipeDetail" component={RecipeDetailScreen} />

        <Stack.Screen name="Configuracao" component={ConfiguracaoScreen} />
        <Stack.Screen name="Account" component={AccountScreen} />
        <Stack.Screen name="PersonalData" component={PersonalDataScreen} />
        <Stack.Screen name="HelpandSupport" component={HelpandSupportScreen} />
        <Stack.Screen name="InviteFriends" component={InviteFriendsScreen} />
        <Stack.Screen name="Appearance" component={AppearanceScreen} />
        <Stack.Screen name="PrivacyPolicy" component={PrivacyPolicyScreen} />   
        
      </Stack.Navigator>
    </NavigationContainer>

  );
}

export default AppRoutes;