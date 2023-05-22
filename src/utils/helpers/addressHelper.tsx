import {
  AddressBase,
  AddressFull,
  GisAddressItem,
  GisAddressResponse,
  GoogleMapsAutocompleteResponse,
} from '../../models/entities/map';
import { ItemType } from '../../components';
import { Scope, TranslateOptions } from 'i18n-js';
import { LocationsResponse } from '../../models/entities/api';

interface AddressPriority {
  building?: GisAddressItem | null;
  branch?: GisAddressItem | null;
  street?: GisAddressItem | null;
  adm_div_division?: GisAddressItem | null;
  adm_div_district?: GisAddressItem | null;
  adm_div_district_area?: GisAddressItem | null;
  adm_div_city?: GisAddressItem | null;
  adm_div_living_area?: GisAddressItem | null;
  adm_div_place?: GisAddressItem | null;
  adm_div_region?: GisAddressItem | null;
  adm_div_settlement?: GisAddressItem | null;
  adm_div_country?: GisAddressItem | null;
}

export const getShortTitleFromAddress = (
  address: LocationsResponse | null,
): string => {
  return address?.locationSummary?.freeFormAddress
    ? address.locationSummary?.freeFormAddress
    : '';
};

export const convertGoogleMapsAutocompleteResponseToItems = (
  response: GoogleMapsAutocompleteResponse | null,
): ItemType<any>[] => {
  let result: ItemType<any>[] = [];
  if (!response || !response.predictions || response.predictions.length === 0) {
    return result;
  }
  response.predictions.map(v => {
    result.push({
      label: v.description,
      value: v,
    });
  });
  return result;
};

export const convertGisAddressResponseToItems = (
  response: GisAddressResponse | null,
): ItemType<any>[] => {
  let result: ItemType<any>[] = [];
  if (
    !response ||
    !response.result ||
    !response.result.items ||
    response.result.items.length === 0
  ) {
    return result;
  }
  response.result.items.map(v => {
    result.push({
      label: v.address_name || v.full_name,
      value: v,
    });
  });
  return result;
};

export const convertLocationsResponseToAddressBase = async (
  address: LocationsResponse | null,
): Promise<AddressBase> => {
  return {
    country: address?.locationSummary?.country || '',
    city: address?.locationSummary?.emirate || '',
    region: address?.locationSummary?.region || '',
    street: address?.locationSummary?.streetName || '',
    building: address?.locationSummary?.buildingNumber || '',
  };
};

export const convertGisAddressResponseToAddressBase = async (
  response: GisAddressResponse | null,
): Promise<AddressBase> => {
  let result: AddressBase = {
    country: '',
    city: '',
    region: '',
    street: '',
    building: '',
    apartment: '',
  };
  if (
    !response ||
    !response.result ||
    !response.result.items ||
    response.result.items.length === 0
  ) {
    return result;
  }
  const v = findBestItemInAddressResponse(response);
  if (v && v.adm_div && v.adm_div.length > 0) {
    // Adm
    v.adm_div.map(div => {
      if (div.type === 'country') {
        result.country = div.name;
        if (result.country === 'UAE') {
          result.country = 'United Arab Emirates';
        }
      } else if (div.type === 'city') {
        result.city = div.name;
      } else if (div.type === 'division') {
        result.region = div.name;
      }
    });
    // Address
    if (v.address && v.address.components && v.address.components.length > 0) {
      v.address.components.map(comp => {
        if (comp.type === 'street_number') {
          result.street = comp.street;
          result.building = comp.number;
        }
      });
    }
    if (!result.region && v.type === 'adm_div' && v.subtype === 'district') {
      result.region = v.name;
    }
    //console.log('findBestItemInAddressResponse: ' + JSON.stringify(result));
    return result;
  }
  return result;
};

export const findBestItemInAddressResponse = (
  response: GisAddressResponse | null,
): GisAddressItem | null => {
  let result: GisAddressItem | null = null;
  if (
    !response ||
    !response.result ||
    !response.result.items ||
    response.result.items.length === 0
  ) {
    return result;
  }
  let indexes: AddressPriority = {};
  response.result.items.map(v => {
    if (v.type === 'building') {
      indexes.building = v;
    } else if (v.type === 'branch') {
      indexes.branch = v;
    } else if (v.type === 'street') {
      indexes.street = v;
    } else if (v.type === 'adm_div') {
      if (v.subtype === 'city') {
        indexes.adm_div_city = v;
      } else if (v.subtype === 'district_area') {
        indexes.adm_div_district_area = v;
      } else if (v.subtype === 'district') {
        indexes.adm_div_district = v;
      } else if (v.subtype === 'division') {
        indexes.adm_div_division = v;
      } else if (v.subtype === 'living_area') {
        indexes.adm_div_living_area = v;
      } else if (v.subtype === 'place') {
        indexes.adm_div_place = v;
      } else if (v.subtype === 'region') {
        indexes.adm_div_region = v;
      } else if (v.subtype === 'settlement') {
        indexes.adm_div_settlement = v;
      } else if (v.subtype === 'country') {
        indexes.adm_div_country = v;
      }
    }
  });
  Object.values(indexes).map(v => {
    if (v && !result) {
      result = v;
    }
  });
  return result;
};

export const getAddressTitleFromFull = (address: AddressFull) => {
  return (
    address?.street +
    ', ' +
    address?.region +
    ', ' +
    address?.city +
    ', ' +
    address?.country
  );
};

export const getAddressShortFromFull = (address: AddressFull) => {
  return address.region + ', ' + address.city + ', ' + address.country;
};

export const getAddressStringFromFull = (
  t: (scope: Scope, options?: TranslateOptions) => string,
  address: AddressFull,
) => {
  return (
    address.street +
    t('address.building_prefix') +
    address.building +
    t('address.apartment_prefix') +
    address.apartment +
    t('address.zip_prefix') +
    address.zip
  );
};
