import { FontAwesome5 } from '@expo/vector-icons';
import React from 'react';
import { Text, View, TextInput, Button } from 'react-native';
import styleSheet from '../../Styles';

const styles = styleSheet;

export default function RegistrationContact({ route, navigation }) {
  const { nome , fone, email } = route.params != undefined ? route.params : {undefined,undefined,undefined};

  let button1, button2;

  if (nome != undefined) {
    button1 = <View style={styles.registerButtons}><Button title="Alterar" accessibilityLabel="Alterar" onPress={() => { navigation.navigate('Listagem') }} color="#ffa500" /></View>
    button2 = <View style={styles.registerButtons}><Button title="Excluir" accessibilityLabel="Excluir" onPress={() => { navigation.navigate('Listagem') }} color="#ff4500"/></View>
  } else {
    button1 = <View style={styles.registerButtons}><Button title="Salvar" accessibilityLabel="Salvar" onPress={() => { navigation.navigate('Listagem') }} /></View>
  }

  return (
    <View style={styles.container}>
      <View style={styles.inputTitle}>
        <FontAwesome5 name="user-circle" size={60} color="black" style={styles.inputTitle}/>
        <Text style={styles.basicText}>
          Nome
          </Text>
        <TextInput style={styles.basicInput} value={nome} />

        <Text style={styles.basicText}>
          Telefone
          </Text>
        <TextInput style={styles.basicInput} value={fone} />

        <Text style={styles.basicText}>
          Email
          </Text>
        <TextInput style={styles.basicInput} value={email} />
      </View>
      {button1}
      {button2}
    </View>
  );
}