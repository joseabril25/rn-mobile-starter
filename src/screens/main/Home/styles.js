import { Dimensions, StyleSheet } from 'react-native';

import { colors, fonts } from '../../../themes';

const dimensions = Dimensions.get('window');
const styles = StyleSheet.create({
  text: {
    color: colors.white,
  },
  taskBody: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  taskBodyTitle: {
    color: colors.white,
    ...fonts.h3,
  },
  tag: {
    color: colors.white,
    ...fonts.h3,
  },
  taskBody: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  heading: {
    marginTop: 74,
    marginBottom: 24,
    paddingHorizontal: 16,
  },
  headingTitle: {
    color: colors.white,
    ...fonts.h2,
  },
});

export default styles;
