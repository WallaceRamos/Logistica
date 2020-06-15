import React, { useState } from 'react';
import { Feather } from '@expo/vector-icons';
import { useNavigation, useRoute } from '@react-navigation/native';
import { View, TouchableOpacity, Image, Text, Alert } from 'react-native';

import styles from './styles';
import logoImg from '../../../assets/logo.png';

import api from '../../../services/api';

export default function DatailSolicitation() {
  const navigation = useNavigation();
  const route = useRoute();
  const delivery = route.params.solicitation;

  const[endereco, setEndereco] = useState(delivery.endereco);
  const[produto, setProduto] = useState(delivery.produto);
  const[periodo, setPeriodo] = useState(delivery.periodo);

  const dados = {
    endereco,
    produto,
    periodo
    
  };



  function navigateBack() {
    navigation.goBack()
  }
   async function HandleNegation(id){

    try {
     
      await api.delete(`solicitations/${id}`)
     Alert.alert('Solicitação negada com sucesso');
     
     navigation.navigate('SolicitationList');

   } catch (err) {
     Alert.alert('Erro no processo, tente novamente');
   }


  }
  async function HandleConfirmation(entregador_id, id, order_id){

    try {
      await api.post('solicitationsConfirmed', dados, {
       headers: {
         Authorization: entregador_id,
       }
     });
     await api.delete(`solicitations/${id}`);
     await api.delete(`requests/${order_id}`);
     
     Alert.alert('Solicitação confirmada com sucesso');
     navigation.navigate('SolicitationList');

   } catch (err) {
     Alert.alert('Erro no processo tente novamente');
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

        <Text style={styles.incidentProperty}>Entregador:</Text>
        <Text style={styles.incidentValue}>{delivery.name}</Text>

        <Text style={styles.incidentProperty}>Produto:</Text>
        <Text style={styles.incidentValue}>{delivery.produto}</Text>

        <Text style={styles.incidentProperty}>Data limite de entrega:</Text>
  <Text style={styles.incidentValue}>{delivery.periodo}</Text>
      </View>

      <View style={styles.contactBox}>
        <Text style={styles.heroTitle}>Confirme ou negue a solicitação.</Text>


        <View style={styles.actions}>
          <TouchableOpacity style={styles.actionNegar} onPress={() =>HandleNegation(delivery.id)}>
            <Text style={styles.actionText}>Negar</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.action} onPress={() =>HandleConfirmation(delivery.user_id, delivery.id, delivery.order_id)}>
            <Text style={styles.actionText}>Confirmar</Text>
          </TouchableOpacity>
        </View>
      </View>

    
    </View>
  );
}