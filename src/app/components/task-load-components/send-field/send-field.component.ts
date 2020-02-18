import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import { HttpService} from '../../../services/http.service';
import {Task} from '../../../models/task.model';
import {TaskLoadComponent} from '../task-load/task-load.component';
import {applySourceSpanToExpressionIfNeeded} from "@angular/compiler/src/output/output_ast";

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
  formDataClear: any = new FormData();
  filesToUpload: FileList;
  fileHtmlToUpload: File = null;
  fileCssToUpload: File = null;
  fileJsToUpload: File = null;
  response: number;
  fileName = '!Файл не загружен!';
  handleFileInput(files: FileList) {
    this.filesToUpload = files;
    this.formData.append('fileHtml', files.item(0), files.item(0).name);
    this.fileName = files.item(0).name;
    if (files.item(1) !== null) {
      this.formData.append('fileCss', files.item(1), files.item(1).name);
      this.fileName += ', ' + files.item(1).name;
      if (files.item(2) !== null) {
        this.formData.append('fileJs', files.item(2), files.item(2).name);
        this.fileName += ', ' + files.item(2).name;
      }
    }
  }
  uploadFileToActivity() {
    this.http.postFile(this.formData, this.taskId).subscribe(data => {
      this.response =  data['status'];
      this.outToLoadPage.emit(data['status']);
      this.formData = this.formDataClear;
      }, error => {
      console.log(error);
    });
  }
  constructor(private http: HttpService) { }

  ngOnInit() {
  }

}
