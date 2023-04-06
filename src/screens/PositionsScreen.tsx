import React from 'react';
import {StyleSheet, View} from 'react-native';

// Por defecto todos los elementos tienen position relative. Es decir, se van a mover
// en relacion a su posicion en el viewport

export const PositionsScreen = () => {
  return (
    <View style={styles.container}>
      <View style={styles.redContainer} />
      <View style={styles.GreenContainer} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'blue',
  },
  redContainer: {
    width: 100,
    height: 100,
    backgroundColor: 'red',
    borderWidth: 10,
    borderColor: 'white',
    top: -50,
  },
  GreenContainer: {
    width: 100,
    height: 100,
    backgroundColor: 'green',
    borderWidth: 10,
    borderColor: 'white',
    right: 50,
  },
});
