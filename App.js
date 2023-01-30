import { StatusBar } from 'expo-status-bar';
import { useState } from 'react';
import { StyleSheet, Text, TouchableWithoutFeedback, View,Image,TextInput,Button } from 'react-native';

export default function App() {
  const [name,setNAme]=useState('')
  return (
    <View style={styles.container}>
      <Image
          source={{
            uri: 'https://reactnative.dev/docs/assets/p_cat2.png',
          }}
          style={{width: 200, height: 200}}
        />
      <Text> Hello {name}</Text>
      <Text>Welcome</Text>
      <TextInput
        style={{
          height: 40,
          width:100,
          borderColor: 'gray',
          borderWidth: 2,
          padding:6,
        }}
        placeholder="Enter Name"
        onChangeText={new1 => setNAme(new1)}
        defaultValue={name}
      />
      <Button
        onPress={() => {
          setNAme(name);
        }}
         
title='Login'
      />
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'lightpink',
    alignItems: 'center',
    justifyContent: 'center',
    Color:'white',
    fontSize:'20',
  },
});
