/* eslint-disable react/prop-types, react/jsx-filename-extension */

import * as React from 'react';
import Radio from '@material-ui/core/Radio';
import {FieldRenderProps} from 'react-final-form';

type RadioFieldType = FieldRenderProps<any, HTMLInputElement>;

const RadioWrapper: React.ComponentType<RadioFieldType> = ({
                                                             input: {
                                                               checked, value, name, onChange, ...restInput
                                                             }, meta, ...rest
                                                           }) => (
  <Radio
    {...rest}
    name={name}
    inputProps={restInput}
    onChange={onChange}
    checked={checked}
    value={value}
  />
);

export default RadioWrapper;
