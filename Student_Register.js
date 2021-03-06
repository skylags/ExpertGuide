import React, {useState} from 'react';
import {Picker, Text, StyleSheet, View, TextInput, Button, TouchableOpacity} from 'react-native';

const PickerDemo = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.formLabel}> Join us! </Text>
      <View>
        <TextInput placeholder="Name" style={styles.inputStyle} />
        <TextInput placeholder="Contact" style={styles.inputStyle} />
        <TextInput placeholder="City" style={styles.inputStyle} />
        <TextInput placeholder="Field of Study" style={styles.inputStyle} />
        <TextInput placeholder="E-mail" style={styles.inputStyle} />
        <TextInput placeholder="School" style={styles.inputStyle} />
        <TextInput placeholder="Something about you" style={styles.inputStyle} />
        <TouchableOpacity style={styles.loginBtn}>
        <Text style={styles.loginText}>Register</Text>
        </TouchableOpacity>
        <Text
          style={{
            fontSize: 35,
            color: 'black',

            alignItems: 'center',
            justifyContent: 'center',
          }}>
        </Text>
        {/* <Button
          title="Submit"
          color="#fff"
          onPress={() => alert('Simple Button pressed')}
        /> */}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f4c13c',
    alignItems: 'center',
    justifyContent: 'center',
  },
  formLabel: {
    fontSize: 20,
    color: 'black',
    fontWeight:"bold",
  },
  inputStyle: {
    marginTop: 20,
    width: 300,
    height: 40,
    paddingHorizontal: 10,
    borderRadius: 50,
    backgroundColor: '#ecee99',
  },
  
  loginBtn: {
width:"99%", 
backgroundColor:"#ecee99", 
borderRadius:25, 
height:50, 
alignItems:"center", 
justifyContent:"center",
 marginTop:80, 
 marginBottom:10
},
  loginText:{
color:"black",
fontWeight:"bold", }
});

export default PickerDemo;
