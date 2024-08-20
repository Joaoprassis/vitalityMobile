import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { MaterialIcons } from '@expo/vector-icons';
import Exercises from '../exercicios/main-exercicios';
import RecipesScreen from '../receitas/main-receitas';
import Home from '../receitas/main-receitas';
import SettingScreen from '../config/main-config';


import {
Text,
View,
Button
} from 'react-native'


const Tab = createBottomTabNavigator();

const Homework = () => {
  return (
    <Tab.Navigator
    
      screenOptions={({ route }) => ({
        tabBarIcon: ({ color, size }) => {
          let iconName;
          let iconSize;


          if (route.name === 'Home') {
            iconName = 'home';
            iconSize = 30;
            
          } else if (route.name === 'Exercises') {
            iconName = 'fitness-center';
          } else if (route.name === 'Recipes') {
            iconName = 'recipes';
          }
           else if (route.name === 'Setting'){
            iconName = 'setting'
          }
          return <MaterialIcons name={iconName} size={size} color={color} />;
       },
        tabBarActiveTintColor: 'white', // Cor dos ícones ativos
        tabBarInactiveTintColor: '#53C189', // Cor dos ícones inativos

        tabBarStyle: {
          backgroundColor: '#0EAB6E', // Cor de fundo da barra
          borderTopWidth: 0, // Remove a borda superior
         
        },
        
          tabBarLabelStyle: {
          display: 'none', // Esconde todos os rótulos
        },
      })}
    >


      <Tab.Screen name="Home" component={Home} options={{ headerShown: false }} />
      <Tab.Screen name="Exercises" component={Exercises} options={{ headerShown: false }} />
      <Tab.Screen name="Recipes" component={RecipesScreen} options={{ headerShown: false }} />
      <Tab.Screen name="Configuracao" component={ConfiguracaoScreen} options={{ headerShown: false }} />
    </Tab.Navigator>
  );
};

export default Homework;
