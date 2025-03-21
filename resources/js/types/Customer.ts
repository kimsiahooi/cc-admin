export type IsPayingCustomer = boolean | null;

export interface Customer {
  readonly id: number;
  date_created?: Date | null;
  date_created_gmt?: Date | null;
  date_modified?: Date | null;
  date_modified_gmt?: Date | null;
  email?: string | null;
  first_name?: string | null;
  last_name?: string | null;
  role?: string | null;
  username?: string | null;
  billing?: {
    first_name?: string | null;
    last_name?: string | null;
    company?: string | null;
    address_1?: string | null;
    address_2?: string | null;
    city?: string | null;
    state?: string | null;
    postcode?: string | null;
    country?: string | null;
    email?: string | null;
    phone?: string | null;
  } | null;
  shipping?: {
    first_name?: string | null;
    last_name?: string | null;
    company?: string | null;
    address_1?: string | null;
    address_2?: string | null;
    city?: string | null;
    state?: string | null;
    postcode?: string | null;
    country?: string | null;
  } | null;
  is_paying_customer?: IsPayingCustomer;
  avatar_url?: string | null;
}
