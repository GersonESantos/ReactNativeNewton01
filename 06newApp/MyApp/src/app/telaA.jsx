import { View, Text, StyleSheet } from 'react-native';

export default function TelaA() {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Bem-vindo à Tela A!</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#f0f0f0',
  },
  text: {
    fontSize: 20,
    color: '#333',
  },
});