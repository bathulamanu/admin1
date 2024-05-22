import dayjs from "dayjs";

function stringToColor(string) {
  let hash = 0;
  let i;
  for (i = 0; i < string.length; i += 1) {
    hash = string.charCodeAt(i) + ((hash << 5) - hash);
  }

  let color = "#";

  for (i = 0; i < 3; i += 1) {
    const value = (hash >> (i * 8)) & 0xff;
    color += `00${value.toString(16)}`.slice(-2);
  }
  return color;
}
export function stringAvatar(name) {
  return {
    sx: {
      bgcolor: stringToColor(name),
      width: "24px",
      height: "24px",
      fontSize: "8px",
    },
    children: `${name.split(" ")[0][0]}${name.split(" ")[1][0]}`,
  };
}

export function getNamesIdList(arr) {
  if (arr && arr?.length > 0) {
    let result = arr.map((item) => ({ id: item?.countryID, name: item?.name }));
    return result;
  }
}


export function joinStringsWithSpace(string1, string2) {
  return string1 + " " + string2;
}

export function formatToMMMYYYY(isoString) {
  return dayjs(isoString).format('MMM YYYY');
}
