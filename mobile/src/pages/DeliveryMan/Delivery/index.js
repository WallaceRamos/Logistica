import React, { useEffect, useState } from 'react';
import { View, Alert, Image, Text, TouchableOpacity, ScrollView } from 'react-native';
import { useNavigation } from '@react-navigation/native';

import api from '../../../services/api';

import logoImg from '../../../assets/logo.png';

import styles from './styles';


export default function Delivery() {
  
  const navigation = useNavigation();

  function handleCheckList() {
    navigation.navigate('CheckList');
  }

 
  function handlefinalizar(){
    Alert.alert('Entrega finalizada com sucesso');
    navigation.navigate('Home');

  }


   
  return (
    <View style={styles.container} >
      <View style={styles.header}>
        <Image source={logoImg} style={styles.headerLogo} />
        
      </View>
      
      <Text style={styles.title}></Text>
      <Text style={styles.description}>Veja informações da sua entrega pendente.</Text>

      <ScrollView>

      <View style={styles.incident}>
        <Text style={[styles.incidentProperty, { marginTop: 0 }]}>Endereço de entrega:</Text>
        <Text style={styles.incidentValue}>Rua Alfredo de barros santos, Pedregulho, Guaratinguetá, SP </Text>

        <Text style={styles.incidentProperty}>Produto:</Text>
        <Text style={styles.incidentValue}>Estojo infantil / 00W23R</Text>

        <Text style={styles.incidentProperty}>Data limite de entrega:</Text>
        <Text style={styles.incidentValue}>22/8/2020</Text>
      </View>

      <View style={styles.contactBox}>
        <Text style={styles.heroTitle}>Faça o check-List da carga</Text>


        <View style={styles.actions}>
          <TouchableOpacity style={styles.action} onPress={() => handleCheckList()}>
            <Text style={styles.actionText}>Fazer Check-List</Text>
          </TouchableOpacity>
        </View>
      </View>

      <View style={styles.contactBox}>
        <Text style={styles.heroTitle}>Finalizar entrega</Text>
        <Text style={styles.heroDescription}>Antes de finalizar faça o CheckList da carga</Text>

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