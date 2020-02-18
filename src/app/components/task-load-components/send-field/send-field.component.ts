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
  formData: any = new FormData();
  filesToUpload: Array<File> = [];
  fileHtmlToUpload: File = null;
  fileCssToUpload: File = null;
  fileJsToUpload: File = null;
  response: number;
  fileName = '!Файл не загружен!';
  handleFileInput(files: any) {
    this.filesToUpload = files.target.files as Array<File>;
  }
  uploadFileToActivity() {
    const formData: any = new FormData();
    const files: Array<File> = this.filesToUpload;
    formData.append('file', files[0], files[0].name);
    for (let i = 1; i < files.length; i++) {
      formData.append('files', files[i], files[i]['name']);
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
