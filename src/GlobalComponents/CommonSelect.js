import * as React from "react";
import { useTheme } from "@mui/material/styles";
import OutlinedInput from "@mui/material/OutlinedInput";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";

const ITEM_HEIGHT = 48;
const ITEM_PADDING_TOP = 8;
const MenuProps = {
  PaperProps: {
    style: {
      maxHeight: ITEM_HEIGHT * 4.5 + ITEM_PADDING_TOP,
      width: 150,
    },
  },
};

const names = [
  "Oliver Hansen",
  "Van Henry",
  "April Tucker",
  "Ralph Hubbard",
  "Omar Alexander",
  "Carlos Abbott",
  "Miriam Wagner",
  "Bradley Wilkerson",
  "Virginia Andrews",
  "Kelly Snyder",
];

function getStyles(name, personName, theme) {
  return {
    fontWeight:
      personName.indexOf(name) === -1
        ? theme.typography.fontWeightRegular
        : theme.typography.fontWeightMedium,
  };
}

export default function CommonSelect({ data, onChange, value, Placeholder,width }) {
  const theme = useTheme();
  const [personName, setPersonName] = React.useState([]);

  const handleChange = (event) => {
    const {
      target: { value },
    } = event;
    onChange(typeof value === "string" ? value?.split(",") : value);
    setPersonName(
      typeof value === "string" ? value?.split(",") : value
    );
  };

  return (
    <FormControl sx={{  width: width || 200 , }}>
      <Select
        size="small"
        displayEmpty
        value={value || []}
        onChange={handleChange}
        input={<OutlinedInput />}
        renderValue={(selected) => {
          if (selected?.length === 0) {
            return <em>{Placeholder}</em>;
          }

          return selected?.join(", ");
        }}
        MenuProps={MenuProps}
        inputProps={{ "aria-label": "Without label" }}
      >
        <MenuItem disabled value="">
          <em>{Placeholder}</em>
        </MenuItem>
        {(data?.length > 0 && data) ||
          []?.map((name) => (
            <MenuItem
              key={name}
              value={name}
              style={getStyles(name, personName, theme)}
            >
              {name}
            </MenuItem>
          ))}
      </Select>
    </FormControl>
  );
}
