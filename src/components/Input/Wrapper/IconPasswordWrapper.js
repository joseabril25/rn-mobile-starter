import React from 'react';
import { Pressable, View } from 'react-native';

import Icon from '~/components/Icon';

const IconPasswordWrapper = ({ style, hasValue, show, toggle }) => {
  if (!hasValue) {
    return (
      <View style={style}>
        <Icon name="lock" />
      </View>
    );
  }

  return (
    <Pressable onPress={() => toggle()} style={style}>
      <Icon name="eye" active={show} />
    </Pressable>
  );
};

export default IconPasswordWrapper;
