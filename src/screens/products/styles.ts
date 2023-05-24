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
    inputContainer: {
      paddingTop: theme.spacing.paddingXLarge,
    },
    srchContainer: {
      marginStart: theme.spacing.padding,
      marginEnd: theme.spacing.padding,
    },
    searchBar: {
      height: 30,
      borderColor: 'black',
      borderWidth: 1,
      borderRadius: 30,
      paddingLeft: theme.spacing.paddingMLarge,
      paddingRight: theme.spacing.paddingMLarge
    },
    
    row: {
      flexDirection: 'row',
    },
  });
};

export default createStyles;
