import React from 'react';
import { Feather } from '@expo/vector-icons';
import { useNavigation, useRoute } from '@react-navigation/native';
import { View, TouchableOpacity, Image, Text, ScrollView } from 'react-native';

import styles from './styles';
import logoImg from '../../../assets/logoHader.png';


export default function DetailOrder() {
  const navigation = useNavigation();
  const route = useRoute();
 
  const delivery = route.params.delivery;

  function navigateBack() {
    navigation.goBack()
  }
  
  return (
    <View style={styles.container}>
    <View style={styles.header}>
      <Image source={logoImg} />
      <TouchableOpacity onPress={navigateBack}>
        <Feather name="arrow-left" size={28} color="#000" />
      </TouchableOpacity>
    </View>

    <ScrollView>
      <View style={styles.incident}>
        <Text style={[styles.incidentProperty, { marginTop: 0 }]}>Endereço de entrega:</Text>
        <Text style={styles.incidentValue}>{delivery.endereco}</Text>

        <Text style={styles.incidentProperty}>Entregador:</Text>
        <Text style={styles.incidentValue}>{delivery.deliveryman}</Text>

        <Text style={styles.incidentProperty}>Produto:</Text>
        <Text style={styles.incidentValue}>{delivery.produto}</Text>

       
      </View>

      <View style={styles.contactBox}>
        <Text style={styles.heroTitle}>Check List</Text>
        
        <Text style={[styles.incidentProperty, { marginTop: 0 }]}>Modelo:</Text>
        <Text style={styles.incidentValue}>{delivery.checklist.model}</Text>

        <Text style={styles.incidentProperty}>Cor:</Text>
        <Text style={styles.incidentValue}>{delivery.checklist.color}</Text>

        <Text style={styles.incidentProperty}>Quantidade:</Text>
        <Text style={styles.incidentValue}>{delivery.checklist.Quantidade}</Text>

        <Text style={styles.incidentProperty}>Data de retirada:</Text>
  <Text style={styles.incidentValue}>{delivery.checklist.dataretirada}</Text>

      </View>
      </ScrollView>
    
    </View>
  );
}