const profileImg = document.getElementById("profile-img");
const menu = document.getElementById("profile-menu");
const themeToggle = document.getElementById("themeToggle");

// Toggle menu
profileImg.addEventListener("click", (e) => {
    e.stopPropagation();
    menu.classList.toggle("active");
});

// Close when clicking outside
document.addEventListener("click", (e) => {
    if (!menu.contains(e.target) && !profileImg.contains(e.target)) {
        menu.classList.remove("active");
    }
});

// Dark mode toggle
themeToggle.addEventListener("click", (e) => {
    e.stopPropagation();

    document.body.classList.toggle("dark");

    if (document.body.classList.contains("dark")) {
        themeToggle.innerHTML = "☀️ Light Mode";
    } else {
        themeToggle.innerHTML = "🌙 Dark Mode";
    }
});

console.log("JS LOADED");

console.log(
    document.getElementById("profile-img"),
    document.getElementById("profile-menu"),
    document.getElementById("themeToggle")
);

// Search functionality for mobile

const searchBox = document.getElementById("searchContainer");
const searchBtn = document.getElementById("searchBtn");
const closeSearch = document.getElementById("closeSearch");

// Open search
searchBtn.addEventListener("click", () => {
    if (window.innerWidth <= 767) {
        searchBox.classList.add("active");
    }
});

// Close search
closeSearch.addEventListener("click", () => {
    searchBox.classList.remove("active");
});

// mic permissions for both desktop and mobile

const micBtn = document.getElementById("micBtn");

micBtn.addEventListener("click", async () => {

    try {
        const stream = await navigator.mediaDevices.getUserMedia({ audio: true});
        console.log("Microphone access granted"); // for checking in console, whether mic is workiing or not .
        stream.getTracks().forEach(track => track.stop()); // Stop the stream immediately after access
    }
    catch (error) {
        console.error("Microphone access denied:", error);

        alert("Please allow microphone access!");

    }
});

const menuBtn = document.getElementById("menuBtn");
const sidebar = document.querySelector(".vertical-left-navBar");

menuBtn.addEventListener("click", () => {
    sidebar.classList.toggle("collapsed");
});