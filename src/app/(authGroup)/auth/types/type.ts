export type TRegisterPayload = {
  name: string;
  email: string;
  password: string;
  role?: "CUSTOMER" | "PROVIDER";
};
