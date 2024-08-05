export interface Client {
  // id?: string;
  clientUID: string;
  email: string;
  fullname?: string;
  firstname?: string;
  lastname?: string;
  phone?: string;
  birthdate?: string;
  optionalText?: string;
  byPhone?: boolean;
  byEmail?: boolean;
  agree?: boolean;
  address?: string;
  addressExtra?: string;
  state?: string;
  city?: string;
  zipCode?: string;
  country?: string;
  billDifThanShip?: boolean;
  xfirstname?: string;
  xlastname?: string;
  xaddress?: string;
  xaddressExtra?: string;
  xstate?: string;
  xcity?: string;
  xzipCode?: string;
  xcountry?: string;
}
