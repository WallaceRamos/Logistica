import React from 'react';
import { Feather } from '@expo/vector-icons';
import { useNavigation, useRoute } from '@react-navigation/native';
import { View, TouchableOpacity, Image, Text, Linking, FlatList } from 'react-native';

import styles from './styles';
import logoImg from '../../../assets/logo.png';


export default function UsersList() {
  const navigation = useNavigation();
  const DATA = [
    {
      id: '1',
      deliveryman:'John Due',
      contact: 'doe.john@mail.com'
    },
    {
      id: '2',
      deliveryman:'Spider Anderson',
      contact: 'spider.anderson@mail.com'
    },
    {
      id: '3',
      deliveryman:'Gustavo Gay',
      contact: 'gay.gustavo@mail.com'
    },
  ];
  function navigateToDetail(delivery) {
    navigation.navigate('DetailSolicitation', { delivery });
  }


  return (
    <View style={styles.container} >
      <View style={styles.header}>
        <Image source={logoImg} style={styles.headerLogo}/>
        <Text style={styles.headerText}>
          Bem vindo:<Text style={styles.headerTextBold}>Pedro Viadão</Text>
        </Text>
      </View>

     
      <Text style={styles.title}>Lista de encomendas em andamento</Text>

      <FlatList
        data={DATA}
        style={styles.deliveryList}
        keyExtractor={delivery => String(delivery.id)}
        renderItem={({ item: delivery }) => (
          <View style={styles.delivery}>
            <Text style={styles.deliveryProperty}>Nome do entregador:</Text>
            <Text style={styles.deliveryValue}>{delivery.deliveryman}</Text>

            <Text style={styles.deliveryProperty}>Contato:</Text>
            <Text style={styles.deliveryValue}>{delivery.contact}</Text>

          
          </View>
        )}
      />

    </View>
  );
}