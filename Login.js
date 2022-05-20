import { FontAwesome5 } from '@expo/vector-icons';
import React, { useState } from 'react';
import { Text, View, TextInput, Button } from 'react-native';
import styleSheet from './Styles';
import { initializeApp } from "firebase/app";
import { getAuth, signInWithPopup, signInWithEmailAndPassword, createUserWithEmailAndPassword, GoogleAuthProvider, FacebookAuthProvider } from "firebase/auth";

const styles = styleSheet;

const firebaseConfig = {
  apiKey: "AIzaSyAgnmVvKGo21nXmjsaIXvqoSisFTvS9C7k",
  authDomain: "projetinho-flat.firebaseapp.com",
  projectId: "projetinho-flat",
  storageBucket: "projetinho-flat.appspot.com",
  messagingSenderId: "460072259628",
  appId: "1:460072259628:web:63bb4bc2d85e46257a4189"
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


const google = new GoogleAuthProvider()
const facebook = new FacebookAuthProvider()

function socialLogin(provedor) {
  signInWithPopup(auth, provedor)
    .then((result) => {
      // This gives you a Google Access Token. You can use it to access the Google API.
      const credential = provedor.credentialFromResult(result);

      const token = credential.accessToken;
      // The signed-in user info.
      const user = result.user;
      // ...
      navigation.navigate('Listagem')
    }).catch((error) => {
      // Handle Errors here.
      const errorCode = error.code;
      const errorMessage = error.message;
      // The email of the user's account used.
      const email = error.email;
      // The AuthCredential type that was used.
      const credential = provedor.credentialFromError(error);
      // ...
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

      <View style={styles.loginButtons}>
        <Button title="Google" accessibilityLabel="Google" onPress={() => {socialLogin(google)}} color="#ff0000" />
      </View>
      <View style={styles.loginButtons}>
        <Button title="Facebook" accessibilityLabel="Facebook" onPress={() => {socialLogin(facebook)}} color="#1877f2" />
      </View>
    </View>
  )
}
