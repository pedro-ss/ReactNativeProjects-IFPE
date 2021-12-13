import React from 'react';
import { FontAwesome5 } from '@expo/vector-icons';
import { Text, View, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import styleSheet from '../../Styles';


export default function Contact({contact}) {
    const styles = styleSheet;
    const navigation = useNavigation();
    return (
        <View style={styles.containerList}>
            <TouchableOpacity onPress={() => navigation.navigate('CadastroContato', {
                nome: contact.nome,
                telefone: contact.telefone,
                email: contact.email
            })
            }>
                <View style={{flexDirection: 'row', position: 'absolute'}}>
                <FontAwesome5 name="user-circle" size={30} color="black" />
                </View>
                <View style={{flexDirection: 'row', position: 'relative'}}>
                    <Text style={styles.contactText}>{contact.nome}</Text>
                    <Text style={styles.contactText}>{contact.telefone}</Text>
                </View>
            </TouchableOpacity>
        </View>
    );
}