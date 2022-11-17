import {Component, OnInit} from '@angular/core';
import {FormControl, Validators} from '@angular/forms';
import {SignUpForm} from '../model/SignUpForm';
import {AuthService} from '../service/auth.service';

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
  constructor(private authService: AuthService) {
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
      if (data.message === 'nouser'){
        this.status = 'Tên người dùng đã tồn tại! Vui lòng thử lại!';
        return;
      }
      if (data.message === 'noemail'){
        this.status = 'Email đã tồn tại! Vui lòng thử lại!';
      }
      if (data.message === 'yes'){
        this.status = 'Tạo tài khoản thành công!';
      }
    });
  }
}
