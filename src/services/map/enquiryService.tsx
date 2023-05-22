import {
  AttachmentType,
  ComplaintRequestBody,
  EnquiryRequestBody,
  EnquiryType,
  FoundItemType,
  InternationalShipmentType,
  IssueType,
  TrackEnquiryResult,
  TransactionType,
} from '../../models/entities/enquiry';
import apiConfig from '../../config/api';
import { enquiryClient } from './enquiryClient';
import { GeneralResponse } from '../../models/entities/api';

export interface IEnquiryService {
  getEnquiryTypes(): Promise<EnquiryType[]>;
  getEnquiryReasons(): Promise<EnquiryType[]>;
  getEnquirySuggestions(): Promise<EnquiryType[]>;
  getEnquiryComplaints(): Promise<EnquiryType[]>;
  getEnquirySupplierIssues(): Promise<IssueType[]>;
  getEnquiryCourierIssues(): Promise<IssueType[]>;
  getEnquiryFoundItems(): Promise<FoundItemType[]>;
  getTransactionTypes(enquiryType: string): Promise<TransactionType[]>;
  getTrackEnquiry(
    referenceNumber: string,
    email: string,
    mobileNumber: string,
  ): Promise<TrackEnquiryResult>;
  getAttachmentTypes(type: string): Promise<AttachmentType[]>;
  getInternationalShipment(awb: string): Promise<InternationalShipmentType>;
  postEnquiry(enquiryBody: EnquiryRequestBody): Promise<GeneralResponse>;
  postComplaint(enquiryBody: ComplaintRequestBody): Promise<GeneralResponse>;
}

export const EnquiryService: IEnquiryService = {
  getEnquiryTypes: () =>
    enquiryClient.get(apiConfig.ENQUIRY_TYPES).then(response => response.data),
  getEnquiryReasons: () =>
    enquiryClient
      .get(apiConfig.ENQUIRY_REASONS)
      .then(response => response.data),
  getEnquirySuggestions: () =>
    enquiryClient
      .get(apiConfig.ENQUIRY_SUGGESTION_TYPES)
      .then(response => response.data),
  getEnquiryComplaints: () =>
    enquiryClient
      .get(apiConfig.ENQUIRY_COMPLAINT_TYPES)
      .then(response => response.data),
  getEnquirySupplierIssues: () =>
    enquiryClient
      .get(apiConfig.ENQUIRY_SUPPLIER_ISSUES)
      .then(response => response.data),
  getEnquiryCourierIssues: () =>
    enquiryClient
      .get(apiConfig.ENQUIRY_COURIER_ISSUES)
      .then(response => response.data),
  getEnquiryFoundItems: () =>
    enquiryClient
      .get(apiConfig.ENQUIRY_FOUND_ITEMS)
      .then(response => response.data),
  getTransactionTypes: (enquiryType: string) =>
    enquiryClient
      .get(apiConfig.TRANSACTION_TYPES + `?request=${enquiryType}`)
      .then(response => response.data),
  getAttachmentTypes: (type: string) =>
    enquiryClient
      .get(apiConfig.ENQUIRY_ATTACHMENT_ITEMS + `?type=${type}`)
      .then(response => response.data),
  getInternationalShipment: (awb: string) =>
    enquiryClient
      .get(apiConfig.ENQUIRY_INTERNATIONAL_SHIPMENTS + `?awb=${awb}`)
      .then(response => response.data),
  getTrackEnquiry: (
    referenceNumber: string,
    email: string,
    mobileNumber: string,
  ) =>
    enquiryClient
      .get(
        apiConfig.ENQUIRY_POST +
          `?ReferenceNumber=${referenceNumber}&Email=${email}&MobileNumber=${mobileNumber}`,
      )
      .then(response => response.data),
  postEnquiry: (enquiryBody: EnquiryRequestBody) =>
    enquiryClient.post(apiConfig.ENQUIRY_POST, enquiryBody).then(response => {
      return response.data;
    }),
  postComplaint: (enquiryBody: ComplaintRequestBody) =>
    enquiryClient
      .post(apiConfig.ENQUIRY_POST_COMPLAINT, enquiryBody)
      .then(response => {
        return response.data;
      }),
};
