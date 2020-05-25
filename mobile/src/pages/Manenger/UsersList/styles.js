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


 userList: {
  marginTop: 32,
},
user: {
  padding: 24,
  borderRadius: 8,
  backgroundColor: '#fff',
  marginBottom: 16,
 
},
userProperty: {
  fontSize: 14,
  color:'#41414d',
  fontWeight: 'bold',
},
userValue: {
  marginTop: 8,
  fontSize: 15,
  marginBottom: 24,
  color: '#737380',
},


});