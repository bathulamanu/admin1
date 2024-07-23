import React, { useState, useEffect } from "react";
import {
  Container,
  Typography,
  Button,
  Card,
  CardContent,
  styled,
  Box,
  Stack,
} from "@mui/material";
import AddIcon from "@mui/icons-material/Add";
import {
  getCustomerReportsNames,
  createReport,
  getReport,
  UpdateReport,
  deleteReport,
} from "../../../redux/Slices/customerSlice";

import { useDispatch, useSelector } from "react-redux";
import Dialog from "@mui/material/Dialog";
import DialogContent from "@mui/material/DialogContent";
import EditIcon from "@mui/icons-material/Edit";
import CloudUploadIcon from "@mui/icons-material/CloudUpload";
import DeleteOutlineIcon from "@mui/icons-material/DeleteOutline";
import CloseIcon from "@mui/icons-material/Close";
import api from "../../../utils/api/httpRequest";
import StickyNote2Icon from "@mui/icons-material/StickyNote2";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
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

const Lists = () => {
  const [selectedReport, setSelectedReport] = useState(false);
  const [openView, setOpenView] = useState(false);
  const [openEdit, setOpenEdit] = useState(false);
  const [openDelete, setOpenDelete] = useState(false);
  const [recordId, setrecordId] = useState(null);
  const [customerName, setCustomername] = useState(
    localStorage.getItem("selectedCustomerName")
  );
  const dispatch = useDispatch();
  const reportTypes = useSelector(
    (state) => state.customers.typeOfCustomerReports
  );
  const AllReports = useSelector((state) => state.customers.AllReports);
  console.log("kkkkkkkkkkkk AllReports AllReports", AllReports);

  const initialValue = {
    customerID: localStorage.getItem("selectedCustomerId"),
    FileTitle: "",
    FileName: "",
  };
  const [formValues, setFormValue] = useState(initialValue);
  useEffect(() => {
    dispatch(getCustomerReportsNames());
    dispatch(getReport(initialValue.customerID));
  }, []);
  useEffect(() => {
    if (reportTypes.length !== 0 && AllReports.length !== 0) {
      // reportTypes.sort((x, y) => { return x.value - y.value })
      // reportTypes.map(x => {
      //   const found = AllReports.find(yy => x.value == yy.FileTitle);
      //   if (found) {
      //     console.log("eqqaul view edit delete ");
      //   }
      //   else {
      //     console.log("add");
      //   }
      // })
    }
  }, [AllReports]);

  if (selectedReport) {
    // return <ReportDetails />;
  }

  const setSeletedFile = (item) => {
    setFormValue((prev) => ({
      ...prev,
      FileName: item.FileName,
    }));
    setFormValue((prev) => ({
      ...prev,
      FileTitle: item.FileTitle,
    }));
    setrecordId(item.reportID);

    console.log("cehck re ", item);
  };

  const addFile = (value, e) => {
    console.log("kkkkkkkkkkkkkkkkkk ", formValues);
    dispatch(createReport(formValues));
    setFormValue(initialValue);
    setSelectedReport(false);
    dispatch(getReport(initialValue.customerID));
  };

  const updateFileReport = (value, e) => {
    console.log("fromvalues and record id", recordId, formValues);
    // dispatch(UpdateReport({ recordId, formValues }));
    dispatch(UpdateReport({ recordId, formValues }));
    setFormValue(initialValue);
    dispatch(getReport(initialValue.customerID));
    setOpenEdit(false);
  };

  const deleteReportFile = () => {
    dispatch(deleteReport(recordId));
    setFormValue(initialValue);
    dispatch(getReport(initialValue.customerID));
    setOpenDelete(false);
  };

  const clickedOnAdd = (item) => {
    setFormValue((prev) => ({
      ...prev,
      FileTitle: item,
    }));
  };

  const handleImageUpload = async (e, fileName) => {
    const headers = {
      "Content-Type": "multipart/form-data",
    };
    const formData = new FormData();
    formData.append("file", e.target.files[0]);
    formData.append("folder", "Customer Reports");
    try {
      const response = await api.post("/upload", formData, { headers });
      if (response?.data?.status === 200) {
        setFormValue((prev) => ({
          ...prev,
          FileName: response?.data?.data?.key,
        }));
        // setFormValue((prev) => ({
        //   ...prev,
        //   FileTitle: fileName
        // }));
        console.log(
          "formValues?.FileName formValues?.FileName formValues?.FileName  ",
          formValues
        );
      } else {
        console.log(response?.data?.message);
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <Container
      maxWidth="xl"
      disableGutters
      sx={{
        maxHeight: "85%",
        overflow: "auto",
        background: "#fff",
        padding: "8px",
      }}
    >
      <ToastContainer />
      {reportTypes.map((report, index) => {
        const found = AllReports.find((yy) => report.value === yy.FileTitle);
        return (
          <Card
            variant="outlined"
            key={index}
            sx={{ marginTop: "20px", borderRadius: "30px" }}
          >
            <CardContent
              sx={{
                display: "flex",
                flexDirection: "row",
                justifyContent: "space-between",
              }}
            >
              <Typography
                variant="h5"
                sx={{ marginTop: "10px", fontWeight: "bold" }}
              >
                {report.value}
              </Typography>

              {found ? (
                <>
                  <Button
                    variant="contained"
                    color="primary"
                    sx={{ borderRadius: "30px" }}
                    onClick={() => {
                      setOpenView(true);
                      setSeletedFile(found);
                    }}
                  >
                    <StickyNote2Icon />
                    View
                  </Button>

                  <Button
                    variant="contained"
                    color="primary"
                    sx={{
                      borderRadius: "30px",
                      background: "#cce0ff",
                      color: "black",
                      "&:hover": {
                        background: "#cce0ff",
                      },
                    }}
                    onClick={() => {
                      setOpenEdit(true);
                      setSeletedFile(found);
                    }}
                  >
                    <EditIcon />
                    Edit
                  </Button>
                  <Button
                    variant="contained"
                    // color="secondary"
                    sx={{
                      borderRadius: "30px",
                      background: "#f0f0f0",
                      color: "black",
                      "&:hover": {
                        background: "#f0f0f0",
                      },
                    }}
                    onClick={() => {
                      setOpenDelete(true);
                      setSeletedFile(found);
                    }}
                  >
                    <DeleteOutlineIcon />
                    Delete
                  </Button>
                </>
              ) : (
                <Button
                  variant="contained"
                  color="primary"
                  sx={{ borderRadius: "30px" }}
                  onClick={() => {
                    setSelectedReport(true);
                    clickedOnAdd(report.value);
                  }}
                >
                  <AddIcon />
                  Add Files
                </Button>
              )}

              <Dialog open={selectedReport}>
                <DialogContent sx={{ width: "500px" }}>
                  <CloseIcon
                    sx={{
                      marginLeft: "400px",
                      cursor: "pointer",
                    }}
                    onClick={() => setSelectedReport(!selectedReport)}
                  />
                  <Box sx={{ textAlign: "center" }}>
                    <Typography
                      sx={{
                        fontSize: "15px",
                        fontWeight: "bold",
                        marginBottom: "20px",
                      }}
                    >
                      {formValues.customerID} - {customerName}
                    </Typography>
                    <Typography
                      sx={{
                        fontSize: "24px",
                        fontWeight: "bold",
                        marginBottom: "6px",
                      }}
                    >
                      Add/Upload File
                    </Typography>
                    <Typography>{formValues.FileTitle} </Typography>
                    <Box sx={{ marginBottom: "10px" }}>
                      <Button
                        component="label"
                        role={undefined}
                        variant="outlined"
                        tabIndex={-1}
                        startIcon={<CloudUploadIcon />}
                        sx={{ padding: "20px" }}
                      >
                        Add File here
                        <VisuallyHiddenInput
                          type="file"
                          //  onChange={handleImageUpload}
                          onChange={(e) => handleImageUpload(e, report.value)}
                        />
                      </Button>
                    </Box>
                    <Box
                      style={{
                        border: "1px solid #000",
                        width: "300px",
                        height: "300px",
                        margin: "0 auto",
                        display: "flex",
                        justifyContent: "center",
                        alignItems: "center",
                        marginTop: "10px",
                      }}
                    >
                      <Box
                        style={{
                          border: "1px solid #000",
                          width: "270px",
                          height: "270px",
                          margin: "0 auto",
                          display: "flex",
                          justifyContent: "center",
                          alignItems: "center",
                        }}
                      >
                        {formValues.FileName ? (
                          <img
                            src={`https://flyingbyts.s3.ap-south-2.amazonaws.com/${formValues.FileName}`}
                            alt="File"
                            height={"auto"}
                            width={"210px"}
                          />
                        ) : null}
                      </Box>
                    </Box>
                    <Button
                      variant="contained"
                      color="primary"
                      sx={{
                        marginTop: "20px",
                        borderRadius: "30px",
                      }}
                      onClick={(e) => addFile(report.value, e)}
                    >
                      Upload
                    </Button>
                  </Box>
                </DialogContent>
              </Dialog>

              <Dialog open={openView}>
                <DialogContent sx={{ width: "500px" }}>
                  <CloseIcon
                    sx={{
                      marginLeft: "400px",
                      cursor: "pointer",
                    }}
                    onClick={() => {
                      setOpenView(!openView);
                      setFormValue(initialValue);
                    }}
                  />
                  <Box sx={{ textAlign: "center" }}>
                    <Typography
                      sx={{
                        fontSize: "15px",
                        fontWeight: "bold",
                        marginBottom: "20px",
                      }}
                    >
                      {formValues.customerID} - {customerName}
                    </Typography>
                    <Typography
                      sx={{
                        fontSize: "24px",
                        fontWeight: "bold",
                        marginBottom: "6px",
                      }}
                    >
                      View File
                    </Typography>
                    <Typography>{formValues.FileTitle}</Typography>
                    <Box
                      style={{
                        border: "1px solid #000",
                        width: "300px",
                        height: "300px",
                        margin: "0 auto",
                        display: "flex",
                        justifyContent: "center",
                        alignItems: "center",
                        marginTop: "10px",
                      }}
                    >
                      <Box
                        style={{
                          border: "1px solid #000",
                          width: "270px",
                          height: "270px",
                          margin: "0 auto",
                          display: "flex",
                          justifyContent: "center",
                          alignItems: "center",
                        }}
                      >
                        {formValues.FileName ? (
                          <img
                            src={`https://flyingbyts.s3.ap-south-2.amazonaws.com/${formValues.FileName}`}
                            alt="File"
                            height={"auto"}
                            width={"210px"}
                          />
                        ) : null}
                      </Box>
                    </Box>
                    <Button
                      variant="contained"
                      color="primary"
                      sx={{
                        marginTop: "20px",
                        borderRadius: "30px",
                      }}
                      onClick={() => {
                        setOpenView(!openView);
                        setFormValue(initialValue);
                      }}
                    >
                      Done
                    </Button>
                  </Box>
                </DialogContent>
              </Dialog>

              <Dialog open={openEdit}>
                <DialogContent sx={{ width: "500px" }}>
                  <CloseIcon
                    sx={{
                      marginLeft: "400px",
                      cursor: "pointer",
                    }}
                    onClick={() => setOpenEdit(!openEdit)}
                  />
                  <Box sx={{ textAlign: "center" }}>
                    <Typography
                      sx={{
                        fontSize: "15px",
                        fontWeight: "bold",
                        marginBottom: "20px",
                      }}
                    >
                      {formValues.customerID} - {customerName}
                    </Typography>
                    <Typography
                      sx={{
                        fontSize: "24px",
                        fontWeight: "bold",
                        marginBottom: "6px",
                      }}
                    >
                      Edit/Upload File
                    </Typography>
                    <Typography>{formValues.FileTitle}</Typography>
                    <Box sx={{ marginBottom: "10px" }}>
                      <Button
                        component="label"
                        role={undefined}
                        variant="outlined"
                        tabIndex={-1}
                        startIcon={<CloudUploadIcon />}
                        sx={{ padding: "20px" }}
                      >
                        Add File here
                        <VisuallyHiddenInput
                          type="file"
                          onChange={(e) => handleImageUpload(e, report.value)}
                        />
                      </Button>
                    </Box>
                    <Box
                      style={{
                        border: "1px solid #000",
                        width: "300px",
                        height: "300px",
                        margin: "0 auto",
                        display: "flex",
                        justifyContent: "center",
                        alignItems: "center",
                        marginTop: "10px",
                      }}
                    >
                      <Box
                        style={{
                          border: "1px solid #000",
                          width: "270px",
                          height: "270px",
                          margin: "0 auto",
                          display: "flex",
                          justifyContent: "center",
                          alignItems: "center",
                        }}
                      >
                        {formValues.FileName ? (
                          <img
                            src={`https://flyingbyts.s3.ap-south-2.amazonaws.com/${formValues.FileName}`}
                            alt="File"
                            height={"auto"}
                            width={"210px"}
                          />
                        ) : null}
                      </Box>
                    </Box>
                    <Button
                      variant="contained"
                      color="primary"
                      sx={{
                        marginTop: "20px",
                        borderRadius: "30px",
                      }}
                      onClick={(e) => updateFileReport(report.value, e)}
                    >
                      Upload
                    </Button>
                  </Box>
                </DialogContent>
              </Dialog>

              <Dialog open={openDelete}>
                <DialogContent sx={{ width: "500px" }}>
                  <CloseIcon
                    sx={{
                      marginLeft: "400px",
                      cursor: "pointer",
                    }}
                    onClick={() => setOpenDelete(!openDelete)}
                  />
                  <Box sx={{ textAlign: "center" }}>
                    <Typography
                      sx={{
                        fontSize: "15px",
                        fontWeight: "bold",
                        marginBottom: "20px",
                      }}
                    >
                      {formValues.customerID} - {customerName}
                    </Typography>
                    <Typography
                      sx={{
                        fontSize: "24px",
                        fontWeight: "bold",
                        marginBottom: "6px",
                      }}
                    >
                      Delete File
                    </Typography>
                    <Typography>
                      Are you sure you want to delete the file?
                    </Typography>
                    <Stack
                      sx={{
                        display: "flex",
                        flexDirection: "row",
                        gap: 2,
                        justifyContent: "center",
                        alignItems: "center",
                        marginTop: "10px",
                      }}
                    >
                      {" "}
                      <Button
                        variant="contained"
                        // color="primary"
                        sx={{
                          borderRadius: "30px",
                          background: "#f0f0f0",
                          color: "black",
                          "&:hover": {
                            background: "#f0f0f0",
                          },
                        }}
                        onClick={() => setOpenDelete(!openDelete)}
                      >
                        Cancel
                      </Button>{" "}
                      <Button
                        variant="contained"
                        color="error"
                        sx={{
                          borderRadius: "30px",
                        }}
                        onClick={() => deleteReportFile()}
                      >
                        Delete
                      </Button>
                    </Stack>
                  </Box>
                </DialogContent>
              </Dialog>
            </CardContent>
          </Card>
        );
      })}
    </Container>
  );
};

export default Lists;
