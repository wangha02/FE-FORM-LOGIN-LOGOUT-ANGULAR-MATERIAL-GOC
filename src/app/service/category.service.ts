import {Injectable} from '@angular/core';
import {environment} from '../../environments/environment.prod';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {CategoryModel} from '../model/CategoryModel';

@Injectable({
  providedIn: 'root'
})
export class CategoryService {
  // API LOCAL
  private API_CATE = environment.API_LOCAL + 'cate';
  private API_CREATE_CATE = environment.API_LOCAL + 'create-category';

  constructor(private http: HttpClient) {

  }

  showListCate(category: CategoryModel): Observable<CategoryModel[]> {
    return this.http.get<CategoryModel[]>(this.API_CATE);
  }
  createCategory(category: CategoryModel):Observable<any>{
    return this.http.post(this.API_CATE,category)
  }
}
