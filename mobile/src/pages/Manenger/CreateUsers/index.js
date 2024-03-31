import React, { useState, useEffect } from 'react';
import { Feather } from '@expo/vector-icons';
import { useNavigation, useRoute } from '@react-navigation/native';
import { View, TouchableOpacity, Image, Text, Alert, TextInput, ScrollView, KeyboardAvoidingView,} from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import SelectPicker from 'react-native-form-select-picker'; // Import the package
import { mask } from 'remask'



import styles from './styles';
import logoImg from '../../../assets/logo.png';

import api from '../../../services/api';

export default function CreateUsers() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [whatsapp, setWhatsapp] = useState('');
  const [nivel, setNivel] = useState('');
  const navigation = useNavigation();
  const options = [
    {
        label: 'Entregador',
        nivel: '01',
        idd: 1
    },
    {
        label: 'Gestor',
        nivel: '02',
        idd: 2
    }
  ];
  const [nome, setNome] = useState('');
 
  const pattern = '(99)99999-9999'
  
  

  async function LoadNome() {
    const nome = await AsyncStorage.getItem('userName');
    setNome(nome);
    return;
  }
  
   useEffect(() => {
    LoadNome();
  }, []);
  
   async function handleCreateUser() {

    try {
      const response = await api.post('users', {
        name,
        email,
        whatsapp,
        funcao: nivel
    
      });
    
      Alert.alert(`Usuario criado com sucesso login: ${response.data.id}`);
      navigation.navigate('UsersList');
    } catch (err) {
      Alert.alert('Erro na criação, tente novamente');
    }

  }

  return (
    <View style={styles.container}>
     <View style={styles.header}>
        <Image source={logoImg} style={styles.headerLogo} />
          <Text style={styles.headerText}>
            Bem vindo:<Text style={styles.headerTextBold}> {nome}</Text>
          </Text>
      </View>

      <Text style={styles.title}></Text>
      <Text style={styles.description}>Preencha o o formulario para criar um novo pedido de entrega.</Text>
      <KeyboardAvoidingView>
      <ScrollView>

        <View style={styles.incident}>
          <Text style={styles.incidentProperty}>Qual é o Nome?</Text>
          <TextInput
            style={styles.input}
            placeholder="Nome"
            placeholderTextColor="#999"
            autoCapitalize="words"
            autoCorrect={false}
            value={name}
            onChangeText={setName}

          />
          <Text style={styles.incidentProperty}>Qual é o Email?</Text>
          <TextInput
            style={styles.input}
            placeholder="logistica@mail.com"
            placeholderTextColor="#999"
            autoCapitalize="none"
            keyboardType='email-address'
            autoCorrect={false}
            value={email}
            onChangeText={setEmail}

          />
         
          <Text style={styles.incidentProperty}>Qual é o Whatsapp?</Text>
         
           <TextInput
            style={styles.input}
            placeholder="ex: (11)11111-1111"
            placeholderTextColor="#999"
            autoCapitalize="none"
            keyboardType='numeric'
            maxLength={14}
            autoCorrect={false}
            value={mask(whatsapp, pattern)}
            onChangeText={setWhatsapp}
          />

          <Text style={styles.incidentProperty}>Qual é o nivel de acesso?</Text>
         
          <SelectPicker
        style={styles.picker}
         placeholder="Selecione uma Opção"
         onValueChange={(value) => {
				// Do anything you want with the value. 
				// For example, save in state.
       
        setNivel(value);
			}}
			selected={nivel}
			>
			
			{Object.values(options).map((val, index) => (
				<SelectPicker.Item label={val.label} value={val.nivel} key={val.idd} />
			))}

		</SelectPicker>

          <View style={styles.actions}>
            <TouchableOpacity style={styles.action} onPress={() => handleCreateUser()}>
              <Text style={styles.actionText}>Criar</Text>
            </TouchableOpacity>
          </View>
        </View>
      </ScrollView>
      </KeyboardAvoidingView>
    </View>






  );
}