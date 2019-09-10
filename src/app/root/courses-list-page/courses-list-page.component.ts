import { Component, OnInit } from '@angular/core';
import {CoursesService} from '../../shared/services/courses.service';
import {CourseModel} from '../../shared/models/course.model';

@Component({
  selector: 'app-courses-list-page',
  templateUrl: './courses-list-page.component.html',
  styleUrls: ['./courses-list-page.component.css']
})
export class CoursesListPageComponent implements OnInit {
  coursesList: CourseModel[] = [];
  isLoaded = false;

  constructor(private coursesService: CoursesService) { }

  ngOnInit() {
    this.coursesService.getLastCourses()
      .subscribe((courses: CourseModel[]) => {
        if (courses.length) {
          this.coursesList = courses;
          for (const item of this.coursesList) {
            const date = new Date(item.timestamp);
            item.timestamp = date.getUTCFullYear() + '-' +
              ('00' + (date.getUTCMonth() + 1)).slice(-2) + '-' +
              ('00' + date.getUTCDate()).slice(-2) + ' ' +
              ('00' + date.getHours()).slice(-2) + ':' +
              ('00' + date.getMinutes()).slice(-2) + ':' +
              ('00' + date.getSeconds()).slice(-2);
          }
        }
        this.isLoaded = true;
      });
  }
}
