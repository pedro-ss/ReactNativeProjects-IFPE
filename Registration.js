import { FontAwesome5 } from '@expo/vector-icons';
import React from 'react';
import { Text, View, TextInput, Button } from 'react-native';
import styleSheet from './Styles';

const styles = styleSheet;
 
export default function Registration() {
  return (
    <View style={styles.container}>
      <FontAwesome5 name="user-circle" size={60} color="black"/>
        <Text style={styles.basicText}>
          Nome
        </Text>
        <TextInput style={styles.basicInput}/>
        <Text style={styles.basicText}>
          CPF
        </Text>
        <TextInput style={styles.basicInput}/>
        <Text style={styles.basicText}>
          Email
        </Text>
      <TextInput style={styles.basicInput} />
      <Button  title="Salvar"  accessibilityLabel="Salvar"/>
    </View>
  );
}