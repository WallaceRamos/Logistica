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
  fontSize: 17,
  color:'#41414d',
  fontWeight: 'bold',
  marginBottom: 15,
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