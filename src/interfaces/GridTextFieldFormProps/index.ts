import { FormikProps } from "formik";
import { IFormFields } from "..";

interface GridTextFieldFormProps<T> {
  formFields: IFormFields[];
  formik: FormikProps<T>;
}

export default GridTextFieldFormProps;
