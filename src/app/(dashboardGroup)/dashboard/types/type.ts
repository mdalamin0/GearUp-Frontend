/* eslint-disable @typescript-eslint/no-explicit-any */
export interface ICategory {
  id: string;
  name: string;
  createdAt: string;
  updatedAT: string;
}

export interface IGearItem {
  id: string;
  title: string;
  description: string;
  specifications: {
    length: string;
    maxLoad: string;
  };
  brand: string;
  rentalPrice: string;
  stock: number;
  image: string;
  isFeatured: boolean;
  featuredAt: string | null;
  providerId: string;
  categoryId: string;
  createdAt: string;
  updatedAT: string;
  category: ICategory;
}

export type TRentalStatus =
  | "PLACED"
  | "CONFIRMED"
  | "PAID"
  | "PICKED_UP"
  | "RETURNED"
  | "CANCELLED"
  | "FAILED";

export interface IRental {
  id: string;
  customerId: string;
  gearItemId: string;
  quantity: number;
  totalAmount: string;
  status: TRentalStatus;
  startDate: string;
  endDate: string;
  createdAt: string;
  updatedAT: string;
  gearItem: IGearItem;
}

export type IPaymentStatus = "PAID" | "FAILED" | "PENDING" | "CANCELLED";

export interface IPayment {
  id: string;
  orderId: string;
  transactionId: string;
  amount: string;
  method: string;
  gateway: string;
  paidAt: string;

  meta: Record<string, any>;

  status: IPaymentStatus;

  createdAt: string;
  updatedAt: string;

  order: {
    id: string;
    customerId: string;
    gearItemId: string;
    quantity: number;
    totalAmount: string;
    status: TRentalStatus;
    startDate: string;
    endDate: string;

    gearItem: {
      id: string;
      title: string;
      image: string;
      brand: string;
      rentalPrice: string;

      category?: {
        id: string;
        name: string;
      };
    };
  };
}

export type TReviewPayload = {
  gearItemId: string;
  rating: number;
  comment: string;
};

export interface IProviderOrder {
  id: string;
  customerId: string;
  gearItemId: string;
  quantity: number;
  totalAmount: string;
  status:
    | "PLACED"
    | "CONFIRMED"
    | "PAID"
    | "PICKED_UP"
    | "RETURNED"
    | "FAILED"
    | "CANCELLED";

  startDate: string;
  endDate: string;

  createdAt: string;
  updatedAT: string;

  customer: {
    id: string;
    name: string;
    email: string;
  };

  gearItem: {
    id: string;
    title: string;
    description: string;
    specifications: {
      length: string;
      maxLoad: string;
    };
    brand: string;
    rentalPrice: string;
    stock: number;
    image: string;

    isFeatured: boolean;
    featuredAt: string | null;

    providerId: string;
    categoryId: string;

    createdAt: string;
    updatedAT: string;
  };
}


export type TGearPayload = {
  title: string;
  description: string;
  brand: string;
  rentalPrice: number;
  stock: number;
  image: string;
  categoryId: string;
  specifications: {
    length: string;
    maxLoad: string;
    material: string;
    weight: string;
  };
};