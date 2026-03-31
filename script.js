/* ================= PROFILE MENU ================= */

/* get elements */
const profileImg = document.getElementById("profile-img");
const menu = document.getElementById("profile-menu");
const themeToggle = document.getElementById("themeToggle");

/* toggle profile menu on click */
profileImg.addEventListener("click", (e) => {
    e.stopPropagation();
    menu.classList.toggle("active");
});

/* close profile menu when clicking outside */
document.addEventListener("click", (e) => {
    if (!menu.contains(e.target) && !profileImg.contains(e.target)) {
        menu.classList.remove("active");
    }
});


/* ================= DARK MODE ================= */

/* toggle dark mode */
themeToggle.addEventListener("click", (e) => {
    e.stopPropagation();

    document.body.classList.toggle("dark");

    /* update button text */
    if (document.body.classList.contains("dark")) {
        themeToggle.innerHTML = "☀️ Light Mode";
    } else {
        themeToggle.innerHTML = "🌙 Dark Mode";
    }
});

console.log("JS LOADED");


/* ================= SEARCH (FIXED CLEAN VERSION) ================= */

/* defined only once (removed duplicates) */

const searchBox = document.getElementById("searchContainer");
const searchBtn = document.getElementById("searchBtn");
const closeSearch = document.getElementById("closeSearch");
const categories = document.querySelector(".top-navBottom");   /* category bar */


/* ================= OPEN SEARCH ================= */

/* open search (mobile only) */
searchBtn.addEventListener("click", () => {
    if (window.innerWidth <= 767) {
        searchBox.classList.add("active");

        /* hide categories */
        categories.classList.add("collapsed");
    }
});


/* ================= CLOSE SEARCH ================= */

/* close search */
closeSearch.addEventListener("click", () => {
    searchBox.classList.remove("active");

    /* show categories */
    categories.classList.remove("collapsed");
});


/* ================= MIC PERMISSION ================= */

const micBtn = document.getElementById("micBtn");

/* request microphone permission */
micBtn.addEventListener("click", async () => {
    try {
        const stream = await navigator.mediaDevices.getUserMedia({ audio: true });

        console.log("Microphone access granted");

        /* stop mic after permission */
        stream.getTracks().forEach(track => track.stop());

    } catch (error) {

        console.error("Microphone access denied:", error);
        alert("Please allow microphone access!");
    }
});


/* ================= SIDEBAR (DESKTOP) ================= */

const menuBtn = document.getElementById("menuBtn");
const sidebar = document.querySelector(".vertical-left-navBar");

/* toggle sidebar collapse */
menuBtn.addEventListener("click", () => {
    sidebar.classList.toggle("collapsed");
    categories.classList.toggle("collapsed");

    document.body.classList.toggle("sidebar-collapsed");
});


/* ================= SEARCH FILTER LOGIC ================= */

const searchInput = document.getElementById("searchBar");
const filterWrapper = document.getElementById("search-filter");


/* ================= SHOW FILTER ================= */

/* show filter when typing */
searchInput.addEventListener("input", () => {

    if (searchInput.value.trim() !== "") {

        /* activate filter wrapper */
        filterWrapper.classList.add("active");

    } else {

        /* hide filter wrapper */
        filterWrapper.classList.remove("active");
    }
});


/* ================= HIDE FILTER ================= */

/* hide filter when clicking outside */
document.addEventListener("click", (e) => {

    if (!filterWrapper.contains(e.target) && !searchInput.contains(e.target)) {

        filterWrapper.classList.remove("active");
    }
});


/* ================= FILTER SELECT ================= */

/* handle filter item selection */
document.querySelectorAll(".filter-item").forEach(btn => {

    btn.addEventListener("click", () => {

        /* remove active from all */
        document.querySelectorAll(".filter-item")
            .forEach(b => b.classList.remove("active"));

        /* set active on clicked */
        btn.classList.add("active");
    });
});