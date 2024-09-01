import React, { useState } from "react";
import { FaSave } from "react-icons/fa";
import Button from "@mui/material/Button";
import Stack from "@mui/material/Stack";
import TextField from "@mui/material/TextField";
import Paper from "@mui/material/Paper";
import Typography from "@mui/material/Typography";

const CustomersEnquiries = () => {
  const [enquiryDetails, setEnquiryDetails] = useState({
    companyName: "",
    contactPerson: "",
    email: "",
    phone: "",
    message: ""
  });

  const handleChange = (field, value) => {
    setEnquiryDetails({ ...enquiryDetails, [field]: value });
  };

  const handleSave = () => {
    // Handle save logic here
    console.log("Saving enquiry details:", enquiryDetails);
  };

  return (
    <div className="container mx-auto py-4 w-[50%]">
      <Stack direction="column" spacing={4}>
        <Typography variant="h5" gutterBottom  className="text-center">
          Customer Enquiries
        </Typography>
        <Paper variant="outlined">
          <Stack direction="column" spacing={3} p={3}>
            <TextField
              label="Customer Name"
              variant="outlined"
              value={enquiryDetails.companyName}
              onChange={(e) => handleChange("companyName", e.target.value)}
              fullWidth
            />
            <TextField
              label="Contact Person"
              variant="outlined"
              value={enquiryDetails.contactPerson}
              onChange={(e) => handleChange("contactPerson", e.target.value)}
              fullWidth
            />
            <TextField
              label="Email"
              variant="outlined"
              value={enquiryDetails.email}
              onChange={(e) => handleChange("email", e.target.value)}
              fullWidth
            />
            <TextField
              label="Phone"
              variant="outlined"
              value={enquiryDetails.phone}
              onChange={(e) => handleChange("phone", e.target.value)}
              fullWidth
            />
          </Stack>
          
          <Stack direction="row" spacing={2} p={2}>
            <TextField
              label="Message"
              variant="outlined"
              multiline
              rows={4}
              fullWidth
              value={enquiryDetails.message}
              onChange={(e) => handleChange("message", e.target.value)}
            />
          </Stack>
        </Paper>
        <Button
              variant="contained"
              color="primary"
              startIcon={<FaSave />}
              onClick={handleSave}
              style={{ marginTop: "16px" }}
            >
              Save
      </Button>
      </Stack>
      
    </div>
  );
};

export default CustomersEnquiries;

