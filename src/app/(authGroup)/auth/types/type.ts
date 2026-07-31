export type TRegisterPayload = {
  name: string;
  email: string;
  password: string;
  role?: "CUSTOMER" | "PROVIDER";
};

export type TLoginPayload = {
  email: string;
  password: string;
};