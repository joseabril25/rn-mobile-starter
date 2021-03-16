import React from 'react';
import {
  View,
  Text,
  TouchableOpacity,
} from 'react-native';
import { connect } from 'react-redux';

import Button from '../../../components/Button';
import { authLogout } from '../../../store/actions/auth.actions';

import styles from './styles'



const Settings = ({ handleLogout }) => {
  const onLogout = () => {
    handleLogout();
  }

  return (
    <View>
      <Text>This is Settings</Text>
      <TouchableOpacity style={{ marginTop: 50 }} onPress={onLogout}>
        <Text>Logout</Text>
      </TouchableOpacity>
      <Button
        title="Logout"
        style={styles.button}
        onPress={onLogout}
      />
    </View>
  ) 
}

const mapDispatchToProps = {
  handleLogout: authLogout,
};
export default connect(null, mapDispatchToProps)(Settings);