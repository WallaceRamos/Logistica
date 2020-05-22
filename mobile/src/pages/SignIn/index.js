import React, { useState, useEffect } from 'react';
import { KeyboardAvoidingView, AsyncStorage, TouchableOpacity, TextInput, Text, Image, View, ScrollView } from 'react-native';
import { useNavigation } from '@react-navigation/native';


import styles from './styles';

import logo from '../../assets/logo.png';

export default function Login() {
    const[password, setPassword] = useState('');
  const navigation = useNavigation();
    
 
      return (
        <KeyboardAvoidingView behavior="padding" style={styles.container}>
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
                value={password}
                onChangeText={setPassword}
              />
              <View  style={styles.ConteinerButton}>
              <TouchableOpacity onPress={() => navigation.push('TabsDeliveryMan') } style={styles.buttonSignIn}>
                <Text style={styles.buttonTextSignIn}>ENTRAR USUARIO</Text>
              </TouchableOpacity>
              <TouchableOpacity onPress={() => navigation.push('TabsManager') } style={styles.buttonSignIn}>
                <Text style={styles.buttonTextSignIn}>ENTRAR GESTOR</Text>
              </TouchableOpacity>
              </View>
            </View>
          </ScrollView>
        </KeyboardAvoidingView>
      );
    }
