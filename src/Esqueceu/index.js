import React from 'react';
import { View, Text, TextInput, StyleSheet} from 'react-native';

export default function Esqueceu() {
 return (
   <View>

 
<TextInput
        placeholder='Email'
        
        style={styles.input}> 
        </TextInput>

   </View>

  );
}


const styles = StyleSheet.create({
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

