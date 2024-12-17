export interface StripeOrderItemModel {
  amount_total?: number;
  currency?: string;
  description?: string;
  quantity?: number;
  price?: {
    metadata: {};
    unit_amount: number;
  }
}
