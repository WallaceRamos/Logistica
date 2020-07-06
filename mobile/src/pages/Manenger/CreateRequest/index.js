import React, { useState, useEffect } from 'react';
import { Feather } from '@expo/vector-icons';
import { useNavigation, useRoute } from '@react-navigation/native';
import { View, TouchableOpacity, Image, Text, Alert, TextInput, AsyncStorage, ScrollView } from 'react-native';

import styles from './styles';
import logoImg from '../../../assets/logo.png';

import api from '../../../services/api';

export default function CreateRequest() {

  const [nome, setNome] = useState();

  const [endereco, setEndereco] = useState('');
  const [produto, setProduto] = useState('');
  const [periodo, setPeriodo] = useState('');


  const navigation = useNavigation();

  async function LoadNome() {
    const nome = await AsyncStorage.getItem('userName');
    setNome(nome);
    return;
  }

  useEffect(() => {
    LoadNome();
  }, []);


  async function handlefinalizar() {

    try {
      await api.post('requests', {
        endereco,
        produto,
        periodo

      });

      Alert.alert('Pedido de entrega criado com sucesso');
      navigation.navigate('SolicitationList');
    } catch (err) {
      Alert.alert('Erro na criação do pedido, tente novamente');
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
      <Text style={styles.description}>Preencha o formulario para cadastar um novo pedido de entrega.</Text>

      <ScrollView>

        <View style={styles.incident}>
          <Text style={styles.incidentProperty}>Qual o endereço?</Text>
          <TextInput
            style={styles.input}
            placeholder="ex: Rua Alfredo de Barros, Pedregulho, Guaratinguetá, SP "
            placeholderTextColor="#999"
            autoCapitalize="none"
            autoCorrect={false}
            value={endereco}
            onChangeText={setEndereco}

          />
          <Text style={styles.incidentProperty}>Nome do Produto?</Text>
          <TextInput
            style={styles.input}
            placeholder="ex: estojo meme do cachao 2040EE"
            placeholderTextColor="#999"
            autoCapitalize="none"
            autoCorrect={false}
            value={produto}
            onChangeText={setProduto}

          />
          <Text style={styles.incidentProperty}>Periodo de entrega?</Text>
          <TextInput
            style={styles.input}
            placeholder="ex: 21/08/2020"
            placeholderTextColor="#999"
            autoCapitalize="none"
            autoCorrect={false}
            value={periodo}
            onChangeText={setPeriodo}

          />

          <View style={styles.actions}>
            <TouchableOpacity style={styles.action} onPress={() => handlefinalizar()}>
              <Text style={styles.actionText}>Cadastrar</Text>
            </TouchableOpacity>
          </View>
        </View>
      </ScrollView>
    </View>






  );
}