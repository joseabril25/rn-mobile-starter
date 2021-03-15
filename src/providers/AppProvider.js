
import React from 'react';
import { StatusBar } from 'react-native';
import { Provider } from 'react-redux';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { PersistGate } from 'redux-persist/integration/react';

import { store, persistor } from '~/store';
import AppRouter from '../navigators/app.router';
import { colors } from '../themes';
import NavigationProvider from './NavigationProvider';

const AppProvider = () => (
  <Provider store={store}>
    <StatusBar backgroundColor={colors.secondary} barStyle="light-content" />
    <PersistGate loading={null} persistor={persistor}>
      <SafeAreaProvider>
        <NavigationProvider>
          <AppRouter />
        </NavigationProvider>
      </SafeAreaProvider>
    </PersistGate>
  </Provider>
);

export default AppProvider;