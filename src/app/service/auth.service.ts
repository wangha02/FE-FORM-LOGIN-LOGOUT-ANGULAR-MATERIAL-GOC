import {Injectable} from '@angular/core';
import {environment} from '../../environments/environment.prod';
import {HttpClient} from '@angular/common/http';
import {SignUpForm} from '../model/SignUpForm';
import {Observable} from 'rxjs';
import {SignInForm} from '../model/SigninForm';
import {JwtRP} from '../model/JwtRP';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private API_SIGNUP = environment.API_LOCAL + 'signup';
  private API_SIGNIN = environment.API_LOCAL + 'signin';

  constructor(private http: HttpClient) {
  }

  signUp(signUpForm: SignUpForm): Observable<any> {
    return this.http.post<any>(this.API_SIGNUP, signUpForm);
  }

  signin(signInForm: SignInForm): Observable<JwtRP> {
    return this.http.post<JwtRP>(this.API_SIGNIN, signInForm);
  }
}
