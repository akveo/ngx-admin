export interface PromotionList {
  id: number;
  customerType: string;
  customerID: string;
  code: string;
  promotionType: string;
  value?: number;
  maximumDiscount: number;
  maximumDiscountValue: number;
  minimumOrderWeight: number;
  minimumOrderAmount?: number;
  quota: number;
  maximumPerUser: number;
  product: string;
  paymentMethod: string;
  deviceType: string;
  description: string;
  validDay: string;
  validFrom: string;
  validTo: string;
  image: string;
  lastUdpateTm: string;
  status: number;
  target: string;
  coverage: string;
}

export interface RootObject {
  promotionList: PromotionList[];
}
