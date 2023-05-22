export interface BaseApiError {
  baseErrorCode?: number;
}

export interface TrackingResponse {
  trackingNumber?: string;
  trackingReferenceNo?: string;
  isPaid?: boolean;
  sender: TrackingContact;
  receiver: TrackingContact;
  lastStatus: TrackingStatus;
  title?: string;
  charges?: string;
  date?: string;
  events?: TrackingEvent[];
}

export interface TrackingContact {
  name?: string;
  contactNumber?: string;
}

export interface TrackingStatus {
  code?: string;
  descriptionAr?: string;
  descriptionEn?: string;
}

export interface TrackingEvent {
  timeStamp?: string;
  status: TrackingStatus;
  locationAr?: string;
  locationEn?: string;
  url?: string;
}

export interface ProblemDetails extends BaseApiError {
  type?: string;
  title?: string;
  status?: number;
  detail?: string;
  instance?: string;
}
export interface GeneralResponse {
  caseReferenceNumber: string;
  message: string;
  activationCode: string;
}

export interface OfficeResponse {
  list: OfficeItem[];
  count: number;
}

export type OfficeTypeEn = 'PUDO' | 'Shelters' | 'Emirates Post Office';

export interface OfficeItem {
  officeId: string;
  code?: string;
  typeEn?: OfficeTypeEn;
  typeAr?: string;
  mainOfficeId?: string;
  zipCode?: string;
  nameEn?: string;
  nameAr?: string;
  defaultEmail?: string;
  addressEn?: string;
  addressAr?: string;
  latitude?: string;
  longitude?: string;
  workingDaysEn?: string;
  workingDaysAr?: string;
  workingTiming?: string;
  distanceInMeters?: number;
  publicPOBoxNumber?: string;
  publicPOBoxName?: string;
  phoneNumber?: string;
  navigation?: any;
}

export interface OfficeProblemDetails extends BaseApiError {
  type?: string;
  title?: string;
  status?: number;
  detail?: string;
  instance?: string;
}

export interface UaePassToken {
  access_token: string;
  scope: string;
  token_type: string;
  expires_in: number;
}

export interface UaePassUserInfo {
  sub: string;
  userType: string;
  fullnameAR: string;
  fullnameEN: string;
  gender: string;
  lastnameEN: string;
  nationalityAR: string;
  firstnameEN: string;
  idn: string;
  idType: string;
  email: string;
  spuuid: string;
  nationalityEN: string;
  firstnameAR: string;
  lastnameAR: string;
  acr: string;
  mobile: string;
  titleEN: string;
  titleAR: string;
  amr: string[];
  dateOfBirth?: string;
}

export interface LocationsResponse {
  locationSummary?: {
    country?: string;
    countryCodeISO3?: string;
    emirate?: string;
    region?: string;
    municipality?: string;
    division?: string;
    streetName?: string;
    streetNumber?: string;
    buildingNumber?: string;
    freeFormAddress?: string;
  };
  locationDetails?: {
    addresses?: {
      addressDetails?: {
        routeNumbers?: string[];
        countryCode?: string;
        countrySubdivision?: string;
        municipality?: string;
        postalCode?: string;
        municipalitySubdivision?: string;
        country?: string;
        countryCodeISO3?: string;
        freeformAddress: string;
        localName: string;
        buildingNumber: string;
        streetName: string;
        streetNumber: string;
      };
      position: string;
    };
  };
}

export interface OtpSendResponse {
  transactionId: string;
}
