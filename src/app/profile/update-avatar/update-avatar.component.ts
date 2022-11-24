import {Component, OnInit} from '@angular/core';
import {ChangerAvatar} from '../../model/ChangerAvatar';
import {AuthService} from '../../service/auth.service';
import {TokenService} from '../../service/token.service';
import {MatDialog} from '@angular/material/dialog';
import {DialogComponent} from '../../dialog/dialog/dialog.component';

@Component({
  selector: 'app-update-avatar',
  templateUrl: './update-avatar.component.html',
  styleUrls: ['./update-avatar.component.scss']
})
export class UpdateAvatarComponent implements OnInit {
  singerChangeAvatar: ChangerAvatar;
  checkUpload = false;
  constructor(private authService: AuthService,
              private tokenService: TokenService,
              private dialog: MatDialog) {
  }

  ngOnInit(): void {
  }

  changeAvatar($event) {
    this.checkUpload = true;
    this.singerChangeAvatar = new ChangerAvatar($event); //even là avatar
    this.authService.updateAvatar(this.singerChangeAvatar).subscribe(data => {
      console.log('data --------------->', data);
      if (data.message === 'yes') {
        this.tokenService.setAvatar($event);
        this.dialog.open(DialogComponent);
        // location.reload()
      }
    });
  }
}
