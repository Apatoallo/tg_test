export interface Embassy {
  nameEn: string;
  nameAr: string;
  code: string;
}
export interface EmbassyDetail extends Embassy {
  price: string;
  logoBase64: string;
  descriptionEn: string;
  descriptionAr: string;
  description: string;
}
