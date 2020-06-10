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
   fontSize: 30,
   marginBottom: 16,
   marginTop: 48,
   color: '#13131a',
   fontWeight: 'bold'
 },
 description: {
   fontSize: 16,
   lineHeight: 24,
   marginTop: 30,
   color: '#737380' 
 },


 deliveryList: {
  marginTop: 32,
},
delivery: {
  padding: 24,
  borderRadius: 8,
  backgroundColor: '#fff',
  marginBottom: 16,
 
},
deliveryProperty: {
  fontSize: 14,
  color:'#41414d',
  fontWeight: 'bold',
},
deliveryValue: {
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