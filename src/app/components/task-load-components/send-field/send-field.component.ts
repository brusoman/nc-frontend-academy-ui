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
  fileHtmlToUpload: File = null;
  fileCssToUpload: File = null;
  fileJsToUpload: File = null;
  response: number;
  fileName = '!Файл не загружен!';
  handleFileInput(files: FileList) {
    this.fileHtmlToUpload = files.item(0);
    this.fileCssToUpload = files.item(1);
    this.fileJsToUpload = files.item(2);
    this.fileName = files.item(0).name + ', ' + files.item(1).name + ', ' + files.item(2).name;
  }
  uploadFileToActivity() {
    this.http.postFile(this.fileHtmlToUpload, this.taskId).subscribe(data => {
      this.response =  data['status'];
      if (this.fileCssToUpload !== null) {
      this.http.postFile(this.fileCssToUpload, this.taskId).subscribe( cssData => {
        this.http.postFile(this.fileJsToUpload, this.taskId).subscribe(jsData => {
          this.outToLoadPage.emit(jsData['status']);
        });
      }); }
    }, error => {
      console.log(error);
    });
  }
  constructor(private http: HttpService) { }

  ngOnInit() {
  }

}
