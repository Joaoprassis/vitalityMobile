import * as React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

{/* tela inicial */}
import Home from '../pages/signed/home'

{/* passo a passo de cadastro */}
import Dashboard from "../pages/registro/passoUm";
import Dashboard2 from "../pages/registro/passoDois";
import Dashboard3 from "../pages/registro/passoTres";

{/*  login e cadastro */}
import SignUp from "../pages/cadastro/SignUp";
import Login from "../pages/cadastro/Login";

{/* tela principal de dashboard */}
import Homework from "../pages/signed/barraNav";

{/* exercicios */}
import Exercises from "../pages/signed/exercicios/main-exercicios";
import Walk from "../pages/signed/exercicios/caminhada";
import Run from "../pages/signed/exercicios/corrida";
import Personalizado from "../pages/signed/exercicios/personalizado";
import ArmScreen from "../pages/signed/exercicios/musculacao";

{/* tela de receitas */}
import RecipesScreen from "../pages/signed/receitas/main-receitas";
import RecipeDetailScreen from "../pages/signed/receitas/RecipeDetail1";

{/* telas de configurações */}
import ConfiguracaoScreen from "../pages/signed/config/main-config";
import DadosConta from "../pages/signed/config/dados-conta";
import AppearanceScreen from "../pages/signed/config/aparencia";
import DadosPessoaisScreen from "../pages/signed/config/dados-pessoais";
import InviteFriendsScreen from "../pages/signed/config/invite-friends";
import PrivacyPolicyScreen from "../pages/signed/config/privacidade";

{/* tela de ajuda */}

import HelpandSupportScreen from "../pages/help";

const Stack = createNativeStackNavigator();

export function AppRoutes() {
  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName="Home" 
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
        <Stack.Screen name="WalkScreen" component={Walk} />
        <Stack.Screen name="Personalizado" component={Personalizado} />
        <Stack.Screen name="Run" component={Run} />
        <Stack.Screen name="Arm" component={ArmScreen} />

        <Stack.Screen name="Recipes" component={RecipesScreen} />
        <Stack.Screen name="RecipeDetail" component={RecipeDetailScreen} />

        <Stack.Screen name="Configuracao" component={ConfiguracaoScreen} />
        <Stack.Screen name="DadosConta" component={DadosConta} />
        <Stack.Screen name="DadosPessoais" component={DadosPessoaisScreen} />
        <Stack.Screen name="HelpandSupport" component={HelpandSupportScreen} />
        <Stack.Screen name="InviteFriends" component={InviteFriendsScreen} />
        <Stack.Screen name="Appearance" component={AppearanceScreen} />
        <Stack.Screen name="PrivacyPolicy" component={PrivacyPolicyScreen} />   
        



       

      </Stack.Navigator>
    </NavigationContainer>

  );
}

export default AppRoutes;