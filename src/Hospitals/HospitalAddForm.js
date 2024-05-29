import React, { useEffect, useState } from 'react'
import MoreVertIcon from '@mui/icons-material/MoreVert'
import { useTheme } from '@mui/material/styles'
import doctorImg from '../assets/doctor_img.png'
import { styled } from '@mui/material/styles'
import AddIcon from '@mui/icons-material/Add'
import CloudUploadIcon from '@mui/icons-material/CloudUpload'
import {
  Box,
  Button,
  Card,
  CardContent,
  Container,
  FormControl,
  Grid,
  InputLabel,
  OutlinedInput,
  Paper,
  Stack,
  Typography,
} from '@mui/material'
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown'
import ReactQuill from 'react-quill'
import facebook from '../assets/facebook.png'
import instagram from '../assets/instagram.png'
import youtube from '../assets/youtube.png'
import twitter from '../assets/twitter.png'
import linkedin from '../assets/linkedin.png'
import pinterest from '../assets/pinterest.png'
import link from '../assets/link.png'
import { DemoContainer, DemoItem } from '@mui/x-date-pickers/internals/demo'
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs'
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider'
import { DatePicker } from '@mui/x-date-pickers/DatePicker'
import CommonSelect from '../GlobalComponents/CommonSelect'
import { useDispatch, useSelector } from 'react-redux'
import {
  getByIdList,
  getCityIdList,
  getNamesIdList,
  getStateIdList,
} from '../globalFunctions'
import SingleSelect from '../GlobalComponents/SingleSelect'
import { getCityList } from '../Admin/Slices/globalSlice'
import { handlePostHospital } from '../Admin/Slices/hospitalSlice'

const VisuallyHiddenInput = styled('input')({
  clip: 'rect(0 0 0 0)',
  clipPath: 'inset(50%)',
  height: 1,
  overflow: 'hidden',
  position: 'absolute',
  bottom: 0,
  left: 0,
  whiteSpace: 'nowrap',
  width: 1,
})

const socialMediaLogoSize = 24

const HospitalAddForm = () => {
  const theme = useTheme()
  const dispatch = useDispatch()
  const countryList = useSelector((state) => state.global.countryList)
  const upDatedCountryList = getNamesIdList(countryList)
  const getSpecializationList = useSelector(
    (state) => state.global.specializationList,
  )

  const getStateList = useSelector((state) => state.global.stateList)
  const getCitysList = useSelector((state) => state.global.cityList)
  const cityList = getCityIdList(getCitysList)
  const stateList = getStateIdList(getStateList)
  const specializationList = getByIdList(getSpecializationList)

  // console.log("kjdgjkhdsgh", specializationList);

  // console.log("jdhcgjsadgljk", upDatedCountryList);

  const [formValues, setFormValues] = useState({
    hospitalName: '',
    hospitalLogo: '',
    about: '',
    specialist: [],
    LicenseNumber: '',
    validity: {
      from: '',
      to: '',
    },
    email: '',
    website: '',
    sociallink: {
      facebook: '',
      instagram: '',
      twitter: '',
      LinkedIn: '',
      youtube: '',
      pinterest: '',
      googleMap: '',
      otherLink: '',
    },
    faxNumber: '',
    contact: {
      countryCode: '+91',
      phoneNumber: '',
      AlterNativePhoneNumber: '',
      landLine: '',
    },
    HospitalAddress: {
      addressLine1: '',
      addressLine2: '',
      nearLandMark: '',
      country: 352,
      state: '',
      city: '',
      pincode: '',
      latitude: '',
      longitude: '',
    },
  })

  const handleChange = (e, name) => {
    const value = e.target ? e.target.value : e // Extract value from event

    setFormValues((prev) => {
      let temp = { ...prev }
      switch (name) {
        case 'specialist':
          let res = value?.map((ele) => ({ specializationID: ele }))
          temp.specialist = res
          break

        case 'HospitalAddress1':
          temp.HospitalAddress = {
            ...temp.HospitalAddress,
            addressLine1: value,
          }
          break

        case 'HospitalAddress2':
          temp.HospitalAddress = {
            ...temp.HospitalAddress,
            addressLine2: value,
          }
          break

        case 'country':
          temp.HospitalAddress = { ...temp.HospitalAddress, country: value }
          break

        case 'state':
          temp.HospitalAddress = { ...temp.HospitalAddress, state: value }
          break

        case 'city':
          temp.HospitalAddress = { ...temp.HospitalAddress, city: value }
          break

        case 'nearLandMark':
          temp.HospitalAddress = {
            ...temp.HospitalAddress,
            nearLandMark: value,
          }
          break

        case 'pincode':
          temp.HospitalAddress = { ...temp.HospitalAddress, pincode: value }
          break

        case 'phoneNumber':
          temp.contact = { ...temp.contact, phoneNumber: value }
          break

        case 'landLine':
          temp.contact = { ...temp.contact, landLine: value }
          break

        case 'socialF':
          temp.sociallink = { ...temp.sociallink, facebook: value }
          break

        case 'socialI':
          temp.sociallink = { ...temp.sociallink, instagram: value }
          break

        case 'socialL':
          temp.sociallink = { ...temp.sociallink, LinkedIn: value }
          break

        case 'socialY':
          temp.sociallink = { ...temp.sociallink, youtube: value }
          break

        case 'socialT':
          temp.sociallink = { ...temp.sociallink, twitter: value }
          break

        case 'socialP':
          temp.sociallink = { ...temp.sociallink, pinterest: value }
          break

        case 'socialO':
          temp.sociallink = { ...temp.sociallink, otherLink: value }
          break

        default:
          temp[name] = value
          break
      }
      return temp
    })
  }

  useEffect(() => {
    dispatch(handlePostHospital(formValues))
  }, [formValues])

  // console.log("fororjej", formValues);

  return (
    <Container
      maxWidth="xl"
      disableGutters
      sx={{
        maxHeight: '75%',
        overflow: 'auto',
        background: '#fff',
        padding: '8px',
      }}
    >
      <Box
        display={'flex'}
        justifyContent={'space-between'}
        alignItems={'center'}
        height={'40px'}
        pt={5}
        pb={5}
        pl={1}
      >
        <Stack>
          <Typography>Add Hospital</Typography>
        </Stack>
        <Stack>
          <MoreVertIcon />
        </Stack>
      </Box>
      <Box display={'flex'} justifyContent={'space-between'} gap={2}>
        <Box
          sx={{
            width: '60%',
            display: 'flex',
            flexDirection: 'column',
            gap: 4,
          }}
        >
          <Card variant="outlined">
            <CardContent>
              <Grid container spacing={2} pt={3} pb={3}>
                <Grid item style={{ width: '100%' }}>
                  <InputLabel>Hospital Name</InputLabel>
                  <FormControl variant="outlined" fullWidth size="small">
                    <OutlinedInput
                      fullWidth
                      id="outlined-adornment-password"
                      placeholder="XYZ Hospital"
                      size="small"
                      value={formValues?.hospitalName}
                      onChange={(e) =>
                        handleChange(e.target.value, 'hospitalName')
                      }
                    />
                  </FormControl>
                </Grid>
              </Grid>
              <Grid container spacing={2}>
                <Grid item xs={6}>
                  <InputLabel>Specialist</InputLabel>
                  <CommonSelect
                    Placeholder={'Select'}
                    data={specializationList}
                    value={formValues?.specialist?.map(
                      (item) => item?.specializationID,
                    )}
                    width={'100%'}
                    onChange={(e) => handleChange(e, 'specialist')}
                  />
                </Grid>
                <Grid item xs={6}>
                  <InputLabel>Licence number</InputLabel>
                  <FormControl variant="outlined" fullWidth size="small">
                    <OutlinedInput
                      fullWidth
                      id="outlined-adornment-password"
                      placeholder="#D-00012"
                      size="small"
                      value={formValues?.LicenseNumber}
                      onChange={(e) =>
                        handleChange(e.target.value, 'LicenseNumber')
                      }
                    />
                  </FormControl>
                </Grid>
                <Grid item xs={6}>
                  <InputLabel>Recongnition Validity from</InputLabel>
                  <LocalizationProvider dateAdapter={AdapterDayjs}>
                    <DemoContainer components={['DatePicker']}>
                      <DatePicker
                        // value={formValues?.validity?.from}
                        onChange={(e) =>
                          handleChange(e.target.value, 'validity_from')
                        }
                      />
                    </DemoContainer>
                  </LocalizationProvider>
                </Grid>
                <Grid item xs={6}>
                  <InputLabel>Recongnition Validity to</InputLabel>
                  <LocalizationProvider dateAdapter={AdapterDayjs}>
                    <DemoContainer components={['DatePicker']}>
                      <DatePicker
                        // value={formValues?.validity?.to}
                        onChange={(e) =>
                          handleChange(e.target.value, 'validity_to')
                        }
                      />
                    </DemoContainer>
                  </LocalizationProvider>
                </Grid>
              </Grid>
              <Grid container spacing={2} pt={3}>
                <Grid item style={{ width: '100%' }}>
                  <InputLabel>Email Address</InputLabel>
                  <FormControl variant="outlined" fullWidth size="small">
                    <OutlinedInput
                      fullWidth
                      id="outlined-adornment-password"
                      placeholder="hospial@gmail.com"
                      size="small"
                      value={formValues?.email}
                      onChange={(e) => handleChange(e.target.value, 'email')}
                    />
                  </FormControl>
                </Grid>
              </Grid>
              <Grid container spacing={2} pt={3} pb={3}>
                <Grid item style={{ width: '100%' }}>
                  <InputLabel>Website URL</InputLabel>
                  <FormControl variant="outlined" fullWidth size="small">
                    <OutlinedInput
                      fullWidth
                      id="outlined-adornment-password"
                      placeholder="hospial@gmail.com"
                      size="small"
                      value={formValues?.website}
                      onChange={(e) => handleChange(e.target.value, 'website')}
                    />
                  </FormControl>
                </Grid>
              </Grid>
            </CardContent>
          </Card>
          <Card variant="outlined">
            <CardContent>
              <Box
                display={'flex'}
                justifyContent={'space-between'}
                sx={{ mt: 1 }}
              >
                <Typography>HOSPITAL ADDRESS</Typography>
              </Box>

              <Grid container spacing={2} pt={3}>
                <Grid item style={{ width: '100%' }}>
                  <InputLabel>Address 1</InputLabel>
                  <FormControl variant="outlined" fullWidth size="small">
                    <OutlinedInput
                      fullWidth
                      id="outlined-adornment-password"
                      placeholder=""
                      size="small"
                      value={formValues?.HospitalAddress?.addressLine1}
                      onChange={(e) => {
                        // console.log("kscksdbjhvsdlh", e.target.value);
                        handleChange(e.target.value, 'HospitalAddress1')
                      }}
                    />
                  </FormControl>
                </Grid>
              </Grid>
              <Grid container spacing={2} pt={3} pb={3}>
                <Grid item style={{ width: '100%' }}>
                  <InputLabel>Address 2</InputLabel>
                  <FormControl variant="outlined" fullWidth size="small">
                    <OutlinedInput
                      fullWidth
                      id="outlined-adornment-password"
                      placeholder=""
                      size="small"
                      value={formValues?.HospitalAddress?.addressLine2}
                      onChange={(e) =>
                        handleChange(e.target.value, 'HospitalAddress2')
                      }
                    />
                  </FormControl>
                </Grid>
              </Grid>

              <Grid container spacing={2}>
                <Grid item xs={6}>
                  <InputLabel>Country</InputLabel>
                  <SingleSelect
                    Placeholder={'Select'}
                    width={'100%'}
                    disabled={true}
                    data={upDatedCountryList}
                    value={formValues?.HospitalAddress?.country}
                    onChange={(e) => {
                      handleChange(e, 'country')
                    }}
                  />
                </Grid>
                <Grid item xs={6}>
                  <InputLabel>State</InputLabel>
                  <SingleSelect
                    Placeholder={'Select'}
                    width={'100%'}
                    data={stateList}
                    value={formValues?.HospitalAddress?.state}
                    onChange={(e) => {
                      dispatch(getCityList(e))
                      handleChange(e, 'state')
                    }}
                  />
                </Grid>
                <Grid item xs={6}>
                  <InputLabel>City</InputLabel>
                  <SingleSelect
                    Placeholder={'Select'}
                    width={'100%'}
                    value={formValues?.HospitalAddress?.city}
                    data={cityList}
                    onChange={(e) => {
                      handleChange(e, 'city')
                    }}
                  />
                </Grid>

                <Grid item xs={6}>
                  <InputLabel>Near LandMark</InputLabel>
                  <FormControl variant="outlined" size="small" fullWidth>
                    <OutlinedInput
                      fullWidth
                      id="outlined-adornment-password"
                      placeholder="input text"
                      size="small"
                      value={formValues?.HospitalAddress?.nearLandMark}
                      onChange={(e) =>
                        handleChange(e.target.value, 'nearLandMark')
                      }
                    />
                  </FormControl>
                </Grid>
                <Grid item xs={6}>
                  <InputLabel>Pincode</InputLabel>
                  <SingleSelect
                    Placeholder={'Select'}
                    width={'100%'}
                    value={formValues?.HospitalAddress?.pincode}
                    onChange={(e) => {
                      handleChange(e, 'pincode')
                    }}
                  />
                </Grid>

                <Grid item xs={6}>
                  <InputLabel>Phone number</InputLabel>
                  <FormControl variant="outlined" size="small" fullWidth>
                    <OutlinedInput
                      fullWidth
                      id="outlined-adornment-password"
                      placeholder="phone number"
                      size="small"
                      value={formValues?.contact?.phoneNumber}
                      onChange={(e) => {
                        handleChange(e.target.value, 'phoneNumber')
                      }}
                    />
                  </FormControl>
                </Grid>
                <Grid item xs={6}>
                  <InputLabel>Landline</InputLabel>
                  <FormControl variant="outlined" size="small" fullWidth>
                    <OutlinedInput
                      fullWidth
                      id="outlined-adornment-password"
                      placeholder="Landline"
                      size="small"
                      value={formValues?.contact?.landLine}
                      onChange={(e) => {
                        handleChange(e.target.value, 'landLine')
                      }}
                    />
                  </FormControl>
                </Grid>
                <Grid item xs={6}>
                  <InputLabel>Fax Number</InputLabel>
                  <FormControl variant="outlined" size="small" fullWidth>
                    <OutlinedInput
                      fullWidth
                      id="outlined-adornment-password"
                      placeholder="Fax number"
                      size="small"
                      value={formValues?.faxNumber}
                      onChange={(e) => {
                        handleChange(e.target.value, 'faxNumber')
                      }}
                    />
                  </FormControl>
                </Grid>
              </Grid>
            </CardContent>
          </Card>
          <Card>
            <CardContent>
              <Stack pt={2} pb={2}>
                <Typography>SOCIAL LINKS</Typography>
              </Stack>
              <Stack spacing={2}>
                <Stack direction={'row'} spacing={2} alignItems={'center'}>
                  <img
                    src={facebook}
                    height={socialMediaLogoSize}
                    width={socialMediaLogoSize}
                    style={{ borderRadius: '4px' }}
                  />{' '}
                  <FormControl variant="outlined" size="small" fullWidth>
                    <OutlinedInput
                      fullWidth
                      id="outlined-adornment-password"
                      placeholder="www.facebook.com"
                      size="small"
                      value={formValues?.sociallink?.facebook}
                      onChange={(e) => {
                        handleChange(e.target.value, 'socialF')
                      }}
                    />
                  </FormControl>
                </Stack>
                <Stack direction={'row'} spacing={2} alignItems={'center'}>
                  <img
                    src={instagram}
                    height={socialMediaLogoSize}
                    width={socialMediaLogoSize}
                  />{' '}
                  <FormControl variant="outlined" size="small" fullWidth>
                    <OutlinedInput
                      fullWidth
                      id="outlined-adornment-password"
                      placeholder="www.instagram.com"
                      value={formValues?.sociallink?.instagram}
                      size="small"
                      onChange={(e) => {
                        handleChange(e.target.value, 'socialI')
                      }}
                    />
                  </FormControl>
                </Stack>
                <Stack direction={'row'} spacing={2} alignItems={'center'}>
                  <img
                    src={linkedin}
                    height={socialMediaLogoSize}
                    width={socialMediaLogoSize}
                  />{' '}
                  <FormControl variant="outlined" size="small" fullWidth>
                    <OutlinedInput
                      fullWidth
                      id="outlined-adornment-password"
                      placeholder="www.linkedin.com"
                      size="small"
                      value={formValues?.sociallink?.LinkedIn}
                      onChange={(e) => {
                        handleChange(e.target.value, 'socialL')
                      }}
                    />
                  </FormControl>
                </Stack>
                <Stack direction={'row'} spacing={2} alignItems={'center'}>
                  <img
                    src={youtube}
                    height={socialMediaLogoSize}
                    width={socialMediaLogoSize}
                  />{' '}
                  <FormControl variant="outlined" size="small" fullWidth>
                    <OutlinedInput
                      fullWidth
                      id="outlined-adornment-password"
                      placeholder="www.youtube.com"
                      size="small"
                      value={formValues?.sociallink?.youtube}
                      onChange={(e) => {
                        handleChange(e.target.value, 'socialY')
                      }}
                    />
                  </FormControl>
                </Stack>
                <Stack direction={'row'} spacing={2} alignItems={'center'}>
                  <img
                    src={twitter}
                    height={socialMediaLogoSize}
                    width={socialMediaLogoSize}
                  />{' '}
                  <FormControl variant="outlined" size="small" fullWidth>
                    <OutlinedInput
                      fullWidth
                      id="outlined-adornment-password"
                      placeholder="www.twitter.com"
                      size="small"
                      value={formValues?.sociallink?.twitter}
                      onChange={(e) => {
                        handleChange(e.target.value, 'socialT')
                      }}
                    />
                  </FormControl>
                </Stack>
                <Stack direction={'row'} spacing={2} alignItems={'center'}>
                  <img
                    src={pinterest}
                    height={socialMediaLogoSize}
                    width={socialMediaLogoSize}
                    style={{ borderRadius: '4px' }}
                  />{' '}
                  <FormControl variant="outlined" size="small" fullWidth>
                    <OutlinedInput
                      fullWidth
                      id="outlined-adornment-password"
                      placeholder="www.pinterest.com"
                      size="small"
                      value={formValues?.sociallink?.pinterest}
                      onChange={(e) => {
                        handleChange(e.target.value, 'socialP')
                      }}
                    />
                  </FormControl>
                </Stack>
                <Stack direction={'row'} spacing={2} alignItems={'center'}>
                  <img
                    src={link}
                    height={socialMediaLogoSize}
                    width={socialMediaLogoSize}
                  />{' '}
                  <FormControl variant="outlined" size="small" fullWidth>
                    <OutlinedInput
                      fullWidth
                      id="outlined-adornment-password"
                      placeholder=""
                      size="small"
                      value={formValues?.sociallink?.otherLink}
                      onChange={(e) => {
                        handleChange(e.target.value, 'socialO')
                      }}
                    />
                  </FormControl>
                </Stack>
              </Stack>
            </CardContent>
          </Card>
        </Box>
        <Box
          sx={{
            width: '40%',
            display: 'flex',
            flexDirection: 'column',
            gap: 4,
          }}
        >
          <Card sx={{ width: '100%' }}>
            <CardContent>
              <Stack spacing={1}>
                <Stack>
                  <Typography>ABOUT HOSPITAL </Typography>
                </Stack>
                <Stack>
                  <Typography variant="subtitle2">Upload image</Typography>
                </Stack>
                <Stack alignItems={'center'}>
                  <img src={doctorImg} height={'auto'} width={'150px'} />
                </Stack>
                <Stack direction={'row'} spacing={4}>
                  <Stack>
                    <Typography variant="subtitle2">
                      supported formats JPG,PNG,SVG
                    </Typography>
                    <Typography variant="subtitle2">
                      Maximum size : 2MB
                    </Typography>
                  </Stack>
                  <Button
                    component="label"
                    role={undefined}
                    variant="contained"
                    tabIndex={-1}
                    startIcon={<CloudUploadIcon />}
                  >
                    Upload file
                    <VisuallyHiddenInput type="file" />
                  </Button>
                </Stack>
                <Stack height={'170px'}></Stack>
              </Stack>
            </CardContent>
          </Card>
        </Box>
      </Box>
    </Container>
  )
}

export default HospitalAddForm
