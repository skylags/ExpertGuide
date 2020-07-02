import * as React from 'react';
import { Text, View, StyleSheet,TextInput ,TouchableOpacity} from 'react-native';
import Constants from 'expo-constants';



export default function App() {
  return (
    <View style={styles.container}>
      <Text style={styles.paragraph}>
       forgot your Password?
      </Text>
      <Text style={styles.paragraph1}>
       type your email to reset your password!
      </Text>
     <TextInput
 style={styles.inputText}
 placeholder="Enter your email"
 placeholderTextColor="#3cb371"/>
  <TouchableOpacity style={styles.resetBtn}>
 <Text style={styles.loginText}>Reset Password</Text>
 </TouchableOpacity>
  <TouchableOpacity style={styles.resetBtn}>
 <Text style={styles.loginText}>Back To Login</Text>
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
  paragraph: {
    color:'#fff',
    fontSize: 25,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  paragraph1: {
    color:'#fff',
    fontSize: 15,
    fontWeight: '300',
    textAlign: 'center',
    marginBottom:60,
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
  resetBtn:{
   
    width:"40%",
 backgroundColor:"#3cb371",
 borderRadius:80,
 height:50,
 alignItems:"center",
 justifyContent:"center",
 marginTop:20,
 marginBottom:10
  },
   loginText:{
  color:"#fff",
 }
});
