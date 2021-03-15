import React from 'react';
import { StyleSheet } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import PropTypes from 'prop-types';
import { colors } from '~/themes';
import { setIphoneSize } from '~/utils/isIphoneX';

const Layout = ({ children, hasHeader }) => (
  <SafeAreaView style={[styles.view, hasHeader && styles.hasHeader]}>
    {children}
  </SafeAreaView>
);

const styles = StyleSheet.create({
  view: {
    backgroundColor: colors.secondary,
    position: 'relative',
    flex: 1,
  },
  hasHeader: {
    marginTop: setIphoneSize(-27, -47),
  },
});

Layout.propTypes = {
  children: PropTypes.node,
  hasHeader: PropTypes.bool,
};

Layout.defaultProps = {
  hasHeader: true,
};

export default Layout;
