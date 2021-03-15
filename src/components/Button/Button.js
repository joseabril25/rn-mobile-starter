import React, { useState } from 'react';
import {
  Text,
  StyleSheet,
  View,
  ActivityIndicator,
  Pressable,
  Platform,
} from 'react-native';
import { colors, fonts } from '../../themes';

const LOADING_ID = ':loading:';

const CreateButtonText = ({ title }) => {
  if (title.includes(LOADING_ID)) {
    const newTitle = title?.split(LOADING_ID);
    return (
      <Text style={styles.activityIndicator}>
        {newTitle[0]}
        <ActivityIndicator
          style={styles.loading}
          size="small"
          color={colors.dark}
        />
        {newTitle[1]}
      </Text>
    );
  }
  return title;
};

const Button = ({
  style,
  title,
  disabled,
  icon,
  loading,
  onPress,
  outlined,
}) => {
  const [focus, setFocus] = useState(false);

  const onPressIn = () => {
    setFocus(true);
  };

  const onPressOut = () => {
    setFocus(false);
  };

  const buttonStyles = (_disable, _loading, _outlined, _focus) => {
    if (_disable || _loading) {
      return styles.disable;
    }

    if (_outlined) {
      if (_focus) {
        return styles.focusOutline;
      }

      return styles.outline;
    }

    if (_focus) {
      return styles.focus;
    }

    return styles.default;
  };

  const labelStyles = (_disabled, _loading, _outlined, _focus) => {
    if (_disabled || _loading) {
      return styles.disabledTitle;
    }

    if (_outlined) {
      if (_focus) {
        return styles.outlinedFocus;
      }

      return styles.outlinedTitle;
    }

    return styles.title;
  };

  return (
    <Pressable
      disabled={disabled}
      onPress={() => (!loading ? onPress() : {})}
      onPressIn={() => onPressIn()}
      onPressOut={() => onPressOut()}
      style={[
        styles.button,
        buttonStyles(disabled, loading, outlined, focus),
        style,
      ]}>
      {loading && (
        <ActivityIndicator
          size="small"
          color={colors.white}
          style={styles.loader}
        />
      )}
      {!!icon && <View style={styles.icon}>{icon()}</View>}
      <Text style={labelStyles(disabled, loading, outlined, focus)}>
        <CreateButtonText title={title} />
      </Text>
    </Pressable>
  );
};

const styles = StyleSheet.create({
  button: {
    alignItems: 'center',
    borderRadius: 6,
    flexDirection: 'row',
    height: 50,
    justifyContent: 'center',
  },
  disable: {
    backgroundColor: colors.darkGrey,
  },
  default: {
    backgroundColor: colors.primary,
  },
  focus: {
    backgroundColor: colors.buttonPress,
  },
  outline: {
    backgroundColor: 'transparent',
    borderWidth: 1,
    borderColor: colors.primary,
  },
  focusOutline: {
    backgroundColor: 'transparent',
    borderWidth: 1,
    borderColor: colors.buttonPress,
  },
  loader: {
    marginRight: 10,
    marginTop: -2,
  },
  icon: {
    marginRight: 12,
  },
  title: {
    color: colors.secondary,
    ...fonts.button,
  },
  disabledTitle: {
    color: colors.white,
    ...fonts.button,
  },
  outlinedTitle: {
    color: colors.primary,
    ...fonts.button,
  },
  outlinedFocus: {
    color: colors.buttonPress,
    ...fonts.button,
  },
  activityIndicator: {
    flex: 1,
  },
  loading: {
    ...Platform.select({
      ios: {
        marginTop: -2,
      },
      android: {
        marginTop: -5,
      },
    }),
  },
});

Button.displayName = 'Button';

export default Button;
