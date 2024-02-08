import { useEffect, useState } from "react";

// Custom hook to track and retrieve the current window size
const useWindowSize = () => {
  // State to store the current window size
  const [screenSize, setScreenSize] = useState({
    width: window.innerWidth,
    height: window.innerHeight,
  });

  // Effect to update the window size on resize events and cleanup
  useEffect(() => {
    // Handler function to update the window size
    const handleResize = () => {
      setScreenSize({ width: window.innerWidth, height: window.innerHeight });
    };

    // Add event listener for window resize
    window.addEventListener("resize", handleResize);

    // Cleanup: Remove event listener on component unmount
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []); // Empty dependency array ensures the effect runs once on mount

  // Return the current window size
  return [screenSize];
};

export default useWindowSize;