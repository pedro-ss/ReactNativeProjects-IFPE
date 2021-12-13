import { FontAwesome5 } from '@expo/vector-icons';
import React, { useState } from 'react';
import { Text, View, TextInput, Button } from 'react-native';
import styleSheet from '../../Styles';
import axios from 'axios';

const styles = styleSheet;

export default function RegistrationContact({ route, navigation }) {
  const { nome, fone, email } = route.params != undefined ? route.params : { undefined, undefined, undefined };
  
  const [getNome, setNome] = useState("");
  const [getFone, setFone] = useState("");
  const [getEmail, setEmail] = useState("");

  const onChangeNomeHandler = (getNome) => {
    setNome(getNome);
  }

  const onChangeFoneHandler = (getFone) => {
    setFone(getFone);
  }

  const onChangeEmailHandler = (getEmail) => {
    setEmail(getEmail);
  }

  const onSubmitFormHandler = async () => {
    try {
        const response = await axios({
          url: 'http://professornilson.com/testeservico/clientes', 
          method: 'post',
          headers: {'Content-Type': 'application/json'},
          data: {
            id: 0,
            nome: 'Don Juan',
            cpf:'200.234.987-22',
            id_usuario: null,
            datacadastro: '2021-02-07T02:00:00.000Z',
            telefone: '(81) 9999-9999',
            email: 'donjuan@gmail.com'
          }
        }).then(function (response) {
        console.log(response);
        navigation.navigate('Listagem');
      }).catch(function (error) {
        console.log(error);
      });
      if (response.status === 201) {
        console.log(` You have created: ${JSON.stringify(response.data)}`);
        setEmail('');
        setNome('');
        setFone('');
      } else {
        throw new Error("An error has occurred");
      }
    } catch (error) {
      console.log(error);
    }
  }


  let button1, button2;

  if (nome != undefined) {
    button1 = <View style={styles.registerButtons}><Button title="Alterar" accessibilityLabel="Alterar" onPress={() => { navigation.navigate('Listagem') }} color="#ffa500" /></View>
    button2 = <View style={styles.registerButtons}><Button title="Excluir" accessibilityLabel="Excluir" onPress={() => { navigation.navigate('Listagem') }} color="#ff4500" /></View>
  } else {
    button1 = <View style={styles.registerButtons}><Button title="Salvar" accessibilityLabel="Salvar" onPress={() => { onSubmitFormHandler() }} /></View>
  }

  return (
    <View style={styles.container}>
      <View style={styles.inputTitle}>
        <FontAwesome5 name="user-circle" size={60} color="black" style={styles.inputTitle} />
        <Text style={styles.basicText}>
          Nome
          </Text>
        <TextInput style={styles.basicInput} 
        value={nome} 
        onChangeText={onChangeNomeHandler}
        />

        <Text style={styles.basicText}>
          Telefone
          </Text>
        <TextInput style={styles.basicInput} 
        value={fone} 
        onChangeText={onChangeFoneHandler}
        />

        <Text style={styles.basicText}>
          Email
          </Text>
        <TextInput style={styles.basicInput} 
        value={email} 
        onChangeText={onChangeEmailHandler}
        />
      </View>
      {button1}
      {button2}
    </View>
  );
}