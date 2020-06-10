import React, { useState } from 'react';
import { Feather } from '@expo/vector-icons';
import { useNavigation, useRoute } from '@react-navigation/native';
import { View, TouchableOpacity, Image, Text, Alert, TextInput, ScrollView } from 'react-native';

import styles from './styles';
import logoImg from '../../../assets/logo.png';


export default function CheckList() {
  
  const route = useRoute();
  const delivery = route.params.delivery;
  const[model, setModel] = useState(delivery.checklist.model);
  const[color, setColor] = useState(delivery.checklist.color);
  const[amount, setAmount] = useState(delivery.checklist.amount);
  const[period, setPeriod] = useState(delivery.checklist.period);



  const navigation = useNavigation();


  function navigateBack() {
    navigation.goBack()
  }
  function HandleConfirme(){
    navigation.navigate('Delivery');
    Alert.alert('check-List realizada com sucesso');
  }

  return (
    <View style={styles.container}>
    <View style={styles.header}>
      <Image source={logoImg} style={styles.headerLogo}/>
      <TouchableOpacity onPress={navigateBack}>
        <Feather name="arrow-left" size={28} color="#000" />
      </TouchableOpacity>
    </View>
    
    <Text style={styles.title}></Text>
      <Text style={styles.description}>Preencha o check-list da sua entrega.</Text>

<ScrollView>

      <View style={styles.incident}>
        <Text style={styles.incidentProperty}>Qual é o modelo?</Text>
        <TextInput
                style={styles.input}
                placeholder="Modelo"
                placeholderTextColor="#999"
                autoCapitalize="characters"
                dataDetectorTypes="none"
                autoCorrect={false}
                value={model}
                onChangeText={setModel}
                
              />
               <Text style={styles.incidentProperty}>Qual é a cor?</Text>
        <TextInput
                style={styles.input}
                placeholder="Cor"
                placeholderTextColor="#999"
                dataDetectorTypes="none"
                autoCapitalize="words"
                value={color}
                onChangeText={setColor}
                
              />
               <Text style={styles.incidentProperty}>Quantidade?</Text>
        <TextInput
                style={styles.input}
                placeholder="1x"
                placeholderTextColor="#999"
                keyboardType="number-pad"
                autoCapitalize="none"
                autoCorrect={false}
                value={amount}
                onChangeText={setAmount}

              />
               <Text style={styles.incidentProperty}>Data de entrega?</Text>
        <TextInput
                style={styles.input}
                placeholder="00/00/0000"
                placeholderTextColor="#999"
                keyboardType="phone-pad"
                autoCapitalize="none"
                autoCorrect={false}
                value={period}
                onChange={setPeriod}
              />


            
        <View style={styles.actions}>
          <TouchableOpacity style={styles.action} onPress={() => HandleConfirme()}>
            <Text style={styles.actionText}>Fazer Check-List</Text>
          </TouchableOpacity>
        </View>
      </View>
      </ScrollView>
      </View>
    
             
      

    
   
  );
}