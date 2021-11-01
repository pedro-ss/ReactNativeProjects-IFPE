import { FontAwesome5 } from '@expo/vector-icons';
import React, { Component } from 'react';
import { Text, View, TextInput, Button } from 'react-native';
import styleSheet from './Styles';

const styles = styleSheet; 
export default class Login extends Component {
  render() {
    const navigation = this.props.navigation;
    return (
      <View style={styles.container}>
        <View style={styles.loginInputs}>
          <FontAwesome5 name="user-circle" size={60} color="black"/>
          <Text style={styles.basicText}>
            Login
          </Text>
          <TextInput style={styles.basicInput}/>
          <Text style={styles.basicText}>
            Senha
          </Text>
          <TextInput style={styles.basicInput} />
        </View>
        
        <View style={styles.loginButtons}>
          <Button  title="Login"  accessibilityLabel="Login" onPress={() => navigation.navigate('Listagem') } color="#4169e1"/>
        </View>
        
        <View style={ styles.loginButtons }>
          <Button  title="Cadastre-se"  accessibilityLabel="Cadastre-se" onPress={() => navigation.navigate('Cadastro') } color="#ff4500" />
        </View>
      </View>
    )
  }
}