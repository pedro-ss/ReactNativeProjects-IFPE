import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#fee',
    },
    inputTitle: {
      alignItems: 'center',
      paddingTop: 20,
    },  
    basicText: {
      fontFamily:"Cochin",
      fontSize: 14,
      paddingTop: 10,
    },
    contactText:{
      paddingLeft: 40,
      paddingTop: 10,
    },
    basicInput: {
      backgroundColor: '#fff',
      borderRadius: 15,
      width: 250,
      height: 40,
      margin: 12,
      borderWidth: 1,
      padding: 10,
    },
    containerList: {
      flex: 1,
      padding: 20,
      flexDirection: 'row',
      justifyContent: 'center',
    },
    loginInputs: {
      paddingTop: 120,
      alignItems: 'center',
      justifyContent: 'center',
    },
    loginButtons: {
      alignItems: 'center',
      paddingTop: 10,
      flexDirection: 'row',
      justifyContent: 'center',
    },
    registerButtons: {
      alignItems: 'center',
      paddingTop: 10,
      flexDirection: 'row',
      justifyContent: 'center',
    },
  });

  export default styles;