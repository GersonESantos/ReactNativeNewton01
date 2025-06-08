import  { useState,useEffect,useRef } from "react";
import { Image, StyleSheet, Text, View, Pressable } from "react-native";
export default function Index() {
    const [timeLeft,  setTimeLeft ]   = useState(10);
    const [timeLabel, setTimeLabel]   = useState('start');
    const [isRunning, setIsRunning]   = useState(false);
    
    function startTimer() {
      if (!isRunning && timeLeft > 0) {
        setIsRunning(true);
        setTimeLabel('stop') 
      } else {  
        setIsRunning(false);
        setTimeLabel("Começar");
    }}
    return (
        <View style={style.container}>
          <View>
            <Image source={{
            uri: 'https://reactnative.dev/docs/assets/p_cat2.png',
          }}
          style={{width: 200, height: 200}}
          />
        </View>
        <View style={style.actions}>
          <Text style={style.timer}>{timeLeft}</Text>
            <Pressable style={isRunning ? style.buttonStop : style.buttonStart}
                onPress={startTimer}>

                <Text style={style.textButton}>{timeLabel}</Text>
            </Pressable>
        </View>
        <View style={style.footer}>
            <Text style={style.textfooter}>Curso de react Native EAD</Text>
            <Text style={style.textfooter}>2025 Meu App</Text>
         </View>         
        </View>
    );
}
const style = StyleSheet.create({
    container: { 
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "#021123",
        gap: 40,    
        },
    title :{ 
        color: "red", 
        fontSize: 24,
        fontWeight: "bold",
    },
    timer: {
        fontSize: 54,
        fontWeight: "bold",
        color: "#FFF",
        textAlign: "center"},
    actions: {
        padding: 24,
        backgroundColor: "#14448080",
        width: "80%",
        borderRadius: 32,
        borderWidth: 2,
        borderColor: "#144480",
        alignItems: "center",
        gap: 40,
        
    },
  button: {
        backgroundColor: "#B872ff",
        padding: 16,
        borderRadius: 32,
        marginTop: 12,
    },
    textButton: {
      alignItems: "center",
        color: "#FFF",    
        fontSize: 16,
        fontWeight: "bold",
        textAlign: "center",  
    },
    footer: {
        marginTop: 24,
        alignItems: "center",
    },
    textfooter: {
        fontSize: 18,
        color: "#333",
    },
    buttonStop:{
        backgroundColor: "#B872ff",
        padding: 16,
        borderRadius: 32,
        marginTop: 12,
        width: 200,
    },
    buttonStart:{
        backgroundColor: "#FF0000",
        padding: 16,
        borderRadius: 32,
        marginTop: 12,
        width: 200,
    },
    });