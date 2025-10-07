/**
=========================================================
* Material Das                description={`Hi,                      <ProfileInfoCard
                title="profile information"
                description={`Hi, I'm ${userDisplayName}. ${userBio}`}
                info={{              description={`Hi, I'm ${userDisplayName}, ${userBio}`}               description={`Hi, I'm ${userDisplayName}, ${userBio}`}      description={`Hi, I'm ${userDisplayName}, ${userBio}`}'m ${userDisplayName}, Environmental data specialist focused on sustainable solutions and data-driven insights for ecological research.`}board 2 React - v2.2.0
=========================================================

* Product Page: https://www.creative-tim.com/product/material-dashboard-react
* Copyright 2023 Creative Tim (https://www.creative-tim.com)

Coded by www.creative-tim.com

 =========================================================

* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.
*/

// React hooks
import { useState } from "react";

// @mui material components
import Grid from "@mui/material/Grid";
import Divider from "@mui/material/Divider";

// @mui icons
import FacebookIcon from "@mui/icons-material/Facebook";
import TwitterIcon from "@mui/icons-material/Twitter";
import InstagramIcon from "@mui/icons-material/Instagram";
import LinkedInIcon from "@mui/icons-material/LinkedIn";

// Custom icons
import ResearchGateIcon from "components/ResearchGateIcon";

// Authentication context
import { useAuth } from "contexts/AuthContext";

// Profile components
import ProfileEditDialog from "layouts/profile/components/ProfileEditDialog";

// Material Dashboard 2 React components
import MDBox from "components/MDBox";
import MDTypography from "components/MDTypography";

// Material Dashboard 2 React example components
import DashboardLayout from "examples/LayoutContainers/DashboardLayout";
import DashboardNavbar from "examples/Navbars/DashboardNavbar";
import Footer from "examples/Footer";
import ProfileInfoCard from "examples/Cards/InfoCards/ProfileInfoCard";
import ProfilesList from "examples/Lists/ProfilesList";
import DefaultProjectCard from "examples/Cards/ProjectCards/DefaultProjectCard";

// Overview page components
import Header from "layouts/profile/components/Header";
import PlatformSettings from "layouts/profile/components/PlatformSettings";

// Data
import profilesListData from "layouts/profile/data/profilesListData";

// Images
import homeDecor1 from "assets/images/home-decor-1.jpg";
import homeDecor2 from "assets/images/home-decor-2.jpg";
import homeDecor3 from "assets/images/home-decor-3.jpg";
import homeDecor4 from "assets/images/home-decor-4.jpeg";
import team1 from "assets/images/team-1.jpg";
import team2 from "assets/images/team-2.jpg";
import team3 from "assets/images/team-3.jpg";
import team4 from "assets/images/team-4.jpg";

function Overview() {
  const { currentUser, userProfile } = useAuth();
  const [editDialogOpen, setEditDialogOpen] = useState(false);

  // Extract user information from Firestore profile or fallback to Google auth
  const userDisplayName = userProfile?.displayName || currentUser?.displayName || "User";
  const userEmail = userProfile?.email || currentUser?.email || "No email available";
  const userPhotoURL = userProfile?.photoURL || currentUser?.photoURL || null;
  const userCompany = userProfile?.company || "";
  const userJobTitle = userProfile?.jobTitle || "";
  const userPhone = userProfile?.phone || "";
  const userLocation = userProfile?.location || "";
  const userLinkedIn = userProfile?.linkedIn || "";
  const userFacebook = userProfile?.facebook || "";
  const userTwitter = userProfile?.twitter || "";
  const userInstagram = userProfile?.instagram || "";
  const userResearchGate = userProfile?.researchGate || "";
  const userBio =
    userProfile?.bio ||
    `(Please update your bio to showcase your expertise, qualifications, and professional background in environmental data management.)`;

  // Debug logging
  console.log("Profile - currentUser:", currentUser);
  console.log("Profile - userProfile:", userProfile);
  console.log("Profile - userPhotoURL:", userPhotoURL);
  console.log("Profile - Social Media Values:");
  console.log("  userFacebook:", userFacebook);
  console.log("  userTwitter:", userTwitter);
  console.log("  userInstagram:", userInstagram);
  console.log("  userLinkedIn:", userLinkedIn);
  console.log("  userResearchGate:", userResearchGate);

  // Format last login date - prefer Firestore timestamp over Firebase Auth
  const lastLoginTime = userProfile?.lastLoginAt || currentUser?.metadata?.lastSignInTime;
  const formatLastLogin = (timestamp) => {
    if (!timestamp) return "Not available";

    // Handle Firestore Timestamp objects
    let date;
    if (timestamp.toDate && typeof timestamp.toDate === "function") {
      date = timestamp.toDate();
    } else if (typeof timestamp === "string") {
      date = new Date(timestamp);
    } else {
      date = timestamp;
    }

    return date.toLocaleDateString("en-US", {
      year: "numeric",
      month: "short",
      day: "numeric",
      hour: "2-digit",
      minute: "2-digit",
    });
  };

  return (
    <DashboardLayout>
      <DashboardNavbar />
      <MDBox mb={2} />
      <Header userDisplayName={userDisplayName} userPhotoURL={userPhotoURL}>
        <MDBox mt={5} mb={3}>
          <Grid container spacing={1}>
            <Grid item xs={12} md={6} xl={4}>
              <PlatformSettings />
            </Grid>
            <Grid item xs={12} md={6} xl={4} sx={{ display: "flex" }}>
              <Divider orientation="vertical" sx={{ ml: -2, mr: 1 }} />
              <ProfileInfoCard
                title="profile information"
                description={userBio}
                info={{
                  name: userDisplayName || "Not specified",
                  jobTitle: userJobTitle || "Not specified",
                  mobile: userPhone || "Not specified",
                  email: userEmail || "Not specified",
                  company: userCompany || "Not specified",
                  location: userLocation || "Not specified",
                  lastLogin: formatLastLogin(lastLoginTime),
                }}
                social={[
                  // Facebook - always show with fallback
                  {
                    link: userFacebook
                      ? userFacebook.startsWith("http")
                        ? userFacebook
                        : `https://facebook.com/${userFacebook}`
                      : "#",
                    icon: <FacebookIcon />,
                    color: "facebook",
                  },
                  // Twitter - always show with fallback
                  {
                    link: userTwitter
                      ? userTwitter.startsWith("http")
                        ? userTwitter
                        : `https://twitter.com/${userTwitter}`
                      : "#",
                    icon: <TwitterIcon />,
                    color: "twitter",
                  },
                  // Instagram - always show with fallback
                  {
                    link: userInstagram
                      ? userInstagram.startsWith("http")
                        ? userInstagram
                        : `https://instagram.com/${userInstagram}`
                      : "#",
                    icon: <InstagramIcon />,
                    color: "instagram",
                  },
                  // LinkedIn - always show with fallback
                  {
                    link: userLinkedIn
                      ? userLinkedIn.startsWith("http")
                        ? userLinkedIn
                        : `https://linkedin.com/in/${userLinkedIn}`
                      : "#",
                    icon: <LinkedInIcon />,
                    color: "linkedin",
                  },
                  // ResearchGate - always show with fallback
                  {
                    link: userResearchGate
                      ? userResearchGate.startsWith("http")
                        ? userResearchGate
                        : `https://researchgate.net/profile/${userResearchGate}`
                      : "#",
                    icon: <ResearchGateIcon size={20} />,
                    color: "researchgate",
                  },
                ]}
                action={{
                  route: "",
                  tooltip: "Edit Profile",
                  onClick: () => setEditDialogOpen(true),
                }}
                shadow={false}
              />
              <Divider orientation="vertical" sx={{ mx: 0 }} />
            </Grid>
            <Grid item xs={12} xl={4}>
              <ProfilesList title="conversations" profiles={profilesListData} shadow={false} />
            </Grid>
          </Grid>
        </MDBox>
        <MDBox pt={2} px={2} lineHeight={1.25}>
          <MDTypography variant="h6" fontWeight="medium">
            Projects
          </MDTypography>
          <MDBox mb={1}>
            <MDTypography variant="button" color="text">
              Architects design houses
            </MDTypography>
          </MDBox>
        </MDBox>
        <MDBox p={2}>
          <Grid container spacing={6}>
            <Grid item xs={12} md={6} xl={3}>
              <DefaultProjectCard
                image={homeDecor1}
                label="project #2"
                title="modern"
                description="As Uber works through a huge amount of internal management turmoil."
                action={{
                  type: "internal",
                  route: "/pages/profile/profile-overview",
                  color: "info",
                  label: "view project",
                }}
                authors={[
                  { image: team1, name: "Elena Morison" },
                  { image: team2, name: "Ryan Milly" },
                  { image: team3, name: "Nick Daniel" },
                  { image: team4, name: "Peterson" },
                ]}
              />
            </Grid>
            <Grid item xs={12} md={6} xl={3}>
              <DefaultProjectCard
                image={homeDecor2}
                label="project #1"
                title="scandinavian"
                description="Music is something that everyone has their own specific opinion about."
                action={{
                  type: "internal",
                  route: "/pages/profile/profile-overview",
                  color: "info",
                  label: "view project",
                }}
                authors={[
                  { image: team3, name: "Nick Daniel" },
                  { image: team4, name: "Peterson" },
                  { image: team1, name: "Elena Morison" },
                  { image: team2, name: "Ryan Milly" },
                ]}
              />
            </Grid>
            <Grid item xs={12} md={6} xl={3}>
              <DefaultProjectCard
                image={homeDecor3}
                label="project #3"
                title="minimalist"
                description="Different people have different taste, and various types of music."
                action={{
                  type: "internal",
                  route: "/pages/profile/profile-overview",
                  color: "info",
                  label: "view project",
                }}
                authors={[
                  { image: team4, name: "Peterson" },
                  { image: team3, name: "Nick Daniel" },
                  { image: team2, name: "Ryan Milly" },
                  { image: team1, name: "Elena Morison" },
                ]}
              />
            </Grid>
            <Grid item xs={12} md={6} xl={3}>
              <DefaultProjectCard
                image={homeDecor4}
                label="project #4"
                title="gothic"
                description="Why would anyone pick blue over pink? Pink is obviously a better color."
                action={{
                  type: "internal",
                  route: "/pages/profile/profile-overview",
                  color: "info",
                  label: "view project",
                }}
                authors={[
                  { image: team4, name: "Peterson" },
                  { image: team3, name: "Nick Daniel" },
                  { image: team2, name: "Ryan Milly" },
                  { image: team1, name: "Elena Morison" },
                ]}
              />
            </Grid>
          </Grid>
        </MDBox>
      </Header>
      <Footer />

      {/* Profile Edit Dialog */}
      <ProfileEditDialog
        open={editDialogOpen}
        onClose={() => setEditDialogOpen(false)}
        onSave={() => {
          console.log("Profile updated successfully!");
        }}
      />
    </DashboardLayout>
  );
}

export default Overview;
