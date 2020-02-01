export class UserTask {
  name: string;
  deadline: string;
  condition: string;
  bestScreen: string;
  tries: number;
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
  deadLine: string;
  name: string;
  urlSample: string;

}
