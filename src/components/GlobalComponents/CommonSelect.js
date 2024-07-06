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

function getStyles(name, personName, theme) {
  return {
    fontWeight:
      personName?.indexOf(name) === -1
        ? theme.typography.fontWeightRegular
        : theme.typography.fontWeightMedium,
  };
}

export default function CommonSelect({
  data,
  onChange,
  value,
  Placeholder,
  width,
}) {
  const theme = useTheme();
  const [selectedIds, setSelectedIds] = React.useState([]);

  const handleChange = (event) => {
    const selectedValue = event.target.value;
    setSelectedIds(
      typeof selectedValue === "string"
        ? selectedValue.split(",")
        : selectedValue
    );
    onChange(
      typeof selectedValue === "string"
        ? selectedValue.split(",")
        : selectedValue
    );
  };

  const getSelectedNames = () => {
    return selectedIds?.map((id) => {
      const selectedItem = data?.find((item) => item.id === id);
      return selectedItem ? selectedItem.name : "";
    });
  };

  // console.log("sdkjgjahs", selectedIds);

  return (
    <FormControl sx={{ width: width || 200 }}>
      <Select
        size="small"
        displayEmpty
        multiple
        value={selectedIds}
        onChange={handleChange}
        input={<OutlinedInput />}
        renderValue={(selected) => {
          if (selected.length === 0) {
            return <em>{Placeholder}</em>;
          }

          return getSelectedNames()?.join(", ");
        }}
        MenuProps={MenuProps}
        inputProps={{ "aria-label": "Without label" }}
      >
        <MenuItem disabled value="">
          <em>{Placeholder}</em>
        </MenuItem>
        {data?.map((item) => (
          <MenuItem
            key={item.id}
            value={item.id}
            style={getStyles(item.name, selectedIds, theme)}
          >
            {item.name}
          </MenuItem>
        ))}
      </Select>
    </FormControl>
  );
}
