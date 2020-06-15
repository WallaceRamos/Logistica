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
 
 
 title: {
   fontSize: 16,
   marginBottom: 16,
   marginTop: 48,
   lineHeight: 24,
   color: '#737380' 
 },
 description:{
  fontWeight: 'bold',

  fontSize: 18,
  marginTop: 18,
  color: '#000' 
},

 orderList: {
  marginTop: 32,
  marginBottom: 10
  
},
order: {
  padding: 24,
  borderRadius: 8,
  backgroundColor: '#fff',
  marginBottom: 10,
  marginRight:16,
  width: 300
 
},
orderProperty: {
  fontSize: 14,
  color:'#41414d',
  fontWeight: 'bold',
},
orderValue: {
  marginTop: 8,
  fontSize: 15,
  marginBottom: 24,
  color: '#737380',
},
detailsButton: {
  flexDirection: 'row',
  justifyContent: 'space-between',
  alignItems: 'center'
},
detailsButtonText: {
  color: '#29C759',
  fontSize: 15,
  fontWeight: 'bold'
}

});