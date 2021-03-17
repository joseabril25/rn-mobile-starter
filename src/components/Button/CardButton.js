import React from 'react';
import { StyleSheet, View, Text } from 'react-native';
import Icon from '../Icon';
import TouchView from './TouchView';
import { colors, fonts } from '../../themes';

const CardButton = ({ title, subTitle, style = {}, onPress = () => {} }) => (
  <TouchView style={[styles.row, style]} onPress={onPress}>
    <View style={styles.content}>
      {title && <Text style={styles.title}>{title}</Text>}
      <Text style={styles.subTitle}>{subTitle}</Text>
    </View>
    <Icon name="chevron-right" />
  </TouchView>
);

const styles = StyleSheet.create({
  row: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    borderRadius: 10,
    backgroundColor: colors.navigationBg,
    paddingHorizontal: 20,
    paddingVertical: 13,
  },
  title: {
    ...fonts.button,
    color: colors.white,
    marginBottom: 10,
  },
  subTitle: {
    color: colors.white,
    ...fonts.tertiaryText,
    fontSize: 14,
  },
});

CardButton.displayName = 'Button_Card';

export default CardButton;
