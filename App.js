import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View, TextInput } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
      <StatusBar style="auto" />
      <Text style={styles.basicText}>
        Login
      </Text>
      <TextInput />
      <Text style={styles.basicText}>
        Senha
      </Text>
      <TextInput />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  basicText: {
    fontFamily:"Arial",
    fontSize: 12,
  }
});
