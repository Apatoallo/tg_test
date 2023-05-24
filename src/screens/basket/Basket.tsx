



/* eslint-disable prettier/prettier */
import React, { useEffect, useState } from 'react';
import { View, Text } from 'react-native';
import createStyles from './styles';
import { useAppDispatch, useAppSelector } from '../../store/hooks';
import { useTheme, useThemedStyle } from '../../theme';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { productList, clearBasket, addProduct, removeProduct } from '../../store/slices/productsSlice'

interface Props {
  navigation: 'Products';
}
export function removeDuplicates(arr: any) {
  let unique = arr.reduce(function (acc: any, curr: any) {
      if (!acc.includes(curr))
          acc.push(curr);
      return acc;
  }, []);
  return unique;

}
const BasketScreen = (props: Props) => {  
  const { theme } = useTheme()
  const dispatch = useAppDispatch();
  const basket = useAppSelector( productList );
  const [quantity, setQuantity] = useState<string>('')
  const [discount, setDiscount] = useState<number>(0)
  const [totalPrice, setTotalPrice] = useState<number>(0)
  // const [data, setData] = useState<Object[]>([])
  const styles = useThemedStyle(createStyles);
  
  const clearBsket = () => {
    dispatch(clearBasket())
  }



 
  useEffect(() => {
    const productQuantity: Object = basket?.products.reduce((a, c) => { return a + c.quantity}, 0)
    setQuantity(productQuantity.toString())

    const totalPrice: any = basket?.products.filter(data => data.quantity > 0).reduce((a, c) => { return a + c.price * c.quantity}, 0)
    
    setTotalPrice(discount > 0 ? totalPrice*discount/100: totalPrice)

    if(parseInt(quantity) === 0) {
      setTotalPrice(0)
    } 
    
    if(parseInt(quantity) > 1) {
      setDiscount(30)
    } else {
      setDiscount(0)
    }
  },[basket, quantity, discount])

  const decrProduct = (productID: any) => {
    dispatch(removeProduct(productID))
  }
  const incrProduct = (productID: any) => {
    dispatch(addProduct(productID))
  }

  const emptyBasket = () => {
    
    dispatch(clearBasket())
  }

  
  return (
    <>
      <View >
        <View style={styles.headerContainer}>
          <View style={styles.header}>
            <TouchableOpacity onPress={() => props.navigation.goBack()}><Text>Geri</Text></TouchableOpacity>
            <Text>Sepet</Text>
            <View style={styles.alignEnd}>
              <Text>{quantity.toString()} Ürün</Text>
              <TouchableOpacity onPress={() => clearBsket()}>
                <Text>Tümünü Sil</Text>
              </TouchableOpacity>
            </View>
            
          </View>
          
        </View>
        <View style={styles.basketProducts}>
        
          {basket?.products.filter(data => data.quantity > 0).map((item: any, index: number) => (
            <View key={index+'basketprod'} style={styles.basketItem}>
              
              <View style={styles.itemDetails}>
                <Text style={styles.itemName}>{item.name}</Text>
                <Text style={styles.desc}>İçindekiler: {item.interigents}</Text>
              </View>
              <View style={styles.center}>
                <View style={styles.quantityCover}>
                  <TouchableOpacity onPress={()=> decrProduct(item)}>
                    <View style={styles.decBtn}>
                      <Text style={styles.decTxt}>-</Text>
                    </View>
                  </TouchableOpacity>
                  
                  <View style={styles.quantityCvr}>
                    <Text style={styles.quantityTxt}>{item.quantity}</Text>
                  </View>

                  <TouchableOpacity onPress={()=> incrProduct(item)}>
                    <View style={styles.incBtn}>
                      <Text style={styles.incTxt}>+</Text>
                    </View>
                  </TouchableOpacity>
                  
                </View>
              </View>
              
            </View>
          ))}

          {parseInt(quantity) === 0 && 
            <View style={{justifyContent: 'center', alignItems: 'center'}}><Text>Sepetiniz Boş</Text></View>
          }
          {totalPrice > 0 && 
            <>
              <View style={styles.invoice}>
                {parseInt(quantity) > 1 && <Text>Sub Total: ₺{Math.trunc(totalPrice*1.669999)}</Text>}
                {discount > 0 &&<Text>Discount:  %{discount}</Text>}
                <Text>Total: ₺{totalPrice}</Text>
              </View>
              <View style={styles.purchaseCvr}>
                <TouchableOpacity onPress={() => emptyBasket()} style={styles.purchaseBtn}> 
                  <Text style={styles.purchaseTxt}> SATIN AL</Text>
                </TouchableOpacity>
              </View>
            </>
          }
          
        </View>
        
      </View>
    </>
  );
};

export default BasketScreen;
