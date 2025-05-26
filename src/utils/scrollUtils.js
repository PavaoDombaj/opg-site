/**
 * Utility function to scroll to a specific section on the page
 * @param {string} sectionId - The ID of the section to scroll to
 * @param {boolean} smooth - Whether to use smooth scrolling (default: true)
 */
export const scrollToSection = (sectionId, smooth = true) => {
  // Check if we're on the homepage
  if (window.location.pathname === '/') {
    // We're already on the homepage, scroll directly
    const section = document.getElementById(sectionId);
    if (section) {
      window.scrollTo({
        top: section.offsetTop,
        behavior: smooth ? 'smooth' : 'auto'
      });
    }
  } else {
    // We're on another page, store the section ID for after navigation
    sessionStorage.setItem('scrollToSection', sectionId);
  }
};

/**
 * Function to check and perform scrolling if needed after page load
 * This should be called in the useEffect of the component that contains the sections
 */
export const handleScrollAfterNavigation = () => {
  const sectionToScrollTo = sessionStorage.getItem('scrollToSection');
  
  if (sectionToScrollTo) {
    // Clear the stored section ID
    sessionStorage.removeItem('scrollToSection');
    
    // Wait for the DOM to be fully loaded
    setTimeout(() => {
      const section = document.getElementById(sectionToScrollTo);
      if (section) {
        window.scrollTo({
          top: section.offsetTop,
          behavior: 'smooth'
        });
      }
    }, 100);
  }
};