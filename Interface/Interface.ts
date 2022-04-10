import { Action_Type, TypeReward } from "../Items/Payout&Incame";

export interface ContextsInterface {
  NavigationSelected: number;
  setNavigationSelected: any;
}
export interface items {
  Id: number;
  Transaction: string;
  Amount: string;
  ActionType: Action_Type;
  Date: string;
  Rewards: TypeReward;
  Avg_hash: string;
}
export interface RenderDataType {
  item: items;
  index: number;
}

export enum WalletTab {
  BALANCE = "Balance",
  DEPOSITS = "Deposits",
}
