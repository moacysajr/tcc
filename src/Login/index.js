import React from 'react';

import { StyleSheet, Text, View, Image } from 'react-native';


export default function Login() {
    return (
<View>
<Text>kkk</Text>
<Image source={require('../Login/testo.jpg')}
styles={styles.p}></Image>
</View>
    );
  }
  
  const styles = StyleSheet.create({
    p:{
      felx:1,

    },
    input:{
      backgroundColor:'#fff',
      width:300,
      marginBottom:10,
      color:'#000',
      fontSize:17,
      borderRadius:7,
      padding:10,
      marginTop:0,
      alignItems:'center',
    },
 
    }
  )