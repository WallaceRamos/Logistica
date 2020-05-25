import React from 'react';
import { Feather } from '@expo/vector-icons';
import { useNavigation, useRoute } from '@react-navigation/native';
import { View, TouchableOpacity, Image, Text, Alert } from 'react-native';

import styles from './styles';
import logoImg from '../../../assets/logo.png';


export default function DetailRequest() {
  const navigation = useNavigation();
  const route = useRoute();
 
  const delivery = route.params.delivery;

  function navigateBack() {
    navigation.goBack()
  }
  function HandleSolicitation(){
    navigation.navigate('Home');
    Alert.alert('Solicitação realizada com sucesso');
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

        <Text style={styles.incidentProperty}>Data limite de entrega:</Text>
  <Text style={styles.incidentValue}>{delivery.periodo}</Text>
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