import React from 'react';
import {SafeAreaView} from 'react-native';
import {BoxObjectModelScreen} from './src/screens/BoxObjectModelScreen';
import {CounterScreen} from './src/screens/CounterScreen';
// import { HelloWorldScreen } from './src/screens/HelloWorldScreen';

const App = () => {
  return (
    <SafeAreaView>
      {/* <HelloWorldScreen />
      <CounterScreen /> */}
      <BoxObjectModelScreen />
    </SafeAreaView>
  );
};

export default App;
