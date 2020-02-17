import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import { HttpService} from '../../../services/http.service';
import {Task} from '../../../models/task.model';
import {TaskLoadComponent} from '../task-load/task-load.component';

@Component({
  selector: 'app-send-field',
  templateUrl: './send-field.component.html',
  styleUrls: ['../../../../assets/styles/components/task-load-components/send-field.component.less'],
  providers: [HttpService, TaskLoadComponent]
})
export class SendFieldComponent implements OnInit {

  @Input() currentTask: Task;
  @Input() taskId: number;
  @Output() public  outToLoadPage = new EventEmitter();
  fileToUpload: File = null;
  response: number;
  fileName = '!Файл не загружен!';
  handleFileInput(files: FileList) {
    this.fileToUpload = files.item(0);
    this.fileName = files.item(0).name;
  }
  uploadFileToActivity() {
    this.http.postFile(this.fileToUpload, this.taskId).subscribe(data => {
      this.response =  data['status'];
      this.outToLoadPage.emit(data['status'])
    }, error => {
      console.log(error);
    });
  }
  constructor(private http: HttpService, private taskLoad: TaskLoadComponent) { }

  ngOnInit() {
  }

}
