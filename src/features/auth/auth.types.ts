type LoginFormValues = {
  email: string;
  password: string;
};

type RegisterFormValues = {
  email: string;
  firstName: string;
  firstLastName: string;
  secondLastName: string;
  mobilePhone: number;
  landlinePhone: number;
  password: string;
  confirmPassword: string;
};

export type { LoginFormValues, RegisterFormValues };
