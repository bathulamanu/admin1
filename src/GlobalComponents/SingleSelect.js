import * as React from 'react'
import InputLabel from '@mui/material/InputLabel'
import MenuItem from '@mui/material/MenuItem'
import FormControl from '@mui/material/FormControl'
import Select from '@mui/material/Select'

const ITEM_HEIGHT = 48
const ITEM_PADDING_TOP = 8
const MenuProps = {
  PaperProps: {
    style: {
      maxHeight: ITEM_HEIGHT * 4.5 + ITEM_PADDING_TOP,
      width: 150,
    },
  },
}

export default function SingleSelect({
  data,
  onChange,
  value,
  width,
  Placeholder,
  disabled,
}) {
  // console.log("sVDHGSDJASFHGSJ", data);
  const handleChange = (event) => {
    onChange(event.target.value)
  }

  return (
    <FormControl sx={{ width: width || 200 }} size="small">
      <Select
        labelId="demo-select-small-label"
        id="demo-select-small"
        value={value}
        disabled={disabled}
        onChange={handleChange}
        placeholder={Placeholder}
        MenuProps={MenuProps}
        inputProps={{ 'aria-label': 'Without label' }}
      >
        <MenuItem disabled value="">
          <em>{Placeholder}</em>
        </MenuItem>
        {data?.map((item) => {
          return <MenuItem value={item?.id}>{item?.name}</MenuItem>
        })}
      </Select>
    </FormControl>
  )
}
