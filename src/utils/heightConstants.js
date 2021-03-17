import { StatusBar, Platform } from 'react-native';
import { setIphoneSize } from './isiPhoneX';

export const HEADER_HEIGHT = 50;
export const STATUS_BAR =
  Platform.OS === 'android'
    ? StatusBar.currentHeight.toFixed()
    : setIphoneSize(20, 44);

export const DEFAULT_TABBAR_HEIGHT = 53;
export const BOTTOM_NAV_HEIGHT =
  Platform.OS === 'android'
    ? DEFAULT_TABBAR_HEIGHT
    : setIphoneSize(DEFAULT_TABBAR_HEIGHT, DEFAULT_TABBAR_HEIGHT + 32);

export const IOS_HEADER_HEIGHT = {
  height: STATUS_BAR + HEADER_HEIGHT,
  paddingTop: STATUS_BAR,
};
