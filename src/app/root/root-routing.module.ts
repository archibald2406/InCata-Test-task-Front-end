import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {RootComponent} from './root.component';
import {CoursesListPageComponent} from './courses-list-page/courses-list-page.component';
import {CreateCoursePageComponent} from './create-course-page/create-course-page.component';

const routes: Routes = [
  {path: 'root', component: RootComponent},
  {path: 'courses-list', component: CoursesListPageComponent},
  {path: 'create-course', component: CreateCoursePageComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class RootRoutingModule { }
