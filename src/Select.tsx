/* eslint-disable react/prop-types, react/jsx-filename-extension, flowtype/object-type-delimiter, flowtype/delimiter-dangle */

import * as React from 'react';
import Select from '@material-ui/core/Select';
import FormControl from '@material-ui/core/FormControl';
import InputLabel from '@material-ui/core/InputLabel';
import FormHelperText from '@material-ui/core/FormHelperText';
import {FormControlProps} from '@material-ui/core/FormControl';
import {FieldRenderProps} from 'react-final-form';

// eslint-disable-next-line flowtype/no-weak-types
interface SelectWrapperProps extends FieldRenderProps<any, HTMLElement> {
  label: string,
  formControlProps: FormControlProps,
}

const SelectWrapper: React.ComponentType<SelectWrapperProps> = ({
                                                                  input: {
                                                                    name, value, onChange, ...restInput
                                                                  }, meta, label, formControlProps, ...rest
                                                                }) => {
  const showError = ((meta.submitError && !meta.dirtySinceLastSubmit) || meta.error) && meta.touched;

  return (
    <FormControl {...formControlProps} error={showError}>
      <InputLabel htmlFor={name}>{label}</InputLabel>

      <Select
        {...rest}
        name={name}
        onChange={onChange}
        inputProps={restInput}
        value={value}
      />

      {showError && <FormHelperText>{meta.error || meta.submitError}</FormHelperText>}
    </FormControl>
  );
};

export default SelectWrapper;
