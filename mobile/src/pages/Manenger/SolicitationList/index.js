import React from 'react';
import { Feather } from '@expo/vector-icons';
import { useNavigation, useRoute } from '@react-navigation/native';
import { View, TouchableOpacity, Image, Text, Linking, FlatList } from 'react-native';

import styles from './styles';
import logoImg from '../../../assets/logoHader.png';


export default function SolicitationList() {
  const navigation = useNavigation();
  const DATA = [
    {
      id: '1',
      deliveryman:'John Due',
      endereco: 'Av. Prof. João Rodrigues, 1501 - Jardim Esperanca, Guaratinguetá - SP',
      produto: ' Estojo infantil / 00W23R',
      periodo: '22/8/2020'
    },
    {
      id: '2',
      deliveryman:'Spider Anderson',
      endereco: 'R. Afonso Giannico, 350 - Pedregulho, Guaratinguetá - SP ',
      produto: ' Estojo juvenil / 11R34B',
      periodo: '22/10/2020'
    },
    {
      id: '3',
      deliveryman:'Gustavo Gay',
      endereco: 'Av. Juscelino Kubitscheck de Oliveira, 957 - Campo do Galvão, Guaratinguetá - SP',
      produto: ' Estojo infantil barbie / 69S22W',
      periodo: '22/12/2020'
    },
  ];
  function navigateToDetail(delivery) {
    navigation.navigate('DetailSolicitation', { delivery });
  }


  return (
    <View style={styles.container} >
      <View style={styles.header}>
        <Image source={logoImg} />
        <Text style={styles.headerText}>
          Bem vindo:<Text style={styles.headerTextBold}>Pedro Viadão</Text>
        </Text>
      </View>

     
      <Text style={styles.title}>Confirme as solicitações de retirada das encomendas abaixo. </Text>

      <FlatList
        data={DATA}
        style={styles.deliveryList}
        keyExtractor={delivery => String(delivery.id)}
        renderItem={({ item: delivery }) => (
          <View style={styles.delivery}>
            <Text style={styles.deliveryProperty}>{delivery.deliveryman} solicitou entrega de produto {delivery.produto}:</Text>
            
            

            <TouchableOpacity
              style={styles.detailsButton}
              onPress={() => navigateToDetail(delivery)}
            >
              <Text style={styles.detailsButtonText}>Ver mais detalhes</Text>
              <Feather name="arrow-right" size={20} color="#29C759" />
            </TouchableOpacity>
          </View>
        )}
      />

    </View>
  );
}