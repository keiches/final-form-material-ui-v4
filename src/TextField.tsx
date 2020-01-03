/* eslint-disable react/prop-types, react/jsx-filename-extension */

import * as React from 'react';
import {Field, FieldProps, FieldRenderProps} from 'react-final-form';
import MuiTextField, {TextFieldProps as MuiTextFieldProps} from '@material-ui/core/TextField';

const INPUT_TEXT = 'text';
const INPUT_PASSWORD = 'password';

export type TextFieldProps = Omit<MuiTextFieldProps, 'type'> & {
  type: typeof INPUT_TEXT | typeof INPUT_PASSWORD;
  fieldProps?: FieldProps<any, any>;
};

export type TextFieldWrapperProps = FieldRenderProps<TextFieldProps, HTMLInputElement | HTMLTextAreaElement>;

const TextFieldWrapper: React.ComponentType<TextFieldWrapperProps> = ({
                                                                        input: {
                                                                          name,
                                                                          value,
                                                                          type = INPUT_TEXT,
                                                                          onChange,
                                                                          ...restInput
                                                                        },
                                                                        meta,
                                                                        ...restProps
                                                                      }) => {
  const {helperText, error} = restProps as any;
  const showError = error || (((meta.submitError && !meta.dirtySinceLastSubmit) || meta.error) && meta.touched);

  return (
    <MuiTextField
      helperText={helperText || (showError ? meta.error || meta.submitError : undefined)}
      error={showError}
      value={value}
      type={type}
      // InputLabelProps={{shrink: !!value}}
      inputProps={restInput as any}
      onChange={onChange}
      {...restProps}
    />
  );
};

// const TextField: React.ComponentType<Partial<TextFieldProps>> = ({
const TextField: React.ComponentType<TextFieldProps> = ({
                                                          name,
                                                          fieldProps,
                                                          ...restProps
                                                        }) => {
  return (
    <Field
      name={name as any}
      {...fieldProps}
      render={({
                 input,
                 meta
               }) => <TextFieldWrapper input={input} meta={meta} {...restProps}  />}
    />
  );
};

export default TextField;
