import { NextFunction, Request, Response } from 'express';
import { FileUploadHelper } from '../../../helpers/fileUploadHelper';
import { AuthService } from '../../../shared/axios';

const createStudent = async (req: Request) => {
  const file = req.file;
  const uploadedFile = await FileUploadHelper.uploadToCloudinary(file);

  if (uploadedFile) {
    req.body.profileImage = uploadedFile.secure_url;
  }
  const { department, semester, faculty } = req.body.student;
  const academicDepartmentResponse = await AuthService.get(`/department?syncId=${department}`);
  if (academicDepartmentResponse.data && Array.isArray(academicDepartmentResponse.data)) {
    req.body.student.department = academicDepartmentResponse.data[0]?.id;
  }

  const academicSemesterResponse = await AuthService.get(`/semester?syncId=${semester}`);
  if (academicSemesterResponse.data && Array.isArray(academicSemesterResponse.data)) {
    req.body.student.semester = academicSemesterResponse.data[0]?.id;
  }

  const academicFacultyResponse = await AuthService.get(`/faculty?syncId=${faculty}`);
  if (academicFacultyResponse.data && Array.isArray(academicFacultyResponse.data)) {
    req.body.student.faculty = academicFacultyResponse.data[0]?.id;
  }

  const response = await AuthService.post(`/user/create-student`, req.body, {
    headers: {
      Authorization: req.headers.authorization
    }
  });

  return response;
};
export const UserService = {
  createStudent
};
