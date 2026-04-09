import { faker } from '@faker-js/faker';
import { Course, CourseArea } from '../../../domain/interfaces/course.interface';

/**
 * Servicio encargado de la generación y gestión de cursos.
 *
 * @remarks
 * Este servicio utiliza la librería `faker` para generar cursos
 * ficticios, principalmente con fines de prueba o demostración.
 */
export class CoursesService {

  /**
  * Áreas disponibles para los cursos.
   *
   * @remarks
   * Se utiliza para asignar aleatoriamente un área
   * a cada curso generado.
   */
  private areas: CourseArea[] = [
    'Frontend',
    'Backend',
    'Data',
    'DevOps',
  ];

  /**
  * Obtiene un listado de cursos generados dinámicamente.
   *
  * @param countCourses Cantidad de cursos a generar
  * @returns Promesa que resuelve un arreglo de cursos
   *
   * @example
   * ```ts
   * const courses = await coursesService.getAllCourses(5);
   * ```
   */
  public async getAllCourses(countCourses: number): Promise<Course[]> {
    const courses: Promise<Course>[] = [];

    for (let i = 1; i <= countCourses; i++) {
      courses.push(this.generateCourse(i));
    }

    return Promise.all(courses);
  }

  /**
  * Genera un curso ficticio.
   *
   * @param id Identificador único del curso
   * @returns Promesa que resuelve un curso generado
   */
  private generateCourse(id: number): Promise<Course> {
    return Promise.resolve({
      id,
      title: faker.company.catchPhrase(),
      instructor: faker.person.fullName(),
      durationHours: faker.number.int({ min: 8, max: 60 }),
      area: faker.helpers.arrayElement(this.areas),
      isActive: faker.datatype.boolean(),
    });
  }
}
