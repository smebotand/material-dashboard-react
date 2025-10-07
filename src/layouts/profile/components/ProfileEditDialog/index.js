// Profile Edit Dialog Component for EcoData Hub
import React, { useState, useEffect } from "react";
import PropTypes from "prop-types";

// @mui material components
import Dialog from "@mui/material/Dialog";
import DialogTitle from "@mui/material/DialogTitle";
import DialogContent from "@mui/material/DialogContent";
import DialogActions from "@mui/material/DialogActions";
import TextField from "@mui/material/TextField";
import Grid from "@mui/material/Grid";

// Material Dashboard 2 React components
import MDBox from "components/MDBox";
import MDButton from "components/MDButton";
import MDTypography from "components/MDTypography";

// Authentication context
import { useAuth } from "contexts/AuthContext";

function ProfileEditDialog({ open, onClose, onSave }) {
  const { userProfile, updateUserProfile } = useAuth();
  const [loading, setLoading] = useState(false);
  const [formData, setFormData] = useState({
    company: "",
    jobTitle: "",
    phone: "",
    location: "",
    department: "",
    linkedIn: "",
    facebook: "",
    twitter: "",
    instagram: "",
    researchGate: "",
    bio: "",
  });

  // Update form data when dialog opens or userProfile changes
  useEffect(() => {
    if (open && userProfile) {
      console.log("ProfileEditDialog - useEffect triggered");
      console.log("userProfile:", userProfile);

      const newFormData = {
        company: userProfile?.company || "",
        jobTitle: userProfile?.jobTitle || "",
        phone: userProfile?.phone || "",
        location: userProfile?.location || "",
        department: userProfile?.department || "",
        linkedIn: userProfile?.linkedIn || "",
        facebook: userProfile?.facebook || "",
        twitter: userProfile?.twitter || "",
        instagram: userProfile?.instagram || "",
        researchGate: userProfile?.researchGate || "",
        bio: userProfile?.bio || "",
      };

      console.log("Setting formData to:", newFormData);
      setFormData(newFormData);
    }
  }, [open, userProfile]);

  const handleInputChange = (field) => (event) => {
    setFormData({
      ...formData,
      [field]: event.target.value,
    });
  };

  const handleSave = async () => {
    try {
      setLoading(true);
      console.log("ProfileEditDialog - Saving formData:", formData);
      await updateUserProfile(formData);
      console.log("ProfileEditDialog - Save completed successfully");
      onSave && onSave();
      onClose();
    } catch (error) {
      console.error("Error updating profile:", error);
      alert("Failed to update profile. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  const handleCancel = () => {
    // Reset form data to original values
    setFormData({
      company: userProfile?.company || "",
      jobTitle: userProfile?.jobTitle || "",
      phone: userProfile?.phone || "",
      location: userProfile?.location || "",
      department: userProfile?.department || "",
      linkedIn: userProfile?.linkedIn || "",
      facebook: userProfile?.facebook || "",
      twitter: userProfile?.twitter || "",
      instagram: userProfile?.instagram || "",
      researchGate: userProfile?.researchGate || "",
      bio: userProfile?.bio || "",
    });
    onClose();
  };

  return (
    <Dialog open={open} onClose={handleCancel} maxWidth="md" fullWidth>
      <DialogTitle>
        <MDTypography variant="h5" fontWeight="medium">
          Edit Profile Information
        </MDTypography>
      </DialogTitle>
      <DialogContent>
        <MDBox pt={2}>
          <Grid container spacing={3}>
            <Grid item xs={12} md={6}>
              <TextField
                fullWidth
                label="Company"
                value={formData.company}
                onChange={handleInputChange("company")}
                variant="outlined"
                placeholder="e.g., EcoTech Solutions"
              />
            </Grid>
            <Grid item xs={12} md={6}>
              <TextField
                fullWidth
                label="Job Title"
                value={formData.jobTitle}
                onChange={handleInputChange("jobTitle")}
                variant="outlined"
                placeholder="e.g., Environmental Data Specialist"
              />
            </Grid>
            <Grid item xs={12} md={6}>
              <TextField
                fullWidth
                label="Phone"
                value={formData.phone}
                onChange={handleInputChange("phone")}
                variant="outlined"
                placeholder="e.g., +1 (555) 123-4567"
              />
            </Grid>
            <Grid item xs={12} md={6}>
              <TextField
                fullWidth
                label="Location"
                value={formData.location}
                onChange={handleInputChange("location")}
                variant="outlined"
                placeholder="e.g., San Francisco, CA"
              />
            </Grid>
            <Grid item xs={12} md={6}>
              <TextField
                fullWidth
                label="Department"
                value={formData.department}
                onChange={handleInputChange("department")}
                variant="outlined"
                placeholder="e.g., Environmental Research"
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                fullWidth
                label="Bio"
                value={formData.bio}
                onChange={handleInputChange("bio")}
                variant="outlined"
                multiline
                rows={3}
                placeholder="Describe your expertise in environmental data management, research background, and professional achievements..."
              />
            </Grid>
            <Grid item xs={12} md={6}>
              <TextField
                fullWidth
                label="LinkedIn Profile"
                value={formData.linkedIn}
                onChange={handleInputChange("linkedIn")}
                variant="outlined"
                placeholder="e.g., linkedin.com/in/yourprofile or just yourprofile"
              />
            </Grid>
            <Grid item xs={12} md={6}>
              <TextField
                fullWidth
                label="Facebook Profile"
                value={formData.facebook}
                onChange={handleInputChange("facebook")}
                variant="outlined"
                placeholder="e.g., facebook.com/yourprofile or just yourprofile"
              />
            </Grid>
            <Grid item xs={12} md={6}>
              <TextField
                fullWidth
                label="Twitter Profile"
                value={formData.twitter}
                onChange={handleInputChange("twitter")}
                variant="outlined"
                placeholder="e.g., twitter.com/yourhandle or just yourhandle"
              />
            </Grid>
            <Grid item xs={12} md={6}>
              <TextField
                fullWidth
                label="Instagram Profile"
                value={formData.instagram}
                onChange={handleInputChange("instagram")}
                variant="outlined"
                placeholder="e.g., instagram.com/yourhandle or just yourhandle"
              />
            </Grid>
            <Grid item xs={12} md={6}>
              <TextField
                fullWidth
                label="ResearchGate Profile"
                value={formData.researchGate}
                onChange={handleInputChange("researchGate")}
                variant="outlined"
                placeholder="e.g., researchgate.net/profile/Your_Name or just Your_Name"
              />
            </Grid>
          </Grid>
        </MDBox>
      </DialogContent>
      <DialogActions>
        <MDBox p={2} display="flex" justifyContent="flex-end" gap={2}>
          <MDButton variant="outlined" color="secondary" onClick={handleCancel}>
            Cancel
          </MDButton>
          <MDButton variant="gradient" color="info" onClick={handleSave} disabled={loading}>
            {loading ? "Saving..." : "Save Changes"}
          </MDButton>
        </MDBox>
      </DialogActions>
    </Dialog>
  );
}

ProfileEditDialog.propTypes = {
  open: PropTypes.bool.isRequired,
  onClose: PropTypes.func.isRequired,
  onSave: PropTypes.func,
};

export default ProfileEditDialog;
