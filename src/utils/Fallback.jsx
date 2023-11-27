import {StyleSheet, Text, View, Image} from 'react-native';
import React from 'react';

const Fallback = () => {
  return (
    <View style={{alignItems: 'center'}}>
      <View
        style={{
          backgroundColor: '#000',
          paddingVertical: 12,
          paddingHorizontal: 12,
          borderRadius: 6,
          marginTop: 20,
        }}>
        <Text style={{color: '#000', fontStyle: 'normal'}}>
          Start Adding Your Task
        </Text>
      </View>
    </View>
  );
};

export default Fallback;

const styles = StyleSheet.create({});
