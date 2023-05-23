/* eslint-disable prettier/prettier */
import React, {useEffect, useLayoutEffect, useState} from 'react';
import {View, SafeAreaView, Text, TextInput, Button, Alert} from 'react-native';
import {AuthProps} from '../../navigation';
import {useAppDispatch} from '../../store/hooks';
import createStyles from './styles';
import { useTheme, useThemedStyle } from '../../theme';
import { TouchableOpacity } from 'react-native-gesture-handler';

// import {logIn} from '../store/slices/user';

const LoginScreen: React.FC<AuthProps<'Login'>> = ({navigation}) => {
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const [username, setUsername] = useState<string>('');
  const [password, setPassword] = useState<string>('');
  const [reg] = useState<RegExp>(/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w\w+)+$/)
  
  const [passErr, setPasswordErr] = useState<string>('');
  const [credentials, setCredentials] = useState<Boolean>(false);
  const [email, setEmail] = useState('');
  const [log, isLogin] = useState('');
  const [emailValidError, setEmailValidError] = useState('');
  
  const [isBtnActive, setisBtnActive] = useState(0.3);
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

  useEffect(() => {
    if((reg.test(email) && password.length >= 7)) {
      setCredentials(true)
      setisBtnActive(1)
    } else {
      setCredentials(false)
      setisBtnActive(0.3)
      
    }
  }, [email, password]);

  const login = () => {
    if(credentials) {

    
    }
    
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

            <TouchableOpacity onPress={() => login()}>
              <View style={[styles.loginBtn, {opacity: isBtnActive}]}>
                <Text style={styles.loginTitle}>Giriş Yap</Text>
              </View>
            </TouchableOpacity>
            
          </View>
      </View>
      </>
  );
};

export default LoginScreen;
