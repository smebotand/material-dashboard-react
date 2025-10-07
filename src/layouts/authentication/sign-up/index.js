/**
=========================================================
* Material Dashboard 2 React - v2.2.0
=========================================================

* Product Page: https://www.creative-tim.com/product/material-dashboard-react
* Copyright 2023 Creative Tim (https://www.creative-tim.com)

Coded by www.creative-tim.com

 =========================================================

* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.
*/

import { useEffect } from "react";

// react-router-dom components
import { Link, useNavigate } from "react-router-dom";

// @mui material components
import Card from "@mui/material/Card";
import Icon from "@mui/material/Icon";

// Material Dashboard 2 React components
import MDBox from "components/MDBox";
import MDTypography from "components/MDTypography";
import MDButton from "components/MDButton";

// Authentication layout components
import CoverLayout from "layouts/authentication/components/CoverLayout";

// Images
import bgImage from "assets/images/bg-sign-up-cover.jpeg";

function Cover() {
  const navigate = useNavigate();

  useEffect(() => {
    // Auto-redirect to sign-in after 3 seconds
    const timer = setTimeout(() => {
      navigate("/authentication/sign-in");
    }, 3000);

    return () => clearTimeout(timer);
  }, [navigate]);

  const handleRedirectToSignIn = () => {
    navigate("/authentication/sign-in");
  };

  return (
    <CoverLayout image={bgImage}>
      <Card>
        <MDBox
          variant="gradient"
          bgColor="info"
          borderRadius="lg"
          coloredShadow="success"
          mx={2}
          mt={-3}
          p={3}
          mb={1}
          textAlign="center"
        >
          <MDTypography variant="h4" fontWeight="medium" color="white" mt={1}>
            Join EcoData Hub
          </MDTypography>
          <MDTypography display="block" variant="button" color="white" my={1}>
            Sign up is handled through Google Authentication
          </MDTypography>
        </MDBox>
        <MDBox pt={4} pb={3} px={3} textAlign="center">
          <MDBox mb={3}>
            <Icon
              sx={{
                fontSize: "4rem !important",
                color: "info.main",
                mb: 2,
              }}
            >
              google
            </Icon>
            <MDTypography variant="h6" color="text" mb={2}>
              We use Google Authentication for secure and easy access
            </MDTypography>
            <MDTypography variant="body2" color="text" mb={3}>
              When you sign in with Google for the first time, your account will be automatically
              created. No separate registration needed!
            </MDTypography>
          </MDBox>

          <MDBox mt={4} mb={1}>
            <MDButton variant="gradient" color="info" fullWidth onClick={handleRedirectToSignIn}>
              Continue to Google Sign In
            </MDButton>
          </MDBox>

          <MDBox mt={3} mb={1} textAlign="center">
            <MDTypography variant="button" color="text">
              Already have an account?{" "}
              <MDTypography
                component={Link}
                to="/authentication/sign-in"
                variant="button"
                color="info"
                fontWeight="medium"
                textGradient
              >
                Sign In
              </MDTypography>
            </MDTypography>
          </MDBox>

          <MDBox mt={2}>
            <MDTypography variant="caption" color="text">
              Redirecting to sign in page in 3 seconds...
            </MDTypography>
          </MDBox>
        </MDBox>
      </Card>
    </CoverLayout>
  );
}

export default Cover;
