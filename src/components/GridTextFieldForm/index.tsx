import { Grid, TextField } from "@mui/material";
import { GridTextFieldFormProps } from "../../interfaces";

const GridTextFieldForm = <T,>({
  formFields,
  formik,
}: GridTextFieldFormProps<T>) => {
  return (
    <Grid container spacing={1.5} marginY={2}>
      {formFields.map(({ textFieldProps, gridProps }) => (
        <Grid key={textFieldProps.id} item {...gridProps}>
          <TextField
            key={textFieldProps.id}
            {...textFieldProps}
            error={Boolean(formik.errors[textFieldProps.id as keyof T])}
            value={formik.values[textFieldProps.id as keyof T]}
            onChange={formik.handleChange}
            helperText={formik.errors[textFieldProps.id as keyof T] as string}
            disabled={formik.isSubmitting}
            fullWidth
          ></TextField>
        </Grid>
      ))}
    </Grid>
  );
};

export default GridTextFieldForm;
