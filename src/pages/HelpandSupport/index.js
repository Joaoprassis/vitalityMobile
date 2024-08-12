import React from 'react';
import { View, Text, Image, ScrollView, TouchableOpacity, StyleSheet } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

const HelpandSupportScreen = () => {
  return (
    <ScrollView contentContainerStyle={styles.container}>
      <View style={styles.header}>
        <Image source={require('../../assets/logo.png')} style={styles.icoImage} />
        <Text style={styles.title}>Como podemos ajudar?</Text>
      </View>

      <View style={styles.section}>
        
        <TouchableOpacity style={styles.article}>
          <Text style={styles.articleTitle}>Dúvidas sobre cálculos</Text>
          <Text style={styles.articleDescription}>
            Veja como é feito o cálculo da taxa de metabolismo basal e como utilizamos com você.
          </Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.article}>
          <Text style={styles.articleTitle}>Como posso melhorar minha saúde?</Text>
          <Text style={styles.articleDescription}>
            Nosso app ajuda com seus controles diários, não dispensa consultas médicas.
          </Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.article}>
          <Text style={styles.articleTitle}>Como adicionar alimentos/receitas?</Text>
          <Text style={styles.articleDescription}>
            Vá para a tela de alimentos, e nela terá um botão para adicionar o alimento caso não ache em nosso app.
          </Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.article}>
          <Text style={styles.articleTitle}>Como mudar o tema do Aplicativo?</Text>
          <Text style={styles.articleDescription}>
            Acesse a configuração e depois clique em aparência, lá você poderá escolher o melhor tema para você.
          </Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.article}>
          <Text style={styles.articleTitle}> Contato </Text>
          <Text style={styles.articleDescription}>
           Para dúvidas entre em contato com nosso endereço de Email: vitalityvisionm@gmail.com
          </Text>
        </TouchableOpacity>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({

 container: {
   flex: 1,
   padding: 16,
   alignItems: 'center',
   backgroundColor: '#fff',
 },
  header: {
    alignItems: 'center',
    marginBottom: 30,
  },
  icoImage: {
    width: 60,
    height: 60,
    marginTop: 70,
  },
  title: {
    fontSize: 30,
    fontWeight: 'bold',
    marginTop: 50,
  },
  section: {
    marginBottom: 20,
  },
  article: {
    backgroundColor: '#f9f9f9',
    padding: 15,
    borderRadius: 8,
    marginBottom: 10,
  },
  articleTitle: {
    fontSize: 16,
    fontWeight: 'bold',
  },
  articleDescription: {
    fontSize: 14,
    color: '#777',
    marginTop: 4,
  },
});

export default HelpandSupportScreen;