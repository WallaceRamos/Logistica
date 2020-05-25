import { StyleSheet } from 'react-native';
import Constants from 'expo-constants';

export default StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 24,
    paddingTop: Constants.statusBarHeight +20, 
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 26,
  },
  headerLogo:{
    maxWidth: 65,
    height: 65,
  },
  headerText: {
    fontSize: 15,
    color: '#737380',
  },
  headerTextBold: {
    color: '#000',
    fontWeight: 'bold'
  },

 
  notificationList: {
    marginTop: 48,
  },
  notification: {
    padding: 24,
    borderRadius: 8,
    backgroundColor: '#fff',
    marginBottom: 16,
   
  },
  notificationProperty: {
    fontSize: 20,
    color:'#41414d',
    fontWeight: 'bold',
  },
  notificationValue: {
    marginTop: 8,
    fontSize: 15,
    marginBottom: 24,
    color: '#737380',
  },
  detailsButton: {
    
    alignItems: 'flex-end'
  },
  detailsButtonText: {
    backgroundColor: '#293B83',
    padding: 10,
    borderRadius: 8,
    color: '#fff',
    fontSize: 15,
    fontWeight: 'bold'
  }
});