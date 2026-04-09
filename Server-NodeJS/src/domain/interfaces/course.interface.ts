export interface Course {
  id: number;
  title: string;
  instructor: string;
  durationHours: number;
  area: CourseArea;
  isActive: boolean;
}

export type CourseArea = 'Frontend' | 'Backend' | 'Data' | 'DevOps';
