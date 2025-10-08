/**
=========================================================
* Environmental Lab Data - Project Configuration Layout
=========================================================
*/

// @mui material components
import Grid from "@mui/material/Grid";
import Card from "@mui/material/Card";

// Material Dashboard 2 React components
import MDBox from "components/MDBox";
import MDTypography from "components/MDTypography";

// Material Dashboard 2 React example components
import DashboardLayout from "shared/LayoutContainers/DashboardLayout";
import DashboardNavbar from "shared/Navbars/DashboardNavbar";
import Footer from "shared/Footer";
import ComplexStatisticsCard from "shared/Cards/StatisticsCards/ComplexStatisticsCard";

function ProjectConfiguration() {
  return (
    <DashboardLayout>
      <DashboardNavbar />
      <MDBox py={3}>
        <Grid container spacing={3}>
          <Grid item xs={12} md={6} lg={3}>
            <MDBox mb={1.5}>
              <ComplexStatisticsCard
                color="primary"
                icon="folder"
                title="Total Projects"
                count={24}
                percentage={{
                  color: "success",
                  amount: "+3",
                  label: "this month",
                }}
              />
            </MDBox>
          </Grid>
          <Grid item xs={12} md={6} lg={3}>
            <MDBox mb={1.5}>
              <ComplexStatisticsCard
                color="success"
                icon="play_arrow"
                title="Active Projects"
                count={12}
                percentage={{
                  color: "success",
                  amount: "75%",
                  label: "completion rate",
                }}
              />
            </MDBox>
          </Grid>
          <Grid item xs={12} md={6} lg={3}>
            <MDBox mb={1.5}>
              <ComplexStatisticsCard
                color="warning"
                icon="pending"
                title="Pending Review"
                count={5}
                percentage={{
                  color: "warning",
                  amount: "Need",
                  label: "attention",
                }}
              />
            </MDBox>
          </Grid>
          <Grid item xs={12} md={6} lg={3}>
            <MDBox mb={1.5}>
              <ComplexStatisticsCard
                color="dark"
                icon="check_circle"
                title="Completed"
                count={7}
                percentage={{
                  color: "success",
                  amount: "+2",
                  label: "this week",
                }}
              />
            </MDBox>
          </Grid>
        </Grid>

        <MDBox mt={4.5}>
          <Grid container spacing={3}>
            <Grid item xs={12}>
              <Card>
                <MDBox p={3}>
                  <MDTypography variant="h5" fontWeight="medium">
                    Project Configuration
                  </MDTypography>
                  <MDTypography variant="body2" color="text" mt={2}>
                    This section will manage environmental lab data projects including:
                  </MDTypography>
                  <MDBox component="ul" mt={2} ml={2}>
                    <MDBox component="li" mb={1}>
                      <MDTypography variant="body2">
                        Project creation and configuration for environmental testing
                      </MDTypography>
                    </MDBox>
                    <MDBox component="li" mb={1}>
                      <MDTypography variant="body2">
                        Sample type and analysis method definitions
                      </MDTypography>
                    </MDBox>
                    <MDBox component="li" mb={1}>
                      <MDTypography variant="body2">
                        Lab order management and workflow setup
                      </MDTypography>
                    </MDBox>
                    <MDBox component="li" mb={1}>
                      <MDTypography variant="body2">
                        Quality standards and compliance tracking
                      </MDTypography>
                    </MDBox>
                    <MDBox component="li">
                      <MDTypography variant="body2">
                        Integration with Firestore database and cloud functions
                      </MDTypography>
                    </MDBox>
                  </MDBox>
                </MDBox>
              </Card>
            </Grid>
          </Grid>
        </MDBox>
      </MDBox>
      <Footer />
    </DashboardLayout>
  );
}

export default ProjectConfiguration;
