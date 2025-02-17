import { StripeOrderItemModel } from './stripeorderitem.model'

export interface StripeOrderModel {
  sessionId: string;
  CreatedAt?: string;
  lineItems?: [StripeOrderItemModel];
}
