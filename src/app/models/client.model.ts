export interface Client {
  // id?: string;
  clientUID: string;
  email: string;
  fullname?: string;
  firstname?: string;
  middlename?: string;
  lastname?: string;
  address?: string;
  addressExtra?: string;
  state?: string;
  city?: string;
  zipCode?: string;
  country?: string;
  phone?: string;
  byPhone?: boolean;
  byEmail?: boolean;
  adult?: boolean;
  agree?: boolean;
}
