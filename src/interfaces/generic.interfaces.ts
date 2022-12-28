import { ReactElement } from "react";
import { FieldValues, FieldErrorsImpl } from "react-hook-form";
export interface iInputs {
  id: string;
  label?: string;
  type?: string;
  placeholder?: string;
  value?: string;
  register?: FieldValues;
  errors?: any;
  errorMsg?: string;
  children?: ReactElement | ReactElement[];
  setValue?: any;
}

export interface iSelect {
  id: string;
  label: string;
  defaultDisabled?: string;
  register?: FieldValues;
  errors?: FieldErrorsImpl;
  errorMsg: string;
  setValue: any;
  options: { value: string; name: string }[];
}

export interface iCheck {
  id: string;
  label: string;
  register?: FieldValues;
  errors?: FieldErrorsImpl;
  errorMsg: string;
  setValue: any;
  options: { value: string; name: string }[];
}
export interface iButton {
  label?: string;
  className?: string;
  action?: any;
  type?: "submit" | "button" | "reset";
}

interface iHeader {
  name: string;
  key: string;
  type: string;
}

export interface iTableData {
  headers: iHeader[];
}

export interface iTableOptions {
  createItem?: {
    active: boolean;
    createForm: ReactElement | ReactElement[];
  };
  updateItem?: {
    active: boolean;
    updateForm: ReactElement | ReactElement[];
  };
  deleteItem?: {
    active: boolean;
    deleteAlert: (id: string) => void;
  };
  searchOptions: {
    searchWord: {
      show: boolean;
      word: string | null;
    };
    pagination: {
      show: boolean;
      limit: number;
      offset: number;
    };
    order: {
      sortField: string;
      sortOrder: "asc" | "desc";
    };
  };
}

export interface iCard {
  id: string;
  cols?: string;
  title?: string;
  subTitle?: string;
  footer?: string;
  children?: ReactElement | ReactElement[];
}

export interface iControls {
  controlOptions:
    | iInputControl
    | iSelectControl
    | iCheckboxControl
    | iRadioControl;
  label: string;
  id: string;
  required?: boolean;
  errorMsg: string;
  size?: "full" | "half" | "small";
  pattern?: any;
}

interface iInputControl {
  controlType: "input";
  type:
    | "text"
    | "number"
    | "password"
    | "range"
    | "color"
    | "date"
    | "datetime-local"
    | "time"
    | "week"
    | "month"
    | "file"
    | "email";
  placeholder?: string;
}

interface iSelectControl {
  controlType: "select";
  defaultDisabled?: string;
  options: iSelectOptions[];
}

interface iSelectOptions {
  name: string;
  value: string;
}

interface iCheckboxControl {
  controlType: "checkbox";
  options: iCheckOptions[];
}

interface iCheckOptions {
  name: string;
  value: string;
}

interface iRadioControl {
  controlType: "radio";
  options: iRadioOptions[];
}

interface iRadioOptions {
  name: string;
  value: string;
}
