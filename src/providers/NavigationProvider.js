import React, { useRef } from 'react';
import { StyleSheet } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';


const NavigationProvider = ({ children }) => {
  return (
    <>
      <NavigationContainer>
        {children}
      </NavigationContainer>
    </>
  );
};

const styles = StyleSheet.create({
  overlay: {
    position: 'absolute',
    top: 0,
    left: 0,
    width: '100%',
    height: '100%',
    backgroundColor: 'black',
    opacity: 0.1,
  },
});

export default NavigationProvider
