interface IPaymentAss {
  id: number;
  sum: number;
  from: string;
  to: string;
  mane: string;
}

type PaymentOmit = Omit<IPaymentAss, "id">;
type PaymentPick = Pick<IPaymentAss, "id" | "sum" >;

type Ex = 'primary' | 'default'

type ExtractEx = Extract<Ex|PaymentOmit, string>
type ExcludeEx = Exclude<'from'|'to'|PaymentPick, string>