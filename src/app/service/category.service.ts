import {Injectable} from '@angular/core';
import {environment} from '../../environments/environment.prod';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {CategoryModel} from '../model/CategoryModel';

@Injectable({
  providedIn: 'root'
})
export class CategoryService {
  private API_CATE = environment.API_LOCAL + 'cate';

  constructor(private http: HttpClient) {
  }

  showListCate(): Observable<CategoryModel[]> {
    return this.http.get<CategoryModel[]>(this.API_CATE);
  }
}
