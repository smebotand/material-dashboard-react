/**
=========================================================
* EcoData Hub - Environmental Data Management
=========================================================

* Logout confirmation page for EcoData Hub
* Shows users they have been successfully logged out

=========================================================
*/

import { useState, useEffect } from "react";

// react-router-dom components
import { Link } from "react-router-dom";

// Authentication context
import { useAuth } from "contexts/AuthContext";

// @mui material components
import Card from "@mui/material/Card";
import Switch from "@mui/material/Switch";
import Grid from "@mui/material/Grid";
import MuiLink from "@mui/material/Link";

// @mui icons
import FacebookIcon from "@mui/icons-material/Facebook";
import GitHubIcon from "@mui/icons-material/GitHub";
import GoogleIcon from "@mui/icons-material/Google";

// Material Dashboard 2 React components
import MDBox from "components/MDBox";
import MDTypography from "components/MDTypography";
import MDInput from "components/MDInput";
import MDButton from "components/MDButton";

// Authentication layout components
import BasicLayout from "../components/BasicLayout";

// Images
import bgImage from "assets/images/bg-sign-in-basic.jpeg";

function Logout() {
  const [rememberMe, setRememberMe] = useState(false);
  const { signOut, currentUser } = useAuth();

  const handleSetRememberMe = () => setRememberMe(!rememberMe);

  useEffect(() => {
    // Automatically sign out when this component mounts
    const performSignOut = async () => {
      try {
        await signOut();
        console.log("User signed out successfully");
      } catch (error) {
        console.error("Error signing out:", error);
      }
    };

    if (currentUser) {
      performSignOut();
    }
  }, [signOut, currentUser]);

  return (
    <BasicLayout image={bgImage}>
      <Card>
        <MDBox
          variant="gradient"
          bgColor="info"
          borderRadius="lg"
          coloredShadow="info"
          mx={2}
          mt={-3}
          p={2}
          mb={1}
          textAlign="center"
        >
          <MDTypography variant="h4" fontWeight="medium" color="white" mt={1}>
            Logged Out Successfully
          </MDTypography>
          <Grid container spacing={3} justifyContent="center" sx={{ mt: 1, mb: 2 }}>
            <Grid item xs={2}>
              <MDTypography component={MuiLink} href="#" variant="body1" color="white">
                <FacebookIcon color="inherit" />
              </MDTypography>
            </Grid>
            <Grid item xs={2}>
              <MDTypography component={MuiLink} href="#" variant="body1" color="white">
                <GitHubIcon color="inherit" />
              </MDTypography>
            </Grid>
            <Grid item xs={2}>
              <MDTypography component={MuiLink} href="#" variant="body1" color="white">
                <GoogleIcon color="inherit" />
              </MDTypography>
            </Grid>
          </Grid>
        </MDBox>
        <MDBox pt={4} pb={3} px={3}>
          <MDBox component="div" textAlign="center" mb={3}>
            <MDTypography variant="h5" color="success" fontWeight="medium">
              You have been successfully logged out of EcoData Hub
            </MDTypography>
            <MDTypography variant="body2" color="text" mt={2}>
              Thank you for using our environmental data management platform. Your session has been
              securely ended.
            </MDTypography>
          </MDBox>

          <MDBox mt={4} mb={1}>
            <MDButton
              component={Link}
              to="/authentication/sign-in"
              variant="gradient"
              color="info"
              fullWidth
            >
              Sign In Again
            </MDButton>
          </MDBox>

          <MDBox mt={2} mb={1} textAlign="center">
            <MDTypography variant="button" color="text">
              Need help with your account? Contact support through your Google account settings.
            </MDTypography>
          </MDBox>
        </MDBox>
      </Card>
    </BasicLayout>
  );
}

export default Logout;
