/**
=========================================================
* Environmental Lab Data - Overview Layout
=========================================================
*/

// @mui material components
import Grid from "@mui/material/Grid";
import Card from "@mui/material/Card";
import Icon from "@mui/material/Icon";

// Material Dashboard 2 React components
import MDBox from "components/MDBox";
import MDTypography from "components/MDTypography";

// Material Dashboard 2 React example components
import DashboardLayout from "shared/LayoutContainers/DashboardLayout";
import DashboardNavbar from "shared/Navbars/DashboardNavbar";
import Footer from "shared/Footer";
import ComplexStatisticsCard from "shared/Cards/StatisticsCards/ComplexStatisticsCard";
import ReportsLineChart from "shared/Charts/LineCharts/ReportsLineChart";

// Overview components
import ProjectsOverview from "./components/ProjectsOverview";
import RecentActivity from "./components/RecentActivity";
import LabOrdersStatus from "./components/LabOrdersStatus";

function Overview() {
  // Sample data for lab activity trends
  const labActivityData = {
    labels: ["Week 1", "Week 2", "Week 3", "Week 4"],
    datasets: [
      {
        label: "Samples Processed",
        color: "info",
        data: [45, 52, 38, 61],
      },
      {
        label: "Analyses Completed",
        color: "success",
        data: [125, 148, 102, 167],
      },
    ],
  };

  return (
    <DashboardLayout>
      <DashboardNavbar />
      <MDBox py={3}>
        {/* Overview Statistics */}
        <Grid container spacing={3}>
          <Grid item xs={12} md={6} lg={3}>
            <MDBox mb={1.5}>
              <ComplexStatisticsCard
                color="dark"
                icon="folder"
                title="Active Projects"
                count={12}
                percentage={{
                  color: "success",
                  amount: "+2",
                  label: "this month",
                }}
              />
            </MDBox>
          </Grid>
          <Grid item xs={12} md={6} lg={3}>
            <MDBox mb={1.5}>
              <ComplexStatisticsCard
                color="info"
                icon="assignment"
                title="Lab Orders"
                count={47}
                percentage={{
                  color: "success",
                  amount: "+8",
                  label: "this week",
                }}
              />
            </MDBox>
          </Grid>
          <Grid item xs={12} md={6} lg={3}>
            <MDBox mb={1.5}>
              <ComplexStatisticsCard
                color="warning"
                icon="science"
                title="Pending Samples"
                count={23}
                percentage={{
                  color: "warning",
                  amount: "+5",
                  label: "since yesterday",
                }}
              />
            </MDBox>
          </Grid>
          <Grid item xs={12} md={6} lg={3}>
            <MDBox mb={1.5}>
              <ComplexStatisticsCard
                color="success"
                icon="analytics"
                title="Completed Analyses"
                count={156}
                percentage={{
                  color: "success",
                  amount: "+12%",
                  label: "this week",
                }}
              />
            </MDBox>
          </Grid>
        </Grid>

        {/* Charts and Overview Sections */}
        <MDBox mt={4.5}>
          <Grid container spacing={3}>
            {/* Lab Activity Chart */}
            <Grid item xs={12} md={6} lg={8}>
              <MDBox mb={3}>
                <ReportsLineChart
                  color="info"
                  title="Lab Activity Trends"
                  description="Weekly samples processed and analyses completed"
                  date="updated 1 hour ago"
                  chart={labActivityData}
                />
              </MDBox>
            </Grid>

            {/* Lab Orders Status */}
            <Grid item xs={12} md={6} lg={4}>
              <MDBox mb={3}>
                <LabOrdersStatus />
              </MDBox>
            </Grid>
          </Grid>
        </MDBox>

        {/* Projects and Activity Overview */}
        <MDBox mt={4.5}>
          <Grid container spacing={3}>
            {/* Projects Overview */}
            <Grid item xs={12} lg={8}>
              <ProjectsOverview />
            </Grid>

            {/* Recent Activity */}
            <Grid item xs={12} lg={4}>
              <RecentActivity />
            </Grid>
          </Grid>
        </MDBox>

        {/* Quick Actions */}
        <MDBox mt={4.5}>
          <Grid container spacing={3}>
            <Grid item xs={12}>
              <Card>
                <MDBox p={3}>
                  <MDTypography variant="h6" fontWeight="medium" mb={2}>
                    Quick Actions
                  </MDTypography>
                  <Grid container spacing={2}>
                    <Grid item xs={12} sm={6} md={3}>
                      <MDBox
                        display="flex"
                        flexDirection="column"
                        alignItems="center"
                        p={2}
                        sx={{
                          cursor: "pointer",
                          borderRadius: "8px",
                          "&:hover": {
                            backgroundColor: "grey.100",
                          },
                        }}
                      >
                        <Icon fontSize="large" color="primary">
                          add_circle
                        </Icon>
                        <MDTypography variant="button" fontWeight="medium" mt={1}>
                          New Project
                        </MDTypography>
                      </MDBox>
                    </Grid>
                    <Grid item xs={12} sm={6} md={3}>
                      <MDBox
                        display="flex"
                        flexDirection="column"
                        alignItems="center"
                        p={2}
                        sx={{
                          cursor: "pointer",
                          borderRadius: "8px",
                          "&:hover": {
                            backgroundColor: "grey.100",
                          },
                        }}
                      >
                        <Icon fontSize="large" color="info">
                          assignment_add
                        </Icon>
                        <MDTypography variant="button" fontWeight="medium" mt={1}>
                          Create Lab Order
                        </MDTypography>
                      </MDBox>
                    </Grid>
                    <Grid item xs={12} sm={6} md={3}>
                      <MDBox
                        display="flex"
                        flexDirection="column"
                        alignItems="center"
                        p={2}
                        sx={{
                          cursor: "pointer",
                          borderRadius: "8px",
                          "&:hover": {
                            backgroundColor: "grey.100",
                          },
                        }}
                      >
                        <Icon fontSize="large" color="warning">
                          upload
                        </Icon>
                        <MDTypography variant="button" fontWeight="medium" mt={1}>
                          Upload Samples
                        </MDTypography>
                      </MDBox>
                    </Grid>
                    <Grid item xs={12} sm={6} md={3}>
                      <MDBox
                        display="flex"
                        flexDirection="column"
                        alignItems="center"
                        p={2}
                        sx={{
                          cursor: "pointer",
                          borderRadius: "8px",
                          "&:hover": {
                            backgroundColor: "grey.100",
                          },
                        }}
                      >
                        <Icon fontSize="large" color="success">
                          assessment
                        </Icon>
                        <MDTypography variant="button" fontWeight="medium" mt={1}>
                          Generate Report
                        </MDTypography>
                      </MDBox>
                    </Grid>
                  </Grid>
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

export default Overview;
