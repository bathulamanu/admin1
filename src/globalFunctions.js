import dayjs from 'dayjs'
function stringToColor(string) {
  let hash = 0
  for (let i = 0; i < string.length; i += 1) {
    hash = string.charCodeAt(i) + ((hash << 5) - hash)
  }

  let color = '#'
  for (let i = 0; i < 3; i += 1) {
    const value = (hash >> (i * 8)) & 0xff
    color += `00${value.toString(16)}`.slice(-2)
  }
  return color
}

export function stringAvatar(name) {
  const getInitials = (name) => {
    const words = name.split(' ')
    if (words.length > 1) {
      return `${words[0].charAt(0).toUpperCase()}${words[1]
        .charAt(0)
        .toUpperCase()}`
    }
    return `${words[0].charAt(0).toUpperCase()}`
  }

  return {
    sx: {
      background: '#0000FF',
      color: '#FFFFFF',
      width: '24px',
      height: '24px',
      fontSize: '8px',
    },
    children: getInitials(name),
  }
}

export function getNamesIdList(arr) {
  if (arr && arr?.length > 0) {
    let result = arr?.map((item) => ({
      id: item?.countryID,
      name: item?.name,
    }))
    return result
  }
}

export function joinStringsWithSpace(string1, string2) {
  return string1 + ' ' + string2
}

export function formatToMMMYYYY(isoString) {
  return dayjs(isoString).format('MMM YYYY')
}

export function capitalizeFirstLetter(word) {
  return word?.charAt(0)?.toUpperCase() + word?.slice(1)
}

export function getByIdList(arr) {
  if (arr && arr?.length > 0) {
    let result = arr?.map((item) => ({
      id: item?.masterConfigurationID,
      name: item?.value,
    }))

    return result
  }
}

export function getStateIdList(arr) {
  if (arr && arr?.length > 0) {
    let result = arr?.map((item) => ({
      id: item?.stateID,
      name: item?.name,
    }))
    return result
  }
}

export function getCityIdList(arr) {
  if (arr && arr?.length > 0) {
    let result = arr?.map((item) => ({
      id: item?.cityID,
      name: item?.name,
    }))
    return result
  }
}
