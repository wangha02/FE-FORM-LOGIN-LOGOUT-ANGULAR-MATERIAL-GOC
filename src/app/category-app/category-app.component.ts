import {Component, OnInit, ViewChild} from '@angular/core';
import {CategoryModel} from '../model/CategoryModel';
import {MatPaginator} from '@angular/material/paginator';
import {CategoryService} from '../service/category.service';
import {MatTableDataSource} from '@angular/material/table';

@Component({
  selector: 'app-category-app',
  templateUrl: './category-app.component.html',
  styleUrls: ['./category-app.component.scss']
})
export class CategoryAppComponent implements OnInit {
  form: any = {};
  category: CategoryModel;
  status = 'Please fill in the form to create category'
  error1: any = {
    message: 'no_name_category'
  };
  error2: any = {
    message: 'no_avatar_category'
  };
  success: any = {
    message: 'create_success'
  };
  categories: CategoryModel[] = [];
  displayedColumns: string[] = ['name', 'avatar'];
  dataSource: any;
  @ViewChild(MatPaginator) paginator: MatPaginator;

  constructor(private categoryService: CategoryService) {
  }

  ngOnInit(): void {
    this.showListCategory();
  }

  private showListCategory() {

    // @ts-ignore
    this.categoryService.showListCate().subscribe(data =>{
      this.categories = data;
      console.log('data-------------->',data);
      this.dataSource = new MatTableDataSource<CategoryModel>(this.categories)
      this.dataSource.paginator = this.paginator;
    })
  }
}


