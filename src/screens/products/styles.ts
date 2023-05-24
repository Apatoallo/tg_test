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
    productsContainer: {
      paddingTop: 50, 
      height: 180, 
      backgroundColor: '#fff', 
      justifyContent: 'space-between', 
      paddingBottom: 30 
    },
    header:{
      flexDirection: 'row',
      paddingLeft: 15, 
      paddingRight: 15, 
      alignItems: 'center', 
      justifyContent: 'space-between'
    },
    row: {
      flexDirection: 'row',
    },
    item: {borderRadius: 15, minHeight: 70, height: 'auto', marginBottom: 1, marginLeft: 3, marginRight: 3, paddingRight: 15, paddingLeft: 15, backgroundColor: '#E91D34', flexDirection: 'row', justifyContent: 'space-between'},
    productDetails: {alignItems: 'flex-start', justifyContent: 'center', width: '60%'},
    productName: {color: '#fff',fontSize: 15, fontWeight: '600'},
    descTxt: {color: '#fff', fontSize: 11, marginTop: 2},
    addToBasket: {alignItems: 'center', justifyContent: 'center', },
    addToBasketBtn: { flexDirection: 'row', width: 125, height: 35, borderRadius: 10, backgroundColor: 'rgba(180,21,40, 0.8)' , alignItems: 'center', justifyContent: 'flex-start'},
    price: {borderTopLeftRadius: 10, borderBottomLeftRadius: 10, height: '100%', width: 50, backgroundColor: '#b41528', justifyContent: 'center', alignItems: 'center', paddingLeft: 5},
    priceTxt: {color: '#fff', fontSize: 11},
    currency: {fontSize: 12},
    decimal: {fontSize: 8},
    addtoBasketBtn: {justifyContent: 'center', alignItems: 'center', paddingLeft: 3},
    addToBasketTxt: {color: '#fff', fontSize: 11, fontWeight: '500'}

  });
};

export default createStyles;
