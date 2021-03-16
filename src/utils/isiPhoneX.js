import { Dimensions, Platform } from 'react-native';

const dim = Dimensions.get('window');

export function isSmallIphone() {
  return dim.height <= 568;
}

export function isLargeIphone() {
  return dim.height >= 812;
}

export function setIphoneSize(regular, large, small = regular) {
  if (Platform.OS === 'ios') {
    if (isSmallIphone()) {
      return small;
    } else if (isLargeIphone()) {
      return large;
    } else {
      return regular;
    }
  }
  return regular;
}
