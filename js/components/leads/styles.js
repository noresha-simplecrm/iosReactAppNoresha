
const React = require('react-native');
import { PixelRatio } from 'react-native';

const { StyleSheet } = React;
export default {
  container: {
    backgroundColor: '#FBFAFA',
  },
  avatarContainer: {
    borderColor: '#9B9B9B',
    borderWidth: 1 / PixelRatio.get(),
    justifyContent: 'center',
    alignItems: 'center'
  },
  avatar: {
    borderRadius: 75,
    width: 150,
    height: 150
  },
  callsstye:{
    backgroundColor: '#EC5192',
    width:15,
    height: 15,

    },
  meetings:{
    backgroundColor: '#ff0000',
    width:15,
    height: 15,
   
     },
 tasks:{
    backgroundColor: '#4AA091',
    width:15,
    height: 15,
   
     },
      header1:{
    height:1,
    marginTop:0,
  }
};
