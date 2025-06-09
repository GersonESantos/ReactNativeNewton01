import { Slot } from 'expo-router';
import { View, StyleSheet } from 'react-native';
import ButtomMenu from './ButtomMenu';
import { PaperProvider } from 'react-native-paper';
import TopDropDownMenu from './TopDropDownMenu';
import Toast from "react-native-toast-message";

export default function Layout() {
  return (
    <PaperProvider>
      <View style={styles.container}>
        <TopDropDownMenu />
        <Toast></Toast>
        <Slot />
        <ButtomMenu />
      </View>
    </PaperProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff'
  }
});
