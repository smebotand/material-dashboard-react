/**
=========================================================
* Project List Component - Displays list of projects with actions
=========================================================
*/

import { useState } from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import IconButton from "@mui/material/IconButton";
import Icon from "@mui/material/Icon";
import Chip from "@mui/material/Chip";

// Material Dashboard 2 React components
import MDBox from "components/MDBox";
import MDTypography from "components/MDTypography";
import MDBadge from "components/MDBadge";

function ProjectList() {
  // Sample project data - this would come from Firestore
  const [projects] = useState([
    {
      id: "proj_001",
      name: "Water Quality Assessment - Lake Superior",
      client: "Environmental Protection Agency",
      status: "active",
      createdDate: "2024-10-01",
      samplesCount: 45,
      ordersCount: 8,
    },
    {
      id: "proj_002",
      name: "Soil Contamination Study - Industrial Site",
      client: "ABC Manufacturing Corp",
      status: "pending",
      createdDate: "2024-10-03",
      samplesCount: 23,
      ordersCount: 3,
    },
    {
      id: "proj_003",
      name: "Air Quality Monitoring - Urban Area",
      client: "City of Springfield",
      status: "active",
      createdDate: "2024-09-28",
      samplesCount: 67,
      ordersCount: 12,
    },
    {
      id: "proj_004",
      name: "Groundwater Analysis - Residential Area",
      client: "Metro Water Authority",
      status: "completed",
      createdDate: "2024-09-15",
      samplesCount: 34,
      ordersCount: 6,
    },
    {
      id: "proj_005",
      name: "Food Safety Testing - Restaurant Chain",
      client: "Fresh Foods Inc",
      status: "active",
      createdDate: "2024-10-05",
      samplesCount: 12,
      ordersCount: 2,
    },
  ]);

  const getStatusColor = (status) => {
    switch (status) {
      case "active":
        return "success";
      case "pending":
        return "warning";
      case "completed":
        return "info";
      default:
        return "secondary";
    }
  };

  const getStatusText = (status) => {
    switch (status) {
      case "active":
        return "Active";
      case "pending":
        return "Pending";
      case "completed":
        return "Completed";
      default:
        return "Unknown";
    }
  };

  return (
    <TableContainer>
      <Table>
        <TableHead>
          <TableRow>
            <TableCell>
              <MDTypography variant="caption" fontWeight="bold" color="secondary">
                Project
              </MDTypography>
            </TableCell>
            <TableCell>
              <MDTypography variant="caption" fontWeight="bold" color="secondary">
                Client
              </MDTypography>
            </TableCell>
            <TableCell>
              <MDTypography variant="caption" fontWeight="bold" color="secondary">
                Status
              </MDTypography>
            </TableCell>
            <TableCell>
              <MDTypography variant="caption" fontWeight="bold" color="secondary">
                Samples/Orders
              </MDTypography>
            </TableCell>
            <TableCell>
              <MDTypography variant="caption" fontWeight="bold" color="secondary">
                Created
              </MDTypography>
            </TableCell>
            <TableCell>
              <MDTypography variant="caption" fontWeight="bold" color="secondary">
                Actions
              </MDTypography>
            </TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {projects.map((project) => (
            <TableRow key={project.id}>
              <TableCell>
                <MDBox>
                  <MDTypography variant="button" fontWeight="medium">
                    {project.name}
                  </MDTypography>
                  <MDTypography variant="caption" color="text" display="block">
                    ID: {project.id}
                  </MDTypography>
                </MDBox>
              </TableCell>
              <TableCell>
                <MDTypography variant="caption" color="text">
                  {project.client}
                </MDTypography>
              </TableCell>
              <TableCell>
                <MDBadge
                  variant="gradient"
                  badgeContent={getStatusText(project.status)}
                  color={getStatusColor(project.status)}
                  size="sm"
                />
              </TableCell>
              <TableCell>
                <MDBox display="flex" flexDirection="column">
                  <MDTypography variant="caption" color="text">
                    {project.samplesCount} samples
                  </MDTypography>
                  <MDTypography variant="caption" color="text">
                    {project.ordersCount} orders
                  </MDTypography>
                </MDBox>
              </TableCell>
              <TableCell>
                <MDTypography variant="caption" color="text">
                  {new Date(project.createdDate).toLocaleDateString()}
                </MDTypography>
              </TableCell>
              <TableCell>
                <MDBox display="flex">
                  <IconButton size="small" color="info">
                    <Icon fontSize="small">edit</Icon>
                  </IconButton>
                  <IconButton size="small" color="primary">
                    <Icon fontSize="small">visibility</Icon>
                  </IconButton>
                  <IconButton size="small" color="error">
                    <Icon fontSize="small">delete</Icon>
                  </IconButton>
                </MDBox>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}

export default ProjectList;
