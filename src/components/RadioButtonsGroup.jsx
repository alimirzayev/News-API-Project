import * as React from 'react';
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormControl from '@mui/material/FormControl';
import FormLabel from '@mui/material/FormLabel';

export default function RadioButtonsGroup() {
  return (
    <FormControl>
      <FormLabel id="demo-radio-buttons-group-label">Choose Category</FormLabel>
      <RadioGroup
        aria-labelledby="demo-radio-buttons-group-label"
        defaultValue="female"
        name="radio-buttons-group"
      >
        <FormControlLabel value="business" control={<Radio />} label="Business" />
        <FormControlLabel value="entertainment" control={<Radio />} label="Entertainment" />
        <FormControlLabel value="health" control={<Radio />} label="Health" />
        <FormControlLabel value="science" control={<Radio />} label="Science" />
        <FormControlLabel value="sports" control={<Radio />} label="Sports" />
        <FormControlLabel value="technology" control={<Radio />} label="Technology" />
      </RadioGroup>
    </FormControl>
  );
}
