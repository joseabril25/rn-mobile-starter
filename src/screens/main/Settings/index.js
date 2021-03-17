import React from 'react';
import {
  View,
  Text,
  TouchableOpacity,
} from 'react-native';
import { connect } from 'react-redux';

import Button from '../../../components/Button';
import { MainLayout } from '../../../components/Layout';
import { authLogout } from '../../../store/actions/auth.actions';

import styles from './styles'



const Settings = ({ handleLogout }) => {
  const onLogout = () => {
    handleLogout();
  }

  return (
    <MainLayout>
      <View style={styles.mainWrapper}>
        <Button
          title="Logout"
          style={styles.button}
          onPress={onLogout}
        />
      </View>
    </MainLayout>
  ) 
}

const mapDispatchToProps = {
  handleLogout: authLogout,
};
export default connect(null, mapDispatchToProps)(Settings);