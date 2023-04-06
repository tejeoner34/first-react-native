import React from 'react';
import {SafeAreaView} from 'react-native';
import {BoxObjectModelScreen} from './src/screens/BoxObjectModelScreen';
import {CounterScreen} from './src/screens/CounterScreen';
import { PositionsScreen } from './src/screens/PositionsScreen';
// import { HelloWorldScreen } from './src/screens/HelloWorldScreen';

const App = () => {
  return (
    <SafeAreaView style={{flex: 1}}>
      {/* <HelloWorldScreen />
      <CounterScreen /> */}
      {/* <BoxObjectModelScreen /> */}
      <PositionsScreen />
    </SafeAreaView>
  );
};

export default App;
