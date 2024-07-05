import React, { useEffect, useState } from "react";
import {
  Avatar,
  Box,
  Button,
  Card,
  CardContent,
  Grid,
  Stack,
  Typography,
} from "@mui/material";
import { ToastContainer, toast } from "react-toastify";
import { useDispatch, useSelector } from "react-redux";
import { getAnnexureInfo } from "../../Slices/globalSlice";
import { useNavigate } from "react-router-dom";

const headingStyle = {
  fontSize: "24px",
  fontWeight: 500,
  marginTop: "10px",
  marginLeft: "5px",
  textAlign: "center",
};

const ClientDetailsPreview = (props) => {
  var { setCurrentStep } = props;
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [
    customerAnnexureInformationId,
    setCustomerAnnexureInformationId,
  ] = useState(null);
  const SubscribedInnerPageData = useSelector(
    (state) => state.global.SubscribedUserData
  );
  console.log("SubscribedInnerPageData", SubscribedInnerPageData);

  const customerDetail = useSelector((state) => state.customers.customerDetail);
  const customerID = customerDetail?.customerID;
  console.log("customerDetail customerID", customerID);

  useEffect(() => {
    dispatch(getAnnexureInfo(customerID));
  }, []);

  const [data, setData] = useState({
    customerAnnexureInformationId: null,
    customerID: null,
    CustomerClientMotherDetails: {
      ExpectantMotherName: "",
      ExpectantMotherDOB: "",
      ExpectantMotherEmail: "",
      ExpectantMotherMobile: "",
      ExpectantMotherOccupation: "",
      ExpectantMotherDesignation: "",
      ExpectantMotherOrganizationName: "",
      ExpectantMotherIDproof: null,
      ExpectantMotherIdproofNo: "",
      ExpectantMotherOtherInfo: "",
      ExpectantMotherIDproofPhoto: "",
      ExpectantMotherProfilePhoto: "",
      ExpectantMotherIDproofValue: "",
    },
    CustomerClientFatherDetails: {
      ExpectantFatherName: "",
      ExpectantFatherDOB: "",
      ExpectantFatherEmail: "",
      ExpectantFatherMobile: "",
      ExpectantFatherOccupation: "",
      ExpectantFatherDesignation: "",
      ExpectantFatherOrganizationName: "",
      ExpectantFatherIDproof: null,
      ExpectantFatherIdproofNo: "",
      ExpectantFatherOtherInfo: "",
      ExpectantFatherIDproofPhoto: "",
      ExpectantFatherProfilePhoto: "",
      ExpectantFatherIDproofValue: "",
    },
    CustomerCommunicationDetails: {
      Address: "",
      City: null,
      State: null,
      Country: null,
      PinCode: "",
      permanentAddressIsSameAsCorrespondenceAddress: null,
      PermanentAddress: "",
      PermanentAddressCity: null,
      PermanentAddressState: null,
      PermanentAddressCountry: null,
      PermanentAddressPinCode: "",
      StateValue: "",
      CityValue: "",
      PermanentStateValue: "",
      PermanentCityValue: "",
    },
    BabyDetails: {
      babyName: "",
      babyProfile: "",
      DOB: null,
      TimeOfBirth: "",
      Weight: "",
      DeliveryDoctorName: "",
      PlaceOfBirth: "",
      NomineeName: "",
      NomineeRelationShip: "",
    },
    DoctorDetails: {
      doctorName: null,
      hospitalName: null,
      hospitalAddressLine1: "",
      hospitalAddressLine2: "",
    },
    CustomerHospitalBirthingdetails: {
      ExpectedDateOfDelivery: "",
      TypeOfpregnancy: null,
      HowManyChildrensDoYouHaveAlready: "",
      ConsultingGynocologist: "",
      ConsultingHospital: "",
      ConsultingHospitalAddress: "",
      ConsultingHospitalCountry: null,
      ConsultingHospitalState: null,
      ConsultingHosptalCity: null,
      ConsultingHospitalPinCode: "",
      IsDeliveringHospitalSameAsConsultingHospotal: null,
      DeliveringHospitalAddress: "",
      DeliveringHospitalCountry: null,
      DeliveringHospitalState: null,
      DeliveringHosptalCity: null,
      DeliveringHospitalPinCode: "",
      ConsultingHospitalStateValue: "",
      ConsultingHospitalCityValue: "",
      DeliveringHospitalStateValue: "",
      DeliveringHosptalCityValue: "",
      TypeOfpregnancyValue: "",
    },
    CustomerData: [
      {
        customerID: null,
        customerAnnexureInformationId: null,
        ReferenceDetails: {
          ExisitingCryovaultClientUIN: "",
          IfReferredByExisitingClientName: "",
          Mobile1: "",
          Mobile2: "",
          shipmentDetails: "",
          Name: "",
          RelationShip: "",
          EmergencyMobile1: "",
          EmergencyMobile2: "",
          meternalSampleAndUmbilicalBleed: null,
          phledopomist: null,
        },
        ExcutiveInfoForbankUse: {
          NameOfExcutive: "",
          EmployeeCode: "",
          NameOfManager: "",
          AreaOrRegion: "",
          Date: "",
          ExcutiveSignature: "",
          Name: "",
        },
        AllSignature: {
          MotherOrGuardianSignature: "",
          FatherOrGuardianSignature: "",
          MedicalDirectorSignature: "",
          MotherOrGuardianName: "",
          FatherOrGuardianName: "",
          MedicalDirectorName: "",
        },
        customerAnnexureSubInformationId: null,

        HealthHistoryQuestionnaire: {
          "medicalCondition?": {
            cancerDiabetesHepatitisBloodDisease: null,
            HIVAIDS: null,
            strokeLungSclerosis: null,
          },
          anyTypeInfection: null,
          DementiaDegenerativeDisease: null,
          biteFromAnimal: null,
          sexuallyTransmittedDisease: null,
          immunisationsTattoosBodypiercing: null,
          juvenileDetentionLockupJail: null,
          livedWithApersonWhoHasHepatitis: null,
          compensationForSex: null,
          receivedWholeBloodBloodFactorProductsBoneMarrowTransplantation: null,
          IntimateContactWithWhoHasHIVAIDS: null,
          SARSavianFluH1N1: null,
          from1980Through1986: {
            spent3MonthsOrMoreCumulativelyInTheUnitedKingdom: null,
            ResidedAtaUSmilitaryBaseinEurope: null,
          },
          sufferedFromMalariaChikungunyaDengueandWestNileFever: null,
          visitedOrlivedOutsideofIndia: null,
          PersonalHistory: {
            AreyouAndTheWouldbeBabysGeneticFatherBloodRelatives: null,
            pregnancyResultFromDonorEggSpermSurrogate: null,
            everHadAbnormalPregnancy: null,
          },
          FamilyHistory: {
            relativesWithCancerleukemiaBefore20: null,
            RedCellRelatedDiseaseorAnyMetabolicStorageDiseaseor: null,
            relativesWithCancerleukemiaBefore20WHO: "",
            RedCellRelatedDiseaseorAnyMetabolicStorageDiseaseorWHO: "",
          },
        },
      },
    ],
  });
  const [formValues, setFormValues] = useState({
    cancerDiabetesHepatitisBloodDisease: false,
    HIVAIDS: false,
    strokeLungSclerosis: false,
    anyTypeInfection: false,
    DementiaDegenerativeDisease: false,
    biteFromAnimal: false,
    sexuallyTransmittedDisease: false,
    immunisationsTattoosBodypiercing: false,
    juvenileDetentionLockupJail: false,
    livedWithApersonWhoHasHepatitis: false,
    compensationForSex: false,
    receivedWholeBloodBloodFactorProductsBoneMarrowTransplantation: "",
    IntimateContactWithWhoHasHIVAIDS: "",
    SARSavianFluH1N1: "",
    spent3MonthsOrMoreCumulativelyInTheUnitedKingdom: true,
    ResidedAtaUSmilitaryBaseinEurope: false,
    sufferedFromMalariaChikungunyaDengueandWestNileFever: false,
    visitedOrlivedOutsideofIndia: "",
    AreyouAndTheWouldbeBabysGeneticFatherBloodRelatives: "",
    pregnancyResultFromDonorEggSpermSurrogate: "",
    everHadAbnormalPregnancy: false,
    chooseValue: "",
    relativesWithCancerleukemiaBefore20: "",
    RedCellRelatedDiseaseorAnyMetabolicStorageDiseaseor: "",
  });

  const handleChange = (name, value) => {
    setFormValues((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const SaveInnerPage = () => {
    toast.success("Saved Information Successfully");
    navigate("/customerPage/customerDashboard");
  };

  const GoToFirstPage = () => {
    setCurrentStep(1);
  };

  useEffect(() => {
    async function getCustomerFatherData() {
      setCustomerAnnexureInformationId(
        SubscribedInnerPageData?.customerAnnexureInformationId
      );
      if (SubscribedInnerPageData) {
        setData(SubscribedInnerPageData);
      }
    }
    getCustomerFatherData();
  }, [SubscribedInnerPageData]);

  return (
    <Card variant="outlined">
      <CardContent>
        <Typography variant="h5" sx={headingStyle}>
          CLIENT INFORMATION
        </Typography>
        <Stack
          sx={{
            display: "flex",
            flexDirection: "row",
            justifyContent: "space-between",
            padding: "20px",
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
                  FATHER INFORMATION
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
                          fontSize: "15px",
                        }}
                      >
                        Expected Father Name :
                      </Typography>{" "}
                      <Typography variant="subtitle2">
                        {data.CustomerClientFatherDetails?.ExpectantFatherName}
                      </Typography>
                    </Stack>
                    <Stack direction={"row"} spacing={2}>
                      <Typography
                        variant="subtitle2"
                        sx={{
                          minWidth: "70px",
                          fontSize: "15px",
                        }}
                      >
                        Date of Birth :
                      </Typography>{" "}
                      <Typography variant="subtitle2">
                        {" "}
                        formatDateYYYYMMDD{" "}
                        {data.CustomerClientFatherDetails?.ExpectantFatherDOB}
                      </Typography>
                    </Stack>
                    <Stack direction={"row"} spacing={2}>
                      <Typography
                        variant="subtitle2"
                        sx={{
                          minWidth: "70px",
                          fontSize: "15px",
                        }}
                      >
                        Email Address :
                      </Typography>{" "}
                      <Typography variant="subtitle2">
                        {data.CustomerClientFatherDetails?.ExpectantFatherEmail}
                      </Typography>
                    </Stack>
                    <Stack direction={"row"} spacing={2}>
                      <Typography
                        variant="subtitle2"
                        sx={{
                          minWidth: "70px",
                          fontSize: "15px",
                        }}
                      >
                        Phone number :
                      </Typography>{" "}
                      <Typography variant="subtitle2">
                        {
                          data.CustomerClientFatherDetails
                            ?.ExpectantFatherMobile
                        }
                      </Typography>
                    </Stack>
                    <Stack direction={"row"} spacing={2}>
                      <Typography
                        variant="subtitle2"
                        sx={{
                          minWidth: "70px",
                          fontSize: "15px",
                        }}
                      >
                        Occupation :
                      </Typography>{" "}
                      <Typography variant="subtitle2">
                        {
                          data.CustomerClientFatherDetails
                            ?.ExpectantFatherOccupation
                        }
                      </Typography>
                    </Stack>
                    <Stack direction={"row"} spacing={2}>
                      <Typography
                        variant="subtitle2"
                        sx={{
                          minWidth: "70px",
                          fontSize: "15px",
                        }}
                      >
                        Designation :
                      </Typography>{" "}
                      <Typography variant="subtitle2">
                        {
                          data.CustomerClientFatherDetails
                            ?.ExpectantFatherDesignation
                        }
                      </Typography>
                    </Stack>
                    <Stack direction={"row"} spacing={2}>
                      <Typography
                        variant="subtitle2"
                        sx={{
                          minWidth: "70px",
                          fontSize: "15px",
                        }}
                      >
                        Organization Name :
                      </Typography>{" "}
                      <Typography variant="subtitle2">
                        {
                          data.CustomerClientFatherDetails
                            ?.ExpectantFatherOrganizationName
                        }
                      </Typography>
                    </Stack>
                    <Stack direction={"row"} spacing={2}>
                      <Typography
                        variant="subtitle2"
                        sx={{
                          minWidth: "70px",
                          fontSize: "15px",
                        }}
                      >
                        ID Proof :
                      </Typography>{" "}
                      <Typography variant="subtitle2">
                        {
                          data.CustomerClientFatherDetails
                            ?.ExpectantFatherIDproofValue
                        }
                      </Typography>
                    </Stack>
                    <Stack direction={"row"} spacing={2}>
                      <Typography
                        variant="subtitle2"
                        sx={{
                          minWidth: "70px",
                          fontSize: "15px",
                        }}
                      >
                        ID Proof Number :
                      </Typography>{" "}
                      <Typography variant="subtitle2">
                        {
                          data.CustomerClientFatherDetails
                            ?.ExpectantFatherIdproofNo
                        }
                      </Typography>
                    </Stack>
                    <Stack direction={"row"} spacing={2}>
                      <Typography
                        variant="subtitle2"
                        sx={{
                          minWidth: "70px",
                          fontSize: "15px",
                        }}
                      >
                        If other, please specify :
                      </Typography>{" "}
                      <Typography variant="subtitle2">
                        {
                          data.CustomerClientFatherDetails
                            ?.ExpectantFatherOtherInfo
                        }
                      </Typography>
                    </Stack>
                  </Stack>
                  <Stack
                    direction="column"
                    sx={{ marginRight: "30px", gap: 4 }}
                  >
                    <Avatar
                      src={
                        "https://flyingbyts.s3.ap-south-2.amazonaws.com/" +
                        data.CustomerClientFatherDetails
                          ?.ExpectantFatherProfilePhoto
                      }
                      sx={{ width: 100, height: 100, marginLeft: 4 }}
                    />
                    {data.CustomerClientFatherDetails
                      ?.ExpectantFatherIDproofPhoto ? (
                      <Box
                        sx={{
                          width: 150,
                          height: 100,
                          backgroundColor: "lightgray",
                          display: "flex",
                          justifyContent: "center",
                          alignItems: "center",
                          marginRight: 4,
                        }}
                        component="img"
                        src={
                          "https://flyingbyts.s3.ap-south-2.amazonaws.com/" +
                          data.CustomerClientFatherDetails
                            ?.ExpectantFatherIDproofPhoto
                        }
                        alt="father ID Proof"
                      />
                    ) : (
                      <></>
                    )}
                  </Stack>
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
              <CardContent>
                <Typography variant="h5" sx={{ fontWeight: "bold" }}>
                  MOTHER INFORMATION
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
                          fontSize: "15px",
                        }}
                      >
                        Expected Mother Name :
                      </Typography>{" "}
                      <Typography variant="subtitle2"></Typography>
                    </Stack>
                    <Stack direction={"row"} spacing={2}>
                      <Typography
                        variant="subtitle2"
                        sx={{
                          minWidth: "70px",
                          fontSize: "15px",
                        }}
                      >
                        Date of Birth :
                      </Typography>{" "}
                      <Typography variant="subtitle2"></Typography>
                    </Stack>
                    <Stack direction={"row"} spacing={2}>
                      <Typography
                        variant="subtitle2"
                        sx={{
                          minWidth: "70px",
                          fontSize: "15px",
                        }}
                      >
                        Email Address :
                      </Typography>{" "}
                      <Typography variant="subtitle2"></Typography>
                    </Stack>
                    <Stack direction={"row"} spacing={2}>
                      <Typography
                        variant="subtitle2"
                        sx={{
                          minWidth: "70px",
                          fontSize: "15px",
                        }}
                      >
                        Phone number :
                      </Typography>{" "}
                      <Typography variant="subtitle2"></Typography>
                    </Stack>
                    <Stack direction={"row"} spacing={2}>
                      <Typography
                        variant="subtitle2"
                        sx={{
                          minWidth: "70px",
                          fontSize: "15px",
                        }}
                      >
                        Occupation :
                      </Typography>{" "}
                      <Typography variant="subtitle2"></Typography>
                    </Stack>
                    <Stack direction={"row"} spacing={2}>
                      <Typography
                        variant="subtitle2"
                        sx={{
                          minWidth: "70px",
                          fontSize: "15px",
                        }}
                      >
                        Designation :
                      </Typography>{" "}
                      <Typography variant="subtitle2"></Typography>
                    </Stack>
                    <Stack direction={"row"} spacing={2}>
                      <Typography
                        variant="subtitle2"
                        sx={{
                          minWidth: "70px",
                          fontSize: "15px",
                        }}
                      >
                        Organization Name :
                      </Typography>{" "}
                      <Typography variant="subtitle2"></Typography>
                    </Stack>
                    <Stack direction={"row"} spacing={2}>
                      <Typography
                        variant="subtitle2"
                        sx={{
                          minWidth: "70px",
                          fontSize: "15px",
                        }}
                      >
                        ID Proof :
                      </Typography>{" "}
                      <Typography variant="subtitle2"></Typography>
                    </Stack>
                    <Stack direction={"row"} spacing={2}>
                      <Typography
                        variant="subtitle2"
                        sx={{
                          minWidth: "70px",
                          fontSize: "15px",
                        }}
                      >
                        ID Proof Number :
                      </Typography>{" "}
                      <Typography variant="subtitle2"></Typography>
                    </Stack>
                    <Stack direction={"row"} spacing={2}>
                      <Typography
                        variant="subtitle2"
                        sx={{
                          minWidth: "70px",
                          fontSize: "15px",
                        }}
                      >
                        If other, please specify :
                      </Typography>{" "}
                      <Typography variant="subtitle2"></Typography>
                    </Stack>
                  </Stack>
                  <Stack
                    direction="column"
                    sx={{ marginRight: "30px", gap: 4 }}
                  >
                    <Avatar sx={{ width: 100, height: 100, marginLeft: 4 }} />
                    <Box
                      sx={{
                        width: 150,
                        height: 100,
                        backgroundColor: "lightgray",
                        display: "flex",
                        justifyContent: "center",
                        alignItems: "center",
                        marginRight: 4,
                      }}
                    >
                      {/* Content inside the Box */}
                    </Box>
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
            padding: "20px",
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
                  COMMUNICATION DETAILS (CURRENT ADDRESS)
                </Typography>
                <Stack spacing={2} mt={2}>
                  <Stack direction={"row"} spacing={2}>
                    <Typography
                      variant="subtitle2"
                      sx={{
                        minWidth: "70px",
                        fontSize: "15px",
                      }}
                    >
                      Current Address :
                    </Typography>{" "}
                    <Typography variant="subtitle2"></Typography>
                  </Stack>
                  <Stack direction={"row"} spacing={2}>
                    <Typography
                      variant="subtitle2"
                      sx={{
                        minWidth: "70px",
                        fontSize: "15px",
                      }}
                    >
                      City :
                    </Typography>{" "}
                    <Typography variant="subtitle2"></Typography>
                  </Stack>
                  <Stack direction={"row"} spacing={2}>
                    <Typography
                      variant="subtitle2"
                      sx={{
                        minWidth: "70px",
                        fontSize: "15px",
                      }}
                    >
                      State :
                    </Typography>{" "}
                    <Typography variant="subtitle2"></Typography>
                  </Stack>
                  <Stack direction={"row"} spacing={2}>
                    <Typography
                      variant="subtitle2"
                      sx={{
                        minWidth: "70px",
                        fontSize: "15px",
                      }}
                    >
                      country :
                    </Typography>{" "}
                    <Typography variant="subtitle2"></Typography>
                  </Stack>
                  <Stack direction={"row"} spacing={2}>
                    <Typography
                      variant="subtitle2"
                      sx={{
                        minWidth: "70px",
                        fontSize: "15px",
                      }}
                    >
                      Pin code :
                    </Typography>{" "}
                    <Typography variant="subtitle2"></Typography>
                  </Stack>
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
              <CardContent>
                <Typography variant="h5" sx={{ fontWeight: "bold" }}>
                  COMMUNICATION DETAILS (PERMANENT ADDRESS)
                </Typography>
                <Stack spacing={2} mt={2}>
                  <Stack direction={"row"} spacing={2}>
                    <Typography
                      variant="subtitle2"
                      sx={{
                        minWidth: "70px",
                        fontSize: "15px",
                      }}
                    >
                      Current Address :
                    </Typography>{" "}
                    <Typography variant="subtitle2"></Typography>
                  </Stack>
                  <Stack direction={"row"} spacing={2}>
                    <Typography
                      variant="subtitle2"
                      sx={{
                        minWidth: "70px",
                        fontSize: "15px",
                      }}
                    >
                      City :
                    </Typography>{" "}
                    <Typography variant="subtitle2"></Typography>
                  </Stack>
                  <Stack direction={"row"} spacing={2}>
                    <Typography
                      variant="subtitle2"
                      sx={{
                        minWidth: "70px",
                        fontSize: "15px",
                      }}
                    >
                      State :
                    </Typography>{" "}
                    <Typography variant="subtitle2"></Typography>
                  </Stack>
                  <Stack direction={"row"} spacing={2}>
                    <Typography
                      variant="subtitle2"
                      sx={{
                        minWidth: "70px",
                        fontSize: "15px",
                      }}
                    >
                      country :
                    </Typography>{" "}
                    <Typography variant="subtitle2"></Typography>
                  </Stack>
                  <Stack direction={"row"} spacing={2}>
                    <Typography
                      variant="subtitle2"
                      sx={{
                        minWidth: "70px",
                        fontSize: "15px",
                      }}
                    >
                      Pin code :
                    </Typography>{" "}
                    <Typography variant="subtitle2"></Typography>
                  </Stack>
                </Stack>
              </CardContent>
            </Card>
          </Box>
        </Stack>
        <Box sx={{ padding: "20px" }}>
          <Card variant="outlined">
            <CardContent>
              <Typography variant="h5" sx={{ fontWeight: "bold" }}>
                HOSPITAL & BIRTHING DETAILS
              </Typography>
              <Stack spacing={2} mt={2}>
                <Stack direction={"row"} spacing={2}>
                  <Typography
                    variant="subtitle2"
                    sx={{
                      minWidth: "70px",
                      fontSize: "15px",
                    }}
                  >
                    Expected date of deilvery :
                  </Typography>{" "}
                  <Typography variant="subtitle2"></Typography>
                </Stack>
                <Stack direction={"row"} spacing={2}>
                  <Typography
                    variant="subtitle2"
                    sx={{
                      minWidth: "70px",
                      fontSize: "15px",
                    }}
                  >
                    Type of Pregnancy :
                  </Typography>{" "}
                  <Typography variant="subtitle2"></Typography>
                </Stack>
                <Stack direction={"row"} spacing={2}>
                  <Typography
                    variant="subtitle2"
                    sx={{
                      minWidth: "70px",
                      fontSize: "15px",
                    }}
                  >
                    How many children's do you have already :
                  </Typography>{" "}
                  <Typography variant="subtitle2"></Typography>
                </Stack>
                <Stack direction={"row"} spacing={2}>
                  <Typography
                    variant="subtitle2"
                    sx={{
                      minWidth: "70px",
                      fontSize: "15px",
                    }}
                  >
                    Consulting Gynocologist:
                  </Typography>{" "}
                  <Typography variant="subtitle2"></Typography>
                </Stack>
                <Stack direction={"row"} spacing={2}>
                  <Typography
                    variant="subtitle2"
                    sx={{
                      minWidth: "70px",
                      fontSize: "15px",
                    }}
                  >
                    Consulting Hospital :
                  </Typography>{" "}
                  <Typography variant="subtitle2"></Typography>
                </Stack>
              </Stack>
            </CardContent>
          </Card>
        </Box>
        <Stack
          sx={{
            display: "flex",
            flexDirection: "row",
            justifyContent: "space-between",
            padding: "20px",
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
                  CURRENT HOSPITAL ADDRESS
                </Typography>
                <Stack spacing={2} mt={2}>
                  <Stack direction={"row"} spacing={2}>
                    <Typography
                      variant="subtitle2"
                      sx={{
                        minWidth: "70px",
                        fontSize: "15px",
                      }}
                    >
                      Current Address :
                    </Typography>{" "}
                    <Typography variant="subtitle2"></Typography>
                  </Stack>
                  <Stack direction={"row"} spacing={2}>
                    <Typography
                      variant="subtitle2"
                      sx={{
                        minWidth: "70px",
                        fontSize: "15px",
                      }}
                    >
                      City :
                    </Typography>{" "}
                    <Typography variant="subtitle2"></Typography>
                  </Stack>
                  <Stack direction={"row"} spacing={2}>
                    <Typography
                      variant="subtitle2"
                      sx={{
                        minWidth: "70px",
                        fontSize: "15px",
                      }}
                    >
                      State :
                    </Typography>{" "}
                    <Typography variant="subtitle2"></Typography>
                  </Stack>
                  <Stack direction={"row"} spacing={2}>
                    <Typography
                      variant="subtitle2"
                      sx={{
                        minWidth: "70px",
                        fontSize: "15px",
                      }}
                    >
                      country :
                    </Typography>{" "}
                    <Typography variant="subtitle2"></Typography>
                  </Stack>
                  <Stack direction={"row"} spacing={2}>
                    <Typography
                      variant="subtitle2"
                      sx={{
                        minWidth: "70px",
                        fontSize: "15px",
                      }}
                    >
                      Pin code :
                    </Typography>{" "}
                    <Typography variant="subtitle2"></Typography>
                  </Stack>
                  <Stack direction={"row"} spacing={2}>
                    <Typography
                      variant="subtitle2"
                      sx={{
                        minWidth: "70px",
                        fontSize: "15px",
                      }}
                    >
                      Telephone :
                    </Typography>{" "}
                    <Typography variant="subtitle2"></Typography>
                  </Stack>
                  <Stack direction={"row"} spacing={2}>
                    <Typography
                      variant="subtitle2"
                      sx={{
                        minWidth: "70px",
                        fontSize: "15px",
                      }}
                    >
                      Mobile :
                    </Typography>{" "}
                    <Typography variant="subtitle2"></Typography>
                  </Stack>
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
              <CardContent>
                <Typography variant="h5" sx={{ fontWeight: "bold" }}>
                  DELIVERING ADDRESS
                </Typography>
                <Stack spacing={2} mt={2}>
                  <Stack direction={"row"} spacing={2}>
                    <Typography
                      variant="subtitle2"
                      sx={{
                        minWidth: "70px",
                        fontSize: "15px",
                      }}
                    >
                      Current Address :
                    </Typography>{" "}
                    <Typography variant="subtitle2"></Typography>
                  </Stack>
                  <Stack direction={"row"} spacing={2}>
                    <Typography
                      variant="subtitle2"
                      sx={{
                        minWidth: "70px",
                        fontSize: "15px",
                      }}
                    >
                      City :
                    </Typography>{" "}
                    <Typography variant="subtitle2"></Typography>
                  </Stack>
                  <Stack direction={"row"} spacing={2}>
                    <Typography
                      variant="subtitle2"
                      sx={{
                        minWidth: "70px",
                        fontSize: "15px",
                      }}
                    >
                      State :
                    </Typography>{" "}
                    <Typography variant="subtitle2"></Typography>
                  </Stack>
                  <Stack direction={"row"} spacing={2}>
                    <Typography
                      variant="subtitle2"
                      sx={{
                        minWidth: "70px",
                        fontSize: "15px",
                      }}
                    >
                      country :
                    </Typography>{" "}
                    <Typography variant="subtitle2"></Typography>
                  </Stack>
                  <Stack direction={"row"} spacing={2}>
                    <Typography
                      variant="subtitle2"
                      sx={{
                        minWidth: "70px",
                        fontSize: "15px",
                      }}
                    >
                      Pin code :
                    </Typography>{" "}
                    <Typography variant="subtitle2"></Typography>
                  </Stack>
                  <Stack direction={"row"} spacing={2}>
                    <Typography
                      variant="subtitle2"
                      sx={{
                        minWidth: "70px",
                        fontSize: "15px",
                      }}
                    >
                      Telephone :
                    </Typography>{" "}
                    <Typography variant="subtitle2"></Typography>
                  </Stack>
                  <Stack direction={"row"} spacing={2}>
                    <Typography
                      variant="subtitle2"
                      sx={{
                        minWidth: "70px",
                        fontSize: "15px",
                      }}
                    >
                      Mobile :
                    </Typography>{" "}
                    <Typography variant="subtitle2"></Typography>
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
            padding: "20px",
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
                <Typography variant="h6" sx={{ fontWeight: "bold" }}>
                  DETAILS OF REFERENCE/DETAILS OF RETURNING CRYOVAULT CLIENT
                </Typography>
                <Stack spacing={2} mt={2}>
                  <Stack direction={"row"} spacing={2}>
                    <Typography
                      variant="subtitle2"
                      sx={{
                        minWidth: "70px",
                        fontSize: "15px",
                      }}
                    >
                      UIN :
                    </Typography>{" "}
                    <Typography variant="subtitle2"></Typography>
                  </Stack>
                  <Stack direction={"row"} spacing={2}>
                    <Typography
                      variant="subtitle2"
                      sx={{
                        minWidth: "70px",
                        fontSize: "15px",
                      }}
                    >
                      Referring Client Name :
                    </Typography>{" "}
                    <Typography variant="subtitle2"></Typography>
                  </Stack>
                  <Stack direction={"row"} spacing={2}>
                    <Typography
                      variant="subtitle2"
                      sx={{
                        minWidth: "70px",
                        fontSize: "15px",
                      }}
                    >
                      Mobile-1 :
                    </Typography>{" "}
                    <Typography variant="subtitle2"></Typography>
                  </Stack>
                  <Stack direction={"row"} spacing={2}>
                    <Typography
                      variant="subtitle2"
                      sx={{
                        minWidth: "70px",
                        fontSize: "15px",
                      }}
                    >
                      Mobile-2 :
                    </Typography>{" "}
                    <Typography variant="subtitle2"></Typography>
                  </Stack>
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
              <CardContent sx={{ height: "220px" }}>
                <Typography variant="h5" sx={{ fontWeight: "bold" }}>
                  SHIPMENT DETAILS
                </Typography>
                <Stack spacing={2} mt={2}>
                  <Stack direction={"row"} spacing={2}>
                    <Typography
                      variant="subtitle2"
                      sx={{
                        minWidth: "70px",
                        fontSize: "15px",
                      }}
                    >
                      Send collection kit to :
                    </Typography>{" "}
                    <Typography variant="subtitle2"></Typography>
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
            padding: "20px",
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
                  EMERGENCY CONTACT DETAILS
                </Typography>
                <Stack spacing={2} mt={2}>
                  <Stack direction={"row"} spacing={2}>
                    <Typography
                      variant="subtitle2"
                      sx={{
                        minWidth: "70px",
                        fontSize: "15px",
                      }}
                    >
                      Name :
                    </Typography>{" "}
                    <Typography variant="subtitle2"></Typography>
                  </Stack>
                  <Stack direction={"row"} spacing={2}>
                    <Typography
                      variant="subtitle2"
                      sx={{
                        minWidth: "70px",
                        fontSize: "15px",
                      }}
                    >
                      Relationship :
                    </Typography>{" "}
                    <Typography variant="subtitle2"></Typography>
                  </Stack>
                  <Stack direction={"row"} spacing={2}>
                    <Typography
                      variant="subtitle2"
                      sx={{
                        minWidth: "70px",
                        fontSize: "15px",
                      }}
                    >
                      Mobile-1 :
                    </Typography>{" "}
                    <Typography variant="subtitle2"></Typography>
                  </Stack>
                  <Stack direction={"row"} spacing={2}>
                    <Typography
                      variant="subtitle2"
                      sx={{
                        minWidth: "70px",
                        fontSize: "15px",
                      }}
                    >
                      Mobile-2 :
                    </Typography>{" "}
                    <Typography variant="subtitle2"></Typography>
                  </Stack>
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
              <CardContent sx={{ height: "220px" }}>
                <Typography variant="h5" sx={{ fontWeight: "bold" }}>
                  APPLICABLE FOR CRYOVAULTS BIOTECH PVT. LTD.
                </Typography>
                <Typography
                  variant="h5"
                  sx={{ marginTop: "15px", maxWidth: "500px" }}
                >
                  Requesting bank to arrange for pickup of meternal sample &
                  Umbilical cord bleed
                </Typography>
                <Typography
                  variant="h5"
                  sx={{ marginTop: "15px", maxWidth: "500px" }}
                >
                  Requesting bank to organise for Phiedopomist
                </Typography>
              </CardContent>
            </Card>
          </Box>
        </Stack>
        <Stack
          sx={{
            display: "flex",
            flexDirection: "row",
            gap: 2,
            padding: "20px",
          }}
        >
          <Card variant="outlined" sx={{ width: "600px" }}>
            <CardContent sx={{ width: "400px" }}>
              <Typography variant="h5" sx={{ fontWeight: "bold" }}>
                SIGNATURE
              </Typography>
              <Typography variant="h5" sx={{ marginTop: "10px" }}>
                Signature of Father / Legal Gurardian
              </Typography>
              <Typography variant="h5" sx={{ marginTop: "10px" }}>
                Signature of Father
              </Typography>
              <Stack spacing={2} mt={2}>
                <Stack direction={"row"} spacing={2}>
                  <Typography
                    variant="subtitle2"
                    sx={{
                      minWidth: "70px",
                      fontSize: "15px",
                    }}
                  >
                    Name :
                  </Typography>{" "}
                  <Typography variant="subtitle2"></Typography>
                </Stack>
              </Stack>
            </CardContent>
          </Card>
          <Card variant="outlined" sx={{ width: "600px" }}>
            <CardContent sx={{ width: "400px" }}>
              <Typography variant="h5" sx={{ fontWeight: "bold" }}>
                SIGNATURE
              </Typography>
              <Typography variant="h5" sx={{ marginTop: "10px" }}>
                Signature of Mother / Legal Gurardian
              </Typography>
              <Typography variant="h5" sx={{ marginTop: "10px" }}>
                Signature of Mother
              </Typography>
              <Stack spacing={2} mt={2}>
                <Stack direction={"row"} spacing={2}>
                  <Typography
                    variant="subtitle2"
                    sx={{
                      minWidth: "70px",
                      fontSize: "15px",
                    }}
                  >
                    Name :
                  </Typography>{" "}
                  <Typography variant="subtitle2"></Typography>
                </Stack>
              </Stack>
            </CardContent>
          </Card>
          <Card variant="outlined" sx={{ width: "600px" }}>
            <CardContent sx={{ width: "400px" }}>
              <Typography variant="h5" sx={{ fontWeight: "bold" }}>
                SIGNATURE
              </Typography>
              <Typography variant="h5" sx={{ marginTop: "10px" }}>
                Signature of Medical Director CBIPL
              </Typography>
              <Typography variant="h5" sx={{ marginTop: "10px" }}>
                Signature of CBIPL
              </Typography>
              <Stack spacing={2} mt={2}>
                <Stack direction={"row"} spacing={2}>
                  <Typography
                    variant="subtitle2"
                    sx={{
                      minWidth: "70px",
                      fontSize: "15px",
                    }}
                  >
                    Name :
                  </Typography>{" "}
                  <Typography variant="subtitle2"></Typography>
                </Stack>
              </Stack>
            </CardContent>
          </Card>
        </Stack>
        <Box sx={{ padding: "20px" }}>
          <Card variant="outlined">
            <CardContent
              sx={{
                display: "flex",
                flexDirection: "row",
                justifyContent: "space-between",
              }}
            >
              <Stack>
                <Typography variant="h5" sx={{ fontWeight: "bold" }}>
                  FOR BANK USE ONLY
                </Typography>
                <Stack spacing={2} mt={2}>
                  <Stack direction={"row"} spacing={2}>
                    <Typography
                      variant="subtitle2"
                      sx={{
                        minWidth: "70px",
                        fontSize: "15px",
                      }}
                    >
                      Name of excutive :
                    </Typography>{" "}
                    <Typography variant="subtitle2"></Typography>
                  </Stack>
                  <Stack direction={"row"} spacing={2}>
                    <Typography
                      variant="subtitle2"
                      sx={{
                        minWidth: "70px",
                        fontSize: "15px",
                      }}
                    >
                      Employee code :
                    </Typography>{" "}
                    <Typography variant="subtitle2"></Typography>
                  </Stack>
                  <Stack direction={"row"} spacing={2}>
                    <Typography
                      variant="subtitle2"
                      sx={{
                        minWidth: "70px",
                        fontSize: "15px",
                      }}
                    >
                      Name of the Manager :
                    </Typography>{" "}
                    <Typography variant="subtitle2"></Typography>
                  </Stack>
                  <Stack direction={"row"} spacing={2}>
                    <Typography
                      variant="subtitle2"
                      sx={{
                        minWidth: "70px",
                        fontSize: "15px",
                      }}
                    >
                      Area/Region :
                    </Typography>{" "}
                    <Typography variant="subtitle2"></Typography>
                  </Stack>
                </Stack>
              </Stack>
              <Card variant="outlined" sx={{ width: "500px" }}>
                <CardContent sx={{ width: "400px" }}>
                  <Typography variant="h5" sx={{ fontWeight: "bold" }}>
                    SIGNATURE
                  </Typography>
                  <Typography variant="h5" sx={{ marginTop: "10px" }}>
                    Signature of Excutive
                  </Typography>
                  <Typography variant="h5" sx={{ marginTop: "10px" }}>
                    Signature of Excutive
                  </Typography>
                  <Stack spacing={2} mt={2}>
                    <Stack direction={"row"} spacing={2}>
                      <Typography
                        variant="subtitle2"
                        sx={{
                          minWidth: "70px",
                          fontSize: "15px",
                        }}
                      >
                        Name :
                      </Typography>{" "}
                      <Typography variant="subtitle2"></Typography>
                    </Stack>
                  </Stack>
                </CardContent>
              </Card>
            </CardContent>
          </Card>
        </Box>
        <Typography
          variant="h5"
          sx={{ padding: "30px", fontWeight: "bold", textAlign: "center" }}
        >
          HEALTH HISTORY QUESTIONNAIRE
        </Typography>
        <Box sx={{ padding: "20px" }}>
          <Card variant="outlined">
            <CardContent>
              <Typography variant="h5" sx={{ fontWeight: "bold" }}>
                GENETIC MOTHER
              </Typography>
              <Typography
                variant="h5"
                sx={{ fontSize: "17px", marginTop: "10px", marginLeft: "5px" }}
              >
                The following questions are required for determination of
                donor-eligibility. We understand that there may sensitivities to
                some of the questions, and inconvenience is regretted. However,
                response is mandatory.
              </Typography>
              <Card variant="outlined" sx={{ marginTop: "15px" }}>
                <CardContent>
                  <Typography
                    variant="h5"
                    sx={{ marginTop: "4px", fontWeight: "bold" }}
                  >
                    Do you have a history of any medical condition that could
                    affect the collection or use of the stem cells such as
                  </Typography>
                  <Stack spacing={2} marginTop="15px">
                    <Stack
                      direction="row"
                      spacing={2}
                      alignItems="center"
                      justifyContent="space-between"
                    >
                      <Typography variant="h5">
                        A) Cancer, Diabetes, Hepatitis, Blood Disease, Bleeding
                        Problem, Heart Disease, Drug or Alcohol abuse.
                      </Typography>
                      <Box>
                        {formValues.cancerDiabetesHepatitisBloodDisease !==
                          false && (
                          <Button
                            size="small"
                            sx={{ marginRight: "10px" }}
                            variant={
                              formValues.cancerDiabetesHepatitisBloodDisease ===
                              true
                                ? "contained"
                                : "outlined"
                            }
                            onClick={() =>
                              handleChange(
                                "cancerDiabetesHepatitisBloodDisease",
                                true
                              )
                            }
                          >
                            Yes
                          </Button>
                        )}
                        {formValues.cancerDiabetesHepatitisBloodDisease !==
                          true && (
                          <Button
                            size="small"
                            variant={
                              formValues.cancerDiabetesHepatitisBloodDisease ===
                              false
                                ? "contained"
                                : "outlined"
                            }
                            onClick={() =>
                              handleChange(
                                "cancerDiabetesHepatitisBloodDisease",
                                false
                              )
                            }
                          >
                            No
                          </Button>
                        )}
                      </Box>
                    </Stack>
                    <Stack
                      direction="row"
                      spacing={2}
                      alignItems="center"
                      justifyContent="space-between"
                    >
                      <Typography variant="h5">
                        B) HIVIAIDS ora positive test for the HIVIAIDS virus,
                        HTLV, Malaria, Hepatitis?
                      </Typography>
                      <Box>
                        {formValues.HIVAIDS !== false && (
                          <Button
                            size="small"
                            sx={{ marginRight: "10px" }}
                            variant={
                              formValues.HIVAIDS === true
                                ? "contained"
                                : "outlined"
                            }
                            onClick={() => handleChange("HIVAIDS", true)}
                          >
                            Yes
                          </Button>
                        )}
                        {formValues.HIVAIDS !== true && (
                          <Button
                            size="small"
                            variant={
                              formValues.HIVAIDS === false
                                ? "contained"
                                : "outlined"
                            }
                            onClick={() => handleChange("HIVAIDS", false)}
                          >
                            No
                          </Button>
                        )}
                      </Box>
                    </Stack>
                    <Stack
                      direction="row"
                      spacing={2}
                      alignItems="center"
                      justifyContent="space-between"
                    >
                      <Typography variant="h5">
                        C) Stroke, Seizureor Multiple Scierosis, Lung Disease,
                        Kident Disease, Liver Disease, Babesiosis, Genetic
                        Disorder?
                      </Typography>
                      <Box>
                        {formValues.strokeLungSclerosis !== false && (
                          <Button
                            size="small"
                            sx={{ marginRight: "10px" }}
                            variant={
                              formValues.strokeLungSclerosis === true
                                ? "contained"
                                : "outlined"
                            }
                            onClick={() =>
                              handleChange("strokeLungSclerosis", true)
                            }
                          >
                            Yes
                          </Button>
                        )}
                        {formValues.strokeLungSclerosis !== true && (
                          <Button
                            size="small"
                            variant={
                              formValues.strokeLungSclerosis === false
                                ? "contained"
                                : "outlined"
                            }
                            onClick={() =>
                              handleChange("strokeLungSclerosis", false)
                            }
                          >
                            No
                          </Button>
                        )}
                      </Box>
                    </Stack>
                  </Stack>
                </CardContent>
              </Card>
              <Card variant="outlined" sx={{ marginTop: "15px" }}>
                <CardContent>
                  <Stack spacing={2} marginTop="15px">
                    <Stack
                      direction="row"
                      spacing={2}
                      alignItems="center"
                      justifyContent="space-between"
                    >
                      <Typography variant="h5">
                        Do you currently have or are you being treated for any
                        type of inection?
                      </Typography>
                      <Box>
                        {formValues.anyTypeInfection !== false && (
                          <Button
                            size="small"
                            sx={{ marginRight: "10px" }}
                            variant={
                              formValues.anyTypeInfection === true
                                ? "contained"
                                : "outlined"
                            }
                            onClick={() =>
                              handleChange("anyTypeInfection", true)
                            }
                          >
                            Yes
                          </Button>
                        )}
                        {formValues.anyTypeInfection !== true && (
                          <Button
                            size="small"
                            variant={
                              formValues.anyTypeInfection === false
                                ? "contained"
                                : "outlined"
                            }
                            onClick={() =>
                              handleChange("anyTypeInfection", false)
                            }
                          >
                            No
                          </Button>
                        )}
                      </Box>
                    </Stack>
                  </Stack>
                </CardContent>
              </Card>

              <Card variant="outlined" sx={{ marginTop: "15px" }}>
                <CardContent>
                  <Stack spacing={2} marginTop="15px">
                    <Stack
                      direction="row"
                      spacing={2}
                      alignItems="center"
                      justifyContent="space-between"
                    >
                      <Typography variant="h5">
                        Do you have, or have a family history of Dementia,
                        Degenerative or Neurological Disease, or
                        CreutzfeldtJakob Disease?
                      </Typography>
                      <Box>
                        {formValues.DementiaDegenerativeDisease !== false && (
                          <Button
                            size="small"
                            sx={{ marginRight: "10px" }}
                            variant={
                              formValues.DementiaDegenerativeDisease === true
                                ? "contained"
                                : "outlined"
                            }
                            onClick={() =>
                              handleChange("DementiaDegenerativeDisease", true)
                            }
                          >
                            Yes
                          </Button>
                        )}
                        {formValues.DementiaDegenerativeDisease !== true && (
                          <Button
                            size="small"
                            variant={
                              formValues.DementiaDegenerativeDisease === false
                                ? "contained"
                                : "outlined"
                            }
                            onClick={() =>
                              handleChange("DementiaDegenerativeDisease", false)
                            }
                          >
                            No
                          </Button>
                        )}
                      </Box>
                    </Stack>
                  </Stack>
                </CardContent>
              </Card>
              <Card variant="outlined" sx={{ marginTop: "15px" }}>
                <CardContent>
                  <Stack spacing={2} marginTop="15px">
                    <Stack
                      direction="row"
                      spacing={2}
                      alignItems="center"
                      justifyContent="space-between"
                    >
                      <Typography variant="h5" maxWidth="930px">
                        In the past 6 months, have you received a bite from an
                        animal suspected of Rabies or takken any vaccinations
                        (shots) for the same?
                      </Typography>
                      <Box>
                        {formValues.biteFromAnimal !== false && (
                          <Button
                            size="small"
                            sx={{ marginRight: "10px" }}
                            variant={
                              formValues.biteFromAnimal === true
                                ? "contained"
                                : "outlined"
                            }
                            onClick={() => handleChange("biteFromAnimal", true)}
                          >
                            Yes
                          </Button>
                        )}
                        {formValues.biteFromAnimal !== true && (
                          <Button
                            size="small"
                            variant={
                              formValues.biteFromAnimal === false
                                ? "contained"
                                : "outlined"
                            }
                            onClick={() =>
                              handleChange("biteFromAnimal", false)
                            }
                          >
                            No
                          </Button>
                        )}
                      </Box>
                    </Stack>
                  </Stack>
                </CardContent>
              </Card>
              <Card variant="outlined" sx={{ marginTop: "15px" }}>
                <CardContent>
                  <Stack spacing={2} marginTop="15px">
                    <Stack
                      direction="row"
                      spacing={2}
                      alignItems="center"
                      justifyContent="space-between"
                    >
                      <Typography variant="h5">
                        Have you been treated for a sexually trasmitted
                        diseasein the last 12 months?
                      </Typography>
                      <Box>
                        {formValues.sexuallyTransmittedDisease !== false && (
                          <Button
                            size="small"
                            sx={{ marginRight: "10px" }}
                            variant={
                              formValues.sexuallyTransmittedDisease === true
                                ? "contained"
                                : "outlined"
                            }
                            onClick={() =>
                              handleChange("sexuallyTransmittedDisease", true)
                            }
                          >
                            Yes
                          </Button>
                        )}
                        {formValues.sexuallyTransmittedDisease !== true && (
                          <Button
                            size="small"
                            variant={
                              formValues.sexuallyTransmittedDisease === false
                                ? "contained"
                                : "outlined"
                            }
                            onClick={() =>
                              handleChange("sexuallyTransmittedDisease", false)
                            }
                          >
                            No
                          </Button>
                        )}
                      </Box>
                    </Stack>
                  </Stack>
                </CardContent>
              </Card>
              <Card variant="outlined" sx={{ marginTop: "15px" }}>
                <CardContent>
                  <Stack spacing={2} marginTop="15px">
                    <Stack
                      direction="row"
                      spacing={2}
                      alignItems="center"
                      justifyContent="space-between"
                    >
                      <Typography variant="h5" maxWidth="930px">
                        In the past 12 months, have you had any immunisations,
                        tattoos, body piercing, an accidental needle-prick, or
                        come into contact with someone’s blood, open wound, or
                        small pox vaccination site and /or bandage?
                      </Typography>
                      <Box>
                        {formValues.immunisationsTattoosBodypiercing !==
                          false && (
                          <Button
                            size="small"
                            sx={{ marginRight: "10px" }}
                            variant={
                              formValues.immunisationsTattoosBodypiercing ===
                              true
                                ? "contained"
                                : "outlined"
                            }
                            onClick={() =>
                              handleChange(
                                "immunisationsTattoosBodypiercing",
                                true
                              )
                            }
                          >
                            Yes
                          </Button>
                        )}
                        {formValues.immunisationsTattoosBodypiercing !==
                          true && (
                          <Button
                            size="small"
                            variant={
                              formValues.immunisationsTattoosBodypiercing ===
                              false
                                ? "contained"
                                : "outlined"
                            }
                            onClick={() =>
                              handleChange(
                                "immunisationsTattoosBodypiercing",
                                false
                              )
                            }
                          >
                            No
                          </Button>
                        )}
                      </Box>
                    </Stack>
                  </Stack>
                </CardContent>
              </Card>
              <Card variant="outlined" sx={{ marginTop: "15px" }}>
                <CardContent>
                  <Stack spacing={2} marginTop="15px">
                    <Stack
                      direction="row"
                      spacing={2}
                      alignItems="center"
                      justifyContent="space-between"
                    >
                      <Typography variant="h5" maxWidth="930px">
                        In the past 12 months, have you been in juvenile
                        detention, lock-up, jail or prison for more than 72
                        hours?
                      </Typography>
                      <Box>
                        {formValues.juvenileDetentionLockupJail !== false && (
                          <Button
                            size="small"
                            sx={{ marginRight: "10px" }}
                            variant={
                              formValues.juvenileDetentionLockupJail === true
                                ? "contained"
                                : "outlined"
                            }
                            onClick={() =>
                              handleChange("juvenileDetentionLockupJail", true)
                            }
                          >
                            Yes
                          </Button>
                        )}
                        {formValues.cancerDiabetesHepatitisBloodDisease !==
                          true && (
                          <Button
                            size="small"
                            variant={
                              formValues.juvenileDetentionLockupJail === false
                                ? "contained"
                                : "outlined"
                            }
                            onClick={() =>
                              handleChange("juvenileDetentionLockupJail", false)
                            }
                          >
                            No
                          </Button>
                        )}
                      </Box>
                    </Stack>
                  </Stack>
                </CardContent>
              </Card>
              <Card variant="outlined" sx={{ marginTop: "15px" }}>
                <CardContent>
                  <Stack spacing={2} marginTop="15px">
                    <Stack
                      direction="row"
                      spacing={2}
                      alignItems="center"
                      justifyContent="space-between"
                    >
                      <Typography variant="h5" maxWidth="930px">
                        In the past 12 months, have you lived with a person who
                        has Hepatitis?
                      </Typography>
                      <Box>
                        {formValues.livedWithApersonWhoHasHepatitis !==
                          false && (
                          <Button
                            size="small"
                            sx={{ marginRight: "10px" }}
                            variant={
                              formValues.livedWithApersonWhoHasHepatitis ===
                              true
                                ? "contained"
                                : "outlined"
                            }
                            onClick={() =>
                              handleChange(
                                "livedWithApersonWhoHasHepatitis",
                                true
                              )
                            }
                          >
                            Yes
                          </Button>
                        )}
                        {formValues.livedWithApersonWhoHasHepatitis !==
                          true && (
                          <Button
                            size="small"
                            variant={
                              formValues.livedWithApersonWhoHasHepatitis ===
                              false
                                ? "contained"
                                : "outlined"
                            }
                            onClick={() =>
                              handleChange(
                                "livedWithApersonWhoHasHepatitis",
                                false
                              )
                            }
                          >
                            No
                          </Button>
                        )}
                      </Box>
                    </Stack>
                  </Stack>
                </CardContent>
              </Card>
              <Card variant="outlined" sx={{ marginTop: "15px" }}>
                <CardContent>
                  <Stack spacing={2} marginTop="15px">
                    <Stack
                      direction="row"
                      spacing={2}
                      alignItems="center"
                      justifyContent="space-between"
                    >
                      <Typography variant="h5" maxWidth="930px">
                        Have you in the past 5 years received compensation for
                        sex?
                      </Typography>
                      <Box>
                        {formValues.compensationForSex !== false && (
                          <Button
                            size="small"
                            sx={{ marginRight: "10px" }}
                            variant={
                              formValues.compensationForSex === true
                                ? "contained"
                                : "outlined"
                            }
                            onClick={() =>
                              handleChange("compensationForSex", true)
                            }
                          >
                            Yes
                          </Button>
                        )}
                        {formValues.compensationForSex !== true && (
                          <Button
                            size="small"
                            variant={
                              formValues.compensationForSex === false
                                ? "contained"
                                : "outlined"
                            }
                            onClick={() =>
                              handleChange("compensationForSex", false)
                            }
                          >
                            No
                          </Button>
                        )}
                      </Box>
                    </Stack>
                  </Stack>
                </CardContent>
              </Card>

              <Card variant="outlined" sx={{ marginTop: "15px" }}>
                <CardContent>
                  <Stack spacing={2} marginTop="15px">
                    <Stack
                      direction="row"
                      spacing={2}
                      alignItems="center"
                      justifyContent="space-between"
                    >
                      <Typography variant="h5" maxWidth="730px">
                        Have you ever received whole blood, blood factor
                        products, blood derivatves, growth hormones, bone or
                        skin graft, or a tissue, organ (either human or animal),
                        dura mater or bone marrow traspiantation?
                      </Typography>
                      <Box>
                        {formValues.receivedWholeBloodBloodFactorProductsBoneMarrowTransplantation !==
                          false && (
                          <Button
                            size="small"
                            sx={{ marginRight: "10px" }}
                            variant={
                              formValues.receivedWholeBloodBloodFactorProductsBoneMarrowTransplantation ===
                              true
                                ? "contained"
                                : "outlined"
                            }
                            onClick={() =>
                              handleChange(
                                " receivedWholeBloodBloodFactorProductsBoneMarrowTransplantation",
                                true
                              )
                            }
                          >
                            Yes
                          </Button>
                        )}
                        {formValues.receivedWholeBloodBloodFactorProductsBoneMarrowTransplantation !==
                          true && (
                          <Button
                            size="small"
                            variant={
                              formValues.receivedWholeBloodBloodFactorProductsBoneMarrowTransplantation ===
                              false
                                ? "contained"
                                : "outlined"
                            }
                            onClick={() =>
                              handleChange(
                                " receivedWholeBloodBloodFactorProductsBoneMarrowTransplantation",
                                false
                              )
                            }
                          >
                            No
                          </Button>
                        )}
                      </Box>
                    </Stack>
                  </Stack>
                </CardContent>
              </Card>
              <Card variant="outlined" sx={{ marginTop: "15px" }}>
                <CardContent>
                  <Stack spacing={2} marginTop="15px">
                    <Stack
                      direction="row"
                      spacing={2}
                      alignItems="center"
                      justifyContent="space-between"
                    >
                      <Typography variant="h5" maxWidth="930px">
                        Have you in the Past 12 Months had Intimate contact with
                        who has HIVIAIDS or Hepatitis B/C
                      </Typography>
                      <Box>
                        {formValues.IntimateContactWithWhoHasHIVAIDS !==
                          false && (
                          <Button
                            size="small"
                            sx={{ marginRight: "10px" }}
                            variant={
                              formValues.IntimateContactWithWhoHasHIVAIDS ===
                              true
                                ? "contained"
                                : "outlined"
                            }
                            onClick={() =>
                              handleChange(
                                " IntimateContactWithWhoHasHIVAIDS",
                                true
                              )
                            }
                          >
                            Yes
                          </Button>
                        )}
                        {formValues.IntimateContactWithWhoHasHIVAIDS !==
                          true && (
                          <Button
                            size="small"
                            variant={
                              formValues.IntimateContactWithWhoHasHIVAIDS ===
                              false
                                ? "contained"
                                : "outlined"
                            }
                            onClick={() =>
                              handleChange(
                                " IntimateContactWithWhoHasHIVAIDS",
                                false
                              )
                            }
                          >
                            No
                          </Button>
                        )}
                      </Box>
                    </Stack>
                  </Stack>
                </CardContent>
              </Card>
              <Card variant="outlined" sx={{ marginTop: "15px" }}>
                <CardContent>
                  <Stack spacing={2} marginTop="15px">
                    <Stack
                      direction="row"
                      spacing={2}
                      alignItems="center"
                      justifyContent="space-between"
                    >
                      <Typography variant="h5" maxWidth="730px">
                        Have you been or travelled to a country endemic for SARS
                        AvianFlu, H1N1, (Swine) Flu or had intimate contact with
                        some one having risk factors?
                      </Typography>
                      <Box>
                        {formValues.SARSavianFluH1N1 !== false && (
                          <Button
                            size="small"
                            sx={{ marginRight: "10px" }}
                            variant={
                              formValues.SARSavianFluH1N1 === true
                                ? "contained"
                                : "outlined"
                            }
                            onClick={() =>
                              handleChange(" SARSavianFluH1N1", true)
                            }
                          >
                            Yes
                          </Button>
                        )}
                        {formValues.SARSavianFluH1N1 !== true && (
                          <Button
                            size="small"
                            variant={
                              formValues.SARSavianFluH1N1 === false
                                ? "contained"
                                : "outlined"
                            }
                            onClick={() =>
                              handleChange(" SARSavianFluH1N1", false)
                            }
                          >
                            No
                          </Button>
                        )}
                      </Box>
                    </Stack>
                  </Stack>
                </CardContent>
              </Card>
              <Card variant="outlined" sx={{ marginTop: "15px" }}>
                <CardContent>
                  <Typography
                    variant="h5"
                    sx={{ marginTop: "4px", fontWeight: "bold" }}
                  >
                    From 1980 through 1986 have you?
                  </Typography>
                  <Stack spacing={2} marginTop="15px">
                    <Stack
                      direction="row"
                      spacing={2}
                      alignItems="center"
                      justifyContent="space-between"
                    >
                      <Typography variant="h5">
                        A) Spent 3 months or more cumulatively in the United
                        Kingdom? If so, what city and country?
                      </Typography>
                      <Box>
                        {formValues.spent3MonthsOrMoreCumulativelyInTheUnitedKingdom !==
                          false && (
                          <Button
                            size="small"
                            sx={{ marginRight: "10px" }}
                            variant={
                              formValues.spent3MonthsOrMoreCumulativelyInTheUnitedKingdom ===
                              true
                                ? "contained"
                                : "outlined"
                            }
                            onClick={() =>
                              handleChange(
                                " spent3MonthsOrMoreCumulativelyInTheUnitedKingdom",
                                true
                              )
                            }
                          >
                            Yes
                          </Button>
                        )}
                        {formValues.spent3MonthsOrMoreCumulativelyInTheUnitedKingdom !==
                          true && (
                          <Button
                            size="small"
                            variant={
                              formValues.spent3MonthsOrMoreCumulativelyInTheUnitedKingdom ===
                              false
                                ? "contained"
                                : "outlined"
                            }
                            onClick={() =>
                              handleChange(
                                " spent3MonthsOrMoreCumulativelyInTheUnitedKingdom",
                                false
                              )
                            }
                          >
                            No
                          </Button>
                        )}
                      </Box>
                    </Stack>
                    <Stack
                      direction="row"
                      spacing={2}
                      alignItems="center"
                      justifyContent="space-between"
                    >
                      <Typography variant="h5">
                        B) Resided at a US military basein Europe for 6months or
                        more cumulatively? If so, what city and country?
                      </Typography>
                      <Box>
                        {formValues.ResidedAtaUSmilitaryBaseinEurope !==
                          false && (
                          <Button
                            size="small"
                            sx={{ marginRight: "10px" }}
                            variant={
                              formValues.ResidedAtaUSmilitaryBaseinEurope ===
                              true
                                ? "contained"
                                : "outlined"
                            }
                            onClick={() =>
                              handleChange(
                                " ResidedAtaUSmilitaryBaseinEurope",
                                true
                              )
                            }
                          >
                            Yes
                          </Button>
                        )}
                        {formValues.ResidedAtaUSmilitaryBaseinEurope !==
                          true && (
                          <Button
                            size="small"
                            variant={
                              formValues.ResidedAtaUSmilitaryBaseinEurope ===
                              false
                                ? "contained"
                                : "outlined"
                            }
                            onClick={() =>
                              handleChange(
                                " ResidedAtaUSmilitaryBaseinEurope",
                                false
                              )
                            }
                          >
                            No
                          </Button>
                        )}
                      </Box>
                    </Stack>
                  </Stack>
                </CardContent>
              </Card>
              <Card variant="outlined" sx={{ marginTop: "15px" }}>
                <CardContent>
                  <Stack spacing={2} marginTop="15px">
                    <Stack
                      direction="row"
                      spacing={2}
                      alignItems="center"
                      justifyContent="space-between"
                    >
                      <Typography variant="h5" maxWidth="730px">
                        Have you been or travelled to a country endemic for,
                        and/or suffered from Malaria, Chikungunya, Dengueand
                        West Nile Fever?
                      </Typography>
                      <Box>
                        {formValues.sufferedFromMalariaChikungunyaDengueandWestNileFever !==
                          false && (
                          <Button
                            size="small"
                            sx={{ marginRight: "10px" }}
                            variant={
                              formValues.sufferedFromMalariaChikungunyaDengueandWestNileFever ===
                              true
                                ? "contained"
                                : "outlined"
                            }
                            onClick={() =>
                              handleChange(
                                " sufferedFromMalariaChikungunyaDengueandWestNileFever",
                                true
                              )
                            }
                          >
                            Yes
                          </Button>
                        )}
                        {formValues.sufferedFromMalariaChikungunyaDengueandWestNileFever !==
                          true && (
                          <Button
                            size="small"
                            variant={
                              formValues.sufferedFromMalariaChikungunyaDengueandWestNileFever ===
                              false
                                ? "contained"
                                : "outlined"
                            }
                            onClick={() =>
                              handleChange(
                                " sufferedFromMalariaChikungunyaDengueandWestNileFever",
                                false
                              )
                            }
                          >
                            No
                          </Button>
                        )}
                      </Box>
                    </Stack>
                  </Stack>
                </CardContent>
              </Card>
              <Card variant="outlined" sx={{ marginTop: "15px" }}>
                <CardContent>
                  <Stack spacing={2} marginTop="15px">
                    <Stack
                      direction="row"
                      spacing={2}
                      alignItems="center"
                      justifyContent="space-between"
                    >
                      <Typography variant="h5" maxWidth="730px">
                        In the past 12 months, have you visited or lived outside
                        of India? Pleaselist the countries, cities and the
                        duration of your stay(s)
                      </Typography>
                      <Box>
                        {formValues.visitedOrlivedOutsideofIndia !== false && (
                          <Button
                            size="small"
                            sx={{ marginRight: "10px" }}
                            variant={
                              formValues.visitedOrlivedOutsideofIndia === true
                                ? "contained"
                                : "outlined"
                            }
                            onClick={() =>
                              handleChange(
                                " visitedOrlivedOutsideofIndia",
                                true
                              )
                            }
                          >
                            Yes
                          </Button>
                        )}
                        {formValues.visitedOrlivedOutsideofIndia !== true && (
                          <Button
                            size="small"
                            variant={
                              formValues.visitedOrlivedOutsideofIndia === false
                                ? "contained"
                                : "outlined"
                            }
                            onClick={() =>
                              handleChange(
                                " visitedOrlivedOutsideofIndia",
                                false
                              )
                            }
                          >
                            No
                          </Button>
                        )}
                      </Box>
                    </Stack>
                  </Stack>
                </CardContent>
              </Card>
              <Card variant="outlined" sx={{ marginTop: "15px" }}>
                <CardContent>
                  <Typography
                    variant="h5"
                    sx={{ marginTop: "4px", fontWeight: "bold" }}
                  >
                    Personal History
                  </Typography>
                  <Stack spacing={2} marginTop="15px">
                    <Stack
                      direction="row"
                      spacing={2}
                      alignItems="center"
                      justifyContent="space-between"
                    >
                      <Typography variant="h5">
                        A) Are you and the would-be baby’s genetic father, blood
                        relatives?
                      </Typography>
                      <Box>
                        {formValues.AreyouAndTheWouldbeBabysGeneticFatherBloodRelatives !==
                          false && (
                          <Button
                            size="small"
                            sx={{ marginRight: "10px" }}
                            variant={
                              formValues.AreyouAndTheWouldbeBabysGeneticFatherBloodRelatives ===
                              true
                                ? "contained"
                                : "outlined"
                            }
                            onClick={() =>
                              handleChange(
                                " AreyouAndTheWouldbeBabysGeneticFatherBloodRelatives",
                                true
                              )
                            }
                          >
                            Yes
                          </Button>
                        )}
                        {formValues.AreyouAndTheWouldbeBabysGeneticFatherBloodRelatives !==
                          true && (
                          <Button
                            size="small"
                            variant={
                              formValues.AreyouAndTheWouldbeBabysGeneticFatherBloodRelatives ===
                              false
                                ? "contained"
                                : "outlined"
                            }
                            onClick={() =>
                              handleChange(
                                " AreyouAndTheWouldbeBabysGeneticFatherBloodRelatives",
                                false
                              )
                            }
                          >
                            No
                          </Button>
                        )}
                      </Box>
                    </Stack>
                    <Stack
                      direction="row"
                      spacing={2}
                      alignItems="center"
                      justifyContent="space-between"
                    >
                      <Typography variant="h5">
                        B) Did this pregnancy result from Donor
                        Egg/Sperm/Surrogate?
                      </Typography>
                      <Box>
                        {formValues.pregnancyResultFromDonorEggSpermSurrogate !==
                          false && (
                          <Button
                            size="small"
                            sx={{ marginRight: "10px" }}
                            variant={
                              formValues.pregnancyResultFromDonorEggSpermSurrogate ===
                              true
                                ? "contained"
                                : "outlined"
                            }
                            onClick={() =>
                              handleChange(
                                "pregnancyResultFromDonorEggSpermSurrogate",
                                true
                              )
                            }
                          >
                            Yes
                          </Button>
                        )}
                        {formValues.pregnancyResultFromDonorEggSpermSurrogate !==
                          true && (
                          <Button
                            size="small"
                            variant={
                              formValues.pregnancyResultFromDonorEggSpermSurrogate ===
                              false
                                ? "contained"
                                : "outlined"
                            }
                            onClick={() =>
                              handleChange(
                                "pregnancyResultFromDonorEggSpermSurrogate",
                                false
                              )
                            }
                          >
                            No
                          </Button>
                        )}
                      </Box>
                    </Stack>
                    <Stack
                      direction="row"
                      spacing={2}
                      alignItems="center"
                      justifyContent="space-between"
                    >
                      <Typography variant="h5">
                        C) Haveyou ever had abnormal pregnancy?
                      </Typography>
                      <Box>
                        {formValues.everHadAbnormalPregnancy !== false && (
                          <Button
                            size="small"
                            sx={{ marginRight: "10px" }}
                            variant={
                              formValues.everHadAbnormalPregnancy === true
                                ? "contained"
                                : "outlined"
                            }
                            onClick={() =>
                              handleChange("everHadAbnormalPregnancy", true)
                            }
                          >
                            Yes
                          </Button>
                        )}
                        {formValues.everHadAbnormalPregnancy !== true && (
                          <Button
                            size="small"
                            variant={
                              formValues.everHadAbnormalPregnancy === false
                                ? "contained"
                                : "outlined"
                            }
                            onClick={() =>
                              handleChange("everHadAbnormalPregnancy", false)
                            }
                          >
                            No
                          </Button>
                        )}
                      </Box>
                    </Stack>
                  </Stack>
                </CardContent>
              </Card>
              <Card variant="outlined" sx={{ marginTop: "15px" }}>
                <CardContent>
                  <Typography
                    variant="h5"
                    sx={{ marginTop: "4px", fontWeight: "bold" }}
                  >
                    Family History - If yes, please usethe following codesfor
                    WHO?
                  </Typography>
                  <Stack
                    sx={{
                      display: "flex",
                      flexDirection: "column",
                      gap: 2,
                      marginTop: "10px",
                      maxWidth: "900px",
                    }}
                  >
                    <Grid container spacing={2}>
                      <Grid item xs={3}>
                        <Button
                          size="small"
                          sx={{ whiteSpace: "nowrap", width: "100%" }}
                          variant={
                            formValues.chooseValue === "M"
                              ? "contained"
                              : "outlined"
                          }
                          onClick={() => handleChange("chooseValue", "M")}
                        >
                          M - Mother
                        </Button>
                      </Grid>
                      <Grid item xs={3}>
                        <Button
                          size="small"
                          sx={{ whiteSpace: "nowrap", width: "100%" }}
                          variant={
                            formValues.chooseValue === "F"
                              ? "contained"
                              : "outlined"
                          }
                          onClick={() => handleChange("chooseValue", "F")}
                        >
                          F - Father
                        </Button>
                      </Grid>
                      <Grid item xs={3}>
                        <Button
                          size="small"
                          sx={{ whiteSpace: "nowrap", width: "100%" }}
                          variant={
                            formValues.chooseValue === "MSS"
                              ? "contained"
                              : "outlined"
                          }
                          onClick={() => handleChange("chooseValue", "MSS")}
                        >
                          MSS - Maternal Side Sibling
                        </Button>
                      </Grid>
                      <Grid item xs={3}>
                        <Button
                          size="small"
                          sx={{ whiteSpace: "nowrap", width: "100%" }}
                          variant={
                            formValues.chooseValue === "FSS"
                              ? "contained"
                              : "outlined"
                          }
                          onClick={() => handleChange("chooseValue", "FSS")}
                        >
                          FSS - Father Side Sibling
                        </Button>
                      </Grid>
                    </Grid>
                    <Grid container spacing={2}>
                      <Grid item xs={3}>
                        <Button
                          size="small"
                          sx={{ whiteSpace: "nowrap", width: "220px" }}
                          variant={
                            formValues.chooseValue === "GPM"
                              ? "contained"
                              : "outlined"
                          }
                          onClick={() => handleChange("chooseValue", "GPM")}
                        >
                          GPM - Gland Parent Maternal Side
                        </Button>
                      </Grid>
                      <Grid item xs={3}>
                        <Button
                          size="small"
                          sx={{ whiteSpace: "nowrap", width: "220px" }}
                          variant={
                            formValues.chooseValue === "GPF"
                              ? "contained"
                              : "outlined"
                          }
                          onClick={() => handleChange("chooseValue", "GPF")}
                        >
                          GPF - Gland Parent Father’s Side
                        </Button>
                      </Grid>
                      <Grid item xs={3}>
                        <Button
                          size="small"
                          sx={{ whiteSpace: "nowrap" }}
                          variant={
                            formValues.chooseValue === "OMS"
                              ? "contained"
                              : "outlined"
                          }
                          onClick={() => handleChange("chooseValue", "OMS")}
                        >
                          OMS - Others Maternal Side
                        </Button>
                      </Grid>
                      <Grid item xs={3}>
                        <Button
                          size="small"
                          sx={{ whiteSpace: "nowrap" }}
                          variant={
                            formValues.chooseValue === "OFS"
                              ? "contained"
                              : "outlined"
                          }
                          onClick={() => handleChange("chooseValue", "OFS")}
                        >
                          OFS - Others Father Side
                        </Button>
                      </Grid>
                    </Grid>
                  </Stack>
                  <Stack spacing={2} marginTop="15px">
                    <Stack
                      direction="row"
                      spacing={2}
                      alignItems="center"
                      justifyContent="space-between"
                    >
                      <Typography variant="h5" maxWidth="800px">
                        A) Anyblood relatives with cancer/leukemia before 20
                        years of age?
                      </Typography>
                      <Box>
                        <Button
                          size="small"
                          sx={{ marginRight: "10px" }}
                          variant={
                            formValues.relativesWithCancerleukemiaBefore20 ===
                            true
                              ? "contained"
                              : "outlined"
                          }
                          onClick={() =>
                            handleChange(
                              "relativesWithCancerleukemiaBefore20",
                              true
                            )
                          }
                        >
                          Yes
                        </Button>
                        <Button
                          size="small"
                          sx={{ marginRight: "10px" }}
                          variant={
                            formValues.relativesWithCancerleukemiaBefore20 ===
                            false
                              ? "contained"
                              : "outlined"
                          }
                          onClick={() =>
                            handleChange(
                              "relativesWithCancerleukemiaBefore20",
                              false
                            )
                          }
                        >
                          No
                        </Button>
                        <Button
                          size="small"
                          variant={
                            formValues.relativesWithCancerleukemiaBefore20 ===
                            "who"
                              ? "contained"
                              : "outlined"
                          }
                          onClick={() =>
                            handleChange(
                              "relativesWithCancerleukemiaBefore20",
                              "who"
                            )
                          }
                        >
                          Who
                        </Button>
                      </Box>
                    </Stack>
                    <Stack
                      direction="row"
                      spacing={2}
                      alignItems="center"
                      justifyContent="space-between"
                    >
                      <Typography variant="h5" maxWidth="650px">
                        B) Any Red Cell related Diseaseor any Metabolic/Storage
                        Diseaseor any diseasesof Immune Deficiency or Genetic
                        Diseases? If yes, please list the details asbelow.
                      </Typography>
                      <Box>
                        <Button
                          size="small"
                          sx={{ marginRight: "10px" }}
                          variant={
                            formValues.RedCellRelatedDiseaseorAnyMetabolicStorageDiseaseor ===
                            true
                              ? "contained"
                              : "outlined"
                          }
                          onClick={() =>
                            handleChange(
                              "RedCellRelatedDiseaseorAnyMetabolicStorageDiseaseor",
                              true
                            )
                          }
                        >
                          Yes
                        </Button>
                        <Button
                          size="small"
                          sx={{ marginRight: "10px" }}
                          variant={
                            formValues.RedCellRelatedDiseaseorAnyMetabolicStorageDiseaseor ===
                            false
                              ? "contained"
                              : "outlined"
                          }
                          onClick={() =>
                            handleChange(
                              "RedCellRelatedDiseaseorAnyMetabolicStorageDiseaseor",
                              false
                            )
                          }
                        >
                          No
                        </Button>
                        <Button
                          size="small"
                          variant={
                            formValues.RedCellRelatedDiseaseorAnyMetabolicStorageDiseaseor ===
                            "who"
                              ? "contained"
                              : "outlined"
                          }
                          onClick={() =>
                            handleChange(
                              "RedCellRelatedDiseaseorAnyMetabolicStorageDiseaseor",
                              "who"
                            )
                          }
                        >
                          Who
                        </Button>
                      </Box>
                    </Stack>
                  </Stack>
                </CardContent>
              </Card>
            </CardContent>
          </Card>
        </Box>
        <Stack
          sx={{
            display: "flex",
            flexDirection: "row",
            justifyContent: "space-between",
            padding: "20px",
          }}
        >
          <Button variant="outlined" onClick={GoToFirstPage}>
            Edit
          </Button>
          <Button variant="contained" onClick={SaveInnerPage}>
            Save
          </Button>
        </Stack>
      </CardContent>
    </Card>
  );
};

export default ClientDetailsPreview;
