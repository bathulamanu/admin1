import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import {
  Box,
  Container,
  FormControl,
  InputAdornment,
  OutlinedInput,
  Stack,
} from '@mui/material'
import MoreVertIcon from '@mui/icons-material/MoreVert'
import SearchIcon from '@mui/icons-material/Search'
import CommonDataTable from '../GlobalComponents/CommonDataTable'
// import { hospitalColumns } from "./HospitalTableColumn";
import CommonSelect from '../GlobalComponents/CommonSelect'
import { getHospitalsList } from '../Admin/Slices/hospitalSlice'
import { getCountryList } from '../Admin/Slices/globalSlice'
import hospitalColumns from '../Hospitals/HospitalTableColumn'

const HospitalPage = () => {
  const [searchQuery, setSearchQuery] = useState(null)

  const dispatch = useDispatch()
  const hospitalsList = useSelector((state) => state.hospitals.hospitalsList)

  // console.log('listData', hospitalsList)

  useEffect(() => {
    dispatch(getHospitalsList(searchQuery))
  }, [])
  const names = [
    'Oliver Hansen',
    'Van Henry',
    'April Tucker',
    'Ralph Hubbard',
    'Omar Alexander',
    'Carlos Abbott',
    'Miriam Wagner',
    'Bradley Wilkerson',
    'Virginia Andrews',
    'Kelly Snyder',
  ]

  return (
    <Container sx={{ background: '#fff' }}>
      <Box
        display={'flex'}
        justifyContent={'space-between'}
        padding={'12px 8px'}
      >
        <Stack justifyContent={'center'}></Stack>
        <Stack direction={'row'} alignItems={'center'} spacing={1}>
          <FormControl variant="outlined" size="small" sx={{ width: 200 }}>
            <OutlinedInput
              type={'text'}
              placeholder="Search"
              size="small"
              startAdornment={
                <InputAdornment position="start">
                  <SearchIcon />
                </InputAdornment>
              }
            />
          </FormControl>
          <CommonSelect data={names} Placeholder={'Spacialist'} />
          <CommonSelect data={names} Placeholder={'Status'} />
          <MoreVertIcon />
        </Stack>
      </Box>
      <CommonDataTable rows={hospitalsList || []} columns={hospitalColumns()} />
    </Container>
  )
}

export default HospitalPage
