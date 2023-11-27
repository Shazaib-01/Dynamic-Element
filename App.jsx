import {StyleSheet} from 'react-native';
import React from 'react';
import HomeScreen from './src/pages/HomeScreen';

const App = () => {
  return <HomeScreen />;
};

export default App;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
