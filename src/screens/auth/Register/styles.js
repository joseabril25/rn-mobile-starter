import { Dimensions, Platform, StyleSheet } from 'react-native';
import { colors, fonts } from '~/themes';

const dimensions = Dimensions.get('screen');

const styles = StyleSheet.create({
  imageBackground: {
    position: 'relative',
    resizeMode: 'cover',
    height: dimensions.height,
  },
  overlay: {
    position: 'absolute',
    top: 0,
    left: 0,
    width: dimensions.width,
    height: dimensions.height,
    backgroundColor: colors.black,
    opacity: 0.8,
  },

  logo: {
    marginBottom: 8,
    flexDirection: 'row',
    justifyContent: 'center',
  },
  logoImg: {
    width: 276,
    height: 51,
  },

  flex: {
    flexDirection: 'column',
    alignItems: 'center',
  },
  container: {
    maxWidth: 200,
    marginBottom: 28,
  },
  text: {
    color: colors.white,
    ...fonts.paragraph,
    textAlign: 'center',
  },
  watch: {
    marginBottom: 26,
  },
  watchLink: {
    color: colors.primary,
    ...fonts.button,
    textAlign: 'center',
  },

  form: {
    paddingHorizontal: 16,
  },
  input: {
    ...Platform.select({
      ios: {
        marginBottom: 22,
      },
      android: {
        marginBottom: 22,
      },
    }),
  },
  button: {
    marginBottom: 32,
    marginTop: 22,
  },

  route: {
    flexDirection: 'column',
    alignItems: 'center',
  },
  row: {
    flexDirection: 'row',
    justifyContent: 'center',
    marginBottom: 20,
  },
  route_text: {
    color: colors.white,
    ...fonts.tertiaryText,
  },
  route_link: {
    color: colors.primary,
    marginLeft: 5,
    ...fonts.tertiaryText,
  },

  footer: {
    ...Platform.select({
      ios: {
        marginTop: 80,
      },
      android: {
        marginTop: 100,
      },
    }),
    marginBottom: 50,
    flexDirection: 'row',
    justifyContent: 'space-evenly',
  },
});

export default styles;
