import React from 'react';
import { View, ScrollView } from 'react-native';
import Contact from '../contacts/Contact';
 
export default function Listagem() {
  
    let contatos = [] 
    const listcontatos = [ 
        {"nome":"Marcos Andrade", "fone":"81 98855-3424", "email":"mand@email.com" },
        {"nome":"Patrícia Tavares", "fone":"81 99876-5332", "email":"pata@email.com"},
        {"nome":"Rodrigo Antunes", "fone":"81 98776-5525", "email":"roan@email.com"}
    ];

    listcontatos.forEach(contact => {
      contatos.push(
        <Contact contact={contact}/>
        )
    })

  return (
    <View >
        <ScrollView >
          {contatos}
        </ScrollView>
    </View>
  );
}