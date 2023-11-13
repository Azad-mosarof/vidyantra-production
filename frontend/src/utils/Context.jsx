// Import necessary modules from React
import React, { useEffect, createContext, useContext, useState } from 'react';
import { useLocation } from 'react-router-dom';

// Create a context to share data across components
export const Context = createContext();

// Custom hook to access the context
export const useAppContext = () => useContext(Context);

// Functional component for the AppContext
const AppContext = ({ children }) => {
  // State to manage device-related information
  const [deviceInfo, setDeviceInfo] = useState({
    isMobile: false,
    isTablet: false,
    isDesktop: false,
    isLaptop: false,
    isPortrait: false,
    isLandscape: false,
    isRetina: false,
    isTouch: false,
    isHover: false,
  });

  // State to manage user-related information
  const [userState, setUserState] = useState({
    user: null,
    userType: null,
    userInfo: null,
  });

  // Function to update user-related information
  const handleUser = (user, userType) => {
    setUserState({ ...userState, user, userType });
  };

  // Effect to handle window resize events and update device information
  useEffect(() => {
    const handleResize = () => {
      setDeviceInfo((prev) => ({
        ...prev,
        isMobile: window.innerWidth < 480,
        isTablet: window.innerWidth >= 480 && window.innerWidth < 768,
        isDesktop: window.innerWidth >= 768 && window.innerWidth < 1024,
        isLaptop: window.innerWidth >= 1024 && window.innerWidth < 1200,
        isPortrait: window.innerHeight > window.innerWidth,
        isLandscape: window.innerWidth > window.innerHeight,
        isRetina: window.devicePixelRatio > 1,
      }));
    };

    // Function to handle touch events and update device information
    const handleTouch = () => {
      setDeviceInfo((prev) => ({ ...prev, isTouch: true }));
    };

    // Function to handle hover events and update device information
    const handleHover = () => {
      setDeviceInfo((prev) => ({ ...prev, isHover: true }));
    };

    // Event listeners for window resize, touch, and hover
    window.addEventListener('resize', handleResize);
    window.addEventListener('touchstart', handleTouch);
    window.addEventListener('mouseover', handleHover);

    // Initial calls to update device information
    handleResize();
    handleTouch();
    handleHover();

    // Cleanup by removing event listeners
    return () => {
      window.removeEventListener('resize', handleResize);
      window.removeEventListener('touchstart', handleTouch);
      window.removeEventListener('mouseover', handleHover);
    };
  }, []);

  // Get the current location using React Router's useLocation hook
  const location = useLocation();

  // Effect to scroll to the top when the location changes
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location]);

  // Provide the context values to the components
  return (
    <Context.Provider
      value={{
        ...deviceInfo,
        ...userState,
        setUserInfo: (userInfo) => setUserState({ ...userState, userInfo }),
        location,
        handleUser,
      }}
    >
      {children}
    </Context.Provider>
  );
};

// Export the AppContext component as the default export
export default AppContext;