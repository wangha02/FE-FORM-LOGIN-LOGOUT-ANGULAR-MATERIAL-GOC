import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {AngularFireStorage, AngularFireStorageReference} from '@angular/fire/storage';
import {error} from 'ng-packagr/lib/utils/log';

@Component({
  selector: 'app-singer-avatar',
  templateUrl: './singer-avatar.component.html',
  styleUrls: ['./singer-avatar.component.scss']
})
export class SingerAvatarComponent implements OnInit {
  //Khai Bao'
  selectFile: File;
  fileInFireBase: AngularFireStorageReference;
  urlFile: String;
  checkUpLoad = false;
  @Output()
  urlFormFireBase = new EventEmitter<String>();

  constructor(private afService: AngularFireStorage) {
  }

  ngOnInit(): void {
  }

  onChangeFile($event) {
    console.log('event -------->', $event);
    this.selectFile = $event.target.files[0];
  }

  //button upload hứng
  upLoad() {
    this.checkUpLoad = true;
    this.fileInFireBase = this.afService.ref(this.selectFile.name);
    this.fileInFireBase.put(this.selectFile).then(data => {
      return data.ref.getDownloadURL(); //trả về 1 đường dẫn từ file base
    }).then(url => {
      this.checkUpLoad = false;
      this.urlFile = url;
      this.urlFormFireBase.emit(this.urlFile);
      return this.urlFile;
    }).catch(error => {
      `Upload không thành công! ${error}`;
    });
  }
}
