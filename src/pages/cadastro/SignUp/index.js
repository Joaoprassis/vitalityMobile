import React, { useState } from 'react';
import {useNavigation } from '@react-navigation/native';


import { 
StyleSheet,
Text, 
View,
Image,
Button, 
TextInput,
TouchableOpacity} from 'react-native';


export default function SignUp() {
const navigation = useNavigation();


  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');

  const handleRegister = () => {
    if (password !== confirmPassword) {
      Alert.alert('Erro', 'As senhas não coincidem.');
      return;
    }}

  return (
    <View style={styles.container}>
    <Text style={styles.title}>Cadastro</Text>
    <TextInput
      style={styles.input}
      placeholder="Nome"
      value={name}
      onChangeText={setName}
    />
    <TextInput
      style={styles.input}
      placeholder="Telefone"
      value={phone}
      onChangeText={setPhone}
    />
    <TextInput
      style={styles.input}
      placeholder="Email"
      value={email}
      onChangeText={setEmail}
      keyboardType="email-address"
      autoCapitalize="none"
    />
    <TextInput
      style={styles.input}
      placeholder="Senha"
      value={password}
      onChangeText={setPassword}
      secureTextEntry
    />
    <TextInput
      style={styles.input}
      placeholder="Confirmar Senha"
      value={confirmPassword}
      onChangeText={setConfirmPassword}
      secureTextEntry
    />
   

    <View style={styles.containerbotoes}>

     <TouchableOpacity
        style={styles.botao2}
        onPress={() => navigation.navigate("Dashboard")}
      >
        <Text style={styles.textbutton2}> Avançar </Text>
      </TouchableOpacity>

       <TouchableOpacity
        style={styles.botao1}
        onPress={() => navigation.navigate("Login")}
      >
        <Text style={styles.textbutton1}> Já tenho conta </Text>
      </TouchableOpacity>
      </View>


  </View>
);
};

const styles = StyleSheet.create({

container: {
  flex: 1,
  justifyContent: 'center',
  alignItems: 'center',
  paddingHorizontal: 20,
  backgroundColor: "#fff",
},
title: {
  fontWeight: 'bold',
  fontSize: 42,
  left: 0,
  marginBottom: 40,
  alignItems: 'center',
  paddingHorizontal: 10,
  marginHorizontal: 40,
},
input: {
 width: '100%',
  borderColor: '#FFFFFF',
  borderRadius: 10,
  padding: 15,
  fontSize: 16,
  backgroundColor: '#EBEAEA',
  alignItems: 'center',
  marginBottom: 8,
},
containerbotoes: {
  flexDirection: 'row',
  marginBottom: 25,
},
botao2: {
  padding: 12,
  backgroundColor: "#0EAB6E", 
  alignSelf: 'center',
  borderRadius: 25,
  marginTop: 25,
  left: 195,
},
textbutton2: {
  fontWeight: 'bold',
  fontSize: 16,
},
botao1: {
padding: 12,
backgroundColor: '#FFFFFF',
alignSelf: 'center',
borderRadius: 25,
marginTop: 25,
right: 150,
},
textbutton1: {
  fontWeight: 'bold',
  fontSize: 16,
  color: "#0EAB6E",
},
})
