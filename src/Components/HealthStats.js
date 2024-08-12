import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const HealthStats = ({ steps, time, heartRate, distance, calories, pace }) => {
  return (
    <View style={styles.container}>
      <View style={styles.stat}>
        <Text style={styles.statLabel}>Passos</Text>
        <Text style={styles.statValue}>{steps}</Text>
      </View>
      <View style={styles.stat}>
        <Text style={styles.statLabel}>Tempo</Text>
        <Text style={styles.statValue}>{time}</Text>
      </View>
      <View style={styles.stat}>
        <Text style={styles.statLabel}>BPM</Text>
        <Text style={styles.statValue}>{heartRate}</Text>
      </View>
      <View style={styles.stat}>
        <Text style={styles.statLabel}>KM</Text>
        <Text style={styles.statValue}>{distance}</Text>
      </View>
      <View style={styles.stat}>
        <Text style={styles.statLabel}>Kcal</Text>
        <Text style={styles.statValue}>{calories}</Text>
      </View>
      <View style={styles.stat}>
        <Text style={styles.statLabel}>Ritmo</Text>
        <Text style={styles.statValue}>{pace}</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginVertical: 20,
    padding: 10,
    backgroundColor: '#f2f2f2',
    borderRadius: 10,
  },
  stat: {
    alignItems: 'center',
  },
  statLabel: {
    fontSize: 14,
    color: '#888',
  },
  statValue: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#000',
  },
});

export default HealthStats;