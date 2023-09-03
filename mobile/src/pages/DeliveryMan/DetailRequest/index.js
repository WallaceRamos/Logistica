import React, { useState, useEffect } from 'react';
import { Feather } from '@expo/vector-icons';
import { useNavigation, useRoute } from '@react-navigation/native';
import { View, TouchableOpacity, Image, Text, Alert } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';

import styles from './styles';
import logoImg from '../../../assets/logo.png';

import api from '../../../services/api';

export default function DetailRequest() {
  const navigation = useNavigation();
  const route = useRoute();

  const delivery = route.params.delivery;

  const[userid, setUserid] = useState();

  const[endereco, setEndereco] = useState(delivery.endereco);
  const[produto, setProduto] = useState(delivery.produto);
  const[quantidade, setQuantidade] = useState(delivery.quantidade);
  const[order_id, setOrder_id] = useState(delivery.id);

  const dados = {
    endereco,
    produto,
    quantidade,
    order_id
    
  };
 
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

 async function HandleSolicitation(){

    
      try {
         await api.post('solicitations', dados, {
          headers: {
            Authorization: userid,
          }
        })
        Alert.alert('Solicitação realizada com sucesso');
        navigation.navigate('Home');

      } catch (err) {
        Alert.alert('Erro na solicitação, tente novamente');
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

    
      <View style={styles.incident}>
        <Text style={[styles.incidentProperty, { marginTop: 0 }]}>Endereço de entrega:</Text>
        <Text style={styles.incidentValue}>{delivery.endereco}</Text>

        <Text style={styles.incidentProperty}>Produto:</Text>
        <Text style={styles.incidentValue}>{delivery.produto}</Text>

        <Text style={styles.incidentProperty}>Quantidade de produto:</Text>
  <Text style={styles.incidentValue}>{delivery.quantidade}</Text>
      </View>

      <View style={styles.contactBox}>
        <Text style={styles.heroTitle}>Solicitar retirada de produto para entrega.</Text>


        <View style={styles.actions}>
          <TouchableOpacity style={styles.action} onPress={() =>HandleSolicitation()}>
            <Text style={styles.actionText}>Solicitar</Text>
          </TouchableOpacity>
        </View>
      </View>

    
    </View>
  );
}