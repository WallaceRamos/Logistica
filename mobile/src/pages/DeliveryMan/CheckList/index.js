import React from 'react';
import { Feather } from '@expo/vector-icons';
import { useNavigation, useRoute } from '@react-navigation/native';
import { View, TouchableOpacity, Image, Text, Alert, TextInput } from 'react-native';

import styles from './styles';
import logoImg from '../../../assets/logoHader.png';


export default function CheckList() {
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
      <Image source={logoImg} />
      <TouchableOpacity onPress={navigateBack}>
        <Feather name="arrow-left" size={28} color="#000" />
      </TouchableOpacity>
    </View>
    
    <Text style={styles.title}></Text>
      <Text style={styles.description}>Veja informações da sua entrega pendente.</Text>


      <View style={styles.incident}>
        <Text style={[styles.incidentProperty, { marginTop: 0 }]}>Qual é o modelo?</Text>
        <TextInput
                style={styles.input}
                placeholder="Modelo"
                placeholderTextColor="#999"
                secureTextEntry
                autoCapitalize="none"
                autoCorrect={false}
                
              />
               <Text style={[styles.incidentProperty, { marginTop: 0 }]}>Qual é a cor?</Text>
        <TextInput
                style={styles.input}
                placeholder="Cor"
                placeholderTextColor="#999"
                secureTextEntry
                autoCapitalize="none"
                autoCorrect={false}
                
              />
               <Text style={[styles.incidentProperty, { marginTop: 0 }]}>Quantidade?</Text>
        <TextInput
                style={styles.input}
                placeholder="1x"
                placeholderTextColor="#999"
                secureTextEntry
                autoCapitalize="none"
                autoCorrect={false}
                
              />
               <Text style={[styles.incidentProperty, { marginTop: 0 }]}>Data de retirada?</Text>
        <TextInput
                style={styles.input}
                placeholder="00/00/0000"
                placeholderTextColor="#999"
                secureTextEntry
                autoCapitalize="none"
                autoCorrect={false}
                
              />


            
        <View style={styles.actions}>
          <TouchableOpacity style={styles.action} onPress={() => HandleConfirme()}>
            <Text style={styles.actionText}>Fazer Check-List</Text>
          </TouchableOpacity>
        </View>
      </View>
      </View>
    
             
      

    
   
  );
}