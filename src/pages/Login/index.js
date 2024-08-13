import React, { useState } from 'react';
import { View, Text, StyleSheet, TextInput, TouchableOpacity } from 'react-native';

export default function App() {
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  function handleSignIn() {
    if (username === '' || email === '' || password === '') {
      alert('Preencha todos os campos');
      return;
    }
    const data = {
      username,
      email,
      password,
    };
    console.log(data);
  }

  return (
    <View style={styles.container}>
      <Text style={styles.title}> Bem-Vindo(a) </Text>

      <TextInput
        style={styles.textInput}
        onChangeText={setUsername}
        value={username}
        placeholder="Nome de usúario
        "
      />

      <TextInput
        style={styles.textInput}
        onChangeText={setEmail}
        value={email}
        placeholder="Digite seu email"
      />

      <TextInput
        style={styles.textInput}
        onChangeText={setPassword}
        value={password}
        placeholder="Digite sua senha"
        secureTextEntry={true}
      />

      <TouchableOpacity style={styles.button} onPress={handleSignIn}>
        <Text style={styles.buttonText}>Acessar</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: "#fff",
  },
  title: {
  fontWeight: 'bold',
  fontSize: 35,
  left: 0,
  marginBottom: 40,
  alignItems: 'center',
  paddingHorizontal: 10,
  marginHorizontal: 40,
  },
  textInput: {
    borderColor: '#FFFFFF',
    backgroundColor: '#EBEAEA',
    borderRadius: 8,
    fontSize: 16,
    padding: 15,
    marginBottom: 8,
    width: '80%',
  },
  button: {
    padding: 12,
    backgroundColor: '#0EAB6E',
    alignSelf: 'center',
    borderRadius: 25,
    marginTop: 40,
  },
  buttonText: {
    fontWeight: 'bold',
    fontSize: 16,
    color: '#000000',
  },
});




