import { TaskModel} from './models/task.model';

export const TASKS: TaskModel[] = [
  { id: 101, num: 1, name: 'Task 1', mrk: 10, ddl: 'e', level: 1, percent: 10, attemt: 2 },
  { id: 102, num: 2, name: 'Task 2', mrk: 7,  ddl: 'now', level: 1, percent: 10, attemt: 2 },
  { id: 201, num: 1, name: 'upTask 1', mrk: 10, ddl: 'tom', level: 2, percent: 10, attemt: 2 },
  { id: 202, num: 2, name: 'Task 2', mrk: 10, ddl: 'e', level: 2, percent: 10, attemt: 2 },
  { id: 203, num: 3, name: 'Task 3', mrk: 10, ddl: 'e', level: 2, percent: 10, attemt: 2 },
  { id: 301, num: 3, name: 'up Task 1', mrk: 10, ddl: 'e', level: 3, percent: 10, attemt: 2 }
];
