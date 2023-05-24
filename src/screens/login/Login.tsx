/* eslint-disable prettier/prettier */
import React, { useEffect, useState } from 'react';
import { View, Text, TextInput } from 'react-native';
import {AuthProps} from '../../navigation';
import createStyles from './styles';
import { useThemedStyle } from '../../theme';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { useAppDispatch, useAppSelector } from '../../store/hooks';
import { logIn } from '../../store/slices/authSlice';
// Async Storage
import AsyncStorage from '@react-native-async-storage/async-storage';

import {
  authentication
} from '../../store/slices/authSlice';
import { CredentialsContext } from '../../components/credentialContext';

const LoginScreen: React.FC<AuthProps<'Login'>> = ({navigation}) => {
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState<string>('');
  const [errMsg, setloginErr] = useState<string>('');
  const [reg] = useState<RegExp>(/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w\w+)+$/)
  const [passErr, setPasswordErr] = useState<string>('');
  const [credentials, setCredentials] = useState<Boolean>(false);  
  const [log, isLogin] = useState('');
  const [emailValidError, setEmailValidError] = useState('');
  const [isBtnActive, setisBtnActive] = useState(0.3);

  const dispatch = useAppDispatch();
  const auth = useAppSelector(authentication);

  const styles = useThemedStyle(createStyles);

  useEffect(() => {
    if(password.length < 7) {
      setPasswordErr('Lütfen şifrenizi en az 7 haneli olacak şekilde giriniz')
    } else {
      setPasswordErr('')
    }
  },[password])

  useEffect(() => {
    if((reg.test(email) && password.length >= 7)) {
      setCredentials(true)
      setisBtnActive(1)
    } else {
      setCredentials(false)
      setisBtnActive(0.3)
      
    }
  }, [email, password]);

  
  const handleValidEmail = (val: any) => {
    
    if (val.length === 0) {
      setEmailValidError('Lütfen email adresinizi giriniz');
    } else if (reg.test(val) === false) {
      setEmailValidError('Lütfen geçerli bir email adresi giriniz');
    } else if (reg.test(val) === true) {
      setEmailValidError('');
    }
  };

  const login = (email: string, password: string) => {
    if(credentials) {

      const objectsEqual = (o1:{}, o2:{}) =>Object.keys(o1).length === Object.keys(o2).length && Object.keys(o1).every((p: any) => o1[p] === o2[p]);
      
      const data = {
        email: email,
        password: password,
      }
      
      if( objectsEqual(auth.loginUser, data) ) {
        persistLogin( data, 'success', '200' )
      }else {
        isLogin('Failed to login')
      }
    }
  }

  const handleMsg = (errMsg: string, _status: string | null) => {
    setloginErr(errMsg)
  }
  
  const persistLogin = (credentials: any, msg: string, status: string) => {
    AsyncStorage.setItem('isLoggedin', msg)
    .then(() => {
      handleMsg( msg, status)
      dispatch(logIn({isLoggedIn: true}))
    })
    .catch((error)=> {
      console.log(error);
      handleMsg('Persisting login failed', null);
    })
  }
    
  return (
    <>
        <View style={styles.loginHeader}>
          <Text style={styles.titleTxt}>Tıkla Gelsin</Text>
        </View>
        <View style={styles.root}>
          <View style={styles.inputContainer}>
            <TextInput 
              placeholder='Username' 
              style={styles.userName}
              value={email}
              autoCorrect={false}
              autoCapitalize="none"
              onChangeText={value => {
                setEmail(value);
                handleValidEmail(value);
              }}
            />
            <View style={styles.valdErrs}>
              {emailValidError ? <Text style={styles.valdTxt}>{emailValidError}</Text> : null}
            </View>
          </View>
          
          
          <View style={styles.inputContainer}>
            <TextInput 
              value={password} 
              secureTextEntry={true} 
              placeholder='Password' 
              style={styles.password}
              onChangeText={setPassword}
            />
            <View style={styles.valdErrs}>
              <Text style={styles.valdTxt}>{passErr}</Text>
            </View>
          </View>
         
          <View style={styles.loginBtnContainer}>

            <TouchableOpacity onPress={() => login(email, password)}>
              <View style={[styles.loginBtn, {opacity: isBtnActive}]}>
                <Text style={styles.loginTitle}>Giriş Yap {log}</Text>
              </View>
            </TouchableOpacity>
            
          </View>
      </View>
      </>
  );
};

export default LoginScreen;
