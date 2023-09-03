import React, { useState, useEffect } from 'react';
import { Feather } from '@expo/vector-icons';
import { useNavigation, useRoute } from '@react-navigation/native';
import { View, TouchableOpacity, Image, Text, Alert, TextInput, ScrollView } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';

import styles from './styles';
import logoImg from '../../../assets/logo.png';

import api from '../../../services/api';

export default function CreateRequest() {

  const route = useRoute();

  const navigation = useNavigation();

  const [endereco, setEndereco] = useState('');
  const [produto, setProduto] = useState('');
  const [quantidade, setQuantidade] = useState('');

  const [nome, setNome] = useState();

  async function LoadNome() {
    const nome = await AsyncStorage.getItem('userName');
    setNome(nome);
    return;
  }
  
   useEffect(() => {
    LoadNome();
  }, []);
  
  async function handleCreate() {
    
    try {
      await api.post('requests', {
        endereco,
        produto,
        quantidade
    
      });
     

      Alert.alert('Pedido de entrega criado com sucesso');
      navigation.navigate('SolicitationList');
    } catch (err) {
      Alert.alert('Erro na criação, tente novamente');
    }
  }


  return (
    <View style={styles.container}>
     <View style={styles.header}>
        <Image source={logoImg} style={styles.headerLogo} />
          <Text style={styles.headerText}>
            Bem vindo:<Text style={styles.headerTextBold}> {nome}</Text>
          </Text>
      </View>

      <Text style={styles.title}></Text>
      <Text style={styles.description}>Preencha o o formulario para criar um novo pedido de entrega.</Text>

      <ScrollView>

        <View style={styles.incident}>
          <Text style={styles.incidentProperty}>Qual é o endereço?</Text>
          <TextInput
            style={styles.input}
            placeholder="ex: Rua Alfredo de Barros, 45, Pedregulho, Guaratinguetá, SP"
            placeholderTextColor="#999"
            autoCapitalize="none"
            autoCorrect={false}
            value={endereco}
            onChangeText={setEndereco}

          />
          <Text style={styles.incidentProperty}>Qual é o produto?</Text>
          <TextInput
            style={styles.input}
            placeholder="ex: estojo meme cachão"
            placeholderTextColor="#999"
            autoCapitalize="none"
            autoCorrect={false}
            value={produto}
            onChangeText={setProduto}

          />
         
          <Text style={styles.incidentProperty}>Qual é a quantidade?</Text>
         
           <TextInput
            style={styles.input}
            placeholder="ex: 1"
            placeholderTextColor="#999"
            autoCapitalize="none"
            autoCorrect={false}
            value={quantidade}
            onChangeText={setQuantidade}
          />



          <View style={styles.actions}>
            <TouchableOpacity style={styles.action} onPress={() => handleCreate()}>
              <Text style={styles.actionText}>Criar</Text>
            </TouchableOpacity>
          </View>
        </View>
      </ScrollView>
    </View>






  );
}