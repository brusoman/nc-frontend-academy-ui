export class UserTask {
  condition: string;
  name: string;
  deadLine: string;
  bestTry: string;
  triesData: TryData[];
}

export class TryData {
  time: string;
  progress: number;
  urlSamplePicture: string;
  urlUserPicture: string;
}

export class TaskDescription {
  description: string;
  name: string;
  deadLine: string;
  urlSample: string;
}
