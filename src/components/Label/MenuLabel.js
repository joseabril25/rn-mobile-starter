import React from 'react';
import PropTypes from 'prop-types';
import { View, Text, StyleSheet } from 'react-native';
import { colors, fonts } from '../../themes';

const MenuLabel = ({ focused, color, label, hasBadge }) => (
  <View style={styles.container}>
    <Text numberOfLines={1} style={{ ...styles.labelStyle, color }}>
      {label}
    </Text>
    {hasBadge && <View style={styles.alert} />}
    <View style={[styles.indicator, focused && styles.indicatorColor]} />
  </View>
);
const styles = StyleSheet.create({
  container: {
    flexDirection: 'column',
    alignItems: 'center',
  },
  alert: {
    height: 10,
    width: 10,
    backgroundColor: 'red',
    position: 'absolute',
    top: -35,
    right: 15,
    borderRadius: 50,
  },
  labelStyle: {
    marginTop: -10,
    textAlign: 'center',
    paddingBottom: 5,
    flexWrap: 'nowrap',
    ...fonts.label,
  },
  indicator: {
    borderTopLeftRadius: 2,
    borderTopRightRadius: 2,
    height: 2,
    width: 57,
  },
  indicatorColor: {
    backgroundColor: colors.primary,
  },
});
MenuLabel.propTypes = {
  focused: PropTypes.bool,
  color: PropTypes.string,
  label: PropTypes.string,
  hasBadge: PropTypes.bool,
};
MenuLabel.defaultProps = {
  focused: false,
  hasBadge: false,
};
export default MenuLabel;
