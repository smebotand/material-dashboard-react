// Firebase Google Authentication service for EcoData Hub
import {
  signInWithPopup,
  signInWithRedirect,
  getRedirectResult,
  signOut,
  onAuthStateChanged,
} from "firebase/auth";
import { auth, googleProvider } from "./config";

export const googleAuthService = {
  // Sign in with Google using popup
  async signInWithGooglePopup() {
    try {
      const result = await signInWithPopup(auth, googleProvider);
      const user = result.user;

      // You can access additional user info here
      console.log("User signed in:", user.displayName, user.email);

      return {
        user,
        isNewUser: result._tokenResponse?.isNewUser || false,
      };
    } catch (error) {
      console.error("Error signing in with Google:", error);

      // Handle specific error cases
      if (error.code === "auth/popup-closed-by-user") {
        throw new Error("Sign-in was cancelled");
      } else if (error.code === "auth/popup-blocked") {
        throw new Error("Popup was blocked by browser. Please allow popups and try again.");
      } else {
        throw new Error("Failed to sign in with Google. Please try again.");
      }
    }
  },

  // Sign in with Google using redirect (fallback for mobile)
  async signInWithGoogleRedirect() {
    try {
      await signInWithRedirect(auth, googleProvider);
    } catch (error) {
      console.error("Error initiating Google redirect:", error);
      throw error;
    }
  },

  // Get redirect result (call this on app load)
  async getGoogleRedirectResult() {
    try {
      const result = await getRedirectResult(auth);
      if (result) {
        return {
          user: result.user,
          isNewUser: result._tokenResponse?.isNewUser || false,
        };
      }
      return null;
    } catch (error) {
      console.error("Error getting redirect result:", error);
      throw error;
    }
  },

  // Sign out
  async signOut() {
    try {
      await signOut(auth);
      console.log("User signed out successfully");
    } catch (error) {
      console.error("Error signing out:", error);
      throw error;
    }
  },

  // Get current user
  getCurrentUser() {
    return auth.currentUser;
  },

  // Listen to authentication state changes
  onAuthStateChanged(callback) {
    return onAuthStateChanged(auth, callback);
  },

  // Check if user is signed in
  isSignedIn() {
    return !!auth.currentUser;
  },
};
