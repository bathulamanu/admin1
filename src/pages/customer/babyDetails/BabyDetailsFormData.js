import React, { useEffect, useState } from "react";
import { styled } from "@mui/material/styles";
import CloudUploadIcon from "@mui/icons-material/CloudUpload";

import {
  Avatar,
  Box,
  Button,
  Card,
  CardContent,
  Container,
  Grid,
  Stack,
  Typography,
} from "@mui/material";
import { useDispatch, useSelector } from "react-redux";
import { getBabyDetails } from "../../../redux/Slices/babySlice";
import { formatDate } from "../../../service/globalFunctions";

const VisuallyHiddenInput = styled("input")({
  clip: "rect(0 0 0 0)",
  clipPath: "inset(50%)",
  height: 1,
  overflow: "hidden",
  position: "absolute",
  bottom: 0,
  left: 0,
  whiteSpace: "nowrap",
  width: 1,
});

const BabyDetailsFormData = () => {
  const dispatch = useDispatch();
  const babyDetail = useSelector((state) => state.baby.babyDetail);
  useEffect(() => {
    const babyId = localStorage.getItem("selectedbabyId");
    dispatch(getBabyDetails(babyId));
  }, []);
  console.log("babyDetail", babyDetail);
  const babyName = babyDetail?.babyName;
  const babyDOB = formatDate(babyDetail?.babyDOB);
  const timeOfBirth = babyDetail?.timeOfBirth;
  const weight = babyDetail?.weight;
  const DeliveryDoctorName = babyDetail?.DeliveryDoctorName;
  const placeOfBirth = babyDetail?.placeOfBirth;
  const NomineeName = babyDetail?.NomineeName;
  const NomineeRelationship = babyDetail?.NomineeRelationship;
  const DoctorProfile = babyDetail?.DoctorProfile;
  const DoctorName = babyDetail?.DoctorName;
  const HospitalName = babyDetail?.HospitalName;
  const HospitalAddressLine1 = babyDetail?.HospitalAddressLine1;
  const HospitalAddressLine2 = babyDetail?.HospitalAddressLine2;
  const babyProfile = babyDetail?.babyProfile;

  return (
    <Container
      maxWidth="xxl"
      disableGutters
      sx={{
        maxHeight: "85%",
        overflow: "auto",
        // background: "#fff",
        padding: "8px",
      }}
    >
      <Stack>
        <Stack
          sx={{
            display: "flex",
            flexDirection: "row",
            justifyContent: "space-between",
          }}
        >
          <Box
            sx={{
              width: "49%",
              display: "flex",
              flexDirection: "column",
              gap: 4,
            }}
          >
            <Card variant="outlined">
              <CardContent>
                <Typography variant="h5" sx={{ fontWeight: "bold" }}>
                  BABY DETAILS
                </Typography>
                <Stack
                  direction={"row"}
                  sx={{ display: "flex", justifyContent: "space-between" }}
                >
                  <Stack spacing={2} mt={2}>
                    <Stack direction={"row"} spacing={2}>
                      <Typography
                        variant="subtitle2"
                        sx={{
                          minWidth: "70px",
                          fontSize: "14px",
                        }}
                      >
                        Baby Name :
                      </Typography>{" "}
                      <Typography variant="subtitle2" sx={{ fontSize: "14px" }}>
                        {babyName}
                      </Typography>
                    </Stack>
                    <Stack direction={"row"} spacing={2}>
                      <Typography
                        variant="subtitle2"
                        sx={{
                          minWidth: "70px",
                          fontSize: "14px",
                        }}
                      >
                        Date of Birth :
                      </Typography>{" "}
                      <Typography variant="subtitle2" sx={{ fontSize: "14px" }}>
                        {babyDOB}
                      </Typography>
                    </Stack>
                    <Stack direction={"row"} spacing={2}>
                      <Typography
                        variant="subtitle2"
                        sx={{
                          minWidth: "70px",
                          fontSize: "14px",
                        }}
                      >
                        Time of Birth :
                      </Typography>{" "}
                      <Typography variant="subtitle2" sx={{ fontSize: "14px" }}>
                        {timeOfBirth}
                      </Typography>
                    </Stack>
                    <Stack direction={"row"} spacing={2}>
                      <Typography
                        variant="subtitle2"
                        sx={{
                          minWidth: "70px",
                          fontSize: "14px",
                        }}
                      >
                        Weight :
                      </Typography>{" "}
                      <Typography variant="subtitle2" sx={{ fontSize: "14px" }}>
                        {weight}
                      </Typography>
                    </Stack>
                    <Stack direction={"row"} spacing={2}>
                      <Typography
                        variant="subtitle2"
                        sx={{
                          minWidth: "70px",
                          fontSize: "14px",
                        }}
                      >
                        Delivery Doctor Name :
                      </Typography>{" "}
                      <Typography variant="subtitle2" sx={{ fontSize: "14px" }}>
                        {DeliveryDoctorName}
                      </Typography>
                    </Stack>
                    <Stack direction={"row"} spacing={2}>
                      <Typography
                        variant="subtitle2"
                        sx={{
                          minWidth: "70px",
                          fontSize: "14px",
                        }}
                      >
                        Place of Birth :
                      </Typography>{" "}
                      <Typography variant="subtitle2" sx={{ fontSize: "14px" }}>
                        {placeOfBirth}
                      </Typography>
                    </Stack>
                    <Stack direction={"row"} spacing={2}>
                      <Typography
                        variant="subtitle2"
                        sx={{
                          minWidth: "70px",
                          fontSize: "14px",
                        }}
                      >
                        Nominee Name :
                      </Typography>{" "}
                      <Typography variant="subtitle2" sx={{ fontSize: "14px" }}>
                        {NomineeName}
                      </Typography>
                    </Stack>
                    <Stack direction={"row"} spacing={2}>
                      <Typography
                        variant="subtitle2"
                        sx={{
                          minWidth: "70px",
                          fontSize: "14px",
                        }}
                      >
                        Nominee Relationship :
                      </Typography>{" "}
                      <Typography variant="subtitle2" sx={{ fontSize: "14px" }}>
                        {NomineeRelationship}
                      </Typography>
                    </Stack>
                  </Stack>
                  <Avatar
                    src={`https://flyingbyts.s3.ap-south-2.amazonaws.com/${DoctorProfile}`}
                    sx={{ width: 150, height: 150, marginRight: 6 }}
                  />
                </Stack>
              </CardContent>
            </Card>
          </Box>
          <Box
            sx={{
              width: "49%",
              display: "flex",
              flexDirection: "column",
              gap: 4,
            }}
          >
            <Card variant="outlined">
              <CardContent sx={{ height: "365px" }}>
                <Typography variant="h5" sx={{ fontWeight: "bold" }}>
                  DOCTOR'S DETAILS
                </Typography>
                <Stack
                  direction={"row"}
                  sx={{ display: "flex", justifyContent: "space-between" }}
                >
                  <Stack spacing={2} mt={2}>
                    <Stack direction={"row"} spacing={2}>
                      <Typography
                        variant="subtitle2"
                        sx={{
                          minWidth: "70px",
                          fontSize: "14px",
                        }}
                      >
                        Doctor's Name :
                      </Typography>{" "}
                      <Typography variant="subtitle2" sx={{ fontSize: "14px" }}>
                        {DoctorName}
                      </Typography>
                    </Stack>
                    <Stack direction={"row"} spacing={2}>
                      <Typography
                        variant="subtitle2"
                        sx={{
                          minWidth: "70px",
                          fontSize: "14px",
                        }}
                      >
                        Hospital Name :
                      </Typography>{" "}
                      <Typography variant="subtitle2" sx={{ fontSize: "14px" }}>
                        {" "}
                        {HospitalName}
                      </Typography>
                    </Stack>
                    <Stack direction={"row"} spacing={2}>
                      <Typography
                        variant="subtitle2"
                        sx={{
                          minWidth: "70px",
                          fontSize: "14px",
                        }}
                      >
                        Hospital Address Line-1 :
                      </Typography>{" "}
                      <Typography variant="subtitle2" sx={{ fontSize: "14px" }}>
                        {HospitalAddressLine1}
                      </Typography>
                    </Stack>
                    <Stack direction={"row"} spacing={2}>
                      <Typography
                        variant="subtitle2"
                        sx={{
                          minWidth: "74px",
                          fontSize: "15px",
                        }}
                      >
                        Hospital Address Line-1 :
                      </Typography>{" "}
                      <Typography variant="subtitle2" sx={{ fontSize: "14px" }}>
                        {HospitalAddressLine2}
                      </Typography>
                    </Stack>
                  </Stack>
                  <Avatar
                    src={`https://flyingbyts.s3.ap-south-2.amazonaws.com/${babyProfile}`}
                    sx={{ width: 150, height: 150, marginRight: 6 }}
                  />
                </Stack>
              </CardContent>
            </Card>
          </Box>
        </Stack>
        <Card variant="outlined" sx={{ marginTop: "20px" }}>
          <CardContent
            sx={{
              display: "flex",
              flexDirection: "column",
              gap: 4,
              alignItems: "center",
            }}
          >
            <Box>
              <Button
                component="label"
                role={undefined}
                variant="outlined"
                tabIndex={-1}
                startIcon={<CloudUploadIcon />}
                sx={{ padding: "30px" }}
              >
                Upload Baby Images
                <VisuallyHiddenInput type="file" />
              </Button>
            </Box>
            <Box>
              <Button
                component="label"
                role={undefined}
                variant="contained"
                tabIndex={-1}
              >
                Upload Image
                <VisuallyHiddenInput type="file" />
              </Button>
            </Box>
          </CardContent>
        </Card>
      </Stack>
    </Container>
  );
};

export default BabyDetailsFormData;
