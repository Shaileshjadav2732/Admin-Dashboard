export type OrderItemIype = {
  name: string;
  quantity: number;
  price: number;
  photo: string;
};

export type OrderType = {
  name: string;
  email: string;
  address: {
    street: string;
    city: string;
    state: string;
    country: string;
    phone: string;
    pincode: number;
  };
  status: "processing" | "shipped" | "delivered";
  subtotal: number;
  discount: number;
  tax: number;
  total: number;
  orderItems: OrderItemIype[];
  shippingcharges: number;
  _id: string;
};
