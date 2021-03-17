import React, { useEffect } from 'react';
import {
  View,
  Text,
  FlatList
} from 'react-native';
import { useForm } from 'react-hook-form';
import { connect } from 'react-redux';
import { MainLayout } from '../../../components/Layout';
import Input from '../../../components/Input';
import styles from './styles'

const inputSections = [
  {
    id: 0,
    name: 'fullName',
    label: 'Full Name',
    placeholder: 'Full Name',
    textContentType: 'givenName',
    autoCapitalize: 'none',
    type: 'none',
    disabled: true,
  },
  {
    id: 1,
    name: 'email',
    label: 'Email Address',
    placeholder: 'Email Address',
    textContentType: 'emailAddress',
    autoCapitalize: 'none',
    type: 'none',
    disabled: true,
  },
  {
    id: 2,
    name: 'gender',
    label: 'Gender',
    placeholder: 'Gender',
    textContentType: 'none',
    autoCapitalize: 'none',
    type: 'none',
    disabled: true,
  },
  {
    id: 3,
    name: 'bday',
    label: 'Birth Date',
    placeholder: 'Birth Date',
    textContentType: 'none',
    autoCapitalize: 'none',
    type: 'none',
    disabled: true,
  },
  {
    id: 4,
    name: 'mobile',
    label: 'Mobile Number',
    placeholder: 'Mobile Number',
    textContentType: 'telephoneNumber',
    autoCapitalize: 'none',
    type: 'none',
    disabled: true,
  },
];

const Profile = ({ userData }) => {
  const { control, errors, setValue } = useForm({
    mode: 'onChange',
    defaultValues: {
      fullName: '',
      email: '',
      gender: '',
      bday: '',
      mobile: '',
    },
  });

  useEffect(() => {
    if (userData) {
      setValue('fullName', userData?.firstName + ' ' + userData?.middleName + ' ' + userData?.lastName);
      setValue('email', userData?.email);
      setValue('gender', userData?.gender);
      setValue('bday', userData?.bday);
      setValue('mobile', userData?.mobile);
    }
  }, [setValue, userData]);

  return (
    <MainLayout>
      <View style={styles.mainWrapper}>
        <FlatList
          data={inputSections}
          keyExtractor={(item) => item.id.toString()}
          renderItem={({ item }) => (
            <View style={styles.form}>
              <Input
                name={item.name}
                control={control}
                label={item.label}
                placeholder={item.placeholder}
                keyboardType={item.keyboardType}
                textContentType={item.textContentType}
                autoCapitalize="none"
                secureTextEntry={item?.secureTextEntry}
                error={errors[item.name]}
                type={item.type}
                disable={item.disabled}
              />
            </View>
          )}
        />
      </View>
    </MainLayout>
  ) 
}

const mapStateToProps = ({ auth }) => ({
  userData: auth.user
});

export default connect(mapStateToProps)(Profile);