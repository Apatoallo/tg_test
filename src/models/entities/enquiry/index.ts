import { ContactDetails } from './../index';

export interface EnquiryType {
  nameEn: string;
  nameAr: string;
  code: string;
}
export interface IssueType {
  issueNameEn: string;
  issueNameAr: string;
  code: string;
}
export interface FoundItemType {
  actionEn: string;
  actionAr: string;
  code: string;
}
export interface TransactionType {
  transactionTypeEn: string;
  transactionTypeAr: string;
  code: string;
}
export interface AttachmentType {
  enquiryCode: string;
  crmCode: string;
  isRequired: boolean;
  name: string;
  nameAr: string;
}
export interface Attachment {
  fileBase64: string;
  fileName: string;
  fileType: string;
}

export interface MoneyOrder {
  transactionType: string;
  orderReferenceNumber: string;
  invoiceDate: string;
}

export interface EnquiryRequestBody {
  inquiryType: string;
  trackingNumber?: string;
  message: string;
  contactDetails?: ContactDetails;
  moneyOrder?: MoneyOrder;
  postalShipmentDetails?: {
    shipper?: ContactDetails;
    consignee?: ContactDetails;
    content?: string;
    invoiceValue?: number;
    chargesPaid?: string;
    inquiryType?: string;
    foundAction?: string;
  };
  language?: string;
  attachments?: Attachment[];
}
export interface InternationalShipmentType {
  postalDetails: {
    postingDate: string;
    postOffice: string;
    weight: number;
  };
  shipper: ContactDetails;
  consignee: ContactDetails;
}

export interface ComplaintRequestBody {
  complaintType: string;
  trackingNumber?: string;
  message: string;
  contactDetails?: ContactDetails;
  moneyOrder?: MoneyOrder;
  courierLicensingComplaintDetails?: {
    isRegisterd?: boolean;
    companyName: string;
    registeredNumber: string;
    issueType: string;
  };
  language?: string;
  attachments?: Attachment[];
}

export enum EnquiryCategory {
  TRA_INQ = 'TRA_INQ',
  LIC_INQ = 'LIC_INQ',
  MON_INQ = 'MON_INQ',
  GEN_INQ = 'GEN_INQ',
  GEN_SF = 'GEN_SF',
  WEB_SF = 'WEB_SF',
  SUP_CMPT = 'SUP_CMPT',
  GEN_CMPT = 'GEN_CMPT',
  CLC_CMPT = 'CLC_CMPT',
  SHP_CMPT = 'SHP_CMPT',
  INT_INQ = 'INT_INQ',
  CMP = 'CMP',
  PSS = 'PSS',
}

export interface TrackEnquiryResult {
  referenceNumber: string;
  createdDate: string;
  contactChannel: string;
  formName: string;
  inquiryType: string;
  moneyOrder: MoneyOrder;
  message: string;
  trackingNumber: string;
  customerContactDetails: ContactDetails;
  inquiryStage: string;
  inquiryStatus: string;
}
export interface EnquiryFull extends TrackEnquiryResult {
  bookmarked?: boolean;
  canBookmark?: boolean;
  receiver?: ContactDetails;
}
