import React from 'react';
import {
  View,
  Text,
  SafeAreaView,
  ScrollView,
} from 'react-native';
import { connect } from 'react-redux';
import { useForm } from 'react-hook-form';
import { authLogin } from '~/store/actions/auth.actions';
import regex from '../../../utils/regex';
import styles from './styles';

// Images

// Components
import Input from '../../../components/Input';
import Button from '../../../components/Button';

const SignIn = ({ navigation, submitLogin, isLoading, loginError }) => {
  const { handleSubmit, control, errors, trigger } = useForm({
    mode: 'onBlur',
    reValidateMode: 'onChange',
    defaultValues: {
      email: '',
      password: '',
    },
  });

  const handleLoginError = (field, error, formError) => {
    if (error?.code?.includes(field)) {
      return error;
    }
    return formError && formError[field];
  };

  const onLogin = (data) => {
    // submitLogin(data);
  };

  return (
    <>
      <View style={styles.overlay} />

      <SafeAreaView>
        <ScrollView>
          {/* <View style={styles.logo}>
            <Image source={logo} style={styles.logoImg} />
          </View> */}

          <View style={styles.flex}>
            <View style={styles.container}>
              <Text style={styles.text}>
                Prime Test Only
              </Text>
            </View>

          </View>

          <View style={styles.form}>
            <Input
              navigation={navigation}
              name="email"
              control={control}
              label="Email Address"
              placeholder="Email"
              keyboardType="email-address"
              textContentType="emailAddress"
              autoCapitalize="none"
              style={styles.input}
              onBlur={() => trigger('email')}
              error={handleLoginError('email', loginError, errors)}
              type="email"
              rules={{
                required: 'This is required',
                pattern: {
                  value: regex.EMAIL,
                  message: 'Input valid email',
                },
              }}
            />

            <Input
              name="password"
              control={control}
              label="Password"
              placeholder="Password"
              style={styles.input}
              error={handleLoginError('password', loginError, errors)}
              type="password"
              secureTextEntry={true}
              rules={{
                required: 'This is required',
              }}
            />

            <Button
              title="Sign In"
              disabled={Object.keys(errors).length !== 0}
              loading={isLoading}
              style={styles.button}
              onPress={handleSubmit(onLogin)}
            />
          </View>
        </ScrollView>
      </SafeAreaView>
    </>
  );
};

const mapStateToProps = ({ auth }) => ({
  isLoading: auth.isLoginLoading,
  loginError: auth.loginError,
});

const mapDispatchToProps = {
  submitLogin: authLogin,
};

SignIn.displayName = 'Screen_SignIn';

export default connect(mapStateToProps, mapDispatchToProps)(SignIn);
