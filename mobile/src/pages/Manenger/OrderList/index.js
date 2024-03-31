import React, { useEffect, useState } from 'react';
import { Feather } from '@expo/vector-icons';
import { useNavigation, useRoute } from '@react-navigation/native';
import { View, TouchableOpacity, Image, Text, RefreshControl, FlatList } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';

import styles from './styles';
import logoImg from '../../../assets/logo.png';

import api from '../../../services/api';
import { ScrollView } from 'react-native-gesture-handler';

export default function OrderList() {
  const navigation = useNavigation();

  const [solicitationconfirmed, setSolicitationConfirmed] = useState([]);
  const [totalSolicitation, setTotalSolicitation] = useState(0);
  const [pageSolicitation, setPageSolicitation] = useState(1);
  const [loadingSolicitation, setLoadingSolicitation] = useState(false);


  const [delivery, setDelivery] = useState([]);
  const [totalDelivery, setTotalDelivery] = useState(0);
  const [pageDelivery, setPageDelivery] = useState(1);
  const [loadingDelivery, setLoadingDelivery] = useState(false);

  const [refreshing, setRefreshing] = useState(false)

  const [nome, setNome] = useState();

  async function LoadNome() {
    const nome = await AsyncStorage.getItem('userName');
    setNome(nome);
    return;
  }
  async function loadSolicitations(pageSolicitationNumber = pageSolicitation, shouldRefreshSolicitation = false) {
    setLoadingSolicitation(true);
    if (loadingSolicitation) {
      return;
    }
    if (totalSolicitation > 0 && solicitationconfirmed.length === totalSolicitation) {
      return;
    }

    

    const response = await api.get(`solicitationsConfirmed?page=${pageSolicitationNumber}`);

    setSolicitationConfirmed(shouldRefreshSolicitation ? response.data : [...solicitationconfirmed, ...response.data]);
    setTotalSolicitation(response.headers['x-total-count']);
    setPageSolicitation(pageSolicitationNumber + 1);
    setLoadingSolicitation(false);
  }

  async function loadDelivery(pageDeliveryNumber = pageDelivery, shouldRefreshDelivery = false) {
    if (loadingDelivery) {
      return;
    }
    if (totalDelivery > 0 && delivery.length === totalDelivery) {
      return;
    }

    setLoadingDelivery(true);

    const response = await api.get(`delivery?page=${pageDeliveryNumber}`);

    setDelivery(shouldRefreshDelivery ? response.data : [...delivery, ...response.data]);
    setTotalDelivery(response.headers['x-total-count']);
    setPageDelivery(pageDeliveryNumber + 1);
    setLoadingDelivery(false);
  }

  useEffect(() => {
    LoadNome();
    loadSolicitations();
    loadDelivery();
  }, []);

  async function refresList() {
    setRefreshing(true);


    await loadSolicitations(1, true);
  


    setRefreshing(false);
  }




  function navigateToDetail(order) {
    navigation.navigate('DetailOrder', { order });
  }
  function navigateToDetailFinalized(order) {
    navigation.navigate('DetailOrderFinalized', { order });
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
            Entregas em Andamento:<Text style={styles.headerTextBold}> {totalSolicitation} </Text>

          </Text>
          <Text style={styles.headerText}>
            Entregas Finalizadas:<Text style={styles.headerTextBold}> {totalDelivery} </Text>

          </Text>
        </View>

      </View>
      <Text style={styles.title}>Lista de entregas em andamento e finalizadas</Text>


      <ScrollView
        refreshControl={<RefreshControl refreshing={refreshing} onRefresh={refresList} />}
        showsVerticalScrollIndicator={false}
      >

        <Text style={styles.description}>Lista de entregas em Andamento</Text>
        <FlatList
          data={solicitationconfirmed}
          style={styles.orderList}
          keyExtractor={order => String(order.id)}
          onEndReached={() => loadSolicitations()}
          onEndReachedThreshold={0.1}
          horizontal
          showsVerticalScrollIndicator={false}
          showsHorizontalScrollIndicator={false}
          renderItem={({ item: order }) => (
            <View style={styles.order}>
              <Text style={styles.orderProperty}>Endereço da entrega:</Text>
              <Text style={styles.orderValue}>{order.endereco}</Text>

              <Text style={styles.orderProperty}>Produto:</Text>
              <Text style={styles.orderValue}>{order.produto}</Text>

              <Text style={styles.orderProperty}>Entregador:</Text>
              <Text style={styles.orderValue}>{order.name}</Text>

              <TouchableOpacity
                style={styles.detailsButton}
                onPress={() => navigateToDetail(order)}
              >
                <Text style={styles.detailsButtonText}>Ver mais detalhes</Text>
                <Feather name="arrow-right" size={20} color="#29C759" />
              </TouchableOpacity>

            </View>
          )}
        />
        <Text style={styles.description}>Lista de entregas Finalizadas</Text>

        <FlatList
          data={delivery}
          style={styles.orderList}
          horizontal={true}
          showsVerticalScrollIndicator={false}
  showsHorizontalScrollIndicator={false}
          keyExtractor={order => String(order.id)}
          onEndReached={() => loadDelivery()}
          onEndReachedThreshold={0.2}
          renderItem={({ item: order }) => (
            <View style={styles.order}>
              <Text style={styles.orderProperty}>Endereço da entrega:</Text>
              <Text style={styles.orderValue}>{order.endereco}</Text>

              <Text style={styles.orderProperty}>Produto:</Text>
              <Text style={styles.orderValue}>{order.produto}</Text>

              <Text style={styles.orderProperty}>Entregador:</Text>
              <Text style={styles.orderValue}>{order.name}</Text>

              <TouchableOpacity
                style={styles.detailsButton}
                onPress={() => navigateToDetailFinalized(order)}
              >
                <Text style={styles.detailsButtonText}>Ver mais detalhes</Text>
                <Feather name="arrow-right" size={20} color="#29C759" />
              </TouchableOpacity>

            </View>
          )}
        />
      </ScrollView>
    </View>
  );
}