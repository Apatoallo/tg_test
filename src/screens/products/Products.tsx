/* eslint-disable prettier/prettier */
import React, { useState } from 'react';
import { View, Text } from 'react-native';
import createStyles from './styles';
import { useAppDispatch, useAppSelector } from '../../store/hooks';
import { logOut } from '../../store/slices/authSlice';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { useTheme, useThemedStyle } from '../../theme';
import { TextInput, TouchableOpacity } from 'react-native-gesture-handler';
import { productList } from '../../store/slices/productsSlice'

interface Props {
  navigation: 'Products';
}

const ProductsScreen = (props: Props) => {  
  const { theme } = useTheme()
  const dispatch = useAppDispatch();
  const products = useAppSelector( productList );
  const [data]  = useState(products?.products)
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

  return (
    <>
      <View>
        <View style={{paddingTop: 50, height: 180, backgroundColor: '#fff', justifyContent: 'space-between', paddingBottom: 30 }}>
          <View style={{flexDirection: 'row',paddingLeft: 15, paddingRight: 15, alignItems: 'center', justifyContent: 'space-between'}}>
            <TouchableOpacity onPress={() => logout()}><Text>çıkış</Text></TouchableOpacity>
            <Text>Ürünler</Text>
            <TouchableOpacity><Text>Sepet</Text></TouchableOpacity>
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
        <View style={{ backgroundColor: '#red'}}>
        
          {filteredData?.map((item: any, index: number) => (
            <View key={index+'products'} style={{height: 50, marginBottom: 2, backgroundColor: theme.color.backgroundPrimary}}>
              <Text style={{color: '#fff'}}>{item.name}</Text>
              <Text style={{color: '#fff'}}>{item.interigents}</Text>
            </View>
          ))}
          
        </View>
        
      </View>
    </>
  );
};

export default ProductsScreen;
