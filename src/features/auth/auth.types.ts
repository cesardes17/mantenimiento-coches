type LoginFormValues = {
  email: string;
  password: string;
};

type RegisterFormValues = {
  email: string;
  firstName: string;
  firstLastName: string;
  secondLastName: string;
  mobilePhone: string;
  landlinePhone: string;
  password: string;
  confirmPassword: string;
};

export type { LoginFormValues, RegisterFormValues };
