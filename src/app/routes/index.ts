import express from 'express';
import { academicSemesterRoutes } from '../modules/academicSemester/academicSemester.routes';
import { UserRoutes } from '../modules/user/user.routes';
import { academicFacultyRoutes } from '../modules/academicFaculty/academicFaculty.routes';
import { academicDepartmentRoutes } from '../modules/academicDepartment/academicDepartment.routes';
import { AuthRoutes } from '../modules/auth/auth.routes';
import { facultyRoutes } from '../modules/faculty/faculty.routes';
import { adminRoutes } from '../modules/admin/admin.routes';
import { buildingRoutes } from '../modules/building/building.routes';
import { courseRoutes } from '../modules/course/course.routes';
import { managementDepartmentRoutes } from '../modules/managementDepartment/managementDepartment.routes';
import { offeredCourseRoutes } from '../modules/offeredCourse/offeredCourse.routes';
import { offeredCourseClassScheduleRoutes } from '../modules/offeredCourseClassSchedule/offeredCourseClassSchedule.routes';

const router = express.Router();

const moduleRoutes = [
  {
    path: '/auth',
    routes: AuthRoutes
  },
  {
    path: '/faculties',
    routes: facultyRoutes
  },
  {
    path: '/academic-semesters',
    routes: academicSemesterRoutes
  },
  {
    path: '/academic-faculties',
    routes: academicFacultyRoutes
  },
  {
    path: '/academic-departments',
    routes: academicDepartmentRoutes
  },
  {
    path: '/users',
    routes: UserRoutes
  },
  {
    path: '/admins',
    routes: adminRoutes
  },
  {
    path: '/buildings',
    routes: buildingRoutes
  },
  {
    path: '/courses',
    routes: courseRoutes
  },
  {
    path: '/management-departments',
    routes: managementDepartmentRoutes
  },
  {
    path: '/offered-courses',
    routes: offeredCourseRoutes
  },
  {
    path: '/offered-course-class-schedules',
    routes: offeredCourseClassScheduleRoutes
},
];

moduleRoutes.forEach((route) => {
  router.use(route.path, route.routes);
});

export default router;
