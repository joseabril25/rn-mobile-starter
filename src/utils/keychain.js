import * as Keychain from 'react-native-keychain';

const setGenericPassword = async ({ email, password }) => {
  await Keychain.setGenericPassword(email, password);
};

const getGenericPassword = async () => {
  try {
    const credentials = await Keychain.getGenericPassword();

    if (credentials) {
      return {
        status: true,
        data: credentials,
      };
    } else {
      return {
        status: false,
        error: 'No Credentials stored',
      };
    }
  } catch (error) {
    return {
      status: false,
      error: "Keychain couldn't be accesseed!",
    };
  }
};

const resetGenericPassword = async () => {
  await Keychain.resetGenericPassword();
};

const setCredentials = async (key, value) => {
  await Keychain.setInternetCredentials(key, key, JSON.stringify(value));
};

const getCredentials = async (key) => {
  try {
    const { password } = await Keychain.getInternetCredentials(key);
    return JSON.parse(password);
  } catch (error) {
    return null;
  }
};

const resetCredentials = async (key) => {
  await Keychain.resetInternetCredentials(key);
};

export {
  setGenericPassword,
  getGenericPassword,
  resetGenericPassword,
  setCredentials,
  getCredentials,
  resetCredentials,
};
