import React, { useState, useEffect } from 'react';
import { Feather } from '@expo/vector-icons';
import { useNavigation, useRoute } from '@react-navigation/native';
import { View, TouchableOpacity, Image, Text, FlatList } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';

import styles from './styles';
import logoImg from '../../../assets/logo.png';

import api from '../../../services/api';

export default function DeliveryList() {
  const navigation = useNavigation();

  const [solicitations, setSolicitations] = useState([]);
  const [total, setTotal] = useState(0);
  const [page, setPage] = useState(1);
  const [loading, setLoading] = useState(false);

  const [refreshing, setRefreshing] = useState(false);

  const [nome, setNome] = useState();
  const [userId, setUserId] = useState();

  function navigateToDetail(delivery) {
    navigation.navigate('DetailRequest', { delivery });
  }

  async function LoadNome() {
    const nome = await AsyncStorage.getItem('userName');
    setNome(nome);
    return;
  }
 
  

  async function loadSolicitations(pageNumber = page , shouldRefresh = false) {
    if (loading) {
      return;
    }
    if (total > 0 && solicitations.length === total) {
      return;
    }

    setLoading(true);

    const userId = await AsyncStorage.getItem('UserId');
    setUserId(userId);

    const response = await api.get(`mySolicitationsConfirmed`, {
      params:{
        page: pageNumber,
      },
    
      headers: {
        Authorization: userId,
      }
    });

    setSolicitations(shouldRefresh ? response.data : [...solicitations, ...response.data]);
    setTotal(response.headers['x-total-count']);
    setPage(pageNumber + 1);
    setLoading(false);
  }

  useEffect(() => {
    LoadNome();
    loadSolicitations();
  }, []);

  async function refresList() {
    setRefreshing(true);
    
    
    await loadSolicitations(1, true)
    
  
    setRefreshing(false);
   }
  

  function navigateToDetail(delivery) {
    navigation.navigate('DetailDelivery', { delivery });
  }


  return (
    <View style={styles.container} >
      <View style={styles.header}>
        <Image source={logoImg}  style={styles.headerLogo} />
        <View >
        <Text style={styles.headerText}>
          Bem vindo:<Text style={styles.headerTextBold}> {nome}</Text>
        </Text>
        <Text style={styles.headerText}>
        Total de:<Text style={styles.headerTextBold}> {total} entregas</Text>
        </Text>
        </View>
      </View>

     
      <Text style={styles.description}>Veja abaixo suas encomendas para realizar a entrega. </Text>

      <FlatList
        data={solicitations}
        style={styles.deliveryList}
        keyExtractor={delivery => String(delivery.id)}
        showsVerticalScrollIndicator={false}
        onEndReached={() => loadSolicitations()}
        onEndReachedThreshold={0.2}
        onRefresh={refresList}
        refreshing={refreshing}
        renderItem={({ item: delivery }) => (
          <View style={styles.delivery}>
            <Text style={styles.deliveryProperty}>Endereço da entrega:</Text>
            <Text style={styles.deliveryValue}>{delivery.endereco}</Text>

            <Text style={styles.deliveryProperty}>Produto:</Text>
            <Text style={styles.deliveryValue}>{delivery.produto}</Text>

            

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