import React from 'react';
import { Feather } from '@expo/vector-icons';
import { useNavigation, useRoute } from '@react-navigation/native';
import { View, TouchableOpacity, Image, Text, FlatList } from 'react-native';

import styles from './styles';
import logoImg from '../../assets/logoHader.png';
;

export default function Notification() {
  const navigation = useNavigation();
 
  const DATA = [
    {
      id: '1',
      mensagem: 'Solicitação de retirada de produto foi confirmada!',
      descricao: ' Produto estojo infantil /00W25E',
      button: 'Entregar'

    },
    {
      id: '2',
      mensagem: 'Solicitação de retirada de produto foi negada!',
      descricao: ' Produto estojo infantil /00W23R',
      button: 'Ok'
    },
   
  ];
function navigateToDetail(){
  navigation.navigate('Home');
}
  return (
    <View style={styles.container} >
      <View style={styles.header}>
        <Image source={logoImg} />
        <Text style={styles.headerText}>
          Total de <Text style={styles.headerTextBold}>2 notificações.</Text>
        </Text>
      </View>

      <FlatList
        data={DATA}
        style={styles.deliveryList}
        keyExtractor={notification => String(notification.id)}
        renderItem={({ item: notification }) => (
          <View style={styles.notification}>
            <Text style={styles.notificationProperty}>{notification.mensagem}</Text>

            <Text style={styles.notificationValue}>{notification.descricao}</Text>

            

            <TouchableOpacity
              style={styles.detailsButton}
              onPress={() => navigateToDetail()}
            >
              <Text style={styles.detailsButtonText}>{notification.button}</Text>
              
            </TouchableOpacity>
          </View>
        )}
      />

    </View>
  );
}