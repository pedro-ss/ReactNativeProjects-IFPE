import { FontAwesome5 } from '@expo/vector-icons';
import React from 'react';
import { Text, View, TextInput, Button } from 'react-native';
import styleSheet from './Styles';

const styles = styleSheet;
 
export default function Login() {
  return (
    <View style={styles.container}>
      <FontAwesome5 name="user-circle" size={60} color="black"/>
      <View style={styles.defaultTextAligment}>
        <Text style={styles.basicText}>
          Login
        </Text>
      </View>
      <TextInput style={styles.basicInput}/>
      <View style={styles.defaultTextAligment}>
        <Text style={styles.basicText}>
          Senha
        </Text>
      </View>
      <TextInput style={styles.basicInput} />
      <Button  title="Login"  accessibilityLabel="Login" borderRadius="15"/>
    </View>
  );
}