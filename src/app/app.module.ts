import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';

import {AppComponent} from './app.component';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';

import {MatToolbarModule} from '@angular/material/toolbar';
import {MatIconModule} from '@angular/material/icon';
import {MatRadioModule} from '@angular/material/radio';
import {MatCheckboxModule} from '@angular/material/checkbox';
import {MatSlideToggleModule} from '@angular/material/slide-toggle';
import {MatCardModule} from '@angular/material/card';

import {HomeComponent} from './pages/home/home.component';
import {GettingStartedComponent} from './pages/gettingstarted/gettingstarted.component';

import {HTTP_INTERCEPTORS, HttpClientModule} from '@angular/common/http';
import {NgxAudioPlayerModule} from 'projects/ngx-audio-player/src/public_api';
import {MatButtonModule} from '@angular/material/button';

import {NavBarModule} from './shared/navbar';
import {FooterModule} from './shared/footer';
import {RegisterComponent} from './register/register.component';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatInputModule} from '@angular/material/input';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {LoginComponent} from './login/login.component';
import {ProfileComponent} from './profile/profile/profile.component';
import {ParentInputComponent} from './input/parent-input/parent-input.component';
import {ChildInputComponent} from './input/child-input/child-input.component';
import {ParentOutputComponent} from './output/parent-output/parent-output.component';
import {ChildOutputComponent} from './output/child-output/child-output.component';
import {AngularFireStorageModule} from '@angular/fire/storage';
// @ts-ignore
import {AngularFireModule} from '@angular/fire';
import {environment} from '../environments/environment.prod';
import {SingerAvatarComponent} from './upload/singer-avatar/singer-avatar.component';
import {MatProgressBarModule} from '@angular/material/progress-bar';
import {MutilpleAvatarComponent} from './upload/mutilple-avatar/mutilple-avatar.component';
import {AuthInterceptor} from './service/auth.interceptor';
import {UpdateAvatarComponent} from './profile/update-avatar/update-avatar.component';
import {MatDialog, MatDialogModule} from '@angular/material/dialog';
import {DialogComponent} from './dialog/dialog/dialog.component';
import {AuthGuard} from './security/auth.guard';
import {AdminManageComponent} from './profile/admin-manage/admin-manage.component';
import {AdminGuard} from './security/admin.guard';
import {CategoryAppComponent} from './category-app/category-app.component';
import {MatPaginatorModule} from '@angular/material/paginator';
import {MatTableModule} from '@angular/material/table';
import {CreateCategoryComponent} from './create-category/create-category.component';

export const appRoutes: Routes = [
  {path: '', component: LoginComponent, data: {title: 'Home'}},
  {
    path: 'guide/getting-started',
    component: GettingStartedComponent,
    data: {title: 'Getting Started'}
  },
  {path: 'home', component: HomeComponent},
  {path: 'register', component: RegisterComponent},
  {path: 'cate', component: CategoryAppComponent}, //category
  {path: 'create-category', component: CreateCategoryComponent},
  {path: 'login', component: LoginComponent},
  {
    path: 'profile', component: ProfileComponent, canActivate: [AuthGuard],
    children: [ //children l?? con c???a profile
      {
        path: 'update/avatar', component: UpdateAvatarComponent
      },
      {
        path: 'admin', component: AdminManageComponent, canActivate: [AdminGuard]
      }
    ]
  }
];

@NgModule({
  declarations: [AppComponent, HomeComponent, GettingStartedComponent, RegisterComponent, LoginComponent, ProfileComponent, ParentInputComponent, ChildInputComponent, ParentOutputComponent, ChildOutputComponent, SingerAvatarComponent, MutilpleAvatarComponent, UpdateAvatarComponent, DialogComponent, AdminManageComponent, CategoryAppComponent, CreateCategoryComponent],
  imports: [
    HttpClientModule,
    BrowserModule,
    MatCardModule,
    MatToolbarModule,
    MatIconModule,
    MatRadioModule,
    MatCheckboxModule,
    MatSlideToggleModule,
    MatButtonModule,
    BrowserAnimationsModule,
    NavBarModule, FooterModule,
    NgxAudioPlayerModule,
    MatInputModule,
    MatDialogModule,
    FormsModule,
    AngularFireStorageModule,
    AngularFireModule.initializeApp(environment.firebaseConfig),
    RouterModule.forRoot(appRoutes, {useHash: false}), MatFormFieldModule, MatInputModule, FormsModule, ReactiveFormsModule, MatProgressBarModule, MatPaginatorModule, MatTableModule
  ],
  providers: [
    {
      provide: HTTP_INTERCEPTORS, useClass: AuthInterceptor, multi: true
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule {

}
