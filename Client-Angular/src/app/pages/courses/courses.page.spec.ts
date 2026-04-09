import { ComponentFixture, TestBed } from '@angular/core/testing';
import { provideHttpClient } from '@angular/common/http';
import { of, throwError } from 'rxjs';
import { By } from '@angular/platform-browser';
import { CoursesPage } from './courses.page';
import { CoursesService } from '../../services/courses/courses.service';
import { COURSES_MOCK } from '../../mocks/courses.mocks';

describe('CoursesPage', () => {
  let component: CoursesPage;
  let fixture: ComponentFixture<CoursesPage>;
  let coursesService: CoursesService;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CoursesPage],
      providers: [provideHttpClient()]
    }).compileComponents();

    fixture = TestBed.createComponent(CoursesPage);
    component = fixture.componentInstance;
    coursesService = TestBed.inject(CoursesService);
  });

  it('debería crear el componente', () => {
    expect(component).toBeTruthy();
  });

  it('debería llamar a getAllCourses al iniciar', () => {
    const spyGetAllCourses = jest.spyOn(coursesService, 'getAllCourses').mockReturnValue(of(COURSES_MOCK));
    fixture.detectChanges();
    expect(spyGetAllCourses).toHaveBeenCalled();
  });

  it('debería asignar los cursos recibidos del servicio', () => {
    jest.spyOn(coursesService, 'getAllCourses').mockReturnValue(of(COURSES_MOCK));
    fixture.detectChanges();
    expect(component.courses).toEqual(COURSES_MOCK);
  });

  it('debería renderizar filas de cursos', () => {
    jest.spyOn(coursesService, 'getAllCourses').mockReturnValue(of(COURSES_MOCK));
    fixture.detectChanges();
    const rows = fixture.debugElement.queryAll(By.css('tbody tr'));
    expect(rows.length).toBe(COURSES_MOCK.length);
  });

  it('debería manejar el error cuando falla getAllCourses', () => {
    const errorResponse = new Error('Error al cargar cursos');
    jest.spyOn(console, 'error').mockImplementation(() => {});
    jest.spyOn(coursesService, 'getAllCourses').mockReturnValue(throwError(() => errorResponse));

    fixture.detectChanges();

    expect(coursesService.getAllCourses).toHaveBeenCalled();
    expect(console.error).toHaveBeenCalledWith(errorResponse);
    expect(component.courses.length).toBe(0);
  });
});
