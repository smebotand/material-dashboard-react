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

import { useState } from "react";

// react-router-dom components
import { Link, useNavigate } from "react-router-dom";

// Authentication context
import { useAuth } from "contexts/AuthContext";

// @mui material components
import Card from "@mui/material/Card";

// @mui icons
import GoogleIcon from "@mui/icons-material/Google";

// Material Dashboard 2 React components
import MDBox from "components/MDBox";
import MDTypography from "components/MDTypography";
import MDButton from "components/MDButton";

// Authentication layout components
import BasicLayout from "layouts/authentication/components/BasicLayout";

// Images
import bgImage from "assets/images/bg-sign-in-basic.jpeg";

function Basic() {
  const [loading, setLoading] = useState(false);
  const { signInWithGoogle } = useAuth();
  const navigate = useNavigate();

  const handleGoogleSignIn = async () => {
    try {
      setLoading(true);
      const result = await signInWithGoogle();
      console.log("Successfully signed in:", result.user.displayName);
      // Redirect to overview page after successful sign-in
      navigate("/overview");
    } catch (error) {
      console.error("Sign-in error:", error);
      alert(error.message || "Failed to sign in with Google");
    } finally {
      setLoading(false);
    }
  };

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
          p={3}
          mb={1}
          textAlign="center"
        >
          <MDTypography variant="h4" fontWeight="medium" color="white" mt={1}>
            Welcome to EcoData Hub
          </MDTypography>
        </MDBox>
        <MDBox pt={4} pb={3} px={3} textAlign="center">
          <MDBox mb={3}>
            <MDBox
              sx={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                mx: "auto",
                mb: 2,
              }}
            >
              <MDTypography
                sx={{
                  fontSize: "32px",
                  fontWeight: "400",
                  fontFamily: "'Product Sans', arial, sans-serif",
                  letterSpacing: "-0.5px",
                }}
              >
                <span style={{ color: "#4285f4" }}>G</span>
                <span style={{ color: "#ea4335" }}>o</span>
                <span style={{ color: "#fbbc05" }}>o</span>
                <span style={{ color: "#4285f4" }}>g</span>
                <span style={{ color: "#34a853" }}>l</span>
                <span style={{ color: "#ea4335" }}>e</span>
              </MDTypography>
            </MDBox>
            <MDTypography variant="h6" color="text" mb={2}>
              Secure Google Authentication
            </MDTypography>
            <MDTypography variant="body2" color="text" mb={3}>
              Sign in with your Google account to access EcoData Hub
            </MDTypography>
          </MDBox>

          <MDBox mt={4} mb={1}>
            <MDButton
              variant="gradient"
              color="info"
              size="large"
              fullWidth
              onClick={handleGoogleSignIn}
              disabled={loading}
              sx={{
                py: 1.5,
                fontSize: "1rem",
                fontWeight: "medium",
              }}
            >
              {loading ? "Signing in..." : "Sign in with Google"}
            </MDButton>
          </MDBox>

          {loading && (
            <MDBox mt={2}>
              <MDTypography variant="caption" color="text">
                Please wait while we authenticate you...
              </MDTypography>
            </MDBox>
          )}
        </MDBox>
      </Card>
    </BasicLayout>
  );
}

export default Basic;
