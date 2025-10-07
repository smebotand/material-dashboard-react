/**
=========================================================
* Recent Activity Component
=========================================================
*/

import Card from "@mui/material/Card";
import Divider from "@mui/material/Divider";
import Icon from "@mui/material/Icon";

// Material Dashboard 2 React components
import MDBox from "components/MDBox";
import MDTypography from "components/MDTypography";

function RecentActivity() {
  const activities = [
    {
      time: "2 hours ago",
      event: "New lab order created",
      details: "Order #LO-2024-047",
      color: "info",
      icon: "assignment_add",
    },
    {
      time: "4 hours ago",
      event: "Sample analysis completed",
      details: "Water sample WS-001",
      color: "success",
      icon: "check_circle",
    },
    {
      time: "6 hours ago",
      event: "Project status updated",
      details: "Soil Contamination Study",
      color: "warning",
      icon: "update",
    },
    {
      time: "1 day ago",
      event: "New project created",
      details: "Air Quality Monitoring",
      color: "primary",
      icon: "add_circle",
    },
    {
      time: "2 days ago",
      event: "Report generated",
      details: "Monthly compliance report",
      color: "dark",
      icon: "assessment",
    },
  ];

  return (
    <Card sx={{ height: "100%" }}>
      <MDBox pt={3} px={3}>
        <MDTypography variant="h6" fontWeight="medium">
          Recent Activity
        </MDTypography>
        <MDBox mb={2}>
          <MDTypography variant="button" color="text">
            Latest system activity
          </MDTypography>
        </MDBox>
      </MDBox>

      <MDBox pb={2} px={2}>
        {activities.map((activity, index) => (
          <MDBox key={index}>
            <MDBox display="flex" alignItems="center" py={1}>
              <MDBox mr={2}>
                <Icon color={activity.color} fontSize="small">
                  {activity.icon}
                </Icon>
              </MDBox>
              <MDBox width="100%">
                <MDTypography variant="button" fontWeight="medium" color="text">
                  {activity.event}
                </MDTypography>
                <MDBox display="flex" justifyContent="space-between" mt={0.5}>
                  <MDTypography variant="caption" color="text">
                    {activity.details}
                  </MDTypography>
                  <MDTypography variant="caption" color="text">
                    {activity.time}
                  </MDTypography>
                </MDBox>
              </MDBox>
            </MDBox>
            {index < activities.length - 1 && <Divider />}
          </MDBox>
        ))}
      </MDBox>
    </Card>
  );
}

export default RecentActivity;
