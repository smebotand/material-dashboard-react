/**
=========================================================
* Environmental Lab Data - Lab Orders Layout
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

function LabOrders() {
  return (
    <DashboardLayout>
      <DashboardNavbar />
      <MDBox py={3}>
        <Grid container spacing={3}>
          <Grid item xs={12} md={6} lg={3}>
            <MDBox mb={1.5}>
              <ComplexStatisticsCard
                color="info"
                icon="assignment"
                title="Total Orders"
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
                icon="pending"
                title="Pending"
                count={5}
                percentage={{
                  color: "warning",
                  amount: "Need",
                  label: "review",
                }}
              />
            </MDBox>
          </Grid>
          <Grid item xs={12} md={6} lg={3}>
            <MDBox mb={1.5}>
              <ComplexStatisticsCard
                color="primary"
                icon="play_arrow"
                title="In Progress"
                count={23}
                percentage={{
                  color: "info",
                  amount: "49%",
                  label: "of total",
                }}
              />
            </MDBox>
          </Grid>
          <Grid item xs={12} md={6} lg={3}>
            <MDBox mb={1.5}>
              <ComplexStatisticsCard
                color="success"
                icon="check_circle"
                title="Completed"
                count={19}
                percentage={{
                  color: "success",
                  amount: "40%",
                  label: "of total",
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
                    Lab Orders Management
                  </MDTypography>
                  <MDTypography variant="body2" color="text" mt={2}>
                    This section will manage lab orders within projects including:
                  </MDTypography>
                  <MDBox component="ul" mt={2} ml={2}>
                    <MDBox component="li" mb={1}>
                      <MDTypography variant="body2">Create and manage lab orders</MDTypography>
                    </MDBox>
                    <MDBox component="li" mb={1}>
                      <MDTypography variant="body2">Assign samples to orders</MDTypography>
                    </MDBox>
                    <MDBox component="li" mb={1}>
                      <MDTypography variant="body2">Track order progress and status</MDTypography>
                    </MDBox>
                    <MDBox component="li" mb={1}>
                      <MDTypography variant="body2">
                        Integration with Firestore for data persistence
                      </MDTypography>
                    </MDBox>
                    <MDBox component="li">
                      <MDTypography variant="body2">
                        Cloud function triggered data processing
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

export default LabOrders;
