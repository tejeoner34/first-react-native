import React from 'react';
import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';

interface Props {
  title: string;
  position?: 'br' | 'bl';
  onPress: () => void;
}

export const Tab = ({title, position = 'br', onPress}: Props) => {
  return (
    <TouchableOpacity
      style={position === 'br' ? styles.fabRight: styles.fabLeft}
      onPress={onPress}>
      <View style={styles.fab}>
        <Text style={styles.fabText}>{title}</Text>
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  fab: {
    width: 60,
    height: 60,
    borderRadius: 100,
    backgroundColor: '#2596be',
  },
  fabLeft: {
    position: 'absolute',
    bottom: 25,
    left: 25,
  },
  fabRight: {
    position: 'absolute',
    bottom: 25,
    right: 25,
  },
  fabText: {
    fontSize: 42,
    fontWeight: 'bold',
    color: 'white',
    alignSelf: 'center',
  },
});
