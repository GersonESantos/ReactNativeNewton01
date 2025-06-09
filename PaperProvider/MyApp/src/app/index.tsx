// App.js
import React from 'react';
import { Provider as PaperProvider } from 'react-native-paper';
import { DefaultTheme, configureFonts } from 'react-native-paper';
import { StyleSheet, View, Text } from 'react-native';
import { Button } from 'react-native-paper';

// Configuração personalizada do tema (opcional)
const theme = {
  ...DefaultTheme,
  colors: {
    ...DefaultTheme.colors,
    primary: '#6200ee', // Cor primária personalizada
    accent: '#03dac4',  // Cor de destaque personalizada
  },
};

export default function App() {
  return (
    // Envolve o aplicativo com PaperProvider
    <PaperProvider theme={theme}>
      <View style={styles.container}>
        <Text style={styles.title}>Exemplo com React Native Paper</Text>
        {/* Exemplo de uso de um componente do React Native Paper */}
        <Button 
          mode="contained" 
          onPress={() => alert('Botão pressionado!')}
          style={styles.button}
        >
          Clique Aqui
        </Button>
      </View>
    </PaperProvider>
  );
}

// Estilos básicos
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#f5f5f5',
  },
  title: {
    fontSize: 20,
    marginBottom: 20,
    fontWeight: 'bold',
  },
  button: {
    marginTop: 10,
  },
});