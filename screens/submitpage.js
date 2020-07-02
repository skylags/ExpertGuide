import * as React from 'react';
import { Text, View, StyleSheet, TextInput, TouchableOpacity } from 'react-native';
import Constants from 'expo-constants';

export default class App extends React.Component {
  state={
    seats:"",
    feeStructure:"",
    lastdatetoregister:"",
    registrationLink:""
  }
  render(){
    return(
      <View style={styles.container}>
       <Text style={styles.logo}>EXPERT GUIDE</Text>
       <Text style={styles.logos}>-CHOOSE YOUR CAREER</Text>
      <View style={styles.inputView}>
       <TextInput
         style={styles.inputText}
         placeholder="Seats vacant"
         placeholderTextColor="#3cb371"
         onChangeText={text => this.setState({ seats:text})}/>
      </View>
      <View style={styles.inputView}>
       <TextInput
         style={styles.inputText}
         placeholder="Fee structure"
         placeholderTextColor="#3cb371"
         onChangeText={text => this.setState({feeStructure:text})}/>
      </View>
      <View style={styles.inputView}>
       <TextInput
         style={styles.inputText}
         placeholder="Last date to register"
         placeholderTextColor="#3cb371"
         onChangeText={text => this.setState({lastdatetoregister:text})}/>
      </View>
      <View style={styles.inputView}>
       <TextInput
         style={styles.inputText}
         placeholder="Registrtaion Link"
         placeholderTextColor="#3cb371"
         onChangeText={text => this.setState({registrationlink:text})}/>
      </View>
      <TouchableOpacity style={styles.SubmitBtn}>
        <Text style={styles.SubmitText}>SUBMIT</Text>
      </TouchableOpacity>
      </View>
       

    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    backgroundColor: '#f4c13c',
    alignItems: 'center',
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
  inputView: {
    width: '80%',
    backgroundColor:'#ecee99',
    borderRadius: 25,
    height: 50,
    marginBottom: 20,
    marginTop: 10,
    justiftyContent: 'center',
    padding: 20
  },
  inputText:{
    height:50,
    color: 'black',
    justifyContent: 'center',
  },
  SubmitBtn: {
    width: "80%",
    backgroundColor: '#3cb371',
    borderRadius: 25,
    height: 40,
    alignItems: 'center',
    juystifyContent: 'center',
    marginTop: 20,
    marginBottom: 20,
    padding:10,
  },
});