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
  headerLogo:{
    maxWidth: 65,
    height: 65,
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
    marginTop: 24
  },
  incidentValue: {
    marginTop: 8,
    fontSize: 15,
    
    color: '#737380',
  },
  contactBox: {
    padding: 24,
    borderRadius: 8,
    backgroundColor: '#fff',
    marginBottom: 16,
    
  },
  heroTitle: {
    fontWeight: 'bold',
    fontSize: 20,
    color: '#13131a',
    lineHeight: 30,
  },
 
  actions: {
    marginTop: 16,
    alignItems:'flex-end',
    justifyContent: 'flex-end',
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