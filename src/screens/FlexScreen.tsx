import React from 'react';
import {StyleSheet, Text, View} from 'react-native';

// Con la propiedad flex podemos definir cuánto espacio obtendrá cada hijo

export const FlexScreen = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.box1}>Box 1</Text>
      <Text style={styles.box2}>Box 2</Text>
      <Text style={styles.box3}>Box 3</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'green',
  },
  box1: {
    borderWidth: 5,
    borderColor: 'white',
    fontSize: 30,
    flex: 2
  },
  box2: {
    borderWidth: 5,
    borderColor: 'white',
    fontSize: 30,
    flex: 2
  },
  box3: {
    borderWidth: 5,
    borderColor: 'white',
    fontSize: 30,
    flex: 6
  },
});
