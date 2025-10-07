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

// prop-types is a library for typechecking of props
import PropTypes from "prop-types";

// @mui material components
import Container from "@mui/material/Container";
import Link from "@mui/material/Link";
import Icon from "@mui/material/Icon";

// Material Dashboard 2 React components
import MDBox from "components/MDBox";
import MDTypography from "components/MDTypography";

// Material Dashboard 2 React base styles
import typography from "assets/theme/base/typography";

function Footer({ light }) {
  const { size } = typography;

  return (
    <MDBox position="absolute" width="100%" bottom={0} py={4}>
      <Container>
        <MDBox width="100%" display="flex" justifyContent="center" alignItems="center" px={1.5}>
          <MDBox
            display="flex"
            justifyContent="center"
            alignItems="center"
            flexWrap="nowrap"
            color={light ? "white" : "text"}
            fontSize={size.sm}
            textAlign="center"
          >
            <MDTypography variant="button" fontWeight="regular" color={light ? "white" : "text"}>
              &copy; {new Date().getFullYear()}, developed with
            </MDTypography>
            <MDBox fontSize={size.md} color={light ? "white" : "dark"} mb={-0.5} mx={0.5}>
              <Icon color="inherit" fontSize="inherit">
                favorite
              </Icon>
            </MDBox>
            <MDTypography variant="button" fontWeight="regular" color={light ? "white" : "text"}>
              by&nbsp;
            </MDTypography>
            <MDTypography variant="button" fontWeight="medium" color={light ? "white" : "dark"}>
              Smebye EcoData Insights
            </MDTypography>
            <MDTypography variant="button" fontWeight="regular" color={light ? "white" : "text"}>
              &nbsp;for environmental impact.
            </MDTypography>
          </MDBox>
        </MDBox>
      </Container>
    </MDBox>
  );
}

// Setting default props for the Footer
Footer.defaultProps = {
  light: false,
};

// Typechecking props for the Footer
Footer.propTypes = {
  light: PropTypes.bool,
};

export default Footer;
