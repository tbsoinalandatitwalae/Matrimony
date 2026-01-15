(function () {
  const isLoggedIn = localStorage.getItem("isLoggedIn");

  // Get current file name
  const currentPage = window.location.pathname.split("/").pop();

  // index.html is allowed without login
  if (!isLoggedIn && currentPage !== "" && currentPage !== "index.html") {
    window.location.replace("index.html");
  }

  // If already logged in & on index.html → go to profile
  if (isLoggedIn && (currentPage === "" || currentPage === "index.html")) {
    window.location.replace("profile.html");
  }
})();
