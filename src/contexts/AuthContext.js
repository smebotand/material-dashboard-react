// Authentication Context for Google Auth and Firestore User Profiles in EcoData Hub
import React, { createContext, useContext, useEffect, useState } from "react";
import PropTypes from "prop-types";
import { googleAuthService } from "../firebase/googleAuth";
import {
  initializeUserProfileFromAuth,
  getUserProfile,
  updateLastLogin,
} from "../firebase/userProfileService";

const AuthContext = createContext();

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error("useAuth must be used within an AuthProvider");
  }
  return context;
};

export const AuthProvider = ({ children }) => {
  const [currentUser, setCurrentUser] = useState(null);
  const [userProfile, setUserProfile] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Listen for authentication state changes
    const unsubscribe = googleAuthService.onAuthStateChanged(async (user) => {
      setCurrentUser(user);

      if (user) {
        try {
          // Initialize or get user profile from Firestore
          let profile = await getUserProfile(user.uid);

          if (!profile) {
            // First time user - create profile from Google Auth data
            profile = await initializeUserProfileFromAuth(user);
            console.log("New user profile created:", profile);
          } else {
            // Existing user - update last login
            await updateLastLogin(user.uid);
            console.log("User profile loaded:", profile);
          }

          setUserProfile(profile);
        } catch (error) {
          console.error("Error handling user profile:", error);
        }
      } else {
        setUserProfile(null);
      }

      setLoading(false);
    });

    // Check for redirect result on app load
    googleAuthService
      .getGoogleRedirectResult()
      .then((result) => {
        if (result) {
          console.log("User signed in via redirect:", result.user.displayName);
        }
      })
      .catch((error) => {
        console.error("Error handling redirect result:", error);
      });

    return unsubscribe;
  }, []);

  const signInWithGoogle = async () => {
    try {
      const result = await googleAuthService.signInWithGooglePopup();
      return result;
    } catch (error) {
      // If popup fails, try redirect as fallback
      if (error.message.includes("popup")) {
        console.log("Popup failed, trying redirect...");
        await googleAuthService.signInWithGoogleRedirect();
      } else {
        throw error;
      }
    }
  };

  const signOut = async () => {
    setUserProfile(null);
    return await googleAuthService.signOut();
  };

  const updateUserProfile = async (profileUpdates) => {
    if (!currentUser) {
      throw new Error("No authenticated user");
    }

    try {
      const { updateUserProfileExtended } = await import("../firebase/userProfileService");
      const updatedProfile = await updateUserProfileExtended(currentUser.uid, profileUpdates);
      setUserProfile(updatedProfile);
      return updatedProfile;
    } catch (error) {
      console.error("Error updating user profile:", error);
      throw error;
    }
  };

  const value = {
    currentUser,
    userProfile,
    signInWithGoogle,
    signOut,
    updateUserProfile,
    isAuthenticated: !!currentUser,
  };

  return <AuthContext.Provider value={value}>{!loading && children}</AuthContext.Provider>;
};

AuthProvider.propTypes = {
  children: PropTypes.node.isRequired,
};
