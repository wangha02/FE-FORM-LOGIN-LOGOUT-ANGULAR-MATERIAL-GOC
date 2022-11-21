import {Component, OnInit} from '@angular/core';
import {FormControl, Validators} from '@angular/forms';
import {SignUpForm} from '../model/SignUpForm';
import {AuthService} from '../service/auth.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {
  form: any = {};
  emailFormControl = new FormControl('', [
    // Validators.required,
    Validators.email
  ]);
  hide = true;
  signUpForm: SignUpForm;
  status = 'Vui lòng điền vào biểu mẫu để tạo tài khoản';
  constructor(private authService: AuthService,
              private router: Router) {
  }

  ngOnInit(): void {
  }
  register(){
    this.signUpForm = new SignUpForm(
      this.form.name,
      this.form.username,
      this.form.email,
      this.form.password
    );
    this.authService.signUp(this.signUpForm).subscribe(data => {
      console.log('data ---->' , data);
      console.log('email --->', this.emailFormControl.status);
      if (data.message === 'nouser'){
        this.status = 'Tên người dùng đã tồn tại! Vui lòng thử lại!';
        return;
      }
      if (data.message === 'noemail'){
        this.status = 'Email đã tồn tại! Vui lòng thử lại!';
        return;
      }
      if (data.message === 'yes'){
        this.status = 'Tạo tài khoản thành công!';
        localStorage.setItem('SUCCESS_KEY',this.status);
        this.router.navigate(['login'])
      }
    },error => {
      this.status = 'Email không hợp lệ! Vui lòng thử lại!'
    });
  }
}
