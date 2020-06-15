import React from 'react';
import { Feather } from '@expo/vector-icons';
import { useNavigation, useRoute } from '@react-navigation/native';
import { View, TouchableOpacity, Image, Text, ScrollView } from 'react-native';

import styles from './styles';
import logoImg from '../../../assets/logo.png';


export default function DetailOrder() {
  const navigation = useNavigation();
  const route = useRoute();

  const order = route.params.order;

  function navigateBack() {
    navigation.goBack()
  }

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Image source={logoImg} style={styles.headerLogo} />
        <TouchableOpacity onPress={navigateBack}>
          <Feather name="arrow-left" size={28} color="#000" />
        </TouchableOpacity>
      </View>

      <ScrollView
      showsVerticalScrollIndicator={false}
      >
        <View style={styles.incident}>
          <Text style={[styles.incidentProperty, { marginTop: 0 }]}>Endereço de entrega:</Text>
          <Text style={styles.incidentValue}>{order.endereco}</Text>

          <Text style={styles.incidentProperty}>Entregador:</Text>
          <Text style={styles.incidentValue}>{order.name}</Text>

          <Text style={styles.incidentProperty}>Produto:</Text>
          <Text style={styles.incidentValue}>{order.produto}</Text>

          <Text style={styles.incidentProperty}>Data limite para entrega:</Text>
          <Text style={styles.incidentValue}>{order.periodo}</Text>

        </View>

        <View style={styles.contactBox}>
          <Text style={styles.heroTitle}>Check List</Text>

          <Text style={styles.incidentValue}>Check-List não realizado</Text>

        </View>
      </ScrollView>

    </View>
  );
}