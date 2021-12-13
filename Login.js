import { FontAwesome5 } from '@expo/vector-icons';
import React, { useState } from 'react';
import { Text, View, TextInput, Button } from 'react-native';
import styleSheet from './Styles';
import { initializeApp } from "firebase/app";
import { getAuth, signInWithEmailAndPassword, createUserWithEmailAndPassword } from "firebase/auth";

const styles = styleSheet;

const firebaseConfig = {
  apiKey: "AIzaSyDQut_g1mHCwtTIqbfla7EjQXMXJe-GsT8",
  authDomain: "atividade-mobile.firebaseapp.com",
  projectId: "atividade-mobile",
  storageBucket: "atividade-mobile.appspot.com",
  messagingSenderId: "1018896212987",
  appId: "1:1018896212987:web:fb699bad7d82ab4520a15e",
  measurementId: "G-V6Y3JSH6E2"
};

const app = initializeApp(firebaseConfig);

const auth = getAuth();

function loginFirebase() {
  signInWithEmailAndPassword(auth, email, senha)
    .then((userCredential) => {
      const user = userCredential.user;
      console.log(user)
    })
    .catch((error) => {
      const errorCode = error.code;
      const errorMessage = error.message;
      console.log(errorMessage,errorCode)
    });

}

function cadastrarUsuario() {
  createUserWithEmailAndPassword(auth, email, senha)
    .then((userCredential) => {
      const user = userCredential.user;
      console.log(user)
    })
    .catch((error) => {
      const errorCode = error.code;
      const errorMessage = error.message;
      console.log(errorMessage,errorCode)
    });
}

export default function Login({ navigation }) {
  const [email, setEmail] = useState("");
  const [senha, setSenha] = useState("");
  //const navigation = this.props.navigation;
  return (
    <View style={styles.container}>
      <View style={styles.loginInputs}>
        <FontAwesome5 name="user-circle" size={60} color="black" />
        <Text style={styles.basicText}>
          Login
          </Text>
        <TextInput
          value={email}
          onChangeText={email => setEmail(email)}
          style={styles.basicInput} />
        <Text style={styles.basicText}>
          Senha
          </Text>
        <TextInput
          value={senha}
          onChangeText={senha => setSenha(senha)}
          style={styles.basicInput} />
      </View>
      <View style={styles.loginButtons}>
        <Button title="Login" accessibilityLabel="Login" onPress={() => {navigation.navigate('Listagem')}} color="#4169e1" />
      </View>

      <View style={styles.loginButtons}>
        <Button title="Cadastre-se" accessibilityLabel="Cadastre-se" onPress={() => createUserWithEmailAndPassword(auth, email, senha)} color="#ff4500" />
      </View>
    </View>
  )
}