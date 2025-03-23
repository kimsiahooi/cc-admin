export type ProductStatus = 'any' | 'draft' | 'pending' | 'private' | 'publish';
export type ProductType = 'simple' | 'grouped' | 'external' | 'variable';
export type ProductStockStatus = 'instock' | 'outofstock' | 'onbackorder';

export interface Product {
  readonly id: number;
  name?: string | null;
  slug?: string | null;
  readonly permalink?: string | null;
  readonly date_created?: Date | null;
  readonly date_created_gmt?: Date | null;
  readonly date_modified?: Date | null;
  readonly date_modified_gmt?: Date | null;
  type?: ProductType;
  status?: ProductStatus;
  featured?: boolean | null;
  catalog_visibility?: 'visible' | 'catalog' | 'search' | 'hidden';
  description?: string | null;
  short_description?: string | null;
  sku?: string | null;
  readonly price?: string | null;
  regular_price?: string | null;
  sale_price?: string | null;
  date_on_sale_from?: Date | null;
  date_on_sale_from_gmt?: Date | null;
  date_on_sale_to?: Date | null;
  date_on_sale_to_gmt?: Date | null;
  readonly price_html?: string | null;
  readonly on_sale?: boolean | null;
  readonly purchasable?: boolean | null;
  readonly total_sales?: number | null;
  virtual?: boolean | null;
  downloadable?: boolean | null;
  downloads?:
    | {
        id?: string | null;
        name?: string | null;
        file?: string | null;
      }[]
    | null;
  download_limit?: number | null;
  download_expiry?: number | null;
  external_url?: string | null;
  button_text?: string | null;
  tax_status?: 'taxable' | 'shipping' | 'none';
  tax_class?: string | null;
  manage_stock?: boolean | null;
  stock_quantity?: number | null;
  stock_status?: ProductStockStatus;
  backorders?: 'no' | 'notify' | 'yes';
  readonly backorders_allowed?: boolean | null;
  readonly backordered?: boolean | null;
  sold_individually?: boolean | null;
  weight?: string | null;
  dimensions?: {
    length?: string | null;
    width?: string | null;
    height?: string | null;
  } | null;
  readonly shipping_required?: boolean | null;
  readonly shipping_taxable?: boolean | null;
  shipping_class?: string | null;
  readonly shipping_class_id?: number | null;
  reviews_allowed?: boolean | null;
  readonly average_rating?: string | null;
  readonly rating_count?: number | null;
  readonly related_ids?: number[] | null;
  upsell_ids?: number[] | null;
  cross_sell_id?: number[] | null;
  parent_id?: number | null;
  purchase_note?: string | null;
  categories?:
    | {
        id?: number | null;
        readonly name?: string | null;
        readonly slug?: string | null;
      }[]
    | null;
  tags?:
    | {
        id?: number | null;
        readonly name?: string | null;
        readonly slug?: string | null;
      }[]
    | null;
  images?:
    | {
        id?: number | null;
        readonly date_created?: Date | null;
        readonly date_created_gmt?: Date | null;
        readonly date_modified?: Date | null;
        readonly date_modified_gmt?: Date | null;
        src?: string | null;
        name?: string | null;
        alt?: string | null;
      }[]
    | null;
  attributes?:
    | {
        id?: number | null;
        name?: string | null;
        position?: number | null;
        visible?: boolean | null;
        variation?: boolean | null;
        options?: string[] | null;
      }[]
    | null;
  default_attributes?:
    | {
        id?: number | null;
        name?: string | null;
        option?: string | null;
      }[]
    | null;
  readonly variations?: number[] | null;
  grouped_products?: number[] | null;
  menu_order?: number | null;
  meta_data?:
    | {
        readonly id?: number | null;
        key?: string | null;
        value?: string | null;
      }[]
    | null;
}
