import React from 'react';
import {SafeAreaView} from 'react-native';
import {BoxObjectModelScreen} from './src/screens/BoxObjectModelScreen';
import {CounterScreen} from './src/screens/CounterScreen';
import { FlexScreen } from './src/screens/FlexScreen';
import { PositionsScreen } from './src/screens/PositionsScreen';
// import { HelloWorldScreen } from './src/screens/HelloWorldScreen';

const App = () => {
  return (
    <SafeAreaView style={{flex: 1}}>
      {/* <HelloWorldScreen />
      <CounterScreen /> */}
      {/* <BoxObjectModelScreen /> */}
      {/* <PositionsScreen /> */}
      <FlexScreen />
    </SafeAreaView>
  );
};

export default App;
