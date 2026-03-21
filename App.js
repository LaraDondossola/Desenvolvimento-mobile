import React from 'react';
import { SafeAreaView, StyleSheet } from 'react-native';
import Calculadora from './src/Calculadora';

export default function App() {
  return (
    <SafeAreaView style={styles.container}>
      <Calculadora />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFE4E1', 
  },
});