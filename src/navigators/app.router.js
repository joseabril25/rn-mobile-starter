import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import AuthNavigator from './auth.navigator';

import { authCheck } from '~/store/actions/auth.actions';

const AppRouter = ({
  isLoggedIn,
  checkUserToken,
}) => {
  useEffect(() => {
    checkUserToken();
  }, [checkUserToken]);

  if (!isLoggedIn) {
    return <AuthNavigator />;
  }

  return <AuthNavigator />;
};

const mapStateToProps = ({ auth, app }) => ({
  isLoggedIn: auth.isLoggedIn,
  isOnboarding: app.hasOnboarding,
});

const mapDispatchToProps = {
  checkUserToken: authCheck,
};

export default connect(mapStateToProps, mapDispatchToProps)(AppRouter);
