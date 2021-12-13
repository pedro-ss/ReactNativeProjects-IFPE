import React, { useEffect, useState } from 'react';
import { View, ScrollView } from 'react-native';
import Contact from '../contacts/Contact';
import axios from 'axios'

 
export default function Listagem() {
    const [contatos, setContatos] = useState([]);
    let listContatos = [];
    useEffect(() => {    
      function consultarContatos() {
          axios.get('http://professornilson.com/testeservico/clientes')
          .then(function (response) {
              console.log(response.data);
              setContatos(response.data);
          }).catch(function (error) {
              console.log(error);
          });
      }
      consultarContatos();
    },[]);

    contatos.forEach(contact => {
      listContatos.push(
        <Contact contact={contact}/>
        )
    })

  return (
    <View >
        <ScrollView >
          {listContatos}
        </ScrollView>
    </View>
  );
}