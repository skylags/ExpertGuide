import * as React from 'react';
import { Text, View, StyleSheet,TextInput,TouchableOpacity } from 'react-native';
import Constants from 'expo-constants';

export default function App() {
  return (
    <View style={styles.container}>
      <Text style={styles.logo}>
        EXPERT GUIDE
      </Text>
      <Text style={styles.logos}>
        -choose your Career
      </Text>
      <Text style={styles.logo1}>
        Course Name:
      </Text>
      <TextInput
 style={styles.inputText}
 placeholder="Enter Course Name"
 placeholderTextColor="#3cb371"/>
      <Text style={styles.logo2}>
        Exam Name:
      </Text>
       <TextInput
 style={styles.inputText}
 placeholder="Enter Exam Name"
 placeholderTextColor="#3cb371"/>
      <Text style={styles.logo3}>
        Score:
      </Text>
       <TextInput
 style={styles.inputText}
 placeholder="Enter Score"
 placeholderTextColor="#3cb371"/>
      <Text style={styles.logo4}>
        Rank:
      </Text>
     <TextInput
 style={styles.inputText}
 placeholder="Enter Rank"
 placeholderTextColor="#3cb371"
 placeholderTextMarginLeft="10"/> 
 <TouchableOpacity style={styles.loginBtn}>
 <Text style={styles.loginText}>SEARCH</Text>
 </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    paddingTop: Constants.statusBarHeight,
    backgroundColor: 'gold',
    alignItems:'center',
   
   
  },
  logo: {
    marginTop: 0,
   marginBottom:10,
    fontSize: 50,
    fontWeight: 'bold',
    textAlign: 'center',
    color:'black',
  },
  logos: {
    marginLeft:40,
    marginBottom:40,
    fontSize: 25,
    fontWeight: 'italics',
    textAlign: 'center',
    color:'black',
  },
  logo1: {
   
    marginBottom:10,
    fontSize: 20,
    fontWeight: 'bold',
    textAlign: 'center',
    color:'black',
  },
  logo2: {
   
    marginBottom:10,
    fontSize: 20,
    fontWeight: 'bold',
    textAlign: 'center',
    color:'black',
  },
  logo3: {
   
    marginBottom:10,
    fontSize: 20,
    fontWeight: 'bold',
    textAlign: 'center',
    color:'black',
  },
  logo4: {
   
    marginBottom:10,
    fontSize: 20,
    fontWeight: 'bold',
    textAlign: 'center',
    color:'black',
  },
  inputText:{
    padding:12,
  marginBottom:10,
  width:'80%',
  backgroundColor:'#fff',
  borderRadius:25,
  height:40,
  borderWidth: 1,
  },
  loginBtn:{
    width:"40%",
 backgroundColor:"#3cb371",
 borderRadius:80,
 height:50,
 alignItems:"center",
 justifyContent:"center",
 marginTop:20,
 marginBottom:10
  }
});
