import React from 'react';
import {StyleSheet, Text, useWindowDimensions, View} from 'react-native';

// Al igual que en el html y css, tenemos medidas relativas al padre contenedor.
// Si lo que necesitamos no es dependender del tamaño relativo del tamaño
// relativo del window, podemos usar el hook 'useWindowDimesions'

export const BoxObjectModelScreen = () => {
  const {width, height} = useWindowDimensions();

  return (
    <View style={styles.container}>
      <View style={styles.redContainer} />
      <Text style={styles.title}>
        W: {width}, H: {height}
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  redContainer: {
    backgroundColor: 'red',
    width: '30%',
    height: '30%',
  },
  title: {
    fontSize: 25,
    textAlign: 'center',
  },
});
