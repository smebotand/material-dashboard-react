/**
=========================================================
* Projects Overview Component
=========================================================
*/

import { useState } from "react";
import Card from "@mui/material/Card";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import LinearProgress from "@mui/material/LinearProgress";

// Material Dashboard 2 React components
import MDBox from "components/MDBox";
import MDTypography from "components/MDTypography";
import MDBadge from "components/MDBadge";

function ProjectsOverview() {
  const [projects] = useState([
    {
      name: "Water Quality Assessment",
      client: "EPA",
      progress: 75,
      status: "active",
      dueDate: "Dec 15, 2024",
    },
    {
      name: "Soil Contamination Study",
      client: "ABC Manufacturing",
      progress: 45,
      status: "active",
      dueDate: "Nov 30, 2024",
    },
    {
      name: "Air Quality Monitoring",
      client: "City of Springfield",
      progress: 90,
      status: "active",
      dueDate: "Oct 25, 2024",
    },
    {
      name: "Groundwater Analysis",
      client: "Metro Water Authority",
      progress: 100,
      status: "completed",
      dueDate: "Oct 15, 2024",
    },
  ]);

  return (
    <Card sx={{ height: "100%" }}>
      <MDBox pt={3} px={3}>
        <MDTypography variant="h6" fontWeight="medium">
          Active Projects Overview
        </MDTypography>
        <MDBox mb={2}>
          <MDTypography variant="button" color="text">
            Current project status and progress
          </MDTypography>
        </MDBox>
      </MDBox>

      <MDBox pb={2} px={2}>
        <TableContainer>
          <Table>
            <TableHead>
              <TableRow>
                <TableCell>Project</TableCell>
                <TableCell>Progress</TableCell>
                <TableCell>Status</TableCell>
                <TableCell>Due Date</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {projects.map((project, index) => (
                <TableRow key={index}>
                  <TableCell>
                    <MDBox>
                      <MDTypography variant="button" fontWeight="medium">
                        {project.name}
                      </MDTypography>
                      <MDTypography variant="caption" color="text" display="block">
                        {project.client}
                      </MDTypography>
                    </MDBox>
                  </TableCell>
                  <TableCell>
                    <MDBox display="flex" alignItems="center">
                      <MDBox width="100%" mr={1}>
                        <LinearProgress
                          variant="determinate"
                          value={project.progress}
                          color={project.progress === 100 ? "success" : "info"}
                        />
                      </MDBox>
                      <MDTypography variant="caption">{project.progress}%</MDTypography>
                    </MDBox>
                  </TableCell>
                  <TableCell>
                    <MDBadge
                      variant="gradient"
                      badgeContent={project.status}
                      color={project.status === "completed" ? "success" : "info"}
                      size="sm"
                    />
                  </TableCell>
                  <TableCell>
                    <MDTypography variant="caption" color="text">
                      {project.dueDate}
                    </MDTypography>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      </MDBox>
    </Card>
  );
}

export default ProjectsOverview;
