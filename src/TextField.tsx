/* eslint-disable react/prop-types, react/jsx-filename-extension */

import * as React from 'react';
import {FieldRenderProps} from 'react-final-form';
import TextField from '@material-ui/core/TextField';

type TextFieldProps = FieldRenderProps<any,
  HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
>;

const TextFieldWrapper: React.ComponentType<TextFieldProps> = ({input: {name, onChange, value, ...restInput}, meta, ...rest}) => {
	const showError = ((meta.submitError && !meta.dirtySinceLastSubmit) || meta.error) && meta.touched;

	return (
		<TextField
			{...rest}
			name={name}
			helperText={showError ? meta.error || meta.submitError : undefined}
			error={showError}
			inputProps={restInput}
			onChange={onChange}
			value={value}
		/>
	);
};

export default TextFieldWrapper;
