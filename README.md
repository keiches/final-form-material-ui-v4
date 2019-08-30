# Material UI React Final Form
[![NPM Version](https://img.shields.io/npm/v/material-ui-react-final-form.svg?style=flat-square)](https://www.npmjs.com/package/material-ui-react-final-form)
[![NPM Downloads](https://img.shields.io/npm/dm/material-ui-react-final-form.svg?style=flat-square)](https://www.npmjs.com/package/material-ui-react-final-form)

## Important
material-ui-react-final-form is forked from [final-form-material-ui](https://github.com/Deadly0/final-form-material-ui), supporting [Material-UI](https://github.com/mui-org/material-ui) v4.

---

A set of wrapper components to facilitate using [Material-UI](https://github.com/mui-org/material-ui) with Final Form.

### Available fields
```jsx
import {TextField, Checkbox, Radio, Select, Input} from 'material-ui-react-final-form';
```

##### TextField
```jsx
import React from 'react';
import {Field} from 'react-final-form';
import {TextField} from 'material-ui-react-final-form';

<Field
    name="domain"
    type="text"
    component={TextField}
    label="Domain"
    margin="normal"
    fullWidth
/>
```

##### Input
```jsx
import React from 'react';
import {Field} from 'react-final-form';
import {Input} from 'material-ui-react-final-form';
import InputAdornment from '@material-ui/core/InputAdornment';

<Field
	name="password"
	component={Input}
	className="input"
	type="password"
	placeholder="Password"
	endAdornment={
		<InputAdornment position="end">
			<Link className="inputLink" to="/forgot">
				Forgot password?
			</Link>
		</InputAdornment>
	}
/>
```

##### Select
Use can pass any props from [`Select docs`](https://material-ui.com/api/select/) to `Field`.
Additional props for `Field`:
* `label` - label for select
* `formControlProps` - object of props for `FormControl` component

```jsx
import React from 'react';
import {Field} from 'react-final-form';
import {Select} from 'material-ui-react-final-form';
import MenuItem from '@material-ui/core/MenuItem';

<Field
    name="city"
    label="Select city"
    formControlProps={{className: 'my-class'}}
    component={Select}
>
    <MenuItem value="London">
        London
    </MenuItem>
    
    <MenuItem value="Paris">
        Paris
    </MenuItem>
</Field>
```
