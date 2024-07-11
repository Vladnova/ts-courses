interface IForm {
  name: string;
  password: number;
}

const userForm: IForm = {
  name: "Vlad",
  password: 1256558,
};

const formValidation:Valid<IForm> = {
  name: { isValid: true },
  password: {
    isValid: false,
    errorMessage: "Довжина пароля має містити не менше 8 символів",
  },
};

type Valid<T> = {
  [K in keyof T]: { isValid: true } | { isValid: false; errorMessage: string };
};
