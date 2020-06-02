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
      contact: 'john@mail.com'
    },
    {
      id: '2',
      deliveryman:'Anderson Silva',
      contact: 'anderson@mail.com'
    },
    {
      id: '3',
      deliveryman:'Carlota Reis ',
      contact: 'carlota@mail.com'
    },
  ];
  // function navigateToDetail(delivery) {
  //   navigation.navigate('DetailSolicitation', { delivery });
  // }


  return (
    <View style={styles.container} >
      <View style={styles.header}>
        <Image source={logoImg} style={styles.headerLogo}/>
        <Text style={styles.headerText}>
          Bem vindo:<Text style={styles.headerTextBold}>Pedro</Text>
        </Text>
      </View>

     
      <Text style={styles.title}>Lista de entregadores cadastrados</Text>

      <FlatList
        data={DATA}
        style={styles.userList}
        keyExtractor={user => String(user.id)}
        renderItem={({ item: user }) => (
          <View style={styles.user}>
            <Text style={styles.userProperty}>Nome do entregador:</Text>
            <Text style={styles.userValue}>{user.deliveryman}</Text>

            <Text style={styles.userProperty}>Contato:</Text>
            <Text style={styles.userValue}>{user.contact}</Text>

          
          </View>
        )}
      />

    </View>
  );
}