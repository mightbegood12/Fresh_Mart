const scrollToTop = () => {
  window.scrollTo(0, 0);
};

// Handle clicks on the overall link, but check if it comes from the button
const handleLinkClick = (e) => {
  // If the click is within the DynamicButton, prevent navigation
  if (e.target.closest(".dynamic-button")) {
    e.preventDefault();
  } else {
    scrollToTop(); // Only scroll to top if it's not a button click
  }
};

export default handleLinkClick;
