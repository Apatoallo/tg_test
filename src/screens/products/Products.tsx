/* eslint-disable prettier/prettier */
import React, { useState, useEffect } from 'react';
import { View, Text } from 'react-native';
import createStyles from './styles';
import { useAppDispatch, useAppSelector } from '../../store/hooks';
import { logOut } from '../../store/slices/authSlice';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { useTheme, useThemedStyle } from '../../theme';
import { TextInput, TouchableOpacity } from 'react-native-gesture-handler';
import { productList, addToBasket, clearBasket, addProduct } from '../../store/slices/productsSlice'

interface Props {
  navigation: 'Products';
}

const ProductsScreen = (props: Props) => {  
  const { theme } = useTheme()
  const dispatch = useAppDispatch();
  const products = useAppSelector( productList );
  const [data]  = useState(products?.products)
  const [quantity, setQuantity]  = useState([])

  const [filteredData, setFilteredData]  = useState(products?.products)
  const styles = useThemedStyle(createStyles);
  
  const logout = () => {
    
    AsyncStorage.setItem('isLoggedin', '')
    .then(() => {
      dispatch(logOut({isLoggedIn: false}))
    })
    .catch((err)=> {
      console.log(err)
    })
  }  
  useEffect(() => {
    const productQuantity = products?.products.reduce((a, c) => { return a + c.quantity}, 0)
    setQuantity(productQuantity)
  },[products])

  const searchFilteredData = (text: string) => {

    if(text) {
      function findInValues(arr: any, value: any) {
        value = String(value).toLowerCase();
        return arr.filter(o =>
          Object.entries(o).some(entry =>
            String(entry[1]).toLowerCase().includes(value)
          )
        );
      }
      setFilteredData(findInValues(data, text))
    } else {
      setFilteredData(products?.products)
    }
  }

  const basket = (item: Object) => {
    console.log(products.basket, 'isINCLUDE')
    if (item !== null) {
      dispatch(addToBasket(item))
    }
    
  }
  const clearBsket = () => {
   dispatch(clearBasket())
 }

  return (
    <>
      <View >
        <View style={styles.productsContainer}>
          <View style={styles.header}>
            <TouchableOpacity onPress={() => logout()}>
              <Text>Çıkış Yap</Text>
            </TouchableOpacity>
            <Text>Ürünler</Text>
            <TouchableOpacity onPress={() => props.navigation.navigate('Basket')}>
              <Text>{quantity} Sepet</Text>
            </TouchableOpacity>
          
          </View>
          <View style={styles.srchContainer}>
            <TextInput 
              placeholder='Ara' 
              style={styles.searchBar}
              value={filteredData}
              autoCorrect={false}
              autoCapitalize="none"
              onChangeText={value => {
                searchFilteredData(value);
              }}
            />
          </View>
        </View>
        <View style={{ backgroundColor: '#fff',height: '100%'}}>
        
          {filteredData?.map((item: any, index: number) => (
            <View key={index+'products'} style={styles.item}>
              <View style={styles.productDetails}>
                <Text style={styles.productName}>{item.name}</Text>
                <Text style={styles.descTxt}>İçindekiler: {item.interigents}</Text>
              </View>
              <View style={styles.addToBasket}>
                <TouchableOpacity onPress={() => dispatch(addProduct(item))} style={styles.addToBasketBtn}>
                  <View style={styles.price}>
                    <Text style={styles.priceTxt}><Text style={styles.currency}>₺</Text>{item.price}<Text style={styles.decimal}>.00 </Text></Text>
                  </View>
                  <View style={styles.addtoBasketBtn}>
                    <Text style={styles.addToBasketTxt}>Sepete Ekle</Text>
                  </View>
                </TouchableOpacity>
              </View>
              
            </View>
          ))}
          
        </View>
        
        
      </View>
    </>
  );
};

export default ProductsScreen;
