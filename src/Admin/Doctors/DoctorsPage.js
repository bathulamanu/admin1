import React, { useEffect, useState } from 'react'
import CommonDataTable from '../../GlobalComponents/CommonDataTable'
import { useDispatch, useSelector } from 'react-redux'
import { getDoctorList } from '../Slices/doctorSlice'
import { columns } from './DoctorsTableColumn'
import {
  Box,
  Container,
  FormControl,
  InputAdornment,
  OutlinedInput,
  Stack,
} from '@mui/material'
import CommonSelect from '../../GlobalComponents/CommonSelect'
import MoreVertIcon from '@mui/icons-material/MoreVert'
import SearchIcon from '@mui/icons-material/Search'
import column from '../Doctors/DoctorsTableColumn'

const DoctorsPage = () => {
  const dispatch = useDispatch()
  const doctorsList = useSelector((state) => state.doctor.doctorsList)

  console.log('doctorsList', doctorsList)

  useEffect(() => {
    dispatch(getDoctorList())
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

      <CommonDataTable rows={doctorsList || []} columns={column()} />
    </Container>
  )
}

export default DoctorsPage
