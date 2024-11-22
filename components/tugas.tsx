import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

export default function TugasP2() {
  return (
    <View style={styles.container}>
      <Text style={styles.centerText}>Teks di Tengah Layar</Text>
      <View style={styles.boxContainer}>
        <View style={styles.box1} />
        <View style={styles.box2} />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'lightgray', 
    justifyContent: 'center', 
    alignItems: 'center', 
  },
  centerText: {
    fontSize: 24,
    color: 'blue',
    fontWeight: 'bold',
    marginBottom: 20,
  },
  boxContainer: {
    flexDirection: 'row', 
    justifyContent: 'space-between',
    alignItems: 'center',
    width: '80%',
  },
  box1: {
    backgroundColor: 'red', 
    width: 100,
    height: 100,
  },
  box2: {
    backgroundColor: 'violet',
    width: 100,
    height: 100,
  },
});
