import React from 'react';
import { ScrollView, View, Text, StyleSheet } from 'react-native';

const PrivacyPolicyScreen = () => {
  return (
    <ScrollView style={styles.container}>

   <Text style={styles.title}>Privacidade e Segurança</Text>
      <View style={styles.section}>
        <Text style={styles.sectiontitle}> Coleta de Dados</Text>
        <Text style={styles.sectionsubtitle}>
          • Dados Pessoais{'\n'}   Nome, e-mail, telefone, data de nascimento.{'\n'}
          • Dados de Saúde{'\n'}   Informações sobre sua saúde e atividades.{'\n'}
          • Dados de Uso{'\n'}   Informações sobre como você usa o aplicativo.
        </Text>
      </View>

      <View style={styles.section}>
        <Text style={styles.sectiontitle}> Uso dos Dados</Text>
        <Text style={styles.sectionsubtitle}>
          • Serviços{'\n'}   Para fornecer e melhorar o aplicativo.{'\n'}
          • Comunicações Para atualizações e ofertas.{'\n'}
          • Análise{'\n'}   Para melhorar funcionalidades.
        </Text>
      </View>

      <View style={styles.section}>
        <Text style={styles.sectiontitle}> Compartilhamento de Dados</Text>
        <Text style={styles.sectionsubtitle}>
          • Terceiros de Confiança{'\n'}   Com parceiros que ajudam a operar o aplicativo.{'\n'}
          • Obrigação Legal{'\n'}   Para cumprir a lei e proteger direitos.
        </Text>
      </View>

      <View style={styles.section}>
        <Text style={styles.sectiontitle}> Segurança</Text>
        <Text style={styles.sectionsubtitle}>
          • Medidas apropriadas são adotadas para proteger {'\n'}   suas informações, mas nenhuma 
          {'\n'}   transmissão é 100% segura.
        </Text>
      </View>

      <View style={styles.section}>
        <Text style={styles.sectiontitle}> Seus Direitos</Text>
        <Text style={styles.sectionsubtitle}>
          • Acessar, Corrigir, Excluir{'\n'}   Solicite uma cópia, correção ou exclusão de suas {'\n'}   informações.
        </Text>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
    backgroundColor: '#fff',
  },
 title: {
  fontWeight: 'bold',
  fontSize: 20,
  marginTop: 80,
  marginBottom: 40,
  textAlign: 'center',
 },
  section: {
    marginBottom: 10,
    padding: 10,
    backgroundColor: '#EBEAEA',
    borderRadius: 15,
  },
  sectiontitle: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 5,
  },
  sectionsubtitle: {
    fontSize: 14,
    color: '#666',
  },
});

export default PrivacyPolicyScreen;

