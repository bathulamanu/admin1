import React, { useState } from "react";
import {
  Container,
  Typography,
  Button,
  Card,
  CardContent,
  Stack,
  IconButton,
} from "@mui/material";
import StickyNote2Icon from "@mui/icons-material/StickyNote2";
import DeleteOutlineIcon from "@mui/icons-material/DeleteOutline";
import EditIcon from "@mui/icons-material/Edit";
import CloseIcon from "@mui/icons-material/Close";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogTitle from "@mui/material/DialogTitle";

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
              >
                <DeleteOutlineIcon />
                Delete
              </Button>
            </Stack>
          </CardContent>
        </Card>
      ))}
    </Container>
  );
};

export default ReportDetails;
