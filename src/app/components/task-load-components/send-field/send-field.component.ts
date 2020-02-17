import {Component, Input, OnInit} from '@angular/core';
import { HttpService} from '../../../services/http.service';
import {Task} from '../../../models/task.model';

@Component({
  selector: 'app-send-field',
  templateUrl: './send-field.component.html',
  styleUrls: ['../../../../assets/styles/components/task-load-components/send-field.component.less'],
  providers: [HttpService]
})
export class SendFieldComponent implements OnInit {

  @Input() currentTask: Task;
  @Input() taskId: number;
  fileToUpload: File = null;
  fileName = '!Файл не загружен!';
  handleFileInput(files: FileList) {
    this.fileToUpload = files.item(0);
    this.fileName = files.item(0).name;
  }
  uploadFileToActivity() {
    this.http.postFile(this.fileToUpload, this.taskId).subscribe(data => {
      // do something, if upload success
    }, error => {
      console.log(error);
    });
  }
  constructor(private http: HttpService) { }

  ngOnInit() {
  }

}
