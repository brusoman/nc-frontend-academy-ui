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
  number: number;
  section: number;
  description: number;
  attemptsMax: number;
  taskName: string;
}
