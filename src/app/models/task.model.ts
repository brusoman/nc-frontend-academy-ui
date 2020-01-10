export class Task {
  id: number;
  taskName: string;
  section: string;
}

export class TaskDescription {
  description: string;
  deadLine: string;
  name: string;
  urlSample: string;
}

export class Attempt {
  time: string;
  progress: number;
  urlUserPicture: string;
  urlSamplePicture: string;
}


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
