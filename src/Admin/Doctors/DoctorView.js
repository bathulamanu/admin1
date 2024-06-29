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
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
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
  const doctorFirstName = doctorDetail?.doctorFirstName;
  const doctorLastName = doctorDetail?.doctorLastName;
  const doctorID = doctorDetail?.doctorID;
  const specialistInfo = doctorDetail?.specialistInfo;
  const DOB = doctorDetail?.DOB;
  const IMRregisterID = doctorDetail?.IMRregisterID;
  const qualification = doctorDetail?.qualification;
  const experienceInfo = doctorDetail?.experienceInfo;
  const doctorBio = doctorDetail?.doctorBio;
  const previousExperience = doctorDetail?.previousExperience;

  // const {
  //   doctorFirstName = "",
  //   doctorLastName = "",
  //   doctorID = "",
  //   specilizationInfo = [],
  //   DOB = "",
  //   IMRregisterID = "",
  //   qualificationInfo = [],
  //   experienceInfo = {},
  //   doctorBio = "",
  //   previousExperience = [],
  // } = doctorDetail;

  return (
    <Container
      disableGutters
      maxWidth="xxl"
      sx={{
        maxHeight: "85%",
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
                  <Typography
                    variant="h5"
                    sx={{
                      color: "#327CF3",
                      fontSize: "24px",
                      fontWeight: "bold",
                    }}
                  >
                    Dr.{joinStringsWithSpace(doctorFirstName, doctorLastName)}
                  </Typography>
                </Stack>
                <MoreVertIcon />
              </Box>
              <Divider sx={{ mt: 3, mb: 3 }} />
              <Box
                sx={{
                  display: "flex",
                  flexDirection: "row",
                  justifyContent: "space-between",
                  gap: 4,
                }}
              >
                <Box
                  sx={{
                    width: "20%",
                    display: "flex",
                    flexDirection: "column",
                    gap: 4,
                  }}
                >
                  <Card variant="outlined" sx={{ height: "280px" }}>
                    <CardContent sx={{ display: "flex", gap: 4 }}>
                      <img
                        src={doctorImage}
                        height={"auto"}
                        width={200}
                        alt="Doctor"
                      />
                    </CardContent>
                  </Card>
                </Box>
                <Box
                  sx={{
                    width: "80%",
                    display: "flex",
                    flexDirection: "column",
                    gap: 4,
                  }}
                >
                  <Card variant="outlined" sx={{ height: "280px" }}>
                    <CardContent sx={{ display: "flex", gap: 4 }}>
                      <Box
                        display={"flex"}
                        width={"48%"}
                        flexDirection={"column"}
                        gap={4}
                      >
                        <Stack>
                          <Typography
                            variant="h5"
                            sx={{
                              color: "#327CF3",
                              fontSize: "18px",
                              fontWeight: "bold",
                            }}
                          >
                            {joinStringsWithSpace(
                              doctorFirstName,
                              doctorLastName
                            )}
                          </Typography>
                          <Typography
                            variant="h5"
                            sx={{
                              color: "#327CF3",
                              fontSize: "18px",
                            }}
                          >
                            ({doctorID})
                          </Typography>
                        </Stack>
                        <Stack spacing={1}>
                          <Stack direction={"row"} spacing={1}>
                            <Typography
                              variant="subtitle2"
                              sx={{
                                minWidth: "80px",
                                fontSize: "16px",
                                fontWeight: "bold",
                              }}
                            >
                              Specialist
                            </Typography>{" "}
                            <Typography
                              variant="subtitle2"
                              sx={{ fontSize: "16px", fontWeight: "bold" }}
                            >
                              :
                            </Typography>
                            <Typography
                              variant="subtitle2"
                              sx={{ fontSize: "16px" }}
                            >
                              {specialistInfo?.[0]?.value || ""}
                              {/* ,{" "}
                              {specialist?.[1]?.value || ""}{" "} */}
                            </Typography>
                          </Stack>
                          <Stack direction={"row"} spacing={1}>
                            <Typography
                              variant="subtitle2"
                              sx={{
                                minWidth: "80px",
                                fontSize: "16px",
                                fontWeight: "bold",
                              }}
                            >
                              Degree
                            </Typography>
                            <Typography
                              variant="subtitle2"
                              sx={{ fontSize: "16px", fontWeight: "bold" }}
                            >
                              :
                            </Typography>
                            <Typography
                              variant="subtitle2"
                              sx={{ fontSize: "16px" }}
                            >
                              {qualification?.[0]?.value || ""}
                              {/* {", "}
                              {qualification?.[1]?.value || ""}{" "} */}
                            </Typography>
                          </Stack>
                          <Stack direction={"row"} spacing={1}>
                            <Typography
                              variant="subtitle2"
                              sx={{
                                minWidth: "80px",
                                fontSize: "16px",
                                fontWeight: "bold",
                              }}
                            >
                              Date of Birth
                            </Typography>
                            <Typography
                              variant="subtitle2"
                              sx={{ fontSize: "16px", fontWeight: "bold" }}
                            >
                              :
                            </Typography>
                            <Typography
                              variant="subtitle2"
                              sx={{ fontSize: "16px" }}
                            >
                              {formatToMMMYYYY(DOB) || ""}
                            </Typography>
                          </Stack>
                          <Stack direction={"row"} spacing={1}>
                            <Typography
                              variant="subtitle2"
                              sx={{
                                minWidth: "80px",
                                fontSize: "16px",
                                fontWeight: "bold",
                              }}
                            >
                              IMR ID
                            </Typography>
                            <Typography
                              variant="subtitle2"
                              sx={{ fontSize: "16px", fontWeight: "bold" }}
                            >
                              :
                            </Typography>
                            <Typography
                              variant="subtitle2"
                              sx={{ fontSize: "16px" }}
                            >
                              {IMRregisterID}
                            </Typography>
                          </Stack>
                        </Stack>
                      </Box>
                      <Divider orientation="vertical" flexItem />
                      <Box
                        display={"flex"}
                        width={"48%"}
                        flexDirection={"column"}
                        gap={4}
                      >
                        <Stack
                          sx={{
                            display: "flex",
                            flexDirection: "row",
                            justifyContent: "space-between",
                            width: "100%",
                          }}
                        >
                          <Stack>
                            <Typography
                              sx={{ fontSize: "18px", fontWeight: "bold" }}
                            >
                              About the Doctor
                            </Typography>
                          </Stack>
                          <Stack>
                            <Switch defaultChecked />
                          </Stack>
                        </Stack>
                        <Stack
                          direction={"row"}
                          spacing={3}
                          alignItems={"start"}
                        >
                          <Stack justifyContent={"start"}>
                            <img
                              src={stathoscope}
                              height={24}
                              width={24}
                              alt="Stethoscope"
                            />
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
                        <Stack
                          direction={"row"}
                          spacing={3}
                          alignItems={"start"}
                        >
                          <Stack justifyContent={"start"}>
                            <img src={chat} height={24} width={24} alt="Chat" />
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
                    </CardContent>
                  </Card>
                </Box>
              </Box>
            </Box>
            <Box>
              <Typography
                variant="h5"
                sx={{ fontSize: "18px", fontWeight: "bold" }}
              >
                Description :
              </Typography>
              <Typography variant="subtitle2" sx={{ fontSize: "16px" }}>
                {doctorBio}
              </Typography>
            </Box>
          </CardContent>
        </Card>
      </Box>
      <Box>
        <Card>
          <CardContent>
            <Box display={"flex"} justifyContent={"space-between"}>
              <Typography sx={{ fontSize: "18px", fontWeight: "bold" }}>
                Experience
              </Typography>
              <Typography sx={{ fontSize: "18px", fontWeight: "bold" }}>
                View all
              </Typography>
            </Box>
            <Divider sx={{ mt: 2, mb: 2 }} />
            <Box>
              {previousExperience?.map((item, index) => {
                // console.log("doctorsNamehgdfjsg", item);
                return (
                  <Box
                    key={index}
                    display={"flex"}
                    justifyContent={"space-between"}
                  >
                    <Box display={"flex"} gap={2}>
                      <Box>
                        <Avatar
                          {...stringAvatar(
                            item?.hospitalDetails?.hospitalName || ""
                          )}
                          sx={{
                            width: 28,
                            height: 28,
                            fontSize: "12px",
                            background: "blue",
                          }}
                        />
                      </Box>
                      <Box>
                        <Typography variant="h6">
                          {item?.hospitalDetails?.hospitalName}
                        </Typography>
                        <Stack direction={"row"}>
                          <Typography variant="subtitle2">
                            {" "}
                            {item?.hospitalDetails?.HospitalAddress
                              ?.nearLandMark || ""}
                            ,{" "}
                          </Typography>
                          <Typography variant="subtitle2">
                            {item?.hospitalDetails?.HospitalAddress
                              ?.addressLine1 || ""}
                          </Typography>
                          <Typography variant="subtitle2">
                            {item?.hospitalDetails?.HospitalAddress
                              ?.addressLine2 || ""}
                          </Typography>
                        </Stack>

                        {item?.specilizationInfo?.map((ele, i) => {
                          return (
                            <Typography key={i} variant="subtitle2">
                              {" "}
                              {ele?.value || ""}
                              {" - "} {item?.employmentTypeInfo?.value || ""}
                            </Typography>
                          );
                        })}
                        <Stack direction={"row"}>
                          <Typography variant="subtitle2">
                            {item?.LocationInfo?.cityName || ""} -{" "}
                            {item?.hospitalDetails?.HospitalAddress?.pincode ||
                              ""}
                            ,
                          </Typography>

                          <Typography variant="subtitle2">
                            {item?.LocationInfo?.stateName || ""} ,
                          </Typography>

                          <Typography variant="subtitle2">
                            {item?.LocationInfo?.countryName || ""}
                          </Typography>
                        </Stack>
                        <Stack direction={"row"} spacing={1}>
                          <Typography variant="subtitle2">
                            {" "}
                            Phone No.{" "}
                            {item?.hospitalDetails?.contact?.phoneNumber || ""}
                          </Typography>
                          <Typography variant="subtitle2">
                            Landline{" "}
                            {item?.hospitalDetails?.contact?.landLine || ""}
                          </Typography>
                        </Stack>
                        <Stack>
                          <Typography variant="subtitle2">
                            Fax No. {item?.hospitalDetails?.faxNumber || ""}
                          </Typography>
                        </Stack>
                      </Box>
                    </Box>
                    <Box>
                      <Stack direction={"row"} spacing={1}>
                        <Typography variant="subtitle2">
                          {formatToMMMYYYY(item?.startDate) || ""}
                        </Typography>
                        <Typography variant="subtitle2">-</Typography>
                        <Typography variant="subtitle2">
                          {formatToMMMYYYY(item?.endDate) || ""},
                        </Typography>

                        <Typography variant="subtitle2">
                          {item?.experienceInfo?.value || ""}
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
