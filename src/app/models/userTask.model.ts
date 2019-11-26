export class UserTask {
  attemptNumber: number;
  code: string;
  log: string;
  progress: number;
  taskDto: TaskDto;
  time: string;
  userTaskPK: UserTaskPK;
}
class TaskDto {
  attemptsMax: number;
  description: string;
  id: number;
  number: number;
  section: string;
  taskName: string;
}
class UserTaskPK {
  taskId: number;
  userId: number;
}
