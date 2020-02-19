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
  filesToUpload: FileList;
  response: number;
  fileName = '!Файл не загружен!';
  handleFileInput(files: FileList) {
    this.filesToUpload = files;
    this.fileName = files.item(0).name;
    for (let i = 1; i < files.length; i++) {
      this.fileName += ', ' + files.item(i).name;
    }
  }
  uploadFileToActivity() {
    let formData = new FormData();
    for (let i = 0; i < this.filesToUpload.length; i++) {
      formData.append('files[]', this.filesToUpload.item(i), this.filesToUpload.item(i).name);
    }
    this.http.postFile(formData, this.taskId).subscribe(data => {
      this.response =  data['status'];
      this.outToLoadPage.emit(data['status']);
      }, error => {
      console.log(error);
    });
  }
  constructor(private http: HttpService) { }

  ngOnInit() {
  }

}
