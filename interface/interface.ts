import { Action_Type, TypeReward } from "@/items/Payout&Incame";

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

export interface ContextStateInterface {
  Title: string;
  setTitle: any;
}


export interface BtcJsonResponse {
  id: string
  symbol: string
  name: string
  nameid: string
  rank: number
  price_usd: string
  percent_change_24h: string
  percent_change_1h: string
  percent_change_7d: string
  price_btc: string
  market_cap_usd: string
  volume24: number
  volume24a: number
  csupply: string
  tsupply: string
  msupply: string
}