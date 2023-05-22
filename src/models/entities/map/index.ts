/*
export interface MarkerData {
  latlng: LatLng;
  title: string;
  description: string;
}
*/

export interface GisAddressResponse {
  meta: GisAddressMeta;
  result: GisAddressResult;
}

export interface GisAddressMeta {
  api_version: string;
  code: number;
  issue_date: string;
}

export interface GisAddressResult {
  items: GisAddressItem[];
  total: number;
}

export interface GisPoint {
  lat: number;
  lon: number;
}

export interface GisAddressItem {
  address_name?: string;
  building_name?: string;
  full_name?: string;
  id?: string;
  name?: string;
  point?: GisPoint;
  purpose_name?: string;
  type?: string;
  subtype?: string;
  address_comment?: string;
  address?: GisAddressInfo;
  adm_div?: GisAdmDiv[];
}

export interface GisAddressInfo {
  building_id: string;
  components: GisAddressComponents[];
  makani: string;
}

export interface GisAddressComponents {
  number: string;
  street: string;
  street_id: string;
  type: string;
}

export interface GisAdmDiv {
  id: string;
  name: string;
  type: string;
}

export interface AddressBase {
  country?: string;
  city?: string;
  region?: string;
  street?: string;
  building?: string;
  apartment?: string;
}

export interface AddressInfo extends AddressBase {
  zip?: string;
  details?: string;
  type?: string;
  nickname?: string;
  default?: boolean;
}

export interface AddressContact {
  firstName?: string;
  lastName?: string;
  fullName?: string;
  companyName?: string;
  email?: string;
  mobileCode?: string;
  mobilePhone?: string;
  landlineCode?: string;
  landlinePhone?: string;
  country?: string;
  passportNumber?: string;
}

export interface AddressFull extends AddressInfo, AddressContact {
  id: string;
  favorite?: boolean;
}

export interface PreferredAddress {
  id: string;
  name?: string;
  nameAr?: string;
}

export interface PickedDeliveryAddress extends AddressInfo {
  name?: string;
  nameAr?: string;
  address?: string;
  isFavourites?: boolean;
}

export interface GoogleMapsAutocompleteResponse {
  predictions: GoogleMapsAutocompleteItem[];
  status: string;
}

export interface GoogleMapsAutocompleteItem {
  description?: string;
  place_id?: string;
}

export interface GoogleMapsDetailsResponse {
  result: GoogleMapsDetailsResult;
  status: string;
}

export interface GoogleMapsDetailsResult {
  geometry?: {
    location?: {
      lat: string;
      lng: string;
    };
  };
}

/*
  name: string; // fullName
  phone: string; // mobileCode + mobilePhone
  postal: string; // zip
  extra: string; // details

  title: string;
  short: string;
 */
