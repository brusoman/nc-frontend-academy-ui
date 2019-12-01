import { TaskModel} from './models/task.model';

export const TASKS: TaskModel[] = [
  { id: 101, num: 1, name: 'Task 1', mrk: 10, ddl: '7.10.2019', level: 1, percent: 10, attemt: 2 },
  { id: 102, num: 2, name: 'Task 2', mrk: 7,  ddl: '11.10.2019', level: 1, percent: 40, attemt: 1 },
  { id: 201, num: 1, name: 'Task 1', mrk: 10, ddl: '3.11.2019', level: 2, percent: 30, attemt: 4 },
  { id: 202, num: 2, name: 'Task 2', mrk: 8, ddl: '5.11.2019', level: 2, percent: 14, attemt: 7 },
  { id: 203, num: 3, name: 'Task 3', mrk: 4, ddl: '13.11.2019', level: 2, percent: 100, attemt: 3 },
  { id: 301, num: 3, name: 'Up_Task 1', mrk: 5, ddl: '9.12.2019', level: 3, percent: 10, attemt: 2 }
];
