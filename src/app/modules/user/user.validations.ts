import { z } from 'zod';
import { bloodGroup, gender } from './user.constant';

// request validation using zod
const createStudentZodSchema = z.object({
  password: z.string().optional(),
  student: z.object({
    name: z.object({
      firstName: z.string({
        required_error: 'First name is required'
      }),
      middleName: z.string().optional(),
      lastName: z.string({
        required_error: 'Last name is required'
      })
    }),
    dateOfBirth: z.string().optional(),
    gender: z.enum([...gender] as [string, ...string[]]).optional(),
    bloodGroup: z.enum([...bloodGroup] as [string, ...string[]]).optional(),
    email: z
      .string({
        required_error: 'Email is required'
      })
      .email(),
    contactNo: z.string({
      required_error: 'Contact number is required'
    }),
    emergencyContactNo: z.string().optional(),
    presentAddress: z.string({
      required_error: 'Present address is required'
    }),
    permanentAddress: z.string({
      required_error: 'Permanent address is required'
    }),
    semester: z.string({
      required_error: 'Semester is required'
    }),
    department: z.string({
      required_error: 'Department is required'
    }),
    faculty: z.string({
      required_error: 'Faculty is required'
    }),
    guardian: z.object({
      fatherName: z.string({
        required_error: 'Father name is required'
      }),
      fatherOccupation: z.string({
        required_error: 'Father occupation is required'
      }),
      fatherContactNo: z.string({
        required_error: 'Father contact number is required'
      }),
      motherName: z.string({
        required_error: 'Mother name is required'
      }),
      motherOccupation: z.string({
        required_error: 'Mother occupation is required'
      }),
      motherContactNo: z.string({
        required_error: 'Mother contact number is required'
      }),
      address: z.string({
        required_error: 'Address is required'
      })
    }),
    localGuardian: z.object({
      name: z.string({
        required_error: 'Name is required'
      }),
      occupation: z.string({
        required_error: 'Occupation is required'
      }),
      contactNo: z.string({
        required_error: 'Contact number is required'
      }),
      address: z.string({
        required_error: 'Address is required'
      })
    })
  })
});

const createUserFacultyZodSchema = z.object({
  body: z.object({
    password: z.string().optional(),

    faculty: z.object({
      name: z.object({
        firstName: z.string({
          required_error: 'First name is required'
        }),
        lastName: z.string({
          required_error: 'Last name is required'
        }),
        middleName: z.string().optional()
      }),
      gender: z.string({
        required_error: 'Gender is required'
      }),
      dateOfBirth: z.string({
        required_error: 'Date of birth is required'
      }),
      email: z
        .string({
          required_error: 'Email is required'
        })
        .email(),
      contactNo: z.string({
        required_error: 'Contact number is required'
      }),
      emergencyContactNo: z.string({
        required_error: 'Emergency contact number is required'
      }),
      bloodGroup: z
        .string({
          required_error: 'Blood group is required'
        })
        .optional(),
      presentAddress: z.string({
        required_error: 'Present address is required'
      }),
      permanentAddress: z.string({
        required_error: 'Permanent address is required'
      }),
      department: z.string({
        required_error: 'Academic department is required'
      }),

      faculty: z.string({
        required_error: 'Academic faculty is required'
      }),
      designation: z.string({
        required_error: 'Designation is required'
      }),
    })
  })
});

const createAdminZodSchema = z.object({
  body: z.object({
    password: z.string().optional(),

    admin: z.object({
      name: z.object({
        firstName: z.string({
          required_error: 'First name is required'
        }),
        lastName: z.string({
          required_error: 'Last name is required'
        }),
        middleName: z.string().optional()
      }),

      dateOfBirth: z.string({
        required_error: 'Date of birth is required'
      }),

      gender: z.string({
        required_error: 'Gender is required'
      }),

      bloodGroup: z.string({
        required_error: 'Blood group is required'
      }),

      email: z
        .string({
          required_error: 'Email is required'
        })
        .email(),

      contactNo: z.string({
        required_error: 'Contact number is required'
      }),

      emergencyContactNo: z.string({
        required_error: 'Emergency contact number is required'
      }),

      presentAddress: z.string({
        required_error: 'Present address is required'
      }),

      permanentAddress: z.string({
        required_error: 'Permanent address is required'
      }),

      managementDepartment: z.string({
        required_error: 'Management department is required'
      }),

      designation: z.string({
        required_error: 'Designation is required'
      }),
    })
  })
});

const updateUser = z.object({
  body: z.object({
    password: z.string().optional(),
    firstName: z.string().optional(),
    lastName: z.string().optional(),
    dateOfBirth: z.string().optional(),
    gender: z.string().optional(),
    email: z.string().email().optional(),
    contactNo: z.string().optional(),
    emergencyContactNo: z.string().optional(),
    presentAddress: z.string().optional(),
    permanentAddress: z.string().optional()
  })
});

export const UserValidation = {
  createStudentZodSchema,
  createUserFacultyZodSchema,
  createAdminZodSchema,
  updateUser
};
