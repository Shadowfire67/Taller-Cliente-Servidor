import { Request, Response } from "express";
import { HandleError } from "../../../domain/erros/handle.error";
import { CoursesService } from "./courses.service";

/**
 * Controlador de cursos.
 *
 * @remarks
 * Esta clase maneja las peticiones HTTP relacionadas con cursos,
 * delegando la lógica de negocio al `CoursesServices`.
 */
export class CoursesController {

  /**
   * Servicio de cursos.
   */
  private readonly coursesService = new CoursesService();

  /**
   * Maneja la petición HTTP para obtener un listado de cursos.
   *
   * @remarks
   * El número de cursos a generar se obtiene desde los
   * parámetros de la ruta.
   *
   * @param req Objeto de petición de Express
   * @param res Objeto de respuesta de Express
   *
   * @example
   * ```http
   * GET /api/courses/:countCourses
   * ```
   */
  getAllCourses = (req: Request, res: Response): void => {
    const { countCourses } = req.params;

    setTimeout(() => {
      this.coursesService
      .getAllCourses(Number(countCourses))
      .then((courses) => res.status(201).json(courses))
      .catch((error) => HandleError.error(error, res));
    }, 3000);
  };
}