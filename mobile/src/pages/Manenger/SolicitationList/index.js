import React, { useState, useEffect } from 'react';
import { Feather } from '@expo/vector-icons';
import { useNavigation, useRoute } from '@react-navigation/native';
import { View, TouchableOpacity, Image, Text, FlatList } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';

import styles from './styles';
import logoImg from '../../../assets/logo.png';

import api from '../../../services/api';

export default function SolicitationList() {
  const navigation = useNavigation();
  const [solicitation, setSolicitation] = useState([]);
  
  const [total, setTotal] = useState(0);
  const [page, setPage] = useState(1);
  const [loading, setLoading] = useState(false);

  const [refreshing, setRefreshing] = useState(false);

  const [nome, setNome] = useState();

  async function LoadNome() {
    const nome = await AsyncStorage.getItem('userName');
    setNome(nome);
    return;
  }
  async function loadSolicitations(pageNumber = page, shouldRefresh = false) {
    
    if (loading) {
      return;
    }
    if (total > 0 && solicitation.length === total) {
      return;
    }

    setLoading(true);

    const response = await api.get(`solicitations?page=${pageNumber}`);

    setSolicitation(shouldRefresh ? response.data : [...solicitation, ...response.data]);
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

  function navigateToDetail(solicitation) {
    navigation.navigate('DetailSolicitation', { solicitation });
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
            Total de solicitações: <Text style={styles.headerTextBold}>{total}</Text>
          </Text>

        </View>

      </View>


      <Text style={styles.title}>Confirme as solicitações de retirada das encomendas abaixo. </Text>

      <FlatList
        data={solicitation}
        style={styles.deliveryList}
        keyExtractor={solicitation => String(solicitation.id)}
        showsVerticalScrollIndicator={false}
        onEndReached={() => loadSolicitations()}
        onEndReachedThreshold={0.2}
        onRefresh={refresList}
        refreshing={refreshing}
        renderItem={({ item: solicitation }) => (
          <View style={styles.delivery}>
            <Text style={styles.deliveryProperty}>Entregador {solicitation.name} solicitou entrega de produto: {solicitation.produto}</Text>
           
            <TouchableOpacity
              style={styles.detailsButton}
              onPress={() => navigateToDetail(solicitation)}
            >
              <Text style={styles.detailsButtonText}>Ver mais detalhes</Text>

              <Feather name="arrow-right" size={15} color="#00ff00" />

            </TouchableOpacity>

          </View>
        )}
      />

    </View>
  );
}