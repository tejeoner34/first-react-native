import React, {useState} from 'react';
import {View, Text, Button, StyleSheet, TouchableOpacity} from 'react-native';
import { Tab } from '../components/Tab';

export const CounterScreen = () => {
  const [counter, setCounter] = useState(0);
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Counter: {counter}</Text>
      <Tab title='-' position='bl' onPress={() => setCounter(counter - 1)} />
      <Tab title='+' onPress={() => setCounter(counter + 1)} />
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
  fab: {
    width: 60,
    height: 60,
    borderRadius: 100,
    backgroundColor: '#2596be',
    position: 'absolute',
    bottom: 25,
  },
  fabLeft: {
    left: 25
  },
  fabText: {
    fontSize: 42,
    fontWeight: 'bold',
    color: 'white',
    alignSelf: 'center',
  }
});
