export type OrderStatus = 'pending' | 'processing' | 'on-hold' | 'completed' | 'cancelled' | 'refunded' | 'failed' | 'trash';
export type Currency =
  | 'AED'
  | 'AFN'
  | 'ALL'
  | 'AMD'
  | 'ANG'
  | 'AOA'
  | 'ARS'
  | 'AUD'
  | 'AWG'
  | 'AZN'
  | 'BAM'
  | 'BBD'
  | 'BDT'
  | 'BGN'
  | 'BHD'
  | 'BIF'
  | 'BMD'
  | 'BND'
  | 'BOB'
  | 'BRL'
  | 'BSD'
  | 'BTC'
  | 'BTN'
  | 'BWP'
  | 'BYR'
  | 'BZD'
  | 'CAD'
  | 'CDF'
  | 'CHF'
  | 'CLP'
  | 'CNY'
  | 'COP'
  | 'CRC'
  | 'CUC'
  | 'CUP'
  | 'CVE'
  | 'CZK'
  | 'DJF'
  | 'DKK'
  | 'DOP'
  | 'DZD'
  | 'EGP'
  | 'ERN'
  | 'ETB'
  | 'EUR'
  | 'FJD'
  | 'FKP'
  | 'GBP'
  | 'GEL'
  | 'GGP'
  | 'GHS'
  | 'GIP'
  | 'GMD'
  | 'GNF'
  | 'GTQ'
  | 'GYD'
  | 'HKD'
  | 'HNL'
  | 'HRK'
  | 'HTG'
  | 'HUF'
  | 'IDR'
  | 'ILS'
  | 'IMP'
  | 'INR'
  | 'IQD'
  | 'IRR'
  | 'IRT'
  | 'ISK'
  | 'JEP'
  | 'JMD'
  | 'JOD'
  | 'JPY'
  | 'KES'
  | 'KGS'
  | 'KHR'
  | 'KMF'
  | 'KPW'
  | 'KRW'
  | 'KWD'
  | 'KYD'
  | 'KZT'
  | 'LAK'
  | 'LBP'
  | 'LKR'
  | 'LRD'
  | 'LSL'
  | 'LYD'
  | 'MAD'
  | 'MDL'
  | 'MGA'
  | 'MKD'
  | 'MMK'
  | 'MNT'
  | 'MOP'
  | 'MRO'
  | 'MUR'
  | 'MVR'
  | 'MWK'
  | 'MXN'
  | 'MYR'
  | 'MZN'
  | 'NAD'
  | 'NGN'
  | 'NIO'
  | 'NOK'
  | 'NPR'
  | 'NZD'
  | 'OMR'
  | 'PAB'
  | 'PEN'
  | 'PGK'
  | 'PHP'
  | 'PKR'
  | 'PLN'
  | 'PRB'
  | 'PYG'
  | 'QAR'
  | 'RON'
  | 'RSD'
  | 'RUB'
  | 'RWF'
  | 'SAR'
  | 'SBD'
  | 'SCR'
  | 'SDG'
  | 'SEK'
  | 'SGD'
  | 'SHP'
  | 'SLL'
  | 'SOS'
  | 'SRD'
  | 'SSP'
  | 'STD'
  | 'SYP'
  | 'SZL'
  | 'THB'
  | 'TJS'
  | 'TMT'
  | 'TND'
  | 'TOP'
  | 'TRY'
  | 'TTD'
  | 'TWD'
  | 'TZS'
  | 'UAH'
  | 'UGX'
  | 'USD'
  | 'UYU'
  | 'UZS'
  | 'VEF'
  | 'VND'
  | 'VUV'
  | 'WST'
  | 'XAF'
  | 'XCD'
  | 'XOF'
  | 'XPF'
  | 'YER'
  | 'ZAR'
  | 'ZMW';

export interface LineItem {
  readonly id?: number;
  name?: string | null;
  product_id?: number | null;
  variation_id?: number | null;
  quantity?: number | null;
  tax_class?: string | null;
  subtotal?: string | null;
  readonly subtotal_tax?: string | null;
  total?: string | null;
  readonly total_tax?: string | null;
  readonly taxes?:
    | {
        readonly id: number;
        total?: string | null;
        subtotal?: string | null;
      }[]
    | null;
  readonly sku?: string | null;
  readonly price?: number | null;
  image?: {
    readonly id: number;
    src?: string | null;
  } | null;
  parent_name?: string | null;
}

export interface Order {
  readonly id: number;
  parent_id?: number | null;
  readonly number?: number | null;
  readonly order_key?: string | null;
  readonly created_via?: string | null;
  readonly version?: string | null;
  status?: OrderStatus;
  currency?: Currency;
  readonly date_created?: Date | null;
  readonly date_created_gmt: Date | null;
  readonly date_modified?: Date | null;
  readonly date_modified_gmt?: Date | null;
  readonly discount_total?: string | null;
  readonly discount_tax?: string | null;
  readonly shipping_total?: string | null;
  readonly shipping_tax?: string | null;
  readonly cart_tax?: string | null;
  readonly total?: string | null;
  readonly total_tax?: string | null;
  readonly prices_include_tax?: boolean | null;
  customer_id?: number | null;
  readonly customer_ip_address?: string | null;
  readonly customer_user_agent?: string | null;
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
  readonly date_paid?: Date | null;
  readonly date_paid_gmt?: Date | null;
  readonly date_completed?: Date | null;
  readonly date_completed_gmt?: Date | null;
  readonly cart_hash?: string | null;
  meta_data?:
    | {
        readonly id?: number | null;
        key?: string | null;
        value?: string | null;
      }[]
    | null;
  line_items?: LineItem[] | null;
  tax_lines?:
    | {
        readonly id?: number;
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
        readonly id?: number;
        code?: string | null;
        discount?: string | null;
        discount_tax?: string | null;
        discount_type?: string | null;
        nominal_amount?: number | null;
        free_shipping?: boolean | null;
      }[]
    | null;
}
