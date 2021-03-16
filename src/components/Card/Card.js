import React from 'react';
import { Pressable, View, StyleSheet } from 'react-native';


import { colors, fonts } from '../../themes';
const Card = ({ style, children, onPress }) => (
  <Pressable style={style} onPress={onPress}>
    <View style={styles.card}>{children}</View>
  </Pressable>
);

const styles = StyleSheet.create({
  card: {
    backgroundColor: colors.darkGrey,
    borderRadius: 8,
    paddingVertical: 16,
    paddingHorizontal: 20,
    marginHorizontal: 16,
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.08,
    shadowRadius: 4,
    elevation: 2,
  },
});
export default Card;
