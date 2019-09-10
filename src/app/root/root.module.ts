import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {RootRoutingModule} from './root-routing.module';
import {RootComponent} from './root.component';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {CoursesListPageComponent} from './courses-list-page/courses-list-page.component';
import {CreateCoursePageComponent} from './create-course-page/create-course-page.component';
import {CoursesService} from '../shared/services/courses.service';

@NgModule({
  declarations: [
    RootComponent,
    CoursesListPageComponent,
    CreateCoursePageComponent
  ],
  imports: [
    CommonModule,
    RootRoutingModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [CoursesService]
})
export class RootModule { }
