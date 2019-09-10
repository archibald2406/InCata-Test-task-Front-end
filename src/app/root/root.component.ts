import { Component } from '@angular/core';
import {CoursesService} from '../shared/services/courses.service';

@Component({
  selector: 'app-root',
  templateUrl: './root.component.html',
  styleUrls: ['./root.component.css']
})
export class RootComponent {
  message = '';

  constructor(private coursesService: CoursesService) { }

  private showMessage(message: string) {
    this.message = message;
    window.setTimeout(() => {
      this.message = '';
    }, 60000);
  }

  importCoursesToDB() {
    this.showMessage('Importing data of cryptocurrency courses to database. Please, wait about 1 minute.');
    this.coursesService.importCoursesToDB()
      .subscribe((response: {message: string}) => {
        console.log(response.message);
      });
  }
}
