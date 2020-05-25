import React from 'react';
import { Feather } from '@expo/vector-icons';
import { useNavigation, useRoute } from '@react-navigation/native';
import { View, TouchableOpacity, Image, Text, Linking, FlatList } from 'react-native';

import styles from './styles';
import logoImg from '../../../assets/logo.png';


export default function OrderList() {
  const navigation = useNavigation();
  const DATA = [
    {
      id: '1',
      deliveryman:'John Due',
      endereco: 'Av. Prof. João Rodrigues, 1501 - Jardim Esperanca, Guaratinguetá - SP',
      produto: ' Estojo infantil / 00W23R',
      checklist:{
        model:'00W23R',
        color: 'azul',
        Quantidade: '1',
        dataretirada:'10/05/2020',
      },
    },
    {
      id: '2',
      deliveryman:'Spider Anderson',
      endereco: 'R. Afonso Giannico, 350 - Pedregulho, Guaratinguetá - SP ',
      produto: ' Estojo juvenil / 11R34B',
      checklist:{
        model:'11R34B',
        color: 'verde',
        Quantidade: '1',
        dataretirada:'10/02/2020',
      },
    },
    {
      id: '3',
      deliveryman:'Gustavo Gay',
      endereco: 'Av. Juscelino Kubitscheck de Oliveira, 957 - Campo do Galvão, Guaratinguetá - SP',
      produto: ' Estojo infantil barbie / 69S22W',
      checklist:{
        model:'69S22W',
        color: 'rosa',
        Quantidade: '1',
        dataretirada:'10/01/2020',
      },
    },
  ];
  function navigateToDetail(delivery) {
    navigation.navigate('DetailOrder', { delivery });
  }


  return (
    <View style={styles.container} >
      <View style={styles.header}>
        <Image source={logoImg} style={styles.headerLogo} />

        <View >
        <Text style={styles.headerText}>
          Bem vindo:<Text style={styles.headerTextBold}>Pedro Viadão</Text>
        </Text>
        <Text style={styles.headerText}>
        Check-List Feitos:<Text style={styles.headerTextBold}>3</Text>
        </Text>
        </View>

      </View>

     
      <Text style={styles.title}>Lista de encomendas em andamento</Text>

      <FlatList
        data={DATA}
        style={styles.deliveryList}
        keyExtractor={delivery => String(delivery.id)}
        renderItem={({ item: delivery }) => (
          <View style={styles.delivery}>
            <Text style={styles.deliveryProperty}>Endereço da entrega:</Text>
            <Text style={styles.deliveryValue}>{delivery.endereco}</Text>

            <Text style={styles.deliveryProperty}>Produto:</Text>
            <Text style={styles.deliveryValue}>{delivery.produto}</Text>

            <Text style={styles.deliveryProperty}>Entregador:</Text>
            <Text style={styles.deliveryValue}>{delivery.deliveryman}</Text>

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