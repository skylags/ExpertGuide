import React from 'react';
import { StyleSheet, Text, View, TextInput, TouchableOpacity,ImageBackground,Image } from 'react-native';

export default class App extends React.Component {
  
  render(){
    return (
      <ImageBackground source={require('./bgg.PNG')} style={styles.container}>
        <Text style={styles.logo}> EXPERT GUIDE </Text> 
        <Text style={styles.heading}> -CHOOSE YOUR CAREER</Text>
        <Image source={require('./student.png')} style={{width: 100, height: 100}} />
         <TouchableOpacity style={styles.loginBtn}>
          <Text style={styles.loginText}>Student</Text>
        </TouchableOpacity>
        <Image source={require('./college.png')} style={{width: 100, height: 100}} />
        <TouchableOpacity style={styles.loginBtn}>
          <Text style={styles.loginText}>College</Text>
        </TouchableOpacity>
      </ImageBackground>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    
    
  },
  logo:{
    fontWeight:"bold",
    fontSize:40,
    color:"#000302",
    textShadowColor: '#000', 
    textShadowOffset: { width: 0.5, height: 0.5 }, 
    textShadowRadius: 3,
    marginBottom:20
  },
  heading:{
    fontWeight:"bold",
    fontSize:20,
    color:"black",
    marginTop:0,
    justifyContent:'center',
    textAlign:'center',    textShadowColor: '#000', 
    textShadowOffset: { width: 0.5, height: 0.5 }, 
    textShadowRadius: 3,
    marginBottom:20
  },
  loginBtn:{
    width:"80%",
    backgroundColor:"#3cb371",
    borderRadius:25,
    height:50,
    alignItems:"center",
    justifyContent:"center",
    textShadowColor: '#000', 
    textShadowOffset: { width: 0.5, height: 0.5 }, 
    textShadowRadius: 2,
    marginTop:20,
    marginBottom:10,
  },
  
});