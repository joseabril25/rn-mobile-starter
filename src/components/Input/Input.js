import React, { useEffect, useRef, useState } from 'react';
import { Text, View, StyleSheet, TextInput, Platform } from 'react-native';
import { Controller } from 'react-hook-form';
import PropTypes from 'prop-types';

// Components
import { colors, fonts } from '../../themes';

const Input = ({
  navigation,
  name,
  control,
  label,
  error,
  type,
  rules,
  style,
  inputStyle,
  secureTextEntry,
  disable,
  onBlur,
  theme,
  ...props
}) => {
  const [focused, setFocus] = useState(false);
  const [hide, setHide] = useState(secureTextEntry);
  const inputRef = useRef(null);

  useEffect(() => {
    // Forced set fontFamily on android due to issue on secureTextEntry toggle
    if (Platform.OS === 'android') {
      inputRef.current.setNativeProps({
        style: fonts.paragraph,
      });
    }
  }, [hide]);

  const onSetHide = () => {
    if (!disable) {
      setHide(!hide);
    }
  };

  const onHandleBlur = () => {
    setFocus(false);
    onBlur();
  };

  return (
    <Controller
      name={name}
      control={control}
      rules={rules}
      render={({ onChange, value }) => (
        <View style={style}>
          <View style={[styles.header, error && styles.hasError]}>
            <Text
              style={[styles.label, theme === 'light' && styles.labelLight]}>
              {label}
            </Text>
            {error && 
              <Text style={styles.errorText}>
                {error?.message || 'Error'}
              </Text>
            }
          </View>

          <View style={styles.flex}>
            <TextInput
              ref={inputRef}
              style={[
                styles.input,
                theme === 'light' && styles.inputLight,
                focused && theme === 'dark' && styles.isFocus,
                focused && theme === 'light' && styles.isFocusLight,
                error && styles.error,
                type === 'none' && styles.paddingDefault,
                inputStyle,
                disable && styles.inputDisabled,
              ]}
              onChangeText={(text) => onChange(text)}
              value={value}
              placeholderTextColor={colors.lightGrey}
              onFocus={() => setFocus(true)}
              onBlur={() => onHandleBlur()}
              secureTextEntry={hide}
              editable={!disable}
              {...props}
            />
          </View>
        </View>
      )}
    />
  );
};

const styles = StyleSheet.create({
  header: {
    flexDirection: 'row',
    justifyContent: 'flex-start',
  },
  hasError: {
    justifyContent: 'space-between',
  },
  label: {
    color: colors.white,
    marginBottom: 8,
    opacity: 0.6,
    ...fonts.caption,
  },
  labelLight: {
    color: colors.grey,
  },
  errorText: {
    color: colors.danger,
    marginBottom: 8,
    ...fonts.caption,
  },
  flex: {
    position: 'relative',
    display: 'flex',
  },
  input: {
    alignItems: 'center',
    borderRadius: 6,
    borderColor: colors.lightGrey,
    borderWidth: 1,
    backgroundColor: colors.black,
    color: colors.white,
    height: 50,
    paddingLeft: 20,
    paddingRight: 50,
    flexDirection: 'row',
    ...fonts.paragraph,
    ...Platform.select({
      android: {
        paddingTop: 10,
        paddingBottom: 10,
        lineHeight: 0,
      },
    }),
  },
  inputLight: {
    borderColor: colors.grey,
    backgroundColor: colors.light,
    color: colors.dark,
  },
  inputDisabled: {
    borderColor: colors.dark,
    backgroundColor: colors.dark,
  },
  paddingDefault: {
    paddingLeft: 20,
    paddingRight: 20,
  },
  isFocus: {
    borderColor: colors.light,
  },
  isFocusLight: {
    borderColor: colors.grey,
  },
  error: {
    borderColor: colors.danger,
  },
  underlined: {
    textDecorationLine: 'underline',
  },
});

Input.propTypes = {
  name: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired,
  error: PropTypes.any,
  type: PropTypes.oneOf(['email', 'password', 'none']),
  rules: PropTypes.shape({}),
  style: PropTypes.shape({}),
  disable: PropTypes.bool,
  onBlur: PropTypes.func,
  theme: PropTypes.string.isRequired,
};

Input.defaultProps = {
  error: null,
  type: 'none',
  rules: {},
  style: {},
  inputStyle: {},
  disable: false,
  onBlur: () => {},
  theme: 'dark',
};

Input.displayName = 'Input';

export default Input;
