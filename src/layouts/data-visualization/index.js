/**
=========================================================
* Environmental Lab Data - Data Visualization Layout
=========================================================
*/

// @mui material components
import Grid from "@mui/material/Grid";
import Card from "@mui/material/Card";

// Material Dashboard 2 React components
import MDBox from "components/MDBox";
import MDTypography from "components/MDTypography";

// Material Dashboard 2 React example components
import DashboardLayout from "examples/LayoutContainers/DashboardLayout";
import DashboardNavbar from "examples/Navbars/DashboardNavbar";
import Footer from "examples/Footer";
import ComplexStatisticsCard from "examples/Cards/StatisticsCards/ComplexStatisticsCard";

function DataVisualization() {
  return (
    <DashboardLayout>
      <DashboardNavbar />
      <MDBox py={3}>
        <Grid container spacing={3}>
          <Grid item xs={12} md={6} lg={3}>
            <MDBox mb={1.5}>
              <ComplexStatisticsCard
                color="info"
                icon="bar_chart"
                title="Active Charts"
                count={12}
                percentage={{
                  color: "success",
                  amount: "+2",
                  label: "this week",
                }}
              />
            </MDBox>
          </Grid>
          <Grid item xs={12} md={6} lg={3}>
            <MDBox mb={1.5}>
              <ComplexStatisticsCard
                color="primary"
                icon="dashboard"
                title="Dashboards"
                count={5}
                percentage={{
                  color: "info",
                  amount: "Custom",
                  label: "views",
                }}
              />
            </MDBox>
          </Grid>
          <Grid item xs={12} md={6} lg={3}>
            <MDBox mb={1.5}>
              <ComplexStatisticsCard
                color="success"
                icon="trending_up"
                title="Trend Analyses"
                count={8}
                percentage={{
                  color: "success",
                  amount: "Real-time",
                  label: "updates",
                }}
              />
            </MDBox>
          </Grid>
          <Grid item xs={12} md={6} lg={3}>
            <MDBox mb={1.5}>
              <ComplexStatisticsCard
                color="warning"
                icon="share"
                title="Shared Reports"
                count={15}
                percentage={{
                  color: "warning",
                  amount: "Public",
                  label: "access",
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
                    Data Visualization & Analytics
                  </MDTypography>
                  <MDTypography variant="body2" color="text" mt={2}>
                    This section will provide comprehensive data visualization including:
                  </MDTypography>
                  <MDBox component="ul" mt={2} ml={2}>
                    <MDBox component="li" mb={1}>
                      <MDTypography variant="body2">
                        Interactive charts and graphs for analysis results
                      </MDTypography>
                    </MDBox>
                    <MDBox component="li" mb={1}>
                      <MDTypography variant="body2">
                        Trend analysis and statistical reporting
                      </MDTypography>
                    </MDBox>
                    <MDBox component="li" mb={1}>
                      <MDTypography variant="body2">
                        Geospatial mapping of sample locations
                      </MDTypography>
                    </MDBox>
                    <MDBox component="li" mb={1}>
                      <MDTypography variant="body2">
                        Real-time data updates from Firestore
                      </MDTypography>
                    </MDBox>
                    <MDBox component="li">
                      <MDTypography variant="body2">
                        Export capabilities for presentations and reports
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

export default DataVisualization;
