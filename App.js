import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, TouchableWithoutFeedback, View } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
      <Text> Hello srikanth</Text>
      <Text>Welcome</Text>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'skyblue',
    alignItems: 'center',
    justifyContent: 'center',
    Color:'white',
    fontSize:'20',
  },
});
