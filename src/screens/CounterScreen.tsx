import React, {useState} from 'react';
import {View, Text, StyleSheet} from 'react-native';
import {Tab} from '../components/Tab';

export const CounterScreen = () => {
  const [counter, setCounter] = useState(0);
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Counter: {counter}</Text>
      <Tab title="-" position="bl" onPress={() => setCounter(counter - 1)} />
      <Tab title="+" onPress={() => setCounter(counter + 1)} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
  },
  title: {
    fontSize: 40,
    textAlign: 'center',
    top: -20,
  },
});
