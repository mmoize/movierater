import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MainComponent } from './main.component';
import { Routes, RouterModule } from '@angular/router';
import { ReactiveFormsModule }  from '@angular/forms';

import { AngularFontAwesomeModule } from 'angular-font-awesome';

import { ApiService } from '../api.service';

import { MovieListComponent } from './movie-list/movie-list.component';
import { MovieDetailsComponent } from './movie-details/movie-details.component';
import { MovieFormComponent } from './movie-form/movie-form.component';


const routes: Routes =[
 
  {path: 'movies', component: MainComponent}
];

@NgModule({
  declarations: [
    MovieListComponent,
    MovieDetailsComponent,
    MovieFormComponent,
    MainComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    AngularFontAwesomeModule,
    ReactiveFormsModule,
  ],
  exports: [
    RouterModule
  ],
  providers:[
    ApiService
  ]
})
export class MainModule { }
