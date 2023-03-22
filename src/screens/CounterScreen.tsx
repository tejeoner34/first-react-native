import React, {useState} from 'react';
import {View, Text, Button, StyleSheet, TouchableOpacity} from 'react-native';

export const CounterScreen = () => {
  const [counter, setCounter] = useState(0);
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Counter: {counter}</Text>
      <TouchableOpacity onPress={() => setCounter(counter - 1)}>
        <View>
          <Text>-1</Text>
        </View>
      </TouchableOpacity>
      <TouchableOpacity  onPress={() => setCounter(counter + 1)}>
          <View style={styles.fab}>
            <Text style={styles.fabText}>+</Text>
          </View>
      </TouchableOpacity>
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
  },
  fabText: {
    fontSize: 60,
    fontWeight: 'bold',
    color: 'white',
    alignSelf: 'center',
  }
});
