import { Component, OnInit } from '@angular/core';
import { HttpService} from '../../../services/http.service';

@Component({
  selector: 'app-send-field',
  templateUrl: './send-field.component.html',
  styleUrls: ['../../../../assets/styles/components/task-load-components/send-field.component.less']
})
export class SendFieldComponent implements OnInit {

  fileToUpload: File = null;
  fileName = '!Файл не загружен!';
  handleFileInput(files: FileList) {
    this.fileToUpload = files.item(0);
    this.fileName = files.item(0).name;
  }
  uploadFileToActivity() {
    this.http.postFile(this.fileToUpload).subscribe(data => {
      // do something, if upload success
    }, error => {
      console.log(error);
    });
  }
  constructor(private http: HttpService) { }

  ngOnInit() {
  }

}
