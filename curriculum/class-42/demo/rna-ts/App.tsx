import React, { useState } from 'react';
import { StyleSheet, Button, Text, TextInput, View } from 'react-native';

export default function App() {
  let [num, setNum] = useState(42);

  return (
    <View style={styles.container}>
      <TestComponent name='Keith' dob={new Date(2000,1,1)} />
      <Text>Number: {num}</Text>
      <TextInput onChangeText={text => setNum(parseInt(text, 10))} />
      <Button onPress={() => setNum(5)} title="Set Number" />
    </View>
  );
}

function TestComponent(props: { name : string, dob?: Date }) {
  return (
    <>
      <Text>My name is {props.name}.</Text>
      {props.dob ? <Text>My age is {new Date().getFullYear() - props.dob.getFullYear()}.</Text> : <Text>Age unknown</Text>}
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
