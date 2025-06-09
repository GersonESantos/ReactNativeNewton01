import { View, Text, TextInput, StyleSheet } from "react-native";
import React, { useEffect, useState } from 'react';



export default function TextInputTest() {
  const [nome, setNome] = useState("");
  return (
    <View style={styles.container}>
      <TextInput
        placeholder="Nome"
        value={nome}
        onChangeText={setNome}
      />    
  </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex:1,
    justifyContent:"center",
    alignItems:"center",
    backgroundColor:"#F0F8FF"
  },
  texto: {
    fontSize: 24
  }
});