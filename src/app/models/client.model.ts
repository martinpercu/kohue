export interface Client {
  id: string;
  clientUID?: string;
  fullname?: string;
  firstname?: string;
  lastname?: string;
  email: string;
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
