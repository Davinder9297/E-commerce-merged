// import React from 'react'

// const BrandInformation = () => {
//   return (
//     <div>
//       Brand Information
//     </div>
//   )
// }

// export default BrandInformation


import React, { useState } from "react";
import { FaSave } from "react-icons/fa";
import Button from "@mui/material/Button";
import Stack from "@mui/material/Stack";
import TextField from "@mui/material/TextField";
import Paper from "@mui/material/Paper";
import Typography from "@mui/material/Typography";

const BrandInformation = () => {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
    confirmPassword: "",
    address: "",
    city: "",
    state: "",
    zipCode: "",
    phoneNumber: ""
  });

  const handleChange = (field, value) => {
    setFormData({ ...formData, [field]: value });
  };

  const handleSave = () => {
    // Handle save logic here
    console.log("Form Data:", formData);
  };

  return (
    <div className="container mx-auto py-4">
      <Stack direction="column" spacing={4}>
        <Typography variant="h5" gutterBottom>
          Registration Form
        </Typography>
        <Paper variant="outlined">
          <Stack direction="row" spacing={4} p={3}>
            <TextField
              label="Brand Name"
              variant="outlined"
              value={formData.firstName}
              onChange={(e) => handleChange("firstName", e.target.value)}
              style={{width: '300px'}}
            />
            <TextField
              label="Brand Contact Number"
              variant="outlined"
              value={formData.lastName}
              onChange={(e) => handleChange("lastName", e.target.value)}
              style={{width: '300px'}}
            />
            <TextField
              label="Brand Email"
              variant="outlined"
              value={formData.email}
              onChange={(e) => handleChange("email", e.target.value)}
              style={{width: '300px'}}
            />
             <TextField
              label="Location"
              variant="outlined"
              type="Text"
              value={formData.confirmPassword}
              onChange={(e) => handleChange("confirmPassword", e.target.value)}
              style={{width: '200px'}}
            />
          </Stack>
          <Stack direction="row" spacing={4} p={3}>
            <TextField
              label="City"
              variant="outlined"
              type="text"
              value={formData.password}
              onChange={(e) => handleChange("password", e.target.value)}
              style={{width: '300px'}}
            />
            <TextField
              label="State"
              variant="outlined"
              type="text"
              value={formData.confirmPassword}
              onChange={(e) => handleChange("confirmPassword", e.target.value)}
              style={{width: '300px'}}
            />
              <TextField
              label="Country"
              variant="outlined"
              type="Text"
              value={formData.confirmPassword}
              onChange={(e) => handleChange("confirmPassword", e.target.value)}
              style={{width: '300px'}}
            />
             <TextField
              label="Time Zone"
              variant="outlined"
              type="Time Zone"
              value={formData.confirmPassword}
              onChange={(e) => handleChange("confirmPassword", e.target.value)}
              style={{width: '200px'}}
            />
          </Stack>
          <Stack direction="row" spacing={4} p={3}>
            <TextField
              label="Address"
              variant="outlined"
              value={formData.address}
              onChange={(e) => handleChange("address", e.target.value)}
              style={{width: '300px'}}
            />
            <TextField
              label="City"
              variant="outlined"
              value={formData.city}
              onChange={(e) => handleChange("city", e.target.value)}
              style={{width: '300px'}}
            />
            <TextField
              label="State"
              variant="outlined"
              value={formData.state}
              onChange={(e) => handleChange("state", e.target.value)}
              style={{width: '300px'}}
            />
            <TextField
              label="Zip Code"
              variant="outlined"
              value={formData.zipCode}
              onChange={(e) => handleChange("zipCode", e.target.value)}
              style={{width: '200px'}}
            />
          </Stack>
          <Stack direction="row" spacing={4} p={3}>
            <TextField
              label="Phone Number"
              variant="outlined"
              value={formData.phoneNumber}
              onChange={(e) => handleChange("phoneNumber", e.target.value)}
              style={{width: '300px'}}
            />
             <TextField
              label="Phone Number"
              variant="outlined"
              value={formData.phoneNumber}
              onChange={(e) => handleChange("phoneNumber", e.target.value)}
              style={{width: '350px'}}
            />
             <TextField
              label="Phone Number"
              variant="outlined"
              value={formData.phoneNumber}
              onChange={(e) => handleChange("phoneNumber", e.target.value)}
              style={{width: '300px'}}
            />
          </Stack>
          <Stack direction="row" spacing={4} p={3}>
            <TextField
              label="Phone Number"
              variant="outlined"
              value={formData.phoneNumber}
              onChange={(e) => handleChange("phoneNumber", e.target.value)}
              style={{width: '300px'}}
            />
             <TextField
              label="Phone Number"
              variant="outlined"
              value={formData.phoneNumber}
              onChange={(e) => handleChange("phoneNumber", e.target.value)}
              style={{width: '350px'}}
            />
             <TextField
              label="Phone Number"
              variant="outlined"
              value={formData.phoneNumber}
              onChange={(e) => handleChange("phoneNumber", e.target.value)}
              style={{width: '300px'}}
            />
          </Stack>
          <Stack direction="row" spacing={4} p={3}>
            <TextField
              label="Phone Number"
              variant="outlined"
              value={formData.phoneNumber}
              onChange={(e) => handleChange("phoneNumber", e.target.value)}
              style={{width: '300px'}}
            />
             <TextField
              label="Phone Number"
              variant="outlined"
              value={formData.phoneNumber}
              onChange={(e) => handleChange("phoneNumber", e.target.value)}
              style={{width: '350px'}}
            />
             <TextField
              label="Phone Number"
              variant="outlined"
              value={formData.phoneNumber}
              onChange={(e) => handleChange("phoneNumber", e.target.value)}
              style={{width: '300px'}}
            />
          </Stack>
        </Paper>
      </Stack>
      <Button
        variant="contained"
        color="primary"
        startIcon={<FaSave />}
        onClick={handleSave}
        style={{ marginTop: "16px" }}
      >
        Submit
      </Button>
    </div>
  );
};

export default BrandInformation;

