/* ================= PROFILE MENU ================= */

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

/* ================= DARK MODE ================= */

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

/* ================= SEARCH (FIXED CLEAN VERSION) ================= */

/* 🔥 FIX: defined ONLY ONCE (removed duplicates) */
const searchBox = document.getElementById("searchContainer");
const searchBtn = document.getElementById("searchBtn");
const closeSearch = document.getElementById("closeSearch");
const categories = document.querySelector(".top-navBottom"); // CATEGORY BAR

// Open search (mobile only)
searchBtn.addEventListener("click", () => {
    if (window.innerWidth <= 767) {
        searchBox.classList.add("active");

        /* hide categories */
        categories.classList.add("collapsed");
    }
});

// Close search
closeSearch.addEventListener("click", () => {
    searchBox.classList.remove("active");

    /* show categories */
    categories.classList.remove("collapsed");
});

/* ================= MIC PERMISSION ================= */

const micBtn = document.getElementById("micBtn");

micBtn.addEventListener("click", async () => {
    try {
        const stream = await navigator.mediaDevices.getUserMedia({ audio: true });
        console.log("Microphone access granted");
        stream.getTracks().forEach(track => track.stop());
    } catch (error) {
        console.error("Microphone access denied:", error);
        alert("Please allow microphone access!");
    }
});

/* ================= SIDEBAR (DESKTOP) ================= */

const menuBtn = document.getElementById("menuBtn");
const sidebar = document.querySelector(".vertical-left-navBar");

menuBtn.addEventListener("click", () => {
    sidebar.classList.toggle("collapsed");
    categories.classList.toggle("collapsed"); 
    document.body.classList.toggle("sidebar-collapsed");
});