export class UserTask {
  name: string;
  deadline: string;
  condition: string;
  bestScreen: string;
  tries: number;
  bestTry: string;
  triesData: TryData[];
}
class TryData {
  time: string;
  percent: number;
  difference: string;
  userScreen: string;
}

