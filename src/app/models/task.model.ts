export interface TaskModel {
  id: number;
  num: number;
  name: string;
  mrk: number;
  ddl: string;
  level: number;
  percent: number;
  attemt: number;
}
export class Task {
  id: number;
  name: string;
  section: string;
}
