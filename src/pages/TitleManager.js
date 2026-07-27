import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

const TitleManager = () => {
  const location = useLocation();

  useEffect(() => {
    // Check the path and set the title accordingly
    switch (location.pathname) {
      case '/':
        document.title = "Owen Trinidad | Frontend Developer & UI/UX Designer";
        break;
      case '/projects':
        document.title = "Owen Trinidad | Projects";
        break;
      case '/about':
        document.title = "Owen Trinidad | About";
        break;
      case '/contact':
        document.title = "Owen Trinidad | Contact";
        break;
      
      default:
        if (!location.pathname.startsWith('/projects/')) {
          document.title = "Owen Trinidad | Frontend Developer & UI/UX Designer";
        }
        break;
    }
  }, [location.pathname]); // Re-runs every time the URL changes

  return null; // This component works invisibly, so it renders nothing
};

export default TitleManager;