import React, { useState, useEffect } from 'react';
import { Feather } from '@expo/vector-icons';
import { useNavigation, useRoute } from '@react-navigation/native';
import { View, TouchableOpacity, Image, Text, FlatList } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';

import styles from './styles';
import logoImg from '../../../assets/logo.png';

import api from '../../../services/api';

export default function RequestList() {
  const navigation = useNavigation();

  const [requests, setRequests] = useState([]);
  const [total, setTotal] = useState(0);
  const [page, setPage] = useState(1);
  const [loading, setLoading] = useState(false);

  const [refreshing, setRefreshing] = useState(false);

  const [nome, setNome] = useState();

  function navigateToDetail(delivery) {
    navigation.navigate('DetailRequest', { delivery });
  }

  async function LoadNome() {
    const nome = await AsyncStorage.getItem('userName');
    setNome(nome);
    return;
  }

  async function loadRequests(pageNumber = page , shouldRefresh = false) {
    if (loading) {
      return;
    }
    if (total > 0 && requests.length === total) {
      return;
    }

    setLoading(true);

    const response = await api.get(`requests?page=${pageNumber}`);

    setRequests(shouldRefresh ? response.data : [...requests, ...response.data]);
    setTotal(response.headers['x-total-count']);
    setPage(pageNumber + 1);
    setLoading(false);
  }

  useEffect(() => {
    LoadNome();
    loadRequests();
  }, []);

  async function refresList() {
    setRefreshing(true);
    
    
    await loadRequests(1, true)
    
  
    setRefreshing(false);
   }
  
  



  return (
    <View style={styles.container} >
      <View style={styles.header}>
        <Image source={logoImg} style={styles.headerLogo} />
        <View >

          <Text style={styles.headerText}>
            Bem vindo:<Text style={styles.headerTextBold}> {nome}</Text>
          </Text>

          <Text style={styles.headerText}>
            Total de: <Text style={styles.headerTextBold}>{total} encomendas</Text>
          </Text>

        </View>

      
      </View>

      <Text style={styles.title}>Bem-vindo!</Text>
      <Text style={styles.description}>Escolha uma das encomendas abaixo para entregar. </Text>

      <FlatList
        data={requests}
        style={styles.deliveryList}
        keyExtractor={delivery => String(delivery.id)}
        showsVerticalScrollIndicator={false}
        onEndReached={() => loadRequests()}
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

