import React, { useState, useEffect } from "react";
import { StyleSheet, Text, View, Pressable } from "react-native";

export default function Index() {
    const [timeLeft, setTimeLeft] = useState(10);
    const [timeLabel, setTimeLabel] = useState("Começar");
    const [isRunning, setIsRunning] = useState(false);

    useEffect(() => {
        let timer: NodeJS.Timeout | null = null;
        if (isRunning && timeLeft > 0) {
            timer = setTimeout(() => {
                setTimeLeft(timeLeft - 1);
            }, 1000);
        } else if (timeLeft === 0) {
            setIsRunning(false);
            setTimeLabel("Fim!");
        }
        return () => {
            if (timer) clearTimeout(timer);
        };
    }, [isRunning, timeLeft]);

    function startTimer() {
        if (!isRunning && timeLeft > 0) {
            setIsRunning(true);
            setTimeLabel("Parar");
        } else if (isRunning) {
            setIsRunning(false);
            setTimeLabel("Começar");
        } else if (timeLeft === 0) {
            setTimeLeft(10);
            setTimeLabel("Começar");
        }
    }

    return (
        <View style={styles.container}>
            <Text style={styles.timerText}>{timeLeft}</Text>
            <Pressable style={styles.button} onPress={startTimer}>
                <Text style={styles.buttonText}>{timeLabel}</Text>
            </Pressable>
        </View>
    );
}

// Adicione estilos simples para não quebrar o layout
const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "#fff",
    },
    timerText: {
        fontSize: 48,
        marginBottom: 20,
    },
    button: {
        backgroundColor: "#007bff",
        padding: 16,
        borderRadius: 8,
    },
    buttonText: {
        color: "#fff",
        fontSize: 20,
    },
});