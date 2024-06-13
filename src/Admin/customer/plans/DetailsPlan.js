import {
  Card,
  CardContent,
  CardActions,
  Typography,
  Button,
  Grid,
  Container,
  Stack,
  Box,
  IconButton,
} from "@mui/material";
import { styled } from "@mui/system";
import ChevronLeftIcon from "@mui/icons-material/ChevronLeft";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";
import { useNavigate } from "react-router-dom";

const HighlightLabel = styled("div")(({ type }) => ({
  position: "absolute",
  top: "20px",
  right: "-70px",
  padding: "22px 60px",
  backgroundColor:
    type === "bestValue"
      ? "#F71E93"
      : type === "mostPopular"
      ? "#651fff"
      : "inherit",
  color: "white",
  fontWeight: "bold",
  borderRadius: "5px",
  textTransform: "uppercase",
  transform: "rotate(49deg)",
  zIndex: 1,
}));

const CardHeader = styled("div")({
  textAlign: "center",
  marginTop: "10px",
});

const HeaderTitle = styled(Typography)({
  marginTop: "30px",
  color: "#00378F",
  fontSize: "24px",
  fontWeight: "bold",
});

const SubHeaderTitle = styled(Typography)(({ type }) => ({
  background: "#F3F8FF",
  color:
    type === "bestValue"
      ? "#F71E93"
      : type === "mostPopular"
      ? "#651fff"
      : "inherit",
  fontWeight: "bold",
  textTransform: "uppercase",
  width: "330px",
  height: "56px",
  padding: "15px",
}));

const Price = styled(Typography)({
  fontSize: "24px",
  marginBottom: "12px",
  fontWeight: "bold",
  color: "black",
});

const StorageFee = styled(Typography)({
  marginBottom: "20px",
  color: "black",
});

const ButtonGroup = styled(CardActions)({
  display: "flex",
  justifyContent: "space-between",
  marginTop: "20px",
});

const StyledCard = styled(Card)(({ highlight }) => ({
  minWidth: 275,
  textAlign: "center",
  margin: "20px",
  paddingTop: "20px",
  paddingBottom: "20px",
  paddingLeft: "10px",
  paddingRight: "10px",
  borderRadius: "30px",
  position: "relative",
  backgroundColor:
    highlight === "bestValue"
      ? "#FFEFF8"
      : highlight === "mostPopular"
      ? "#E2E5E9"
      : "#C9DFFF",
}));

const PlanCard = ({ title, subheader, price, storageFee, highlight }) => {
  const navigate = useNavigate();
  return (
    <StyledCard highlight={highlight}>
      {highlight === "bestValue" && (
        <HighlightLabel type="bestValue">BEST VALUE</HighlightLabel>
      )}
      {highlight === "mostPopular" && (
        <HighlightLabel type="mostPopular">MOST POPULAR</HighlightLabel>
      )}
      <CardHeader>
        <SubHeaderTitle variant="body2">
          <Typography sx={{ marginRight: "130px", fontWeight: "bold" }}>
            {subheader}
          </Typography>
        </SubHeaderTitle>
        <HeaderTitle variant="h5" component="div">
          {title}
        </HeaderTitle>
      </CardHeader>
      <CardContent>
        <Price color="textSecondary">₹ {price}</Price>
        <StorageFee color="textSecondary">
          Annual Storage fee ₹ {storageFee}
        </StorageFee>
      </CardContent>
      <ButtonGroup sx={{ display: "flex", flexDirection: "column", gap: 2 }}>
        <Stack sx={{ display: "flex", flexDirection: "row", gap: 2 }}>
          <Button
            variant="contained"
            sx={{
              width: "148px",
              height: "38px",
              background: "white",
              color: "black",
              "&:hover": {
                background: "white",
                color: "black",
              },
            }}
          >
            Edit
          </Button>
          <Button
            variant="contained"
            color="primary"
            sx={{ width: "148px", height: "38px" }}
            onClick={(e) => {
              e.preventDefault();
              navigate("/customerPage/plans/plansDetailsPreview");
            }}
          >
            View
          </Button>
        </Stack>
        <Stack sx={{ display: "flex", flexDirection: "row", gap: 2 }}>
          <Button
            variant="contained"
            color="secondary"
            sx={{
              width: "148px",
              height: "38px",
              background: "white",
              color: "black",
              "&:hover": {
                background: "white",
                color: "black",
              },
            }}
          >
            Status
          </Button>
          <Button
            variant="contained"
            sx={{
              width: "148px",
              height: "38px",
              background: "#FA4040",
              "&:hover": {
                background: "#FA4040",
              },
            }}
          >
            Delete
          </Button>
        </Stack>
      </ButtonGroup>
    </StyledCard>
  );
};

const DetailsPlan = () => {
  return (
    <Container
      maxWidth="lg"
      disableGutters
      sx={{
        maxHeight: "85%",
        overflow: "auto",
        background: "#fff",
        padding: "8px",
      }}
    >
      <Stack
        sx={{
          marginTop: "15px",
          marginBottom: "15px",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <Typography
          variant="h5"
          sx={{ fontSize: "24px", fontWeight: 500, marginBottom: "10px" }}
        >
          CHOOSE YOUR PLANS
        </Typography>
        <Typography variant="h5" sx={{ fontSize: "14px", fontWeight: 500 }}>
          Stem cell banking pricing plans
        </Typography>
      </Stack>
      <Box
        sx={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          position: "relative",
        }}
      >
        <IconButton
          sx={{
            position: "absolute",
            left: 0,
            zIndex: 1,
            background: "white",
            border: "1px solid",
          }}
        >
          <ChevronLeftIcon />
        </IconButton>
        <Grid container justifyContent="center">
          <Grid item xs={12} sm={6} md={4}>
            <PlanCard
              title="BASIC"
              subheader="ANNUAL STORAGE"
              price="29,999"
              storageFee="4500"
              highlight="bestValue"
            />
          </Grid>
          <Grid item xs={12} sm={6} md={4}>
            <PlanCard
              title="PREMIUM"
              subheader="21 YEARS STORAGE"
              price="60,000"
              storageFee="4500"
              highlight="mostPopular"
            />
          </Grid>
          <Grid item xs={12} sm={6} md={4}>
            <PlanCard
              title="ELITE"
              subheader="21 YEARS STORAGE"
              price="85,000"
              storageFee="4500"
            />
          </Grid>
        </Grid>
        <IconButton
          sx={{
            position: "absolute",
            right: 0,
            zIndex: 1,
            background: "white",
            border: "1px solid",
          }}
        >
          <ChevronRightIcon />
        </IconButton>
      </Box>
      <Box
        sx={{
          display: "flex",
          justifyContent: "center",
          alignContent: "center",
          marginTop: "20px",
          marginBottom: "60px",
        }}
      >
        <Card variant="outlined">
          <CardContent sx={{ width: "550px" }}>
            <Typography
              variant="h4"
              sx={{
                background: "#F3F8FF",
                padding: "20px",
                fontSize: "20px",
                fontWeight: "bold",
                textAlign: "center",
              }}
            >
              ADDITIONAL SERVICES (EXTRA)
            </Typography>
            <Stack
              sx={{
                marginTop: "15px",
                display: "flex",
                flexDirection: "column",
                gap: 3,
              }}
            >
              <Card variant="outlined" sx={{ borderRadius: "20px" }}>
                <CardContent sx={{ fontSize: "20px" }}>Title</CardContent>
              </Card>
              <Card variant="outlined" sx={{ borderRadius: "20px" }}>
                <CardContent sx={{ fontSize: "20px" }}>Description</CardContent>
              </Card>
              <Card variant="outlined" sx={{ borderRadius: "20px" }}>
                <CardContent sx={{ fontSize: "20px" }}>Status</CardContent>
              </Card>
            </Stack>
          </CardContent>
        </Card>
      </Box>
    </Container>
  );
};

export default DetailsPlan;
