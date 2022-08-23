
import React from 'react';
import { View,Text, Button, ImageBackground, StyleSheet, TouchableOpacity,TextInput} from 'react-native';
export default function Home({navigation}) {
 return (
  
   <View style={styles.container}>
    <ImageBackground source={require('../Home/rox.jpg')}
    styles={styles.beck}>
 
 <TextInput
        placeholder='Email'
        
        style={styles.input}> 
        </TextInput>


 <TextInput
        placeholder='senha'
        style={styles.input}>    
        </TextInput>




<TouchableOpacity 
    style={styles.buton}
    title='Login'
    onPress={()=> navigation.navigate('Login')}><Text>Login</Text></TouchableOpacity>

<TouchableOpacity
 style={styles.buton1}
    title='Esqueceu'
    onPress={()=> navigation.navigate('Esqueceu')}><Text styles={styles.testo}>Esqueci a senha</Text></TouchableOpacity>
</ImageBackground>
   </View>
 
  );
}

const styles = StyleSheet.create({
  container:{flex: 1,
   
    },
    beck:{
      flex: 1,
      resizeMode: "cover",
      justifyContent: "center",
      alignItems: "center",
    
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

    buton:{
      
      backgroundColor:'#FF1493',
      width:200,
      marginBottom:30,
  
      fontSize:17,
      borderRadius:7,
      padding:20,
      alignItems:"center",
      fontWeight:'bold',
    },
    
    buton1:{
      backgroundColor:'#FF1493',
      color:"#fff",
      
      width:200,
      marginBottom:30,
  
      fontSize:17,
      borderRadius:7,
      padding:20,
      alignItems:"center",
      fontWeight:'bold',
    },

    testo:{
      color:"#fff",

    }


 
})