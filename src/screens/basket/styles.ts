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
    alignEnd: {justifyContent: 'flex-end', alignItems: 'flex-end'},
    row: {
      flexDirection: 'row',
    },
    headerContainer: {paddingTop: 50, height: 180, backgroundColor: '#fff', justifyContent: 'space-between', paddingBottom: 30 },
    header: {flexDirection: 'row',paddingLeft: 15, paddingRight: 15, alignItems: 'center', justifyContent: 'space-between'},
    basketProducts: { backgroundColor: '#fff',height: '100%'},
    basketItem: { borderRadius: 15, minHeight: 70, height: 'auto', marginBottom: 1, marginLeft: 3, marginRight: 3, paddingRight: 15, paddingLeft: 15, backgroundColor: '#E91D34', flexDirection: 'row', justifyContent: 'space-between'},
    itemDetails: {alignItems: 'flex-start', justifyContent: 'center', width: '60%'},
    itemName: {color: '#fff',fontSize: 15, fontWeight: '600'},
    desc: {color: '#fff', fontSize: 11, marginTop: 2},
    center: { justifyContent: 'center', alignItems: 'center'},
    quantityCover: { flexDirection: 'row', width: 100, height: 35, borderRadius: 10, backgroundColor: 'rgba(180,21,40, 0.8)' , alignItems: 'center', justifyContent: 'space-between'},
    decBtn: {borderTopLeftRadius: 10, borderBottomLeftRadius: 10, height: '100%', width: 35, backgroundColor: '#b41528', justifyContent: 'center', alignItems: 'center', paddingLeft: 5},
    decTxt: {color: '#fff', fontSize: 16, fontWeight: '600'},
    quantityCvr: {justifyContent: 'center', alignItems: 'center'},
    quantityTxt: {color: '#fff', fontSize: 16, fontWeight: '500'},
    incBtn: {borderTopRightRadius: 10, borderBottomRightRadius: 10, height: '100%', width: 35, backgroundColor: '#b41528', justifyContent: 'center', alignItems: 'center', paddingLeft: 5},
    incTxt: {color: '#fff', fontSize: 15, fontWeight: '600'},
    purchaseCvr: { justifyContent: 'center', alignItems: 'center', marginTop: 50},
    purchaseTxt: {color: '#fff', fontWeight: '600'},
    invoice: {marginTop: 40, paddingLeft: 20},
    purchaseBtn: {height: 50, width: 200, borderRadius: 50, justifyContent: 'center', alignItems: 'center', backgroundColor: theme.color.backgroundPrimary},
    
  });
};

export default createStyles;
