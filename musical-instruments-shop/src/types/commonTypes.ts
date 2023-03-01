export type User = {
  fullName: string;
  email: string;
  password: string;
  passwordConfirmation: string;
  country: string;
  phoneNumber: string;
  shoppingCart: CartItem[];
  ordersHistory: OrdersHistory[];
  _id: string;
};

export type CartItem = {
  title: string;
  src: string;
  alt: string;
  price: number;
  quantity: number;
};

export type Product = {
  title: string;
  srcSmall: string;
  srcBig: string;
  alt: string;
  category: string[];
  brand: string;
  price: number;
  available: boolean;
  rating: number;
  totalReviews: number;
  specifications: string[];
};

export type OrdersHistory = {
  order: CartItem[];
  placementDate: string;
  orderId: string;
  delivered: boolean;
};
