import React, { useState, useEffect } from 'react';
import { Feather } from '@expo/vector-icons';
import { useNavigation, useRoute } from '@react-navigation/native';
import { View, TouchableOpacity, Image, Text, Alert, TextInput, AsyncStorage, ScrollView } from 'react-native';
import { mask } from 'remask';


import styles from './styles';
import logoImg from '../../../assets/logo.png';

import api from '../../../services/api';

export default function CheckList() {

  const route = useRoute();
  const delivery = route.params.delivery;

  const[userid, setUserid] = useState();

  const [modelo, setModelo] = useState('');
  const [cor, setCor] = useState('');

  const [tempo, setTempo] = useState('');
  const [endereco, setEndereco] = useState(delivery.endereco);
  const [produto, setProduto] = useState(delivery.produto);
  const [quantidade, setQuantidade] = useState(delivery.quantidade);
  const [solicitationId, setSolicitationId] = useState(delivery.id);



  const navigation = useNavigation();

  async function LoadId(){
    const userid = await AsyncStorage.getItem('UserId');
        setUserid(userid);
        return;
   }
  
   useEffect(() => {
    LoadId();
  }, []);
  

  function navigateBack() {
    navigation.goBack()
  }

  async function handlefinalizar() {
    
    try {
      await api.post('delivery', {
        modelo,
        cor,
        tempo,
        endereco,
        produto,
        quantidade
    
      }, {
        headers: {
          Authorization: userid,
        }
      });
      await api.delete(`solicitationsConfirmed/${solicitationId}`);

      Alert.alert('Entrega finalizada com sucesso');
      navigation.navigate('Home');
    } catch (err) {
      Alert.alert('Usuario não encontrado');
    }
  }


  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Image source={logoImg} style={styles.headerLogo} />
        <TouchableOpacity onPress={navigateBack}>
          <Feather name="arrow-left" size={28} color="#000" />
        </TouchableOpacity>
      </View>

      <Text style={styles.title}></Text>
      <Text style={styles.description}>Preencha o check-list da sua entrega.</Text>

      <ScrollView>

        <View style={styles.incident}>
          <Text style={styles.incidentProperty}>Qual é o modelo?</Text>
          <TextInput
            style={styles.input}
            placeholder="Modelo"
            placeholderTextColor="#999"
            autoCapitalize="none"
            autoCorrect={false}
            value={modelo}
            onChangeText={setModelo}

          />
          <Text style={styles.incidentProperty}>Qual é a cor?</Text>
          <TextInput
            style={styles.input}
            placeholder="Cor"
            placeholderTextColor="#999"
            autoCapitalize="none"
            autoCorrect={false}
            value={cor}
            onChangeText={setCor}

          />
         
          <Text style={styles.incidentProperty}>Data de entrega?</Text>
         
           <TextInput
            style={styles.input}
            placeholder="00/00/0000"
            placeholderTextColor="#999"
            autoCapitalize="none"
            autoCorrect={false}
            value={mask(tempo, ['99/99/9999'])}
            onChangeText={setTempo}
          />



          <View style={styles.actions}>
            <TouchableOpacity style={styles.action} onPress={() => handlefinalizar()}>
              <Text style={styles.actionText}>Finalizar</Text>
            </TouchableOpacity>
          </View>
        </View>
      </ScrollView>
    </View>






  );
}