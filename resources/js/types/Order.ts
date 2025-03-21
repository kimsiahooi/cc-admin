export type OrderStatus = 'pending' | 'processing' | 'on-hold' | 'completed' | 'cancelled' | 'refunded' | 'failed' | 'trash';

export interface LineItem {
  readonly id: number;
  name?: string | null;
  product_id?: number | null;
  variation_id?: number | null;
  quantity?: number | null;
  tax_class?: string | null;
  subtotal?: string | null;
  subtotal_tax?: string | null;
  total?: string | null;
  total_tax?: string | null;
  tax?:
    | {
        readonly id: number;
        total?: string | null;
        subtotal?: string | null;
      }[]
    | null;
  sku?: string | null;
  price?: number | null;
  image?: {
    readonly id: number;
    src?: string | null;
  } | null;
  parent_name?: string | null;
}

export interface Order {
  readonly id: number;
  parent_id?: number | null;
  number?: number | null;
  order_key?: string | null;
  created_via?: string | null;
  version?: string | null;
  status?: OrderStatus;
  currency?: string | null;
  date_created?: Date | null;
  date_created_gmt: Date | null;
  date_modified?: Date | null;
  date_modified_gmt?: Date | null;
  discount_total?: string | null;
  discount_tax?: string | null;
  shipping_total?: string | null;
  shipping_tax?: string | null;
  total?: string | null;
  total_tax?: string | null;
  prices_include_tax?: boolean | null;
  customer_id?: number | null;
  customer_ip_address?: string | null;
  customer_user_agent?: string | null;
  customer_note?: string | null;
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
  payment_method?: string | null;
  payment_method_title?: string | null;
  transaction_id?: string | null;
  date_paid?: Date | null;
  date_paid_gmt?: Date | null;
  date_completed?: Date | null;
  date_completed_gmt?: Date | null;
  cart_hash?: string | null;
  line_items?: LineItem[] | null;
  tax_lines?:
    | {
        readonly id: number;
        rate_code?: string | null;
        rate_id?: number | null;
        label?: string | null;
        compound?: boolean | null;
        tax_total?: string | null;
        shipping_tax_total?: string | null;
      }[]
    | null;
  coupon_lines?:
    | {
        readonly id: number;
        code?: string | null;
        discount?: string | null;
        discount_tax?: string | null;
        discount_type?: string | null;
        nominal_amount?: number | null;
        free_shipping?: boolean | null;
      }[]
    | null;
}
