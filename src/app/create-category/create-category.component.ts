import {Component, OnInit} from '@angular/core';
import {CategoryModel} from '../model/CategoryModel';
import {CategoryService} from '../service/category.service';

@Component({
  selector: 'app-create-category',
  templateUrl: './create-category.component.html',
  styleUrls: ['./create-category.component.scss']
})
export class CreateCategoryComponent implements OnInit {
  form: any = {};
  cate: CategoryModel
  status = 'please fill in the form to Category !!!'

  constructor(private categoryService: CategoryService) {
  }

  ngOnInit(): void {
  }
  createCategory(){
    this.cate =new CategoryModel(
      this.form.id,
      this.form.name,
      this.form.avatar
    );
    console.log("formAvatar",this.form.avatar);
    console.log("a------------>",this.cate);
    if (this.form.avatar == undefined){
      this.status = "Please upload avater !"
    }
    this.categoryService.createCategory(this.cate).subscribe(data =>{
      console.log("dataCategory ---------->", data);
      if (data.message === 'category_invaild'){
        this.status = 'category is existed! Please try again!'
        return;
      }
      if (data.message === "create_success!!!"){
        this.status = 'create category success!!!'
      }
    })
  }

  createAvatar($event: string) {
    this.form.avatar = $event;
  }
}
