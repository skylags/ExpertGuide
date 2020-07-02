import * as React from 'react';
import { StyleSheet, Text, View, TextInput, TouchableOpacity,ImageBackground,Image } from 'react-native';
import Constants from 'expo-constants';

export default class App extends React.Component {
  state={
    email:"",
    password:""
  }
  
  render(){
    return (
      <ImageBackground source={require('./aba.PNG')} style={styles.container}>
      <Text style={styles.logo}> EXPERT GUIDE </Text>
      <Text style={styles.logos}> -CHOOSE YOUR CAREER </Text>
      <Text style={styles.logos}> FOR STUDENTS </Text>



          <View style={styles.inputView} >
            <TextInput  
              style={styles.inputText}
              placeholder="                     Email " 
              placeholderTextColor="#36aac9"
              onChangeText={text => this.setState({email:text})}/>
          </View>
          <View style={styles.inputView} >
            <TextInput
            secureTextEntry  
              style={styles.inputText}
              placeholder="                    Password" 
              placeholderTextColor="#36aac9"
              onChangeText={text => this.setState({password:text})}/>
          </View>
        <TouchableOpacity>
          <Text style={styles.forgot}>Forgot Password?</Text>
        </TouchableOpacity>
        
        <TouchableOpacity style={styles.loginBtn}>
          <Text style={styles.loginText}>LOGIN</Text>
        </TouchableOpacity>
        <TouchableOpacity>
          <Text style={styles.loginText}>Signup</Text>
        </TouchableOpacity>
      </ImageBackground>
      
      
      
    );
    
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f4c13c',
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
  logos:{
    fontWeight:"bold",
    fontSize:20,
    color:"#000302",
    marginBottom:40,
    fontStyle:"Unica One",
    textShadowColor: '#000', 
    textShadowOffset: { width: 0.5, height: 0.5 }, 
    textShadowRadius: 1,
    },
  inputView:{
    width:"80%",
    backgroundColor:"#ecee99",
    borderRadius:25,
    height:50,
    marginBottom:20,
    justifyContent:"center",
    textShadowColor: '#000', 
    textShadowOffset: { width: 0.5, height: 0.5 }, 
    textShadowRadius: 1,
    padding:20,
  },

  inputText:{
    height:50,
    color:"black",
    justifyContent:"center",
    
    
  },
  forgot:{
    color:"white",
    fontSize:11
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
    marginTop:40,
    marginBottom:10,
  },
});