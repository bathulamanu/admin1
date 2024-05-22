import {
  Avatar,
  Box,
  Card,
  CardContent,
  Container,
  Divider,
  Stack,
  Switch,
  Typography,
} from "@mui/material";
import React from "react";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import { useSelector } from "react-redux";
import {
  formatToMMMYYYY,
  joinStringsWithSpace,
  stringAvatar,
} from "../../globalFunctions";
import doctorImage from "../../assets/doctor_img.png";
import stathoscope from "../../assets/stathoscope.png";
import chat from "../../assets/chat.png";

const DoctorView = () => {
  const doctorDetail = useSelector((state) => state.doctor.doctorDetail);
  console.log("doctorDetails", doctorDetail);
  const {
    doctorFirstName,
    doctorLastName,
    doctorID,
    specilizationInfo,
    DOB,
    IMRregisterID,
    qualificationInfo,
    experienceInfo,
    doctorBio,
    previousExperience,
  } = doctorDetail;
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
                  <Typography>
                    Dr.{joinStringsWithSpace(doctorFirstName, doctorLastName)}
                  </Typography>
                </Stack>
                <MoreVertIcon />
              </Box>
              <Divider sx={{ mt: 3, mb: 3 }} />
              <Box display={"flex"}>
                <img src={doctorImage} height={200} width={200} />
                <Card>
                  <CardContent sx={{ display: "flex", gap: 4 }}>
                    <Box display={"flex"} flexDirection={"column"} gap={3}>
                      <Stack>
                        <Typography>
                          {joinStringsWithSpace(
                            doctorFirstName,
                            doctorLastName
                          )}
                        </Typography>
                        <Typography>({doctorID})</Typography>
                      </Stack>
                      <Stack spacing={1}>
                        <Stack direction={"row"} spacing={2}>
                          <Typography variant="subtitle2">
                            Specialist
                          </Typography>{" "}
                          :{" "}
                          <Typography variant="subtitle2">
                            {specilizationInfo?.[0]?.value} ,{" "}
                            {specilizationInfo?.[1]?.value}{" "}
                          </Typography>
                        </Stack>
                        <Stack direction={"row"} spacing={2}>
                          <Typography variant="subtitle2">Degree</Typography> :{" "}
                          <Typography variant="subtitle2">
                            {qualificationInfo?.[0]?.value}
                            {", "}
                            {qualificationInfo?.[1]?.value}{" "}
                          </Typography>
                        </Stack>
                        <Stack direction={"row"} spacing={2}>
                          <Typography variant="subtitle2">
                            Date of Birth
                          </Typography>{" "}
                          : <Typography variant="subtitle2">{DOB}</Typography>
                        </Stack>
                        <Stack direction={"row"} spacing={2}>
                          <Typography variant="subtitle2">IMR ID</Typography> :{" "}
                          <Typography variant="subtitle2">
                            {IMRregisterID}
                          </Typography>
                        </Stack>
                      </Stack>
                    </Box>
                    <Divider orientation="vertical" />
                    <Box display={"flex"} flexDirection={"column"} gap={5}>
                      <Stack>
                        <Typography>About the Doctor</Typography>
                      </Stack>
                      <Stack direction={"row"} spacing={3} alignItems={"start"}>
                        <Stack justifyContent={"start"}>
                          <img src={stathoscope} height={24} width={24} />
                        </Stack>
                        <Stack spacing={1}>
                          <Typography>
                            {experienceInfo?.value} of Experience
                          </Typography>
                          <Typography variant="subtitle2">
                            {doctorBio}
                          </Typography>
                        </Stack>
                      </Stack>
                      <Stack direction={"row"} spacing={3} alignItems={"start"}>
                        <Stack justifyContent={"start"}>
                          <img src={chat} height={24} width={24} />
                        </Stack>
                        <Stack spacing={1}>
                          <Typography>
                            {experienceInfo?.value} of Experience
                          </Typography>
                          <Typography variant="subtitle2">
                            {doctorBio}
                          </Typography>
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
              <Typography>{doctorBio}</Typography>
            </Box>
          </CardContent>
        </Card>
      </Box>
      <Box>
        <Card>
          <CardContent>
            <Box display={"flex"} justifyContent={"space-between"}>
              <Typography>Experience</Typography>
              <Typography>View all</Typography>
            </Box>
            <Divider sx={{ pt: 2, pb: 2 }} />
            <Box>
              {previousExperience?.map((item) => {
                return (
                  <Box display={"flex"} justifyContent={"space-between"}>
                    <Box>
                      <Box>
                        <Avatar
                          {...stringAvatar("Kent Dodds")}
                          sx={{
                            width: 24,
                            height: 24,
                            fontSize: "12px",
                          }}
                        />
                      </Box>
                      <Box>
                        <Typography>{}</Typography>
                        {item?.specilizationInfo?.map((ele) => {
                          return (
                            <Typography variant="subtitle2">
                              {" "}
                              {ele?.value}
                              {" - "} {item?.employmentTypeInfo?.value}
                            </Typography>
                          );
                        })}
                        <Stack direction={"row"}>
                          <Typography variant="subtitle2">
                            {item?.LocationInfo?.cityName}
                          </Typography>
                          ,
                          <Typography variant="subtitle2">
                            {item?.LocationInfo?.stateName}
                          </Typography>
                          ,
                          <Typography variant="subtitle2">
                            {item?.LocationInfo?.countryName}
                          </Typography>
                        </Stack>
                      </Box>
                    </Box>
                    <Box>
                      <Stack direction={"row"} spacing={1}>
                        <Typography variant="subtitle2">
                          {formatToMMMYYYY(item?.startDate)}
                        </Typography>
                        <Typography>-</Typography>
                        <Typography variant="subtitle2">
                          {formatToMMMYYYY(item?.endDate)}
                        </Typography>
                        ,
                        <Typography variant="subtitle2">
                          {item?.experienceInfo?.value}
                        </Typography>
                      </Stack>
                    </Box>
                  </Box>
                );
              })}
            </Box>
          </CardContent>
        </Card>
      </Box>
    </Container>
  );
};

export default DoctorView;
