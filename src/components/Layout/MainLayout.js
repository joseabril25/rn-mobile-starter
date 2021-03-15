import React from 'react';
import { Platform, StyleSheet } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

import { colors } from '~/themes';
import { setIphoneSize } from '~/utils/isIphoneX';

const MainLayout = ({ children }) => (
  <SafeAreaView style={styles.view}>{children}</SafeAreaView>
);

const styles = StyleSheet.create({
  view: {
    backgroundColor: colors.secondary,
    position: 'relative',
    flex: 1,
    justifyContent: 'flex-start',
    ...Platform.select({
      ios: {
        marginTop: setIphoneSize(-20, -47),
        marginBottom: setIphoneSize(0, -34),
      },
      android: {
        marginTop: 0,
        marginBottom: 0,
      },
    }),
  },
});

export default MainLayout;
