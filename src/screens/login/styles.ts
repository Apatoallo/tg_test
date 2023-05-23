import { Platform, StyleSheet } from 'react-native';
import { Theme } from '../../theme';

const createStyles = (theme: Theme) => {
  return StyleSheet.create({
    root: {
      flexGrow: 1,
      paddingStart: theme.spacing.padding,
      paddingEnd: theme.spacing.padding,
      paddingTop: theme.spacing.paddingLarge,
      paddingBottom: theme.spacing.paddingLarge,
    },
    baseFlex: {
      flex: 1,
    },
    loginHeader: {
      height: 250,
      backgroundColor: theme.color.backgroundPrimary,
      justifyContent: 'flex-end',
      paddingBottom: theme.spacing.paddingExtraLarge,
      alignItems: 'center'
    },
    inputContainer: {
      paddingTop: theme.spacing.paddingXLarge,
    },
    userName: {
      height: 50,
      borderColor: theme.color.backgroundPrimary,
      borderWidth: 2,
      borderRadius: 30,
      paddingLeft: theme.spacing.paddingMLarge,
      paddingRight: theme.spacing.paddingMLarge
    },
    password: {
      height: 50,
      borderColor: theme.color.backgroundPrimary,
      borderWidth: 2,
      borderRadius: 30,
      paddingLeft: theme.spacing.paddingMLarge,
      paddingRight: theme.spacing.paddingMLarge
    },
    valdTxt: {
      fontSize: 11, 
      color: '#999'
    },
    valdErrs: {
      padding: 8,
      position: 'absolute', 
      bottom: -theme.spacing.paddingMLarge
    },
    loginBtnContainer: {
      justifyContent: 'flex-end',
      height: 300,
      width: '100%',
    },
    loginBtn: {
      height: 50,
      backgroundColor: theme.color.backgroundPrimary,
      justifyContent: 'center',
      alignItems: 'center',
      borderRadius: 30
    },
    loginTitle: {
      color: theme.color.white,
      fontSize: 14,
      fontWeight: '500',
    },
    titleTxt: {
      color: theme.color.white,
      fontSize: 26,
      fontWeight: '500'
    },
    row: {
      flexDirection: 'row',
    },
  });
};

export default createStyles;
