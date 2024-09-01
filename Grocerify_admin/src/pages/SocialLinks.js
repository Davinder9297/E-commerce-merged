import React, { useState } from "react";
import { FaSave } from "react-icons/fa";
import Button from "@mui/material/Button";
import Stack from "@mui/material/Stack";
import TextField from "@mui/material/TextField";
import Paper from "@mui/material/Paper";
import Typography from "@mui/material/Typography";

const SocialLinks = () => {
  const [socialLinks, setSocialLinks] = useState({
    instagram: "",
    facebook: "",
    twitter: "",
    notes: ""
  });

  const handleChange = (field, value) => {
    setSocialLinks({ ...socialLinks, [field]: value });
  };

  const handleSave = () => {
    // Handle save logic here
    console.log("Saving social links:", socialLinks);
  };

  return (
    <div className="container mx-auto py-4">
      <Stack direction="column" spacing={4}>
        <Typography variant="h5" gutterBottom>
          Social Links
        </Typography>
        <Paper variant="outlined">
          <Stack direction="row" spacing={6} p={3}>
            <TextField
              label="Instagram"
              variant="outlined"
              value={socialLinks.instagram}
              onChange={(e) => handleChange("instagram", e.target.value)}
              style={{width: '300px'}}
            />
            <TextField
              label="Facebook"
              variant="outlined"
              value={socialLinks.facebook}
              onChange={(e) => handleChange("facebook", e.target.value)}
              style={{width: '500px'}}
            />
            <TextField
              label="Twitter"
              variant="outlined"
              value={socialLinks.twitter}
              onChange={(e) => handleChange("twitter", e.target.value)}
              style={{width: '300px'}}
            />
          </Stack>
          <Stack direction="row" spacing={6} p={3}>
            <TextField
              label="Linkdin"
              variant="outlined"
              value={socialLinks.instagram}
              onChange={(e) => handleChange("instagram", e.target.value)}
              style={{width: '400px'}}
            />
            <TextField
              label="Noukri"
              variant="outlined"
              value={socialLinks.facebook}
              onChange={(e) => handleChange("facebook", e.target.value)}
              style={{width: '400px'}}
            />
          </Stack>
          
          <Stack direction="row" spacing={2} p={2}>
            <TextField
              label="Notes"
              variant="outlined"
              multiline
              rows={4}
              fullWidth
              value={socialLinks.notes}
              onChange={(e) => handleChange("notes", e.target.value)}
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
        Save
      </Button>
    </div>
  );
};

export default SocialLinks;
