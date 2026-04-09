import { Component, inject } from '@angular/core';
import { AlertComponent } from '../../components/alert/alert.component';
import { Course } from '../../interfaces/courses.interface';
import { State } from '../../interfaces/state.interface';
import { CoursesService } from '../../services/courses/courses.service';

@Component({
  selector: 'app-courses',
  templateUrl: './courses.page.html',
  imports: [AlertComponent],
})
export class CoursesPage {
  courses: Course[] = [];
  state: State = 'init';

  private coursesService = inject(CoursesService);

  ngOnInit(): void {
    this.state = 'loading';
    this.coursesService.getAllCourses(10).subscribe({
      next: (courses) => {
        this.courses = courses;
        this.state = 'success';
      },
      error: (error) => {
        console.error(error);
        this.state = 'error';
      },
    });
  }
}
