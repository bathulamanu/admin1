import React, { useState } from "react";
import {
  Container,
  Typography,
  Button,
  Card,
  CardContent,
  Stack,
  IconButton,
  Box,
  styled,
} from "@mui/material";
import StickyNote2Icon from "@mui/icons-material/StickyNote2";
import DeleteOutlineIcon from "@mui/icons-material/DeleteOutline";
import EditIcon from "@mui/icons-material/Edit";
import CloseIcon from "@mui/icons-material/Close";
import CloudUploadIcon from "@mui/icons-material/CloudUpload";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogTitle from "@mui/material/DialogTitle";

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
const reportTypes = [
  "Preservation certificate",
  "CFU & sterility report",
  "CD34 report",
  "Maternity sample report",
  "NBS reports",
  "HLA reports",
  "Others",
];

const ReportDetails = () => {
  const [openView, setOpenView] = useState(false);
  const [openEdit, setOpenEdit] = useState(false);
  const [openDelete, setOpenDelete] = useState(false);

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
      {reportTypes.map((report, index) => (
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
              {report}
            </Typography>
            <Stack
              sx={{
                display: "flex",
                flexDirection: "row",
                gap: 4,
              }}
            >
              <Button
                variant="contained"
                color="primary"
                sx={{ borderRadius: "30px" }}
                onClick={() => setOpenView(true)}
              >
                <StickyNote2Icon />
                View
              </Button>
              <Dialog open={openView}>
                <DialogContent sx={{ width: "500px" }}>
                  <CloseIcon
                    sx={{
                      marginLeft: "400px",
                      cursor: "pointer",
                    }}
                    onClick={() => setOpenView(!openView)}
                  />
                  <div style={{ textAlign: "center" }}>
                    <h5>0012 - Customer name</h5>
                    <h2>View File</h2>
                    <h2>Maternity sample report</h2>
                    <div
                      style={{
                        border: "1px solid #000",
                        width: "300px",
                        height: "300px",
                        margin: "0 auto",
                        display: "flex",
                        justifyContent: "center",
                        alignItems: "center",
                      }}
                    >
                      <div
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
                        {/* Image content will go here */}
                      </div>
                    </div>
                    <Button
                      variant="contained"
                      color="primary"
                      sx={{
                        marginTop: "20px",
                        borderRadius: "30px",
                      }}
                    >
                      Done
                    </Button>
                  </div>
                </DialogContent>
              </Dialog>
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
                onClick={() => setOpenEdit(true)}
              >
                <EditIcon />
                Edit
              </Button>
              <Dialog open={openEdit}>
                <DialogContent sx={{ width: "500px" }}>
                  <CloseIcon
                    sx={{
                      marginLeft: "400px",
                      cursor: "pointer",
                    }}
                    onClick={() => setOpenEdit(!openEdit)}
                  />
                  <div style={{ textAlign: "center" }}>
                    <h5>0012 - Customer name</h5>
                    <h2>Edit/Upload File</h2>
                    <h2>Maternity sample report</h2>
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
                        <VisuallyHiddenInput type="file" />
                      </Button>
                    </Box>
                    <div
                      style={{
                        border: "1px solid #000",
                        width: "300px",
                        height: "300px",
                        margin: "0 auto",
                        display: "flex",
                        justifyContent: "center",
                        alignItems: "center",
                      }}
                    >
                      <div
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
                        {/* Image content will go here */}
                      </div>
                    </div>
                    <Button
                      variant="contained"
                      color="primary"
                      sx={{
                        marginTop: "20px",
                        borderRadius: "30px",
                      }}
                    >
                      Upload
                    </Button>
                  </div>
                </DialogContent>
              </Dialog>
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
                onClick={() => setOpenDelete(true)}
              >
                <DeleteOutlineIcon />
                Delete
              </Button>
              <Dialog open={openDelete}>
                <DialogContent sx={{ width: "500px" }}>
                  <CloseIcon
                    sx={{
                      marginLeft: "400px",
                      cursor: "pointer",
                    }}
                    onClick={() => setOpenDelete(!openDelete)}
                  />
                  <div style={{ textAlign: "center" }}>
                    <h5>0012 - Customer name</h5>
                    <h2>View File</h2>
                    <h2>Maternity sample report</h2>
                    <div
                      style={{
                        border: "1px solid #000",
                        width: "80%",
                        height: "400px",
                        margin: "0 auto",
                        display: "flex",
                        justifyContent: "center",
                        alignItems: "center",
                      }}
                    >
                      <div
                        style={{
                          border: "1px solid #000",
                          width: "79%",
                          height: "370px",
                          margin: "0 auto",
                          display: "flex",
                          justifyContent: "center",
                          alignItems: "center",
                        }}
                      >
                        {/* Image content will go here */}
                      </div>
                    </div>
                    <Button
                      variant="contained"
                      color="primary"
                      sx={{
                        marginTop: "20px",
                        borderRadius: "30px",
                      }}
                    >
                      Done
                    </Button>
                  </div>
                </DialogContent>
              </Dialog>
            </Stack>
          </CardContent>
        </Card>
      ))}
    </Container>
  );
};

export default ReportDetails;
