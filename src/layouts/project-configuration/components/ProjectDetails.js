/**
=========================================================
* Project Details Component - Shows detailed project information
=========================================================
*/

import { useState } from "react";
import Card from "@mui/material/Card";
import TextField from "@mui/material/TextField";
import MenuItem from "@mui/material/MenuItem";
import Divider from "@mui/material/Divider";
import Icon from "@mui/material/Icon";

// Material Dashboard 2 React components
import MDBox from "components/MDBox";
import MDTypography from "components/MDTypography";
import MDButton from "components/MDButton";

function ProjectDetails() {
  const [selectedProject, setSelectedProject] = useState({
    id: "proj_001",
    name: "Water Quality Assessment - Lake Superior",
    client: "Environmental Protection Agency",
    description:
      "Comprehensive water quality testing for Lake Superior including chemical, biological, and physical parameters.",
    status: "active",
    startDate: "2024-10-01",
    estimatedCompletion: "2024-12-15",
    projectManager: "Dr. Sarah Johnson",
    budget: 125000,
    sampleTypes: ["Water", "Sediment", "Biological"],
    analysisTypes: ["Chemical", "Microbiological", "Physical"],
    qualityStandards: "EPA Method 200.8, ASTM D6919",
  });

  const [isEditing, setIsEditing] = useState(false);

  const handleEdit = () => {
    setIsEditing(!isEditing);
  };

  const handleSave = () => {
    // Here you would save to Firestore
    console.log("Saving project:", selectedProject);
    setIsEditing(false);
  };

  return (
    <Card sx={{ height: "fit-content" }}>
      <MDBox p={3}>
        <MDBox display="flex" justifyContent="space-between" alignItems="center" mb={2}>
          <MDTypography variant="h6" fontWeight="medium">
            Project Details
          </MDTypography>
          <MDButton
            variant={isEditing ? "gradient" : "outlined"}
            color={isEditing ? "success" : "primary"}
            size="small"
            onClick={isEditing ? handleSave : handleEdit}
          >
            <Icon fontSize="small">{isEditing ? "save" : "edit"}</Icon>
            &nbsp;{isEditing ? "Save" : "Edit"}
          </MDButton>
        </MDBox>

        <MDBox mb={2}>
          <MDTypography variant="caption" color="text" fontWeight="bold">
            Project Name
          </MDTypography>
          {isEditing ? (
            <TextField
              fullWidth
              size="small"
              value={selectedProject.name}
              onChange={(e) => setSelectedProject({ ...selectedProject, name: e.target.value })}
              sx={{ mt: 1 }}
            />
          ) : (
            <MDTypography variant="button" display="block" mt={0.5}>
              {selectedProject.name}
            </MDTypography>
          )}
        </MDBox>

        <MDBox mb={2}>
          <MDTypography variant="caption" color="text" fontWeight="bold">
            Client
          </MDTypography>
          {isEditing ? (
            <TextField
              fullWidth
              size="small"
              value={selectedProject.client}
              onChange={(e) => setSelectedProject({ ...selectedProject, client: e.target.value })}
              sx={{ mt: 1 }}
            />
          ) : (
            <MDTypography variant="button" display="block" mt={0.5}>
              {selectedProject.client}
            </MDTypography>
          )}
        </MDBox>

        <MDBox mb={2}>
          <MDTypography variant="caption" color="text" fontWeight="bold">
            Status
          </MDTypography>
          {isEditing ? (
            <TextField
              fullWidth
              select
              size="small"
              value={selectedProject.status}
              onChange={(e) => setSelectedProject({ ...selectedProject, status: e.target.value })}
              sx={{ mt: 1 }}
            >
              <MenuItem value="pending">Pending</MenuItem>
              <MenuItem value="active">Active</MenuItem>
              <MenuItem value="completed">Completed</MenuItem>
              <MenuItem value="on_hold">On Hold</MenuItem>
            </TextField>
          ) : (
            <MDTypography variant="button" display="block" mt={0.5} textTransform="capitalize">
              {selectedProject.status.replace("_", " ")}
            </MDTypography>
          )}
        </MDBox>

        <MDBox mb={2}>
          <MDTypography variant="caption" color="text" fontWeight="bold">
            Description
          </MDTypography>
          {isEditing ? (
            <TextField
              fullWidth
              multiline
              rows={3}
              size="small"
              value={selectedProject.description}
              onChange={(e) =>
                setSelectedProject({ ...selectedProject, description: e.target.value })
              }
              sx={{ mt: 1 }}
            />
          ) : (
            <MDTypography variant="caption" display="block" mt={0.5}>
              {selectedProject.description}
            </MDTypography>
          )}
        </MDBox>

        <Divider sx={{ my: 2 }} />

        <MDBox mb={2}>
          <MDTypography variant="caption" color="text" fontWeight="bold">
            Project Manager
          </MDTypography>
          <MDTypography variant="button" display="block" mt={0.5}>
            {selectedProject.projectManager}
          </MDTypography>
        </MDBox>

        <MDBox mb={2}>
          <MDTypography variant="caption" color="text" fontWeight="bold">
            Start Date
          </MDTypography>
          <MDTypography variant="button" display="block" mt={0.5}>
            {new Date(selectedProject.startDate).toLocaleDateString()}
          </MDTypography>
        </MDBox>

        <MDBox mb={2}>
          <MDTypography variant="caption" color="text" fontWeight="bold">
            Estimated Completion
          </MDTypography>
          <MDTypography variant="button" display="block" mt={0.5}>
            {new Date(selectedProject.estimatedCompletion).toLocaleDateString()}
          </MDTypography>
        </MDBox>

        <MDBox mb={2}>
          <MDTypography variant="caption" color="text" fontWeight="bold">
            Budget
          </MDTypography>
          <MDTypography variant="button" display="block" mt={0.5}>
            ${selectedProject.budget.toLocaleString()}
          </MDTypography>
        </MDBox>

        <Divider sx={{ my: 2 }} />

        <MDBox mb={2}>
          <MDTypography variant="caption" color="text" fontWeight="bold">
            Sample Types
          </MDTypography>
          <MDBox mt={0.5}>
            {selectedProject.sampleTypes.map((type, index) => (
              <MDTypography key={index} variant="caption" display="block" color="text">
                • {type}
              </MDTypography>
            ))}
          </MDBox>
        </MDBox>

        <MDBox mb={2}>
          <MDTypography variant="caption" color="text" fontWeight="bold">
            Analysis Types
          </MDTypography>
          <MDBox mt={0.5}>
            {selectedProject.analysisTypes.map((type, index) => (
              <MDTypography key={index} variant="caption" display="block" color="text">
                • {type}
              </MDTypography>
            ))}
          </MDBox>
        </MDBox>

        <MDBox mb={2}>
          <MDTypography variant="caption" color="text" fontWeight="bold">
            Quality Standards
          </MDTypography>
          <MDTypography variant="caption" display="block" mt={0.5}>
            {selectedProject.qualityStandards}
          </MDTypography>
        </MDBox>
      </MDBox>
    </Card>
  );
}

export default ProjectDetails;
