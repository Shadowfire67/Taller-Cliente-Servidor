import { provideHttpClient } from '@angular/common/http';
import { HttpTestingController, provideHttpClientTesting } from '@angular/common/http/testing';
import { TestBed } from '@angular/core/testing';
import { Course } from '../../interfaces/courses.interface';
import { COURSES_MOCK } from '../../mocks/courses.mocks';
import { CoursesService } from './courses.service';

describe('CoursesService', () => {
  let service: CoursesService;
  let httpMock: HttpTestingController;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [
        provideHttpClient(),
        provideHttpClientTesting(),
      ]
    });
    service = TestBed.inject(CoursesService);
    httpMock = TestBed.inject(HttpTestingController);
  });

  afterEach(() => {
    httpMock.verify();
  });

  it('debería crearse correctamente', () => {
    expect(service).toBeTruthy();
  });

  it('debería realizar una petición GET y retornar una lista de cursos', () => {
    const countCourses = 5;
    const mockCourses: Course[] = COURSES_MOCK;

    service.getAllCourses(countCourses).subscribe((courses) => {
      expect(courses).toEqual(mockCourses);
      expect(courses.length).toBe(mockCourses.length);
    });

    const req = httpMock.expectOne(`api/courses/${countCourses}`);
    expect(req.request.method).toBe('GET');

    req.flush(mockCourses);
  });

  it('debería propagar un error si la petición HTTP falla', () => {
    const countCourses = 3;

    service.getAllCourses(countCourses).subscribe({
      next: () => {
        fail('No debería emitir datos cuando ocurre un error');
      },
      error: (error) => {
        expect(error.status).toBe(500);
      },
    });

    const req = httpMock.expectOne(`api/courses/${countCourses}`);

    req.flush(
      { message: 'Error interno del servidor' },
      { status: 500, statusText: 'Internal Server Error' }
    );
  });
});
