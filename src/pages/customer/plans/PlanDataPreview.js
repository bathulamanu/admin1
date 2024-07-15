import React from "react";
import {
  Card,
  CardContent,
  Typography,
  Container,
  Stack,
  Divider,
  Box,
} from "@mui/material";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useSelector } from "react-redux";

const PlanDataPreview = () => {
  const subscriptionPanDetails = useSelector(
    (state) => state.plan.subscriptionPanDetails
  );
  console.log(subscriptionPanDetails);
  const title = subscriptionPanDetails?.title;
  const subTitle = subscriptionPanDetails?.subTitle;
  const Icon = subscriptionPanDetails?.Icon;
  const currencySymbol = subscriptionPanDetails?.currencySymbol;
  const price = subscriptionPanDetails?.price;
  const offerPrice = subscriptionPanDetails?.offerPrice;
  const eventOfferPrice = subscriptionPanDetails?.eventOfferPrice;
  const EMI = subscriptionPanDetails?.EMI;
  const EMItext = subscriptionPanDetails?.EMItext;
  const ribben = subscriptionPanDetails?.ribben;
  const ribbenStatus = subscriptionPanDetails?.ribbenStatus;
  const description = subscriptionPanDetails?.description;
  const additionalInfo = subscriptionPanDetails?.additionalInfo;
  const durationYear = subscriptionPanDetails?.durationYear;
  const durationYearText = subscriptionPanDetails?.durationYearText;
  const customText = subscriptionPanDetails?.customText;
  const offerTiming = subscriptionPanDetails?.offerTiming;
  const status = subscriptionPanDetails?.status;

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
      <ToastContainer />
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
          gap: 2,
          marginBottom: "80px",
          padding: "15px",
        }}
      >
        <Stack
          sx={{
            display: "flex",
            flexDirection: "row",
            justifyContent: "space-between",
          }}
        >
          <Box sx={{ width: "49%" }}>
            <Card variant="outlined" sx={{ borderRadius: "15px" }}>
              <CardContent>
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
                        {title}
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
                        {subTitle}
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
                        {Icon}
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
                        {currencySymbol}
                      </Typography>
                    </Stack>
                  </Stack>
                </Stack>
              </CardContent>
            </Card>
          </Box>
          <Box sx={{ width: "49%" }}>
            <Card variant="outlined" sx={{ borderRadius: "15px" }}>
              <CardContent sx={{ height: "175px" }}>
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
                        {price}
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
                        {offerPrice}
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
                        {eventOfferPrice}
                      </Typography>
                    </Stack>
                  </Stack>
                </Stack>
              </CardContent>
            </Card>
          </Box>
        </Stack>
        <Stack
          sx={{
            display: "flex",
            flexDirection: "row",
            justifyContent: "space-between",
          }}
        >
          <Box sx={{ width: "49%" }}>
            <Card variant="outlined" sx={{ borderRadius: "15px" }}>
              <CardContent>
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
                        {EMI}
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
                        {EMItext}
                      </Typography>
                    </Stack>
                  </Stack>
                </Stack>
              </CardContent>
            </Card>
          </Box>
          <Box sx={{ width: "49%" }}>
            <Card variant="outlined" sx={{ borderRadius: "15px" }}>
              <CardContent>
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
                        {ribben}
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
                      {ribbenStatus === 46 ? (
                        <Typography
                          variant="subtitle2"
                          sx={{ fontSize: "14px" }}
                        >
                          true
                        </Typography>
                      ) : (
                        <Typography
                          variant="subtitle2"
                          sx={{ fontSize: "14px" }}
                        >
                          false
                        </Typography>
                      )}
                    </Stack>
                  </Stack>
                </Stack>
              </CardContent>
            </Card>
          </Box>
        </Stack>
        <Stack
          sx={{
            display: "flex",
            flexDirection: "row",
            justifyContent: "space-between",
          }}
        >
          <Box sx={{ width: "49%" }}>
            <Card variant="outlined" sx={{ borderRadius: "15px" }}>
              <CardContent>
                <Stack
                  direction="row"
                  sx={{ display: "flex", justifyContent: "space-between" }}
                >
                  <Stack spacing={2}>
                    <Typography
                      variant="subtitle2"
                      sx={{
                        minWidth: "80px",
                        fontSize: "14px",
                        fontWeight: 500,
                      }}
                    >
                      Description :
                    </Typography>
                    <Typography
                      variant="subtitle2"
                      sx={{
                        fontSize: "14px",
                      }}
                    >
                      {description}
                    </Typography>
                  </Stack>
                </Stack>
              </CardContent>
            </Card>
          </Box>
          <Box sx={{ width: "49%" }}>
            <Card variant="outlined" sx={{ borderRadius: "15px" }}>
              <CardContent sx={{ height: "200px" }}>
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
                        {additionalInfo}
                      </Typography>
                    </Stack>
                  </Stack>
                </Stack>
              </CardContent>
            </Card>
          </Box>
        </Stack>
        <Stack
          sx={{
            display: "flex",
            flexDirection: "row",
            justifyContent: "space-between",
          }}
        >
          <Box sx={{ width: "49%" }}>
            <Card variant="outlined" sx={{ borderRadius: "15px" }}>
              <CardContent>
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
                        {durationYear}
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
                        {durationYearText}
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
                        {customText}
                      </Typography>
                    </Stack>
                  </Stack>
                </Stack>
              </CardContent>
            </Card>
          </Box>
          <Stack
            sx={{
              width: "49%",
              display: "flex",
              flexDirection: "column",
              gap: 2,
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
                        {offerTiming}
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
                      {status === 47 ? (
                        <Typography
                          variant="subtitle2"
                          sx={{ fontSize: "14px" }}
                        >
                          Active
                        </Typography>
                      ) : (
                        <Typography
                          variant="subtitle2"
                          sx={{ fontSize: "14px" }}
                        >
                          InActive
                        </Typography>
                      )}
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
