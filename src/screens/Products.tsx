/* eslint-disable prettier/prettier */
import React, {useEffect, useState} from 'react';
import {View, Text, Button} from 'react-native';
import {AuthProps} from '../navigation';
import {useAppDispatch} from '../store/hooks';
import {logIn} from '../store/slices/user';

const ProductsScreen: React.FC<AuthProps<'Login'>> = ({navigation}) => {
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const [link, setLink] = useState<boolean>(false);
  const dispatch = useAppDispatch();
  useEffect(() => {
    if (true) {
      //dispatch(clearUaePass());
      navigation.navigate('ProductsScreen');
    }
  }, [dispatch, navigation]);

  return (
    <>
      <View>
        <Text>asdasd LOGIN SCREEN</Text>
        <Button
          title={'address.not_now'}
          onPress={() => {
            navigation.navigate('Welcome');
            dispatch(logIn({name: 'more.test_name', isGuest: false}));
          }}
        />
      </View>
    </>
  );
};

export default ProductsScreen;
