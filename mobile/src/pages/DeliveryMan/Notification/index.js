import React, { useState } from 'react';
import { Feather } from '@expo/vector-icons';
import { useNavigation, useRoute } from '@react-navigation/native';
import { View, TouchableOpacity, Image, Text, FlatList } from 'react-native';

import styles from './styles';
import logoImg from '../../../assets/logo.png';
;

export default function Notification() {
  const navigation = useNavigation();
  const[xtotal, setXtotal] = useState(3);
  const DATA = [
    {
      id: '1',
      endereco: 'Av. Prof. João Rodrigues, 1501 - Jardim Esperanca, Guaratinguetá - SP',
      produto: ' Estojo infantil / 00W23R',
      periodo: '22/8/2020',
      status: 'confirmado'
    },
    {
      id: '2',
      endereco: 'Av. Prof. João Rodrigues, 1501 - Jardim Esperanca, Guaratinguetá - SP',
      produto: ' Estojo infantil / 00W23R',
      periodo: '22/8/2020',
      status: 'negado'
    },
    {
      id: '3',
      endereco: 'Av. Prof. João Rodrigues, 1501 - Jardim Esperanca, Guaratinguetá - SP',
      produto: ' Estojo infantil / 00W23R',
      periodo: '22/8/2020',
      status: null

    },
   
  ];
  

function navigateToDetail(){
  navigation.navigate('Home');
}
  return (
    <View style={styles.container} >
      <View style={styles.header}>
        <Image source={logoImg} style={styles.headerLogo}/>
        <Text style={styles.headerText}>
          Total de <Text style={styles.headerTextBold}>{xtotal} notificações.</Text>
        </Text>
      </View>

      <FlatList
        data={DATA}
        style={styles.deliveryList}
        keyExtractor={notification => String(notification.id)}
        renderItem={({ item: notification }) => (
          <View style={styles.notification}>
            <Text style={styles.notificationProperty}>Solicitação de retirada de produto está: {notification.status == null ? 'Aguardando resposta' : notification.status }</Text>

            <Text style={styles.notificationValue}>Produto {notification.produto}</Text>

            

            <TouchableOpacity
              style={styles.detailsButton}
              onPress={() => navigateToDetail()}
            >
              <Text style={styles.detailsButtonText}>Ok</Text>
              
            </TouchableOpacity>
          </View>
        )}
      />

    </View>
  );
}