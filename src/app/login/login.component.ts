import {Component, OnInit} from '@angular/core';
import {SignInForm} from '../model/SigninForm';
import {AuthService} from '../service/auth.service';
import {TokenService} from '../service/token.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  form: any = {};
  hide: boolean;
  signInForm: SignInForm;
  status = 'Đăng nhập thất bại!';

  constructor(private authService: AuthService,
              private tokenService: TokenService,
              private router: Router) {
  }

  ngOnInit(): void {
    this.status = localStorage.getItem('SUCCESS_KEY');
  }

  login() {
    this.signInForm = new SignInForm(
      this.form.username,
      this.form.password
    );
    this.authService.signin(this.signInForm).subscribe(data => {
      console.log('data ------>', data);
      if (data.token != undefined) {
        this.tokenService.setToken(data.token);
        this.tokenService.setName(data.name);
        this.tokenService.setAvatar(data.avatar);
        this.tokenService.setRole(data.roles);
        localStorage.removeItem('SUCCESS_KEY');
        this.router.navigate(['home']).then(() =>{
          location.reload();
        })
      }
      // @ts-ignore
      // tslint:disable-next-line:triple-equals
      if (data.status == 202) {
        this.status = 'Đăng nhập thất bại! Vui lòng đăng nhập lại';
        console.log('đăng nhập không thành công');
      }
    });
  }
}
