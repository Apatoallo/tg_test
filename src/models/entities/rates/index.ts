export interface RatesRequest {
  origin?: {
    countryCode: string;
    city: string;
    regionCode: string;
  };
  destination?: {
    countryCode: string;
    city: string;
    regionCode: string;
  };
  dimensions?: {
    length: number;
    height: number;
    width: number;
    unit: string;
  };
  weight: {
    value: number;
    unit: string;
  };
  serviceType: string;
  shipmentType?: string;
  returnService?: boolean;
  declaredAmount?: {
    amount: number;
    currency: string;
  };
  contentTypeCode?: string;
}

export interface PricingOption {
  contentTypeCodeEn?: string;
  contentTypeCodeAr?: string;
  shippingMethod?: {
    code: string;
    nameAr: string;
    nameEn: string;
    type: string;
    transitTimeEn: string;
    transitTimeAr: string;
  };
  totalVAT?: number;
  totalPrice?: number;
  extraCharges?: [
    {
      titleEn: string;
      titleAr: string;
      vat: number;
      amount: number;
      total: number;
    },
  ];
  additionalServices?: [
    {
      title: string;
      vat: number;
      price: number;
      total: number;
    },
  ];
}

export interface RatesResponse {
  pricingOptions: PricingOption[];
}
