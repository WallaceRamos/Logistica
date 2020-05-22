import React from 'react';
import { Feather } from '@expo/vector-icons';
import { useNavigation, useRoute } from '@react-navigation/native';
import { View, TouchableOpacity, Image, Text, Alert } from 'react-native';

import styles from './styles';
import logoImg from '../../../assets/logoHader.png';


export default function DatailSolicitation() {
  const navigation = useNavigation();
  const route = useRoute();
 
  const delivery = route.params.delivery;

  function navigateBack() {
    navigation.goBack()
  }
  function HandleNegation(){
    navigation.navigate('SolicitationList');
    Alert.alert('Solicitação negada com sucesso');
  }
  function HandleConfirmation(){
    navigation.navigate('SolicitationList');
    Alert.alert('Solicitação confirmada com sucesso');
  }

  return (
    <View style={styles.container}>
    <View style={styles.header}>
      <Image source={logoImg} />
      <TouchableOpacity onPress={navigateBack}>
        <Feather name="arrow-left" size={28} color="#000" />
      </TouchableOpacity>
    </View>

    
      <View style={styles.incident}>
        <Text style={[styles.incidentProperty, { marginTop: 0 }]}>Endereço de entrega:</Text>
        <Text style={styles.incidentValue}>{delivery.endereco}</Text>

        <Text style={styles.incidentProperty}>Entregador:</Text>
        <Text style={styles.incidentValue}>{delivery.deliveryman}</Text>

        <Text style={styles.incidentProperty}>Produto:</Text>
        <Text style={styles.incidentValue}>{delivery.produto}</Text>

        <Text style={styles.incidentProperty}>Data limite de entrega:</Text>
  <Text style={styles.incidentValue}>{delivery.periodo}</Text>
      </View>

      <View style={styles.contactBox}>
        <Text style={styles.heroTitle}>Confirme ou negue a solicitação.</Text>


        <View style={styles.actions}>
          <TouchableOpacity style={styles.actionNegar} onPress={() =>HandleNegation()}>
            <Text style={styles.actionText}>Negar</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.action} onPress={() =>HandleConfirmation()}>
            <Text style={styles.actionText}>Confirmar</Text>
          </TouchableOpacity>
        </View>
      </View>

    
    </View>
  );
}