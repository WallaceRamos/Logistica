import React, { useEffect, useState } from 'react';
import { View, Alert, Image, Text, TouchableOpacity, ScrollView } from 'react-native';
import { Feather } from '@expo/vector-icons';
import { useNavigation, useRoute } from '@react-navigation/native';


import styles from './styles';
import logoImg from '../../../assets/logo.png';




export default function DetailDelivery() {
  const navigation = useNavigation();
  const route = useRoute();

  const delivery = route.params.delivery;

  function navigateBack() {
    navigation.goBack()
  }

  function handleCheckList(delivery) {
    navigation.navigate('CheckList', { delivery });
  }

   
  return (
    <View style={styles.container} >
       <View style={styles.header}>
      <Image source={logoImg} style={styles.headerLogo} />
      <TouchableOpacity onPress={navigateBack}>
        <Feather name="arrow-left" size={28} color="#000" />
      </TouchableOpacity>
    </View>
      
      <Text style={styles.title}></Text>
      <Text style={styles.description}>Veja informações da sua entrega pendente.</Text>

      <ScrollView>

      <View style={styles.incident}>
        <Text style={[styles.incidentProperty, { marginTop: 0 }]}>Endereço de entrega:</Text>
        <Text style={styles.incidentValue}>{delivery.endereco}</Text>

        <Text style={styles.incidentProperty}>Produto:</Text>
        <Text style={styles.incidentValue}>{delivery.produto}</Text>

        <Text style={styles.incidentProperty}>Data limite de entrega:</Text>
        <Text style={styles.incidentValue}>{delivery.periodo}</Text>
      </View>

      <View style={styles.contactBox}>
        <Text style={styles.heroTitle}>Finalizar entrega</Text>
        <Text style={styles.heroDescription}>Para finalizar preencha o check List</Text>

        <View style={styles.actions}>
          <TouchableOpacity style={styles.action} onPress={() => handleCheckList(delivery)}>
            <Text style={styles.actionText}>Preencher</Text>
          </TouchableOpacity>
        </View>
      </View>
      </ScrollView>

    </View>
  );
}