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
  {
    Id: 1,
    Amount: "0.00013772",
    ActionType: Action_Type.INCOMES,
    Avg_hash: "27.51",
    Date: "24.02.2022 08:00:08",
    Transaction:
      "473d58c64aebcb4ef5a8c869d5a0b70c302d5f6b97229c25fd1d6f425c2bbb71",
    Rewards: TypeReward.FPPS,
  },
  {
    Id: 2,
    Amount: "0.00040491",
    ActionType: Action_Type.INCOMES,
    Avg_hash: "80.25",
    Date: "23.02.2022 07:53:28",
    Transaction:
      "473d58c64aebcb4ef5a8c869d5a0b70c302d5f6b97229c25fd1d6f425c2bbb71",
    Rewards: TypeReward.FPPS,
  },
  {
    Id: 3,
    Amount: "0.00041172",
    ActionType: Action_Type.INCOMES,
    Avg_hash: "82.1",
    Date: "22.02.2022 07:58:01",
    Transaction:
      "473d58c64aebcb4ef5a8c869d5a0b70c302d5f6b97229c25fd1d6f425c2bbb71",
    Rewards: TypeReward.FPPS,
  },
  {
    Id: 4,
    Amount: "0.00040531",
    ActionType: Action_Type.INCOMES,
    Avg_hash: "80.28",
    Date: "21.02.2022 7:50:08",
    Transaction:
      "473d58c64aebcb4ef5a8c869d5a0b70c302d5f6b97229c25fd1d6f425c2bbb71",
    Rewards: TypeReward.FPPS,
  },
  {
    Id: 5,
    Amount: "0.00040511",
    ActionType: Action_Type.INCOMES,
    Avg_hash: "80.21",
    Date: "20.02.2022 08:02:18",
    Transaction:
      "473d58c64aebcb4ef5a8c869d5a0b70c302d5f6b97229c25fd1d6f425c2bbb71",
    Rewards: TypeReward.FPPS,
  },
  {
    Id: 6,
    Amount: "0.00032135",
    ActionType: Action_Type.INCOMES,
    Avg_hash: "63.12",
    Date: "19.02.2022 07:48:02",
    Transaction:
      "473d58c64aebcb4ef5a8c869d5a0b70c302d5f6b97229c25fd1d6f425c2bbb71",
    Rewards: TypeReward.FPPS,
  },
  {
    Id: 7,
    Amount: "0.00038991",
    ActionType: Action_Type.INCOMES,
    Avg_hash: "78.45",
    Date: "18.02.2022 08:01:20",
    Transaction:
      "473d58c64aebcb4ef5a8c869d5a0b70c302d5f6b97229c25fd1d6f425c2bbb71",
    Rewards: TypeReward.FPPS,
  },
  {
    Id: 8,
    Amount: "0.00041298",
    ActionType: Action_Type.INCOMES,
    Avg_hash: "82.15",
    Date: "17.02.2022 07:31:58",
    Transaction:
      "473d58c64aebcb4ef5a8c869d5a0b70c302d5f6b97229c25fd1d6f425c2bbb71",
    Rewards: TypeReward.FPPS,
  },
  {
    Id: 9,
    Amount: "0.00040151",
    ActionType: Action_Type.INCOMES,
    Avg_hash: "81.05",
    Date: "16.02.2022 07:50:08",
    Transaction:
      "473d58c64aebcb4ef5a8c869d5a0b70c302d5f6b97229c25fd1d6f425c2bbb71",
    Rewards: TypeReward.FPPS,
  },
  {
    Id: 10,
    Amount: "0.00036799",
    ActionType: Action_Type.INCOMES,
    Avg_hash: "77.14",
    Date: "15.02.2022 08:05:12",
    Transaction:
      "473d58c64aebcb4ef5a8c869d5a0b70c302d5f6b97229c25fd1d6f425c2bbb71",
    Rewards: TypeReward.FPPS,
  },
  {
    Id: 11,
    Amount: "0.0003882",
    ActionType: Action_Type.INCOMES,
    Avg_hash: "78.56",
    Date: "14.02.2022 07:56:58",
    Transaction:
      "473d58c64aebcb4ef5a8c869d5a0b70c302d5f6b97229c25fd1d6f425c2bbb71",
    Rewards: TypeReward.FPPS,
  },
  {
    Id: 12,
    Amount: "0.00038915",
    ActionType: Action_Type.INCOMES,
    Avg_hash: "78.01",
    Date: "13.02.2022 08:05:43",
    Transaction:
      "473d58c64aebcb4ef5a8c869d5a0b70c302d5f6b97229c25fd1d6f425c2bbb71",
    Rewards: TypeReward.FPPS,
  },
  {
    Id: 13,
    Amount: "0.00041215",
    ActionType: Action_Type.INCOMES,
    Avg_hash: "81.45",
    Date: "12.02.2022 08:04:01",
    Transaction:
      "473d58c64aebcb4ef5a8c869d5a0b70c302d5f6b97229c25fd1d6f425c2bbb71",
    Rewards: TypeReward.FPPS,
  },
  {
    Id: 14,
    Amount: "0.00040312",
    ActionType: Action_Type.INCOMES,
    Avg_hash: "80.05",
    Date: "11.02.2022 07:40:12",
    Transaction:
      "473d58c64aebcb4ef5a8c869d5a0b70c302d5f6b97229c25fd1d6f425c2bbb71",
    Rewards: TypeReward.FPPS,
  },
  {
    Id: 15,
    Amount: "0.00012752",
    ActionType: Action_Type.INCOMES,
    Avg_hash: "25.89",
    Date: "10.02.2022 07:58:01",
    Transaction:
      "473d58c64aebcb4ef5a8c869d5a0b70c302d5f6b97229c25fd1d6f425c2bbb71",
    Rewards: TypeReward.FPPS,
  },
  {
    Id: 16,
    Amount: "0.00002550",
    ActionType: Action_Type.INCOMES,
    Avg_hash: "5.12",
    Date: "09.02.2022 07:39:24",
    Transaction:
      "473d58c64aebcb4ef5a8c869d5a0b70c302d5f6b97229c25fd1d6f425c2bbb71",
    Rewards: TypeReward.FPPS,
  },
  {
    Id: 17,
    Amount: "0.00039776",
    ActionType: Action_Type.INCOMES,
    Avg_hash: "78.42",
    Date: "08.02.2022 08:08:01",
    Transaction:
      "473d58c64aebcb4ef5a8c869d5a0b70c302d5f6b97229c25fd1d6f425c2bbb71",
    Rewards: TypeReward.FPPS,
  },
  {
    Id: 18,
    Amount: "0.00041826",
    ActionType: Action_Type.INCOMES,
    Avg_hash: "82.14",
    Date: "07.02.2022 08:10:04",
    Transaction:
      "473d58c64aebcb4ef5a8c869d5a0b70c302d5f6b97229c25fd1d6f425c2bbb71",
    Rewards: TypeReward.FPPS,
  },
  {
    Id: 19,
    Amount: "0.00041202",
    ActionType: Action_Type.INCOMES,
    Avg_hash: "81.21",
    Date: "06.02.2022 07:56:18",
    Transaction:
      "473d58c64aebcb4ef5a8c869d5a0b70c302d5f6b97229c25fd1d6f425c2bbb71",
    Rewards: TypeReward.FPPS,
  },
  {
    Id: 20,
    Amount: "0.000407991",
    ActionType: Action_Type.INCOMES,
    Avg_hash: "80.43",
    Date: "05.02.2022 07:14:01",
    Transaction:
      "473d58c64aebcb4ef5a8c869d5a0b70c302d5f6b97229c25fd1d6f425c2bbb71",
    Rewards: TypeReward.FPPS,
  },
  {
    Id: 21,
    Amount: "0.00036215",
    ActionType: Action_Type.INCOMES,
    Avg_hash: "71.23",
    Date: "04.02.2022 07:40:08",
    Transaction:
      "473d58c64aebcb4ef5a8c869d5a0b70c302d5f6b97229c25fd1d6f425c2bbb71",
    Rewards: TypeReward.FPPS,
  },
  {
    Id: 22,
    Amount: "0.00030603",
    ActionType: Action_Type.INCOMES,
    Avg_hash: "60.51",
    Date: "03.02.2022 07:45:05",
    Transaction:
      "473d58c64aebcb4ef5a8c869d5a0b70c302d5f6b97229c25fd1d6f425c2bbb71",
    Rewards: TypeReward.FPPS,
  },
  {
    Id: 23,
    Amount: "0.00040199",
    ActionType: Action_Type.INCOMES,
    Avg_hash: "79.26",
    Date: "02.02.2022 07:50:06",
    Transaction:
      "473d58c64aebcb4ef5a8c869d5a0b70c302d5f6b97229c25fd1d6f425c2bbb71",
    Rewards: TypeReward.FPPS,
  },
  {
    Id: 24,
    Amount: "0.00039777",
    ActionType: Action_Type.INCOMES,
    Avg_hash: "78.98",
    Date: "01.02.2022 08:12:01",
    Transaction:
      "473d58c64aebcb4ef5a8c869d5a0b70c302d5f6b97229c25fd1d6f425c2bbb71",
    Rewards: TypeReward.FPPS,
  },
  {
    Id: 25,
    Amount: "0.00041290",
    ActionType: Action_Type.INCOMES,
    Avg_hash: "81.24",
    Date: "31.01.2022 08:14:10",
    Transaction:
      "473d58c64aebcb4ef5a8c869d5a0b70c302d5f6b97229c25fd1d6f425c2bbb71",
    Rewards: TypeReward.FPPS,
  },
  {
    Id: 26,
    Amount: "0.00040813",
    ActionType: Action_Type.INCOMES,
    Avg_hash: "80.21",
    Date: "30.01.2022 08:12:01",
    Transaction:
      "473d58c64aebcb4ef5a8c869d5a0b70c302d5f6b97229c25fd1d6f425c2bbb71",
    Rewards: TypeReward.FPPS,
  },
  {
    Id: 27,
    Amount: "0.00027034",
    ActionType: Action_Type.INCOMES,
    Avg_hash: "53.71",
    Date: "29.01.2022 08:00:08",
    Transaction:
      "473d58c64aebcb4ef5a8c869d5a0b70c302d5f6b97229c25fd1d6f425c2bbb71",
    Rewards: TypeReward.FPPS,
  },
  {
    Id: 28,
    Amount: "0.00040795",
    ActionType: Action_Type.INCOMES,
    Avg_hash: "80.23",
    Date: "28.01.2022 08:14:05",
    Transaction:
      "473d58c64aebcb4ef5a8c869d5a0b70c302d5f6b97229c25fd1d6f425c2bbb71",
    Rewards: TypeReward.FPPS,
  },
  {
    Id: 29,
    Amount: "0.00041306",
    ActionType: Action_Type.INCOMES,
    Avg_hash: "81.94",
    Date: "27.01.2022 07:56:48",
    Transaction:
      "473d58c64aebcb4ef5a8c869d5a0b70c302d5f6b97229c25fd1d6f425c2bbb71",
    Rewards: TypeReward.FPPS,
  },
  {
    Id: 30,
    Amount: "0.00040296",
    ActionType: Action_Type.INCOMES,
    Avg_hash: "79.83",
    Date: "26.01.2022 07:59:14",
    Transaction:
      "473d58c64aebcb4ef5a8c869d5a0b70c302d5f6b97229c25fd1d6f425c2bbb71",
    Rewards: TypeReward.FPPS,
  },
  {
    Id: 31,
    Amount: "0.00039786",
    ActionType: Action_Type.INCOMES,
    Avg_hash: "78.41",
    Date: "25.01.2022 07:56:12",
    Transaction:
      "473d58c64aebcb4ef5a8c869d5a0b70c302d5f6b97229c25fd1d6f425c2bbb71",
    Rewards: TypeReward.FPPS,
  },
  {
    Id: 32,
    Amount: "0.00040806",
    ActionType: Action_Type.INCOMES,
    Avg_hash: "80.12",
    Date: "24.01.2022 07:58:04",
    Transaction:
      "473d58c64aebcb4ef5a8c869d5a0b70c302d5f6b97229c25fd1d6f425c2bbb71",
    Rewards: TypeReward.FPPS,
  },
  {
    Id: 33,
    Amount: "0.00041316",
    ActionType: Action_Type.INCOMES,
    Avg_hash: "81.25",
    Date: "23.01.2022 07:50:12",
    Transaction:
      "473d58c64aebcb4ef5a8c869d5a0b70c302d5f6b97229c25fd1d6f425c2bbb71",
    Rewards: TypeReward.FPPS,
  },
  {
    Id: 34,
    Amount: "0.00030604",
    ActionType: Action_Type.INCOMES,
    Avg_hash: "60.12",
    Date: "22.01.2022 07:40:54",
    Transaction:
      "473d58c64aebcb4ef5a8c869d5a0b70c302d5f6b97229c25fd1d6f425c2bbb71",
    Rewards: TypeReward.FPPS,
  },
  {
    Id: 35,
    Amount: "0.00027084",
    ActionType: Action_Type.INCOMES,
    Avg_hash: "53.12",
    Date: "21.01.2022 07:45:14",
    Transaction:
      "473d58c64aebcb4ef5a8c869d5a0b70c302d5f6b97229c25fd1d6f425c2bbb71",
    Rewards: TypeReward.FPPS,
  },
];
