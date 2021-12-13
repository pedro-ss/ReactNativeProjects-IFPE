import { useEffect, useState } from 'react';
import axios from 'axios'


export default function ApiIntegration() {

    const [contatos, setContatos] = useState([]);

    useEffect(() => {
        
        function consultarContatos() {
            axios.get('http://professornilson.com/testeservico/clientes')
            .then(function (response) {
                console.log(response);
                setContatos(response.data);
            }).catch(function (error) {
                console.log(error);
            });
        }
        
        function inserirContatos() {
            
            axios.post('http://professornilson.com/testeservico/clientes', {
                nome: getNome,
                telefone: getTelefone,
                cpf: getCpf
            }).then(function (response) {
                console.log(response);
            }).catch(function (error) {
                console.log(error);
            });
        }
        
        function alterarContato(getId){
            
            axios.put('http://professornilson.com/testeservico/clientes/'+getId,{
                nome: getNome,
                telefone: getTelefone,
                cpf: getCpf
            }).then(function (response) {
                console.log(response);
            }).catch(function (error) {
                console.log(error);
            });
        }
        
        function excluirContato(getId){
            axios.delete('http://professornilson.com/testeservico/clientes/'+getId)
            .then(function (response) {
                console.log(response);
            }).catch(function (error) {
                console.log(error);
            });
        }
    }, []);
    consultarContatos();
}