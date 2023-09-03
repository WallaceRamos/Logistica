import React, { useState, useEffect } from 'react';
import { Alert, KeyboardAvoidingView, TouchableOpacity, TextInput, Text, Image, View, ScrollView } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { useNavigation } from '@react-navigation/native';

import api from '../../services/api';

import styles from './styles';

import logo from '../../assets/logo.png';

export default function Login() {
  const [matricula, setMatricula] = useState('');

  const navigation = useNavigation();

  async function handleSubmit() {
    try {
      const response = await api.post('session', { matricula });
      const { funcao, name, id} = response.data;  
       
      AsyncStorage.setItem('userName', name);
      AsyncStorage.setItem('UserId', id);
      AsyncStorage.setItem('UserFuncao', funcao);
      
      if (funcao == '01') {
        navigation.navigate('TabsDeliveryMan');
      } else if (funcao == '02') {
          navigation.navigate('TabsManager',); 
        }
    } catch (err) {
      Alert.alert('Usuario não encontrado');
    }



  }
  return (
    <KeyboardAvoidingView style={styles.container}>
      <ScrollView>
        <View style={styles.logoContainer} >
          <Image source={logo} />
        </View>
        <View style={styles.form} >

          <Text style={styles.label}>Qual é o seu ID de acesso?</Text>
          <TextInput
            style={styles.input}
            placeholder="Inserir ID"
            placeholderTextColor="#999"
            secureTextEntry
            autoCapitalize="none"
            autoCorrect={false}
            value={matricula}
            onChangeText={setMatricula}
          />
          <View style={styles.ConteinerButton}>
            <TouchableOpacity onPress={() => handleSubmit()} style={styles.buttonSignIn}>
              <Text style={styles.buttonTextSignIn}>ENTRAR</Text>
            </TouchableOpacity>

          </View>
        </View>
      </ScrollView>
    </KeyboardAvoidingView>
  );
}
