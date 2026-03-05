document.addEventListener('DOMContentLoaded', () => {
  const redirectUrl =
    "https://jira.supportcenter.evolent.com/servicedesk/customer/portals";

  // 10-second delay so users can comfortably read the message
  setTimeout(() => {
    window.location.replace(redirectUrl);
  }, 6000); // 6,000 ms = 6 seconds
});
