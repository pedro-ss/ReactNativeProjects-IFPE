
import React from 'react';
import { Button } from 'react-native';
import Login from '../Login';
import Listagem from '../app/listagem/Listagem';
import Registration from '../app/cadastro/Registration';
import RegistrationContact from '../app/cadastro/RegistrationContact';
import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';

const Stack = createStackNavigator();

export default function Routes() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Login" component={Login} />
        <Stack.Screen name="Cadastro" component={Registration} />
        <Stack.Screen name="CadastroContato" component={RegistrationContact} />
        <Stack.Screen name="Listagem" component={Listagem} options={({ navigation }) => ({
            headerTitle: 'Listagem de Contatos',
            headerRight: () => (
              <Button
                onPress={() => navigation.navigate('CadastroContato')}
                title="Adicionar contatos"
                color="#2196F3"
              />
            ),
          })}/>
      </Stack.Navigator>
    </NavigationContainer>
  );
}