import {Injectable} from '@angular/core';
import {environment} from '../../environments/environment.prod';
import {HttpClient} from '@angular/common/http';
import {SignUpForm} from '../model/SignUpForm';
import {Observable} from 'rxjs';
import {SignInForm} from '../model/SigninForm';
import {JwtRP} from '../model/JwtRP';
import {ChangerAvatar} from '../model/ChangerAvatar';
import {CategoryModel} from '../model/CategoryModel';
import {any} from 'codelyzer/util/function';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  // API_LOCAL
  // private API_SIGNUP = environment.API_LOCAL + 'signup';
  // private API_SIGNIN = environment.API_LOCAL + 'signin';
  // private API_UPDATE_CATE = environment.API_LOCAL + 'categories';

// API_SEVER
  private API_SIGNUP = environment.API_SEVER + 'signup';
  private API_SIGNIN = environment.API_SEVER + 'signin';
  private API_UPDATE_AVATAR = environment.API_SEVER + 'change/avatar';
  private API_UPDATE_CATE = environment.API_LOCAL + 'categories';


  constructor(private http: HttpClient) {
  }

  signUp(signUpForm: SignUpForm): Observable<any> {
    return this.http.post<any>(this.API_SIGNUP, signUpForm);
  }

  signin(signInForm: SignInForm): Observable<JwtRP> {
    return this.http.post<JwtRP>(this.API_SIGNIN, signInForm);
  }

  updateAvatar(changeAvatar: ChangerAvatar): Observable<any> {
    return this.http.put(this.API_UPDATE_AVATAR, changeAvatar);
  }

  cate(categoryModel: CategoryModel): Observable<any> {
    return this.http.post<any>(this.API_UPDATE_CATE, categoryModel);
  }
}
