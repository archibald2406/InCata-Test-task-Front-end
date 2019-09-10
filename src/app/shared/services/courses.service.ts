import { Injectable } from '@angular/core';
import {BaseApi} from '../base-api';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {CourseModel} from '../models/course.model';
import {CourseSymbolModel} from '../models/course-symbol.model';
import {NewCourseModel} from '../models/new-course.model';

@Injectable({
  providedIn: 'root'
})
export class CoursesService extends BaseApi {
  constructor(public http: HttpClient) {
    super(http);
  }

  getLastCourses(): Observable<CourseModel[]> {
    return this.get('courses/last-courses');
  }

  getCoursesSymbols(): Observable<CourseSymbolModel[]> {
    return this.get('courses/courses-symbols');
  }

  addCourseInfo(newCourseInfo: NewCourseModel) {
    return this.post('courses/new-courses', newCourseInfo);
  }

  importCoursesToDB() {
    return this.post('courses', {});
  }
}
