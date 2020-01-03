/* eslint-disable react/prop-types, react/jsx-filename-extension, flowtype/object-type-delimiter, flowtype/delimiter-dangle */

import * as React from 'react';
import {Field, FieldProps, FieldRenderProps} from 'react-final-form';
import MuiSelect, {SelectProps as MuiSelectProps} from '@material-ui/core/Select';
import FormControl, {FormControlProps} from '@material-ui/core/FormControl';
import InputLabel from '@material-ui/core/InputLabel';
import FormHelperText from '@material-ui/core/FormHelperText';

export type SelectProps = MuiSelectProps & {
  label?: string;
  formControlProps?: FormControlProps;
  fieldProps?: FieldProps<any, any>;
};
/*
interface SelectProps extends FieldRenderProps<MuiSelectProps, HTMLSelectElement> {
  label: string,
  formControlProps: FormControlProps,
}
*/

// eslint-disable-next-line flowtype/no-weak-types
type SelectWrapperProps = FieldRenderProps<SelectProps, HTMLSelectElement>;

const SelectWrapper: React.ComponentType<SelectWrapperProps> = ({
                                                                  input: {
                                                                    name,
                                                                    value,
                                                                    onChange,
                                                                    ...restInput
                                                                  },
                                                                  meta,
                                                                  children,
                                                                  ...restProps
                                                                }) => {
  const {labelWidth} = restProps as any;

  return (
    <MuiSelect
      labelWidth={labelWidth}
      // InputLabelProps={{shrink: !!value}}
      inputProps={restInput as any}
      {...restProps}
    >
      {children}
    </MuiSelect>
  );
};

const Select: React.ComponentType<SelectProps> = ({
                                                    name,
                                                    label,
                                                    formControlProps,
                                                    fieldProps,
                                                    ...restProps
                                                  }) => {
  const {meta} = fieldProps as any;
  const {labelWidth: labelWidthFixed} = restProps as any;
  const showError = ((meta.submitError && !meta.dirtySinceLastSubmit) || meta.error) && meta.touched;

  if (Number.isNaN(labelWidthFixed) || !labelWidthFixed) {
    const refInputLabel = React.useRef(null);
    const [labelWidth, setLabelWidth] = React.useState(0);
    React.useEffect(() => {
      // @ts-ignore
      setLabelWidth(refInputLabel.current.offsetWidth);
    }, []);

    return (
      <FormControl error={showError} {...formControlProps}>
        {label && <InputLabel ref={refInputLabel} htmlFor={name}>{label}</InputLabel>}
        <Field
          name={name as any}
          {...fieldProps}
          render={({
                     input,
                     meta
                   }) => (
            <SelectWrapper
              input={input as any}
              meta={meta}
              labelWidth={labelWidth}
              {...restProps}
            />
          )}
        />
        {showError && <FormHelperText>{meta.error || meta.submitError}</FormHelperText>}
      </FormControl>
    );
  }
  return (
    <FormControl error={showError} {...formControlProps}>
      {label && <InputLabel htmlFor={name}>{label}</InputLabel>}
      <Field
        name={name as any}
        {...fieldProps}
        render={({
                   input,
                   meta
                 }) => (
          <SelectWrapper
            input={input as any}
            meta={meta}
            labelWidth={labelWidthFixed}
            {...restProps}
          />
        )}
      />
      {showError && <FormHelperText>{meta.error || meta.submitError}</FormHelperText>}
    </FormControl>
  );
};

export default Select;
