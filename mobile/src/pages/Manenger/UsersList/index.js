import React, {useState, useEffect} from 'react';
import { Feather } from '@expo/vector-icons';
import { useNavigation, useRoute } from '@react-navigation/native';
import { View, TouchableOpacity, Image, Text, FlatList, AsyncStorage } from 'react-native';

import styles from './styles';
import logoImg from '../../../assets/logo.png';

import api from '../../../services/api';

export default function UsersList() {
  const navigation = useNavigation();

  const [users, setUsers] = useState([]);

   const [total, setTotal] = useState(0);
  const [page, setPage] = useState(1);
  const [loading, setLoading] = useState(false);

  const [refreshing, setRefreshing] = useState(false);

  const [nome, setNome] = useState();


  async function LoadNome(){
    const nome = await AsyncStorage.getItem('userName');
    setNome(nome);
    return; 
  }

  async function loadUsers(pageNumber = page , shouldRefresh = false) {
    
    if(loading) {
      return;
    }
    if(total > 0 && users.length === total ){
      return;
    }
   
    setLoading(true);

    const response = await api.get(`usersList?page=${pageNumber}`);
   
    setUsers(shouldRefresh ? response.data : [...users, ...response.data]);
    setTotal(response.headers['x-total-count']);
    setPage(pageNumber + 1);
    setLoading(false);
  }

  useEffect(() => {
    LoadNome();
    loadUsers();
  }, []);

  async function refresList() {
    setRefreshing(true);
    
    
    await loadUsers(1, true)
    
  
    setRefreshing(false);
   }

  return (
    <View style={styles.container} >
      <View style={styles.header}>
        <Image source={logoImg} style={styles.headerLogo}/>
        <View >
        <Text style={styles.headerText}>
          Bem vindo:<Text style={styles.headerTextBold}> {nome}</Text>
        </Text>
        <Text style={styles.headerText}>
          Total de entregadores: <Text style={styles.headerTextBold}>{total}</Text>
        </Text>
        </View>
      </View>

     
      <Text style={styles.title}>Lista de entregadores cadastrados</Text>

      <FlatList
      data={users}
      style={styles.userList}
      keyExtractor={user => String(user.id)}
      showsVerticalScrollIndicator={false}
      onEndReached={() => loadUsers()}
      onEndReachedThreshold={0.2}
        onRefresh={refresList}
        refreshing={refreshing}
        renderItem={({ item: user }) => (
          <View style={styles.user}>
            <Text style={styles.userProperty}>Nome do entregador:</Text>
            <Text style={styles.userValue}>{user.name}</Text>

            <Text style={styles.userProperty}>Contato:</Text>
            <Text style={styles.userValue}>{user.email}</Text>
            <Text style={styles.userValue}>{user.whatsapp}</Text>

          
          </View>
        )}
      />

    </View>
  );
}