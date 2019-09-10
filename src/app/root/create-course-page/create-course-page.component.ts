import { Component, OnInit } from '@angular/core';
import {CoursesService} from '../../shared/services/courses.service';
import {CourseSymbolModel} from '../../shared/models/course-symbol.model';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {NewCourseModel} from '../../shared/models/new-course.model';
import {Router} from '@angular/router';

@Component({
  selector: 'app-create-course-page',
  templateUrl: './create-course-page.component.html',
  styleUrls: ['./create-course-page.component.css']
})
export class CreateCoursePageComponent implements OnInit {
  form: FormGroup;
  coursesSymbolsList: CourseSymbolModel[] = [];
  newCourseInfo: NewCourseModel;
  isLoaded = false;
  message = '';

  constructor(private coursesService: CoursesService,
              private router: Router) { }

  ngOnInit() {
    this.form = new FormGroup({
      pairSymbol: new FormControl(null, [Validators.required]),
      courseValue: new FormControl(null,
        [
          Validators.required,
          Validators.pattern(/^([0-9]*[1-9][0-9]*(\.[0-9]+)?|[0]+\.[0-9]*[1-9][0-9]*)$/),
          Validators.max(100000)
        ])
    });

    this.coursesService.getCoursesSymbols()
      .subscribe((symbols: CourseSymbolModel[]) => {
        this.coursesSymbolsList = symbols;
        this.isLoaded = true;
      });
  }

  guidGenerator() {
    const S4 = () => {
      return ((( 1 + Math.random()) * 0x10000) | 0).toString(16).substring(1);
    };
    return (S4() + S4() + '-' + S4() + '-' + S4() + '-' + S4() + '-' + S4() + S4() + S4());
  }


  private showMessage(message: string) {
    this.message = message;
    window.setTimeout(() => {
      this.message = '';
    }, 5000);
  }

  checkSymbolList() {
    if (!this.coursesSymbolsList.length) {
      this.showMessage('There is no information about cryptocurrency pairs symbols in the database.');
    }
  }

  onSave() {
    if (!localStorage.getItem('userId')) {
      localStorage.setItem('userId', this.guidGenerator());
    }

    this.newCourseInfo = {
      symbol: this.form.value.pairSymbol,
      last: this.form.value.courseValue,
      timestamp: new Date(),
      userId: localStorage.getItem('userId')
    };

    if (!this.newCourseInfo.symbol) {
      this.showMessage('You should choose cryptocurrency pair symbol.');
      return;
    }

    this.coursesService.addCourseInfo(this.newCourseInfo)
      .subscribe((response: {message: string}) => {
        console.log(response.message);
        this.router.navigate(['/root']);
      });
  }
}
