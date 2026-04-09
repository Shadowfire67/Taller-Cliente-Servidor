import { Course } from '../interfaces/courses.interface';

export const COURSES_MOCK: Course[] = [
  {
    id: 1,
    title: 'Arquitectura de Frontend',
    instructor: 'Jesus Mejia',
    durationHours: 32,
    area: 'Frontend',
    isActive: true,
  },
  {
    id: 2,
    title: 'Fundamentos de Backend',
    instructor: 'Maria Lopez',
    durationHours: 40,
    area: 'Backend',
    isActive: false,
  },
];
