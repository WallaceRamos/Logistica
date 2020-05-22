import { StyleSheet } from 'react-native';
import Constants from 'expo-constants';

export default StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 24,
    paddingTop: Constants.statusBarHeight + 20,
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  description: {
    fontSize: 16,
    lineHeight: 24,
    color: '#737380' 
  },
  incident: {
    padding: 24,
    borderRadius: 8,
    backgroundColor: '#fff',
    marginBottom: 16,
    marginTop: 18,
  },
  incidentProperty: {
    fontSize: 14,
    color:'#41414d',
    fontWeight: 'bold',
    marginTop: 24,
    marginBottom: 10,
  },
 
  input: {
    borderWidth: 1,
    borderColor: '#34C064',
    paddingHorizontal: 20,
    fontSize: 16,
    color: '#444',
    height: 44,
    borderRadius: 8,
    width: 250,
    marginBottom: 10,
  },
  actions: {
    marginTop: 16,
    alignItems:'center',
    justifyContent: 'center',
  },
  action: {
    backgroundColor: '#293B83',
    borderRadius: 8,
    height: 50,
    width: '48%',
    justifyContent: 'center',
    alignItems: 'center',
  },
  actionText:{
    color: '#FFF',
    fontSize: 15,
    fontWeight: 'bold'
  },
});