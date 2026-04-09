import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Course } from '../../interfaces/courses.interface';

@Injectable({
  providedIn: 'root',
})
export class CoursesService {
  private httpClient = inject(HttpClient);

  getAllCourses(countCourses: number): Observable<Course[]> {
    return this.httpClient.get<Course[]>(`api/courses/${countCourses}`);
  }
}
