export type userTask = {
  title: string;
  tasks: userChildTask[];
};

export type userChildTask = {
  name: string;
  routineIndex: number;
  timeType: userChildTaskTimeType;
  week?: userChildTask_week;
  weekConfirm?: userChildTask_week;
};

export type userChildTaskTimeType = "week" | "weekConfirm" | null;

export type userChildTask_week = {
  require: number;
  receive: number[];
  start: number;
};

export const ARRAY_WEEK = ["月", "火", "水", "木", "金", "土", "日", "祝"];

export const WEEK_OPTION = [
  { name: "平日のみ", targetWeek: ["月", "火", "水", "木", "金"] },
  { name: "休･祝日のみ", targetWeek: ["土", "日", "祝"] },
  {
    name: "全ての日",
    targetWeek: ["月", "火", "水", "木", "金", "土", "日", "祝"],
  },
  { name: "カスタム", targetWeek: null },
];
