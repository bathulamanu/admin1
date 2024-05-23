import {
  Avatar,
  Box,
  Button,
  Card,
  CardContent,
  Chip,
  Container,
  Divider,
  Stack,
  Switch,
  Typography,
} from "@mui/material";
import React from "react";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import { useDispatch, useSelector } from "react-redux";
import hospitamImg from "../assets/hospitalImg.png";
import {
  formatToMMMYYYY,
  joinStringsWithSpace,
  stringAvatar,
} from "../globalFunctions";
import RoomSharpIcon from "@mui/icons-material/RoomSharp";
import doctorImg from "../assets/doctor_img.png";
import instagramLogo from "../assets/instagram.png";
import linkedinLogo from "../assets/linkedin.png";
import twitterLogo from "../assets/twitter.png";
import facebookLogo from "../assets/facebook.png";
import youtubeLogo from "../assets/youtube.png";
import { getDoctorDetail } from "../Admin/Slices/doctorSlice";
import { useNavigate } from "react-router-dom";
const socialMediaSize = 24;

const HospitalView = () => {
  const dispatch=useDispatch()
  const navigate=useNavigate()
  const hospitalDetails = useSelector(
    (state) => state.hospitals.hospitalDetail
  );
  console.log("hospitalDetails", hospitalDetails);
  const {
    hospitalName,
    hospitalLogo,
    about,
    HospitalAddress,
    faxNumber,
    LocationInfo,
    contact,
    validity,
    specialist,
    status,
    email,
    website,
    doctorAssignmentsDetails,
    sociallink,
  } = hospitalDetails;
  return (
    <Container
      disableGutters
      maxWidth="xl"
      sx={{
        maxHeight: "450px",
        overflow: "auto",
        padding: "8px",
        display: "flex",
        flexDirection: "column",
        gap: 4,
      }}
    >
      <Box>
        <Card justifyContent={"space-between"}>
          <CardContent
            sx={{ display: "flex", flexDirection: "column", gap: 6 }}
          >
            <Box>
              <Box display={"flex"} justifyContent={"space-between"}>
                <Stack>
                  <Typography variant="h5" sx={{ color: "#327CF3" }}>
                    {joinStringsWithSpace(hospitalName, " ")}
                  </Typography>
                </Stack>
                <MoreVertIcon />
              </Box>
              <Divider sx={{ mt: 3, mb: 3 }} />
              <Box display={"flex"} gap={3}>
                <img src={hospitamImg} height={200} width={200} />
                <Card>
                  <CardContent sx={{ display: "flex", gap: 4 }}>
                    <Box display={"flex"} flexDirection={"column"} gap={3}>
                      <Stack>
                        <Typography variant="h5" sx={{ color: "#327CF3" }}>
                          {joinStringsWithSpace(hospitalName, " ")}
                        </Typography>
                        {/* <Typography>({doctorID})</Typography> */}
                      </Stack>
                      <Stack spacing={1}>
                        <Stack direction={"row"} spacing={2}>
                          <Typography
                            variant="subtitle2"
                            sx={{ minWidth: "80px" }}
                          >
                            Specialist
                          </Typography>{" "}
                          <Typography variant="subtitle2">:</Typography>
                          <Typography variant="subtitle2">
                            {specialist?.[0]?.value} , {specialist?.[1]?.value},{" "}
                            {specialist?.[2]?.value},{" "}
                          </Typography>
                        </Stack>
                        <Stack direction={"row"} spacing={2}>
                          <Typography
                            variant="subtitle2"
                            sx={{ minWidth: "80px" }}
                          >
                            Status
                          </Typography>
                          <Typography variant="subtitle2">:</Typography>
                          <Typography variant="subtitle2">
                            {status ? "Active" : "Inactive"}
                          </Typography>
                        </Stack>
                        <Stack direction={"row"} spacing={2}>
                          <Typography
                            variant="subtitle2"
                            sx={{ minWidth: "80px" }}
                          >
                            Email Address
                          </Typography>
                          <Typography variant="subtitle2">:</Typography>
                          <Typography variant="subtitle2">{email}</Typography>
                        </Stack>
                        <Stack direction={"row"} spacing={2}>
                          <Typography
                            variant="subtitle2"
                            sx={{ minWidth: "80px" }}
                          >
                            Website
                          </Typography>
                          <Typography variant="subtitle2">:</Typography>
                          <Typography variant="subtitle2">{website}</Typography>
                        </Stack>
                      </Stack>
                    </Box>
                    <Divider orientation="vertical" />
                    <Box display={"flex"} flexDirection={"column"} gap={5}>
                      <Stack>
                        <Typography>Address</Typography>
                      </Stack>
                      <Stack spacing={0} alignItems={"start"}>
                        <Stack justifyContent={"start"}>
                          <Typography variant="subtitle2">
                            {HospitalAddress?.addressLine1},
                            {HospitalAddress?.addressLine2},near{" "}
                            {HospitalAddress?.nearLandMark}
                          </Typography>
                        </Stack>
                        <Stack spacing={0}>
                          <Typography variant="subtitle2">
                            {LocationInfo?.cityName}-{HospitalAddress?.pincode},
                            {LocationInfo?.stateName} state ,
                            {LocationInfo?.countryName}
                          </Typography>
                          <Typography variant="subtitle2">
                            Phone No. : {contact?.phoneNumber},
                          </Typography>
                          <Typography variant="subtitle2">
                            LandLine : {contact?.landLine}
                          </Typography>
                          <Typography variant="subtitle2">
                            Fax: {faxNumber}
                          </Typography>
                        </Stack>
                      </Stack>
                      <Stack direction={"row"} spacing={3} alignItems={"start"}>
                        <a
                          href={sociallink?.googleMap}
                          target="_blank"
                          rel="noopener noreferrer"
                          style={{ textDecoration: "none" }}
                        >
                          <Button
                            size="small"
                            variant="contained"
                            startIcon={<RoomSharpIcon />}
                            fullWidth
                          >
                            View Location
                          </Button>
                        </a>
                        <Stack direction="row" spacing={0.5}>
                          <a
                            href={sociallink?.facebook}
                            target="_blank"
                            rel="noopener noreferrer"
                          >
                            <img
                              src={facebookLogo}
                              alt="Facebook"
                              width={socialMediaSize}
                              height={socialMediaSize}
                            />
                          </a>
                          <a
                            href={sociallink?.instagram}
                            target="_blank"
                            rel="noopener noreferrer"
                          >
                            <img
                              src={instagramLogo}
                              alt="Twitter"
                              width={socialMediaSize}
                              height={socialMediaSize}
                            />
                          </a>
                          <a
                            href={sociallink?.LinkedIn}
                            target="_blank"
                            rel="noopener noreferrer"
                          >
                            <img
                              src={linkedinLogo}
                              alt="LinkedIn"
                              width={socialMediaSize}
                              height={socialMediaSize}
                            />
                          </a>
                          <a
                            href={sociallink?.twitter}
                            target="_blank"
                            rel="noopener noreferrer"
                          >
                            <img
                              src={twitterLogo}
                              alt="Twitter"
                              width={socialMediaSize}
                              height={socialMediaSize}
                            />
                          </a>
                        </Stack>
                      </Stack>
                    </Box>
                    <Stack>
                      <Switch defaultChecked />
                    </Stack>
                  </CardContent>
                </Card>
              </Box>
            </Box>
            <Box>
              <Typography>Description :</Typography>
              <Typography variant="subtitle2">{about}</Typography>
            </Box>
          </CardContent>
        </Card>
      </Box>
      <Box>
        <Card>
          <CardContent>
            <Box display={"flex"} justifyContent={"space-between"}>
              <Typography>Doctors</Typography>
            </Box>
            <Divider sx={{ mt: 2, mb: 2 }} />
            <Box display={"flex"} flexWrap={"wrap"} gap={2}>
              {doctorAssignmentsDetails?.map((item, idx) => {
                console.log("dbjksdjhj", item);
                return (
                  <Card key={`doc${idx}`}>
                    <Stack
                      // justifyContent={"center"}
                      alignItems={"center"}
                      sx={{
                        background: "rgba(0, 255, 255, 0.1)",
                        pt: 2,
                        pl: 2,
                        pr: 2,
                      }}
                    >
                      <img src={doctorImg} height={100} width={100} />
                    </Stack>
                    <Stack sx={{ p: 1 }} direction={"row"} spacing={4}>
                      <Stack>
                        <Typography variant="h6">
                          {joinStringsWithSpace(
                            item?.doctorFirstName,
                            item?.doctorLastName
                          )}
                        </Typography>
                        <Typography variant="h6">
                          {`(${item?.experienceInfo?.value})`}
                        </Typography>
                      </Stack>
                      <Stack>
                        <Chip
                          label={item?.status ? "Active" : "In Active"}
                          sx={{
                            borderRadius: "4px",
                            color: item?.status ? "#269254" : "#EF4646",
                            background: item?.status ? "#DEF7EC" : "#FDEDED",
                            p: "0.5px",
                          }}
                        />
                      </Stack>
                    </Stack>
                    <Stack sx={{ p: 1 }} spacing={1}>
                      <Typography variant="caption">
                        {item?.specilizationInfo?.[0]?.value},
                        {item?.specilizationInfo?.[1]?.value}
                      </Typography>
                      <Typography variant="caption">
                        {item?.qualificationInfo?.[0]?.value},
                        {item?.qualificationInfo?.[1]?.value}
                      </Typography>
                      <Button
                        variant="contained"
                        size="small"
                        fullWidth
                        onClick={(e) => {
                          e.preventDefault();
                          dispatch(getDoctorDetail(item?.doctorDetailsID));
                          navigate("/mainPage/doctors/view");
                        }}
                      >
                        View Doctor
                      </Button>
                    </Stack>
                  </Card>
                );
              })}
            </Box>
          </CardContent>
        </Card>
      </Box>
    </Container>
  );
};

export default HospitalView;
