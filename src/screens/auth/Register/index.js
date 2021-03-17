import React from 'react';
import {
  View,
  Text,
  SafeAreaView,
  ScrollView,
} from 'react-native';
import { connect } from 'react-redux';
import { useForm } from 'react-hook-form';
import { authLogin } from '../../../store/actions/auth.actions';
import regex from '../../../utils/regex';
import styles from './styles';

// Images

// Components
import Input, { Select } from '../../../components/Input';
import Button from '../../../components/Button';

const selector = [{
  label: 'Male', value: 'Male',
  label: 'Female', value: 'Female',
}]
const Register = ({ navigation, submitLogin, isLoading, loginError }) => {
  const { handleSubmit, control, errors, trigger } = useForm({
    mode: 'onBlur',
    reValidateMode: 'onChange',
    defaultValues: {
      email: '',
      password: '',
      firstName: '',
      middleName: '',
      lastName: '',
      email: '',
      bday: '',
      gender: '',
    },
  });

  const handleLoginError = (field, error, formError) => {
    if (error?.code?.includes(field)) {
      return error;
    }
    return formError && formError[field];
  };

  const onLogin = (data) => {
    submitLogin(data);
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

            <Select
              navigation={navigation}
              name="gender"
              control={control}
              label="Gender"
              placeholder="Gender"
              style={styles.input}
              onBlur={() => trigger('gender')}
              error={handleLoginError('gender', loginError, errors)}
              type="email"
              rules={{
                required: 'This is required',
                pattern: {
                  value: regex.EMAIL,
                  message: 'Input valid Gender',
                },
              }}
              items={selector}
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
              title="Sign Up"
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

Register.displayName = 'Screen_Register';

export default connect(mapStateToProps, mapDispatchToProps)(Register);
