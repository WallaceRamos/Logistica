import { StyleSheet } from 'react-native';
import Constants from 'expo-constants';

export default StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  logoContainer: {
    marginTop: 140,
    justifyContent: 'center',
    alignItems: 'center',
  },
  form: {
    alignSelf: 'stretch',
    paddingHorizontal: 30,
    marginBottom: 20
  },
  label: {
    fontWeight: 'bold',
    color: '#444',
    marginTop: 20,
    marginBottom: 6,
  },
  input: {
    borderWidth: 1,
    borderColor: '#34C064',
    paddingHorizontal: 20,
    fontSize: 16,
    color: '#444',
    height: 44,
    borderRadius: 8,
    width: 300,
  },
  ConteinerButton:{
    justifyContent: 'center',
    alignItems: 'center',
  },
  buttonSignIn: {
    height: 44,
    backgroundColor: '#293B83',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 8,
    marginTop: 20,
    width: 150,
  },
  buttonTextSignIn: {
    color: '#fff',
    fontWeight: 'bold',
    fontSize: 16,
  },
  buttonSignUp: {
    marginTop: 20,
    backgroundColor: '#1193C8',
    height: 44,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 20,
    width: 300,
  },
  buttonTexSignUp: {
    color: '#fff',
    fontWeight: 'bold',
    fontSize: 16,
  },

});