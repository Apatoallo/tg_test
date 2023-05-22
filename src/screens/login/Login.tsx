/* eslint-disable prettier/prettier */
import React, {useEffect, useLayoutEffect, useState} from 'react';
import {View, SafeAreaView, Text, TextInput, Button} from 'react-native';
import {AuthProps} from '../../navigation';
import {useAppDispatch} from '../../store/hooks';
import createStyles from './styles';
import { useTheme, useThemedStyle } from '../../theme';

// import {logIn} from '../store/slices/user';

const LoginScreen: React.FC<AuthProps<'Login'>> = ({navigation}) => {
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const [username, setUsername] = useState<string>('');
  const [password, setPassword] = useState<string>('');
  const [passErr, setPasswordErr] = useState<string>('');
  
  const dispatch = useAppDispatch();
  const styles = useThemedStyle(createStyles);
  const { theme } = useTheme();

  const handlePassword = () => {
    if (password.length <= 7) {
      setPasswordErr('')
    }
  }

  useEffect(() => {
    if(password.length < 7) {
      setPasswordErr('Lütfen şifrenizi en az 7 haneli olacak şekilde giriniz')
    } else {
      setPasswordErr('')
    }
  },[password])

  useEffect(() => {
    if (true) {
      //dispatch(clearUaePass());
    //   navigation.navigate('ProductsScreen');
    }
  }, [dispatch, navigation]);

  return (
    <>
        <View style={styles.loginHeader}>
          <Text style={styles.titleTxt}>Tıkla Gelsin</Text>
        </View>
        <View style={styles.root}>
          <View style={styles.inputContainer}>
            <TextInput 
              value={username} 
              placeholder='Username' 
              style={styles.userName}
              onChangeText={setUsername}
            />
          </View>
          <View style={styles.inputContainer}>
            <TextInput 
              value={password} 
              secureTextEntry={true} 
              placeholder='Password' 
              style={styles.password}
              onChangeText={setPassword}
            />
          </View>
          <Text>{passErr}</Text>
          <View style={styles.loginBtnContainer}>

            <View  style={styles.loginBtn}>
              <Text style={styles.loginTitle}>Giriş Yap</Text>
            </View>
            
          </View>
      </View>
      </>
  );
};

export default LoginScreen;
