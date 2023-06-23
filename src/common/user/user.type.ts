import {UserTypes} from "./user-types.type";

export type User = {
  id: number | null;
  name: string;
  quantity: number | null;
  receiptDate: Date | string;
  deliveryDate: Date | string;
  type: UserTypes | string ;
  active: boolean;
}
