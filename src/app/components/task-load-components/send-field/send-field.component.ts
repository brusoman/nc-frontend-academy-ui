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
  filesToUpload: FileList;
  fileHtmlToUpload: File = null;
  fileCssToUpload: File = null;
  fileJsToUpload: File = null;
  response: number;
  fileName = '!Файл не загружен!';
  handleFileInput(files: FileList) {
    this.filesToUpload = files;
    this.formData.append('file', files.item(0), files.item(0).name);
    this.fileName = files.item(0).name;
    if (files.item(1) !== undefined) {
      for (let i = 1; i < 2; i++) {
        this.formData.append('file', files.item(i), files.item(i).name);
        this.fileName += ', ' + files.item(i).name;
      }
    }
  }
  uploadFileToActivity() {
    this.http.postFile(this.formData[0], this.taskId).subscribe(data => {
      if (this.formData !== undefined) {
        this.http.postFile(this.formData[1], this.taskId).subscribe( data1 => {
          this.http.postFile(this.formData[2], this.taskId).subscribe( data2 => {
            this.response = data2['status'];
            this.outToLoadPage.emit(data2['status']);
            }
          );
        });
      } else {
      this.response =  data['status'];
      this.outToLoadPage.emit(data['status']);
      }}, error => {
      console.log(error);
    });
  }
  constructor(private http: HttpService) { }

  ngOnInit() {
  }

}
