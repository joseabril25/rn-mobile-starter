import React from 'react';
import { Text, View, StyleSheet, Dimensions } from 'react-native';
import { colors, fonts } from '../../themes';
import Icon from '../Icon';
import { TouchView } from '../Button';
import { HEADER_HEIGHT, IOS_HEADER_HEIGHT } from '../../utils/heightConstants';


const HeaderMenu = ({
  previous,
  scene,
  navigation,
  hideRight,
  closeSheet,
  backRoute,
}) => {
  const options = scene?.descriptor?.options;

  const onBack = () => {
    if (backRoute) {
      navigation.navigate(backRoute);
    } else {
      navigation.goBack();
    }
  };

  return (
    <View style={styles.header}>
      {previous ? (
        <TouchView
          style={[styles.icon, styles.iconLeft]}
          onPress={() => onBack()}>
          <Icon name="header-back" />
        </TouchView>
      ) : (
        <View style={[styles.icon, styles.iconLeft]} />
      )}

      <View style={styles.main}>
        <Text style={styles.title} numberOfLines={1}>
          {options?.title}
        </Text>
      </View>

      <View style={[styles.icon, styles.iconRight]} />
    </View>
  );
};

const dimensions = Dimensions.get('window');
const styles = StyleSheet.create({
  header: {
    alignItems: 'center',
    backgroundColor: colors.tabBar,
    flexDirection: 'row',
    paddingHorizontal: 16,
    width: dimensions.width,
    ...Platform.select({
      ios: IOS_HEADER_HEIGHT,
      android: {
        height: HEADER_HEIGHT,
      },
    }),
  },
  main: {
    paddingHorizontal: 24,
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'center',
  },
  icon: {
    alignItems: 'center',
    flexDirection: 'row',
    height: HEADER_HEIGHT,
    width: HEADER_HEIGHT,
  },
  iconLeft: {
    justifyContent: 'flex-start',
  },
  iconRight: {
    justifyContent: 'flex-end',
  },
  title: {
    color: colors.white,
    ...fonts.button,
  },
});


export default HeaderMenu;
