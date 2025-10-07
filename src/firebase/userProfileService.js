// User Profile Service for Firestore operations in EcoData Hub
import { doc, getDoc, setDoc, updateDoc, collection, serverTimestamp } from "firebase/firestore";
import { db } from "./config";

// User profile collection name
const USERS_COLLECTION = "users";

/**
 * Create or update user profile in Firestore
 * @param {string} userId - Firebase Auth user ID
 * @param {Object} userData - User data to store
 * @returns {Promise<void>}
 */
export const createOrUpdateUserProfile = async (userId, userData) => {
  try {
    const userDocRef = doc(db, USERS_COLLECTION, userId);

    // Check if user document exists
    const userDoc = await getDoc(userDocRef);

    const profileData = {
      ...userData,
      updatedAt: serverTimestamp(),
    };
    if (!userDoc.exists()) {
      // Create new user profile
      profileData.createdAt = serverTimestamp();
      await setDoc(userDocRef, profileData);
      console.log("User profile created successfully");
    } else {
      // Update existing user profile
      await updateDoc(userDocRef, profileData);
      console.log("User profile updated successfully");
    }
  } catch (error) {
    console.error("Error creating/updating user profile:", error);
    throw error;
  }
};

/**
 * Get user profile from Firestore
 * @param {string} userId - Firebase Auth user ID
 * @returns {Promise<Object|null>} User profile data or null if not found
 */
export const getUserProfile = async (userId) => {
  try {
    console.log("getUserProfile - Looking for userId:", userId);
    const userDocRef = doc(db, USERS_COLLECTION, userId);
    console.log("getUserProfile - Document reference:", userDocRef.path);
    const userDoc = await getDoc(userDocRef);
    console.log("getUserProfile - Document exists:", userDoc.exists());

    if (userDoc.exists()) {
      console.log("getUserProfile - Document data:", userDoc.data());
      return {
        id: userDoc.id,
        ...userDoc.data(),
      };
    } else {
      console.log("No user profile found");
      return null;
    }
  } catch (error) {
    console.error("Error fetching user profile:", error);
    throw error;
  }
};

/**
 * Initialize user profile from Google Auth data
 * @param {Object} firebaseUser - Firebase Auth user object
 * @returns {Promise<Object>} Created/updated user profile
 */
export const initializeUserProfileFromAuth = async (firebaseUser) => {
  try {
    console.log("initializeUserProfileFromAuth - Firebase user:", firebaseUser);
    console.log("initializeUserProfileFromAuth - User ID:", firebaseUser.uid);

    // First check if profile already exists
    const existingProfile = await getUserProfile(firebaseUser.uid);
    if (existingProfile) {
      console.log("initializeUserProfileFromAuth - Found existing profile, updating lastLoginAt");
      await updateLastLogin(firebaseUser.uid);
      return existingProfile;
    }

    console.log("initializeUserProfileFromAuth - No existing profile, creating new one");
    const basicProfileData = {
      // Basic info from Google Auth
      email: firebaseUser.email,
      displayName: firebaseUser.displayName,
      photoURL: firebaseUser.photoURL,
      lastLoginAt: serverTimestamp(),

      // Extended profile fields (empty by default)
      company: "",
      jobTitle: "",
      phone: "",
      location: "",
      department: "",
      bio: ``,

      // Social media fields
      linkedIn: "",
      facebook: "",
      twitter: "",
      instagram: "",
      researchGate: "",

      // EcoData Hub specific fields
      role: "user",
      permissions: ["read"],
      preferences: {
        theme: "light",
        notifications: true,
        dataVisualization: "charts",
      },
    };

    await createOrUpdateUserProfile(firebaseUser.uid, basicProfileData);
    return await getUserProfile(firebaseUser.uid);
  } catch (error) {
    console.error("Error initializing user profile:", error);
    throw error;
  }
};

/**
 * Update user profile with extended information
 * @param {string} userId - Firebase Auth user ID
 * @param {Object} profileUpdates - Profile fields to update
 * @returns {Promise<Object>} Updated user profile
 */
export const updateUserProfileExtended = async (userId, profileUpdates) => {
  try {
    await createOrUpdateUserProfile(userId, profileUpdates);
    return await getUserProfile(userId);
  } catch (error) {
    console.error("Error updating extended user profile:", error);
    throw error;
  }
};

/**
 * Update last login timestamp
 * @param {string} userId - Firebase Auth user ID
 * @returns {Promise<void>}
 */
export const updateLastLogin = async (userId) => {
  try {
    const userDocRef = doc(db, USERS_COLLECTION, userId);
    await updateDoc(userDocRef, {
      lastLoginAt: serverTimestamp(),
    });
  } catch (error) {
    console.error("Error updating last login:", error);
    throw error;
  }
};
