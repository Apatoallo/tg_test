import { parsePhoneNumberFromString } from 'libphonenumber-js';
import { selectContact as selectContactBase } from 'react-native-select-contact';
import { request, PERMISSIONS } from 'react-native-permissions';
import { Platform } from 'react-native';

export const parsePhoneNumber = (input: string) => {
  const defaultCountryCode = input.substring(0, 1) !== '+' ? 'AE' : undefined;

  const phoneNumber = parsePhoneNumberFromString(input, defaultCountryCode);
  let countryCode = phoneNumber?.countryCallingCode;
  let number = phoneNumber?.nationalNumber;

  if (defaultCountryCode === 'AE') {
    countryCode = '+971';
  } else {
    countryCode = phoneNumber?.countryCallingCode;
  }

  return {
    number,
    countryCode,
  };
};

export const selectContact = async () => {
  let permission: any;
  if (Platform.OS === 'android') {
    permission = PERMISSIONS.ANDROID.READ_CONTACTS;
  } else if (Platform.OS === 'ios') {
    permission = PERMISSIONS.IOS.CONTACTS;
  }

  const result = await request(permission);
  if (result !== 'granted') {
    return;
  }
  return selectContactBase().then(selection => {
    if (!selection) {
      return null;
    }

    let { name, phones, emails } = selection;
    const email = emails && emails.length > 0 ? emails[0].address : '';
    return {
      fullName: name,
      phoneNumber:
        phones.find(phone => phone.type === 'mobile')?.number ??
        phones[0].number,
      email: email,
    };
  });
};
