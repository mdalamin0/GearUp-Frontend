export interface ICategory {
  id: string;
  name: string;
  createdAt: string;
  updatedAT: string;
}

export interface IGear {
  id: string;
  title: string;
  description: string;

  specifications: Record<string, unknown>;

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

export interface IGearResponse {
  success: boolean;
  message: string;
  data: IGear[];
}

export type TGearDetails = {
  gear: {
    id: string;
    title: string;
    description: string;
    specifications: Record<string, string>;
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

    category: {
      id: string;
      name: string;
      createdAt: string;
      updatedAT: string;
    };

    provider: {
      id: string;
      name: string;
      email: string;
    };
  };
};

type IUser = {
  success: boolean;
  message: string;
  data: {
      id: string;
      name: string;
      email: string;
      status: string;
      role: string;
      createdAt: string;
      updatedAt: string;
    };
  };


export type NavbarProps = {
  user: IUser;
};