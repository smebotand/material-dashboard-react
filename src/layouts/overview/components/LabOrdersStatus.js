/**
=========================================================
* Lab Orders Status Component
=========================================================
*/

import Card from "@mui/material/Card";
import Divider from "@mui/material/Divider";
import Icon from "@mui/material/Icon";

// Material Dashboard 2 React components
import MDBox from "components/MDBox";
import MDTypography from "components/MDTypography";
import MDProgress from "components/MDProgress";

function LabOrdersStatus() {
  const orderStatus = [
    {
      name: "Pending Review",
      count: 5,
      total: 47,
      color: "warning",
      icon: "pending",
    },
    {
      name: "In Progress",
      count: 23,
      total: 47,
      color: "info",
      icon: "play_arrow",
    },
    {
      name: "Completed",
      count: 19,
      total: 47,
      color: "success",
      icon: "check_circle",
    },
  ];

  return (
    <Card sx={{ height: "100%" }}>
      <MDBox pt={3} px={3}>
        <MDTypography variant="h6" fontWeight="medium">
          Lab Orders Status
        </MDTypography>
        <MDBox mb={2}>
          <MDTypography variant="button" color="text">
            Current order distribution
          </MDTypography>
        </MDBox>
      </MDBox>

      <MDBox pb={2} px={2}>
        {orderStatus.map((status, index) => (
          <MDBox key={status.name}>
            <MDBox display="flex" alignItems="center" mb={1}>
              <MDBox mr={2}>
                <Icon color={status.color}>{status.icon}</Icon>
              </MDBox>
              <MDBox width="100%">
                <MDBox display="flex" justifyContent="space-between" mb={0.5}>
                  <MDTypography variant="button" fontWeight="medium">
                    {status.name}
                  </MDTypography>
                  <MDBox display="flex" alignItems="center">
                    <MDTypography variant="caption" color={status.color} fontWeight="medium" mr={1}>
                      {status.count}
                    </MDTypography>
                    <MDTypography variant="caption" color="text">
                      / {status.total}
                    </MDTypography>
                  </MDBox>
                </MDBox>
                <MDProgress
                  variant="gradient"
                  value={(status.count / status.total) * 100}
                  color={status.color}
                />
              </MDBox>
            </MDBox>
            {index < orderStatus.length - 1 && <Divider sx={{ my: 2 }} />}
          </MDBox>
        ))}
      </MDBox>
    </Card>
  );
}

export default LabOrdersStatus;
