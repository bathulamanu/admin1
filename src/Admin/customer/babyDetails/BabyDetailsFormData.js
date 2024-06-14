import React, { useState } from "react";
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
            gap: 5,
            // marginTop: "20px",
          }}
        >
          <Card variant="outlined" sx={{ width: "720px" }}>
            <CardContent sx={{ width: "600px" }}>
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
                      Suraj Reddy
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
                      12/04/24
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
                      12:00 PM
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
                      4 KG
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
                      RJ Praven
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
                      Hydrabad
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
                      Raima Reddy
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
                      Mother
                    </Typography>
                  </Stack>
                </Stack>
                <Avatar sx={{ width: 150, height: 150, marginRight: 6 }} />
              </Stack>
            </CardContent>
          </Card>
          <Card variant="outlined" sx={{ width: "720px" }}>
            <CardContent sx={{ width: "600px" }}>
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
                      RJ Praven
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
                      Sum co Hospital
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
                      Hydrabad
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
                      Hydrabad
                    </Typography>
                  </Stack>
                </Stack>
                <Avatar sx={{ width: 150, height: 150, marginRight: 6 }} />
              </Stack>
            </CardContent>
          </Card>
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
