import React from 'react';
import { StyleSheet, View } from 'react-native';
import Icon from '~/components/Icon';
import IconPasswordWrapper from './IconPasswordWrapper';

const IconWrapper = ({ type, ...props }) => {
  switch (type) {
    case 'email':
      return (
        <View style={styles.container}>
          <Icon name="mail" />
        </View>
      );
    case 'password':
      return <IconPasswordWrapper style={styles.container} {...props} />;
    default:
      return null;
  }
};

const styles = StyleSheet.create({
  container: {
    height: 50,
    width: 50,
    position: 'absolute',
    top: 0,
    right: 0,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default IconWrapper;
