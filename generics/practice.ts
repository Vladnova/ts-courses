type FormControl = "input" | "button" | "checkbox";

interface BaseControl {
  type: FormControl;
}

interface ButtonProps extends BaseControl {
  type: "button";
  typeBtm: "primary" | "secondary";
  text: string;
  color: "red" | "blue";
}

interface CheckBox extends BaseControl {
  type: "checkbox";
  required: boolean;
}

interface InputProps extends BaseControl {
  type: "input";
  text: string;
  className?: string;
}

export type Control = InputProps | ButtonProps | CheckBox;

const getProp = <C extends Control>(control: C) => {
  switch (control.type) {
    case "input":
      control.type;
      break;
    case "button":
      control.type;
      console.log(control.text);
      break;
    case "checkbox":
      control.type;
      break;
    default:
      const _exhaustiveCheck: never = control;
      return _exhaustiveCheck;
  }
  return "";
};

getProp({ type: "button", color: "blue", typeBtm: "secondary", text: "Next" });
