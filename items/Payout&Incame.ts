import { items } from "../interface/interface";

export enum Action_Type {
  PAY_OUT = "PAY_OUT",
  INCOMES = "INCOMES",
}
export enum TypeReward {
  REFERRAL_REWARD = "Referral reward",
  DONATION = "Donation",
  FPPS = "FPPS+",
}

export const PAY_OUT_DATA: items[] = [
  { Id: 1, Amount: '0.00002812', ActionType: Action_Type.INCOMES, Avg_hash: '37.00', Date: '2024/03/29 07:49:07', Transaction: "473d58c64aebcb4ef5a8c869d5a0b70c302d5f6b97229c25fd1d6f425c2bbb71", Rewards: TypeReward.FPPS },
  { Id: 2, Amount: '0.00003458', ActionType: Action_Type.INCOMES, Avg_hash: '45.50', Date: '2024/03/30 08:01:51', Transaction: '473d58c64aebcb4ef5a8c869d5a0b70c302d5f6b97229c25fd1d6f425c2bbb71', Rewards: TypeReward.FPPS },
  { Id: 3, Amount: '0.00003504', ActionType: Action_Type.INCOMES, Avg_hash: '46.10', Date: '2024/03/31 08:10:13', Transaction: '473d58c64aebcb4ef5a8c869d5a0b70c302d5f6b97229c25fd1d6f425c2bbb71', Rewards: TypeReward.FPPS },
  { Id: 4, Amount: '0.00003298', ActionType: Action_Type.INCOMES, Avg_hash: '43.40', Date: '2024/04/01 08:13:06', Transaction: '473d58c64aebcb4ef5a8c869d5a0b70c302d5f6b97229c25fd1d6f425c2bbb71', Rewards: TypeReward.FPPS },
  { Id: 5, Amount: '0.00003131', ActionType: Action_Type.INCOMES, Avg_hash: '41.20', Date: '2024/04/02 07:59:51', Transaction: '473d58c64aebcb4ef5a8c869d5a0b70c302d5f6b97229c25fd1d6f425c2bbb71', Rewards: TypeReward.FPPS },
  { Id: 6, Amount: '0.00003572', ActionType: Action_Type.INCOMES, Avg_hash: '47.00', Date: '2024/04/03 07:52:56', Transaction: '473d58c64aebcb4ef5a8c869d5a0b70c302d5f6b97229c25fd1d6f425c2bbb71', Rewards: TypeReward.FPPS },
  { Id: 7, Amount: '0.00003534', ActionType: Action_Type.INCOMES, Avg_hash: '46.50', Date: '2024/04/04 07:56:08', Transaction: '473d58c64aebcb4ef5a8c869d5a0b70c302d5f6b97229c25fd1d6f425c2bbb71', Rewards: TypeReward.FPPS },
  { Id: 8, Amount: '0.00003344', ActionType: Action_Type.INCOMES, Avg_hash: '44.00', Date: '2024/04/05 08:03:03', Transaction: '473d58c64aebcb4ef5a8c869d5a0b70c302d5f6b97229c25fd1d6f425c2bbb71', Rewards: TypeReward.FPPS },
  { Id: 9, Amount: '0.00003149', ActionType: Action_Type.INCOMES, Avg_hash: '41.30', Date: '2024/04/06 08:02:29', Transaction: '45313fb3d7fb4b1cb2d0be84201f8cea', Rewards: TypeReward.FPPS },
  { Id: 10, Amount: '0.00003511', ActionType: Action_Type.INCOMES, Avg_hash: '46.20', Date: '2024/04/07 08:03:30', Transaction: '473d58c64aebcb4ef5a8c869d5a0b70c302d5f6b97229c25fd1d6f425c2bbb71', Rewards: TypeReward.FPPS },
  { Id: 11, Amount: '0.00003268', ActionType: Action_Type.INCOMES, Avg_hash: '43.00', Date: '2024/04/08 08:08:10', Transaction: '473d58c64aebcb4ef5a8c869d5a0b70c302d5f6b97229c25fd1d6f425c2bbb71', Rewards: TypeReward.FPPS },
  { Id: 12, Amount: '0.00003420', ActionType: Action_Type.INCOMES, Avg_hash: '45.00', Date: '2024/04/09 07:49:33', Transaction: '473d58c64aebcb4ef5a8c869d5a0b70c302d5f6b97229c25fd1d6f425c2bbb71', Rewards: TypeReward.FPPS },
  { Id: 13, Amount: '0.00003048', ActionType: Action_Type.INCOMES, Avg_hash: '40.10', Date: '2024/04/10 07:56:14', Transaction: '473d58c64aebcb4ef5a8c869d5a0b70c302d5f6b97229c25fd1d6f425c2bbb71', Rewards: TypeReward.FPPS },
  { Id: 14, Amount: '0.00001606', ActionType: Action_Type.INCOMES, Avg_hash: '21.70', Date: '2024/04/11 08:07:38', Transaction: '473d58c64aebcb4ef5a8c869d5a0b70c302d5f6b97229c25fd1d6f425c2bbb71', Rewards: TypeReward.FPPS },
  { Id: 15, Amount: '0.00003448', ActionType: Action_Type.INCOMES, Avg_hash: '46.60', Date: '2024/04/12 08:13:12', Transaction: '473d58c64aebcb4ef5a8c869d5a0b70c302d5f6b97229c25fd1d6f425c2bbb71', Rewards: TypeReward.FPPS },
  { Id: 16, Amount: '0.00003360', ActionType: Action_Type.INCOMES, Avg_hash: '45.40', Date: '2024/04/13 07:58:10', Transaction: '473d58c64aebcb4ef5a8c869d5a0b70c302d5f6b97229c25fd1d6f425c2bbb71', Rewards: TypeReward.FPPS },
  { Id: 17, Amount: '0.00003049', ActionType: Action_Type.INCOMES, Avg_hash: '41.20', Date: '2024/04/14 07:48:06', Transaction: '473d58c64aebcb4ef5a8c869d5a0b70c302d5f6b97229c25fd1d6f425c2bbb71', Rewards: TypeReward.FPPS },
  { Id: 18, Amount: '0.00003404', ActionType: Action_Type.INCOMES, Avg_hash: '46.00', Date: '2024/04/15 07:47:34', Transaction: '473d58c64aebcb4ef5a8c869d5a0b70c302d5f6b97229c25fd1d6f425c2bbb71', Rewards: TypeReward.FPPS },
  { Id: 19, Amount: '0.00003419', ActionType: Action_Type.INCOMES, Avg_hash: '46.20', Date: '2024/04/16 08:06:28', Transaction: '473d58c64aebcb4ef5a8c869d5a0b70c302d5f6b97229c25fd1d6f425c2bbb71', Rewards: TypeReward.FPPS },
  { Id: 20, Amount: '0.00003404', ActionType: Action_Type.INCOMES, Avg_hash: '46.00', Date: '2024/04/17 08:09:13', Transaction: '473d58c64aebcb4ef5a8c869d5a0b70c302d5f6b97229c25fd1d6f425c2bbb71', Rewards: TypeReward.FPPS },
  { Id: 21, Amount: '0.00002982', ActionType: Action_Type.INCOMES, Avg_hash: '40.30', Date: '2024/04/18 08:07:42', Transaction: '473d58c64aebcb4ef5a8c869d5a0b70c302d5f6b97229c25fd1d6f425c2bbb71', Rewards: TypeReward.FPPS },
  { Id: 22, Amount: '0.00003278', ActionType: Action_Type.INCOMES, Avg_hash: '44.30', Date: '2024/04/19 07:50:34', Transaction: '473d58c64aebcb4ef5a8c869d5a0b70c302d5f6b97229c25fd1d6f425c2bbb71', Rewards: TypeReward.FPPS },
  { Id: 23, Amount: '0.00003182', ActionType: Action_Type.INCOMES, Avg_hash: '43.00', Date: '2024/04/20 08:01:53', Transaction: '473d58c64aebcb4ef5a8c869d5a0b70c302d5f6b97229c25fd1d6f425c2bbb71', Rewards: TypeReward.FPPS },
  { Id: 24, Amount: '0.00003411', ActionType: Action_Type.INCOMES, Avg_hash: '46.10', Date: '2024/04/21 07:58:23', Transaction: '473d58c64aebcb4ef5a8c869d5a0b70c302d5f6b97229c25fd1d6f425c2bbb71', Rewards: TypeReward.FPPS },
  { Id: 25, Amount: '0.00003426', ActionType: Action_Type.INCOMES, Avg_hash: '46.30', Date: '2024/04/22 07:52:29', Transaction: '473d58c64aebcb4ef5a8c869d5a0b70c302d5f6b97229c25fd1d6f425c2bbb71', Rewards: TypeReward.FPPS },
  { Id: 26, Amount: '0.00003478', ActionType: Action_Type.INCOMES, Avg_hash: '47.00', Date: '2024/04/23 08:00:32', Transaction: '473d58c64aebcb4ef5a8c869d5a0b70c302d5f6b97229c25fd1d6f425c2bbb71', Rewards: TypeReward.FPPS },
  { Id: 27, Amount: '0.00003419', ActionType: Action_Type.INCOMES, Avg_hash: '46.20', Date: '2024/04/24 08:06:47', Transaction: '473d58c64aebcb4ef5a8c869d5a0b70c302d5f6b97229c25fd1d6f425c2bbb71', Rewards: TypeReward.FPPS },
  { Id: 28, Amount: '0.00003195', ActionType: Action_Type.INCOMES, Avg_hash: '45.00', Date: '2024/04/25 08:08:02', Transaction: '473d58c64aebcb4ef5a8c869d5a0b70c302d5f6b97229c25fd1d6f425c2bbb71', Rewards: TypeReward.FPPS },
  { Id: 29, Amount: '0.00003152', ActionType: Action_Type.INCOMES, Avg_hash: '44.40', Date: '2024/04/26 08:07:55', Transaction: '473d58c64aebcb4ef5a8c869d5a0b70c302d5f6b97229c25fd1d6f425c2bbb71', Rewards: TypeReward.FPPS },
  { Id: 30, Amount: '0.00003266', ActionType: Action_Type.INCOMES, Avg_hash: '46.00', Date: '2024/04/27 07:45:39', Transaction: '473d58c64aebcb4ef5a8c869d5a0b70c302d5f6b97229c25fd1d6f425c2bbb71', Rewards: TypeReward.FPPS },
  { Id: 31, Amount: '0.00003294', ActionType: Action_Type.INCOMES, Avg_hash: '46.40', Date: '2024/04/28 07:59:08', Transaction: '473d58c64aebcb4ef5a8c869d5a0b70c302d5f6b97229c25fd1d6f425c2bbb71', Rewards: TypeReward.FPPS },
  { Id: 32, Amount: '0.00003266', ActionType: Action_Type.INCOMES, Avg_hash: '46.00', Date: '2024/04/29 07:49:17', Transaction: '473d58c64aebcb4ef5a8c869d5a0b70c302d5f6b97229c25fd1d6f425c2bbb71', Rewards: TypeReward.FPPS },
  { Id: 33, Amount: '0.00003196', ActionType: Action_Type.INCOMES, Avg_hash: '43.60', Date: '2024/04/30 08:12:57', Transaction: '473d58c64aebcb4ef5a8c869d5a0b70c302d5f6b97229c25fd1d6f425c2bbb71', Rewards: TypeReward.FPPS },
  { Id: 34, Amount: '0.00003195', ActionType: Action_Type.INCOMES, Avg_hash: '45.00', Date: '2024/05/01 08:11:41', Transaction: '473d58c64aebcb4ef5a8c869d5a0b70c302d5f6b97229c25fd1d6f425c2bbb71', Rewards: TypeReward.FPPS },
  { Id: 35, Amount: '0.00001257', ActionType: Action_Type.INCOMES, Avg_hash: '17.70', Date: '2024/05/02 08:02:16', Transaction: '473d58c64aebcb4ef5a8c869d5a0b70c302d5f6b97229c25fd1d6f425c2bbb71', Rewards: TypeReward.FPPS }
].reverse();

