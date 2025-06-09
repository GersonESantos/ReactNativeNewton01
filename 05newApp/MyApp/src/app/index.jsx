import { View, Text, Pressable, StyleSheet } from 'react-native';
import { useRouter } from 'expo-router';

export default function Index() {
  const router = useRouter();

  return (
    <View style={{ flex: 1 }}>
      <Pressable style={styles.botao} onPress={() => router.push('/telaA')}>
                <Text style={styles.texto}>Ir para Tela A</Text>
     </Pressable>
     <Pressable style={styles.botao} onPress={() => router.push('/telaB')}>
          <Text style={styles.texto}>Ir para Tela B</Text>
        </Pressable>
         
        <Text>Entrar</Text>
     
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '',
    justifyContent: 'center',
    alignItems: 'center',
    gap: 20
  },
  botao: {
    backgroundColor: '#1E90FF',
    paddingVertical: 12,
    paddingHorizontal: 30,
    borderRadius: 10
  },
  texto: {
    color: '#fff',
    fontSize: 18
  }
});
