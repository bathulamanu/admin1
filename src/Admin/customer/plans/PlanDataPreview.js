import React, { useState } from "react";
import {
  Card,
  CardContent,
  Typography,
  Container,
  Stack,
  Divider,
} from "@mui/material";

const PlanDataPreview = () => {
  return (
    <Container
      maxWidth="xxl"
      disableGutters
      sx={{
        maxHeight: "85%",
        overflow: "auto",
        background: "#fff",
        marginBottom: "60px",
      }}
    >
      <Typography
        sx={{
          fontSize: "24px",
          fontWeight: 500,
          paddingTop: "8px",
          marginLeft: "10px",
        }}
        variant="h5"
      >
        View Plans
      </Typography>
      <Divider sx={{ mt: 3, mb: 3 }} />

      <Stack
        sx={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          gap: 2,
          marginBottom: "80px",
        }}
      >
        <Stack
          sx={{
            display: "flex",
            flexDirection: "row",
            gap: 2,
          }}
        >
          <Card variant="outlined" sx={{ borderRadius: "15px" }}>
            <CardContent sx={{ width: "650px" }}>
              <Stack
                direction={"row"}
                sx={{ display: "flex", justifyContent: "space-between" }}
              >
                <Stack spacing={2} marginLeft={"10px"}>
                  <Stack direction={"row"} spacing={2}>
                    <Typography
                      variant="subtitle2"
                      sx={{
                        minWidth: "80px",
                        fontSize: "14px",
                        fontWeight: 500,
                      }}
                    >
                      Title :
                    </Typography>{" "}
                    <Typography variant="subtitle2" sx={{ fontSize: "14px" }}>
                      Suraj{" "}
                    </Typography>
                  </Stack>
                  <Stack direction={"row"} spacing={2}>
                    <Typography
                      variant="subtitle2"
                      sx={{
                        minWidth: "80px",
                        fontSize: "14px",
                        fontWeight: 500,
                      }}
                    >
                      Sub - Title :
                    </Typography>{" "}
                    <Typography variant="subtitle2" sx={{ fontSize: "14px" }}>
                      Reddy
                    </Typography>
                  </Stack>
                  <Stack direction={"row"} spacing={2}>
                    <Typography
                      variant="subtitle2"
                      sx={{
                        minWidth: "80px",
                        fontSize: "14px",
                        fontWeight: 500,
                      }}
                    >
                      Icon :
                    </Typography>{" "}
                    <Typography variant="subtitle2" sx={{ fontSize: "14px" }}>
                      Icon 1
                    </Typography>
                  </Stack>
                  <Stack direction={"row"} spacing={2}>
                    <Typography
                      variant="subtitle2"
                      sx={{
                        minWidth: "80px",
                        fontSize: "14px",
                        fontWeight: 500,
                      }}
                    >
                      Currency Symbol :
                    </Typography>{" "}
                    <Typography variant="subtitle2" sx={{ fontSize: "14px" }}>
                      Rupees
                    </Typography>
                  </Stack>
                </Stack>
              </Stack>
            </CardContent>
          </Card>
          <Card variant="outlined" sx={{ borderRadius: "15px" }}>
            <CardContent sx={{ width: "650px" }}>
              {" "}
              <Stack
                direction={"row"}
                sx={{ display: "flex", justifyContent: "space-between" }}
              >
                <Stack spacing={2} marginLeft={"10px"}>
                  <Stack direction={"row"} spacing={2}>
                    <Typography
                      variant="subtitle2"
                      sx={{
                        minWidth: "80px",
                        fontSize: "14px",
                        fontWeight: 500,
                      }}
                    >
                      Price :
                    </Typography>{" "}
                    <Typography variant="subtitle2" sx={{ fontSize: "14px" }}>
                      25000
                    </Typography>
                  </Stack>
                  <Stack direction={"row"} spacing={2}>
                    <Typography
                      variant="subtitle2"
                      sx={{
                        minWidth: "80px",
                        fontSize: "14px",
                        fontWeight: 500,
                      }}
                    >
                      Offer Price :
                    </Typography>{" "}
                    <Typography variant="subtitle2" sx={{ fontSize: "14px" }}>
                      26000
                    </Typography>
                  </Stack>
                  <Stack direction={"row"} spacing={2}>
                    <Typography
                      variant="subtitle2"
                      sx={{
                        minWidth: "80px",
                        fontSize: "14px",
                        fontWeight: 500,
                      }}
                    >
                      Event Offer Price :
                    </Typography>{" "}
                    <Typography variant="subtitle2" sx={{ fontSize: "14px" }}>
                      15000
                    </Typography>
                  </Stack>
                </Stack>
              </Stack>
            </CardContent>
          </Card>
        </Stack>
        <Stack
          sx={{
            display: "flex",
            flexDirection: "row",
            gap: 2,
          }}
        >
          <Card variant="outlined" sx={{ borderRadius: "15px" }}>
            <CardContent sx={{ width: "650px" }}>
              {" "}
              <Stack
                direction={"row"}
                sx={{ display: "flex", justifyContent: "space-between" }}
              >
                <Stack spacing={2} marginLeft={"10px"}>
                  <Stack direction={"row"} spacing={2}>
                    <Typography
                      variant="subtitle2"
                      sx={{
                        minWidth: "80px",
                        fontSize: "14px",
                        fontWeight: 500,
                      }}
                    >
                      EMI Amount :
                    </Typography>{" "}
                    <Typography variant="subtitle2" sx={{ fontSize: "14px" }}>
                      700
                    </Typography>
                  </Stack>
                  <Stack direction={"row"} spacing={2}>
                    <Typography
                      variant="subtitle2"
                      sx={{
                        minWidth: "80px",
                        fontSize: "14px",
                        fontWeight: 500,
                      }}
                    >
                      EMI Text :
                    </Typography>{" "}
                    <Typography variant="subtitle2" sx={{ fontSize: "14px" }}>
                      Know
                    </Typography>
                  </Stack>
                </Stack>
              </Stack>
            </CardContent>
          </Card>
          <Card variant="outlined" sx={{ borderRadius: "15px" }}>
            <CardContent sx={{ width: "600px" }}>
              <Stack
                direction={"row"}
                sx={{ display: "flex", justifyContent: "space-between" }}
              >
                <Stack spacing={2} marginLeft={"10px"}>
                  <Stack direction={"row"} spacing={2}>
                    <Typography
                      variant="subtitle2"
                      sx={{
                        minWidth: "80px",
                        fontSize: "14px",
                        fontWeight: 500,
                      }}
                    >
                      Ribbon :
                    </Typography>{" "}
                    <Typography variant="subtitle2" sx={{ fontSize: "14px" }}>
                      No
                    </Typography>
                  </Stack>
                  <Stack direction={"row"} spacing={2}>
                    <Typography
                      variant="subtitle2"
                      sx={{
                        minWidth: "80px",
                        fontSize: "14px",
                        fontWeight: 500,
                      }}
                    >
                      Ribbon Status :
                    </Typography>{" "}
                    <Typography variant="subtitle2" sx={{ fontSize: "14px" }}>
                      True
                    </Typography>
                  </Stack>
                </Stack>
              </Stack>
            </CardContent>
          </Card>
        </Stack>
        <Stack
          sx={{
            display: "flex",
            flexDirection: "row",
            gap: 2,
          }}
        >
          <Card variant="outlined" sx={{ borderRadius: "15px" }}>
            <CardContent sx={{ width: "600px", height: "200px" }}>
              <Stack
                direction={"row"}
                sx={{ display: "flex", justifyContent: "space-between" }}
              >
                <Stack spacing={2} marginLeft={"10px"}>
                  <Stack direction={"column"} spacing={2}>
                    <Typography
                      variant="subtitle2"
                      sx={{
                        minWidth: "80px",
                        fontSize: "14px",
                        fontWeight: 500,
                      }}
                    >
                      Description :
                    </Typography>{" "}
                    <Typography variant="subtitle2" sx={{ fontSize: "14px" }}>
                      It is a long established fact that a reader will be
                      distracted by the readable content of a page when looking
                      at its layout. The point of using Lorem Ipsum is that it
                      has a more-or-less normal distribution of letters, as
                      opposed to using 'Content here, content here', making it
                      look like readable English. Many desktop publishing
                      packages and web page editors now use Lorem Ipsum as their
                      default model text, and a search for 'lorem ipsum'.
                    </Typography>
                  </Stack>
                </Stack>
              </Stack>
            </CardContent>
          </Card>
          <Card variant="outlined" sx={{ borderRadius: "15px" }}>
            <CardContent sx={{ width: "600px", height: "200px" }}>
              <Stack
                direction={"row"}
                sx={{ display: "flex", justifyContent: "space-between" }}
              >
                <Stack spacing={2} marginLeft={"10px"}>
                  <Stack direction={"column"} spacing={2}>
                    <Typography
                      variant="subtitle2"
                      sx={{
                        minWidth: "80px",
                        fontSize: "14px",
                        fontWeight: 500,
                      }}
                    >
                      Additional Info :
                    </Typography>{" "}
                    <Typography variant="subtitle2" sx={{ fontSize: "14px" }}>
                      It is a long established fact that a reader will be
                      distracted by the readable content of a page when looking
                      at its layout. The point of using Lorem Ipsum is that it
                      has a more-or-less normal distribution of letters, as
                      opposed to using 'Content here, content here', making it
                      look like readable English. Many desktop publishing
                      packages and web page editors now use Lorem Ipsum as their
                      default model text, and a search for 'lorem ipsum'.
                    </Typography>
                  </Stack>
                </Stack>
              </Stack>
            </CardContent>
          </Card>
        </Stack>
        <Stack
          sx={{
            display: "flex",
            flexDirection: "row",
            gap: 2,
          }}
        >
          <Card variant="outlined" sx={{ borderRadius: "15px" }}>
            <CardContent sx={{ width: "600px" }}>
              {" "}
              <Stack
                direction={"row"}
                sx={{ display: "flex", justifyContent: "space-between" }}
              >
                <Stack spacing={2} marginLeft={"10px"}>
                  <Stack direction={"row"} spacing={2}>
                    <Typography
                      variant="subtitle2"
                      sx={{
                        minWidth: "80px",
                        fontSize: "14px",
                        fontWeight: 500,
                      }}
                    >
                      Duration Year :
                    </Typography>{" "}
                    <Typography variant="subtitle2" sx={{ fontSize: "14px" }}>
                      2024-26
                    </Typography>
                  </Stack>
                  <Stack direction={"row"} spacing={2}>
                    <Typography
                      variant="subtitle2"
                      sx={{
                        minWidth: "80px",
                        fontSize: "14px",
                        fontWeight: 500,
                      }}
                    >
                      Duration Year Text :
                    </Typography>{" "}
                    <Typography variant="subtitle2" sx={{ fontSize: "14px" }}>
                      Start
                    </Typography>
                  </Stack>
                  <Stack direction={"row"} spacing={2}>
                    <Typography
                      variant="subtitle2"
                      sx={{
                        minWidth: "80px",
                        fontSize: "14px",
                        fontWeight: 500,
                      }}
                    >
                      Custom Text :
                    </Typography>{" "}
                    <Typography variant="subtitle2" sx={{ fontSize: "14px" }}>
                      NA
                    </Typography>
                  </Stack>
                </Stack>
              </Stack>
            </CardContent>
          </Card>
          <Stack
            sx={{
              display: "flex",
              flexDirection: "column",
              gap: 2,
              width: "600px",
            }}
          >
            <Card variant="outlined" sx={{ borderRadius: "15px" }}>
              <CardContent sx={{}}>
                <Stack
                  direction={"row"}
                  sx={{ display: "flex", justifyContent: "space-between" }}
                >
                  <Stack spacing={2} marginLeft={"10px"}>
                    <Stack direction={"row"} spacing={2}>
                      <Typography
                        variant="subtitle2"
                        sx={{
                          minWidth: "80px",
                          fontSize: "14px",
                          fontWeight: 500,
                        }}
                      >
                        Offer Timing (Date & Time) :
                      </Typography>{" "}
                      <Typography variant="subtitle2" sx={{ fontSize: "14px" }}>
                        12/04/24 - 12:00 PM
                      </Typography>
                    </Stack>
                  </Stack>
                </Stack>
              </CardContent>
            </Card>
            <Card variant="outlined" sx={{ borderRadius: "15px" }}>
              <CardContent sx={{}}>
                <Stack
                  direction={"row"}
                  sx={{ display: "flex", justifyContent: "space-between" }}
                >
                  <Stack spacing={2} marginLeft={"10px"}>
                    <Stack direction={"row"} spacing={2}>
                      <Typography
                        variant="subtitle2"
                        sx={{
                          minWidth: "80px",
                          fontSize: "14px",
                          fontWeight: 500,
                        }}
                      >
                        Status :
                      </Typography>{" "}
                      <Typography variant="subtitle2" sx={{ fontSize: "14px" }}>
                        Success
                      </Typography>
                    </Stack>
                  </Stack>
                </Stack>
              </CardContent>
            </Card>
          </Stack>
        </Stack>
      </Stack>
    </Container>
  );
};

export default PlanDataPreview;
