import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { getAnalytics } from '../store/actions/app.action';
import { authCheck } from '../store/actions/auth.actions';
import AuthNavigator from './auth.navigator';

import MenuNavigator from './menu.navigator';

const AppRouter = ({
  isLoggedIn,
  checkUserToken,
}) => {
  console.log("🚀 ~ file: app.router.js ~ line 12 ~ isLoggedIn", isLoggedIn)
  useEffect(() => {
    checkUserToken();
  }, [checkUserToken]);

  if (!isLoggedIn) {
    return <AuthNavigator />;
  }

  return <MenuNavigator />;
};

const mapStateToProps = ({ auth, app }) => ({
  isLoggedIn: auth.isLoggedIn,
  isOnboarding: app.hasOnboarding,
});

const mapDispatchToProps = {
  checkUserToken: authCheck,
};

export default connect(mapStateToProps, mapDispatchToProps)(AppRouter);
