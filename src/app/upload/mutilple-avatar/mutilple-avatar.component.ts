import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {$e} from 'codelyzer/angular/styles/chars';
import {AngularFireStorage, AngularFireStorageReference} from '@angular/fire/storage';
import {error} from 'ng-packagr/lib/utils/log';

@Component({
  selector: 'app-mutilple-avatar',
  templateUrl: './mutilple-avatar.component.html',
  styleUrls: ['./mutilple-avatar.component.scss']
})
export class MutilpleAvatarComponent implements OnInit {
  selectFile: File[];
  arrayFileInFireBase: AngularFireStorageReference;
  arrUrlFileFormFireBase = [];
  @Output()
  arrUrl = new EventEmitter<String[]>();
  checkUpLoad = false;

  constructor(private afService: AngularFireStorage) {
  }

  ngOnInit(): void {
  }

  upLoadMultipleFile($event) {
    console.log('$event --->', $event);
    this.selectFile = $event.target.files;
  }

  upLoad() {
    this.checkUpLoad = true;
    for (let i = 0; i < this.selectFile.length; i++) {
      this.arrayFileInFireBase = this.afService.ref(this.selectFile[i].name);
      this.arrayFileInFireBase.put(this.selectFile[i]).then(data => {
        return data.ref.getDownloadURL();
      }).then(url => {
        this.checkUpLoad = false;
        this.arrUrlFileFormFireBase.push(url);
        this.arrUrl.emit(this.arrUrlFileFormFireBase);
      }).catch(error => {
        `Upload không thành công! ${error}`;
      });
    }
  }


}
