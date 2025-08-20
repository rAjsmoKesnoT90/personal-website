// main.js

document.addEventListener("DOMContentLoaded", () => {

    /* =========================
       HOME PAGE INTERACTIONS
    ========================== */
    if (document.body.contains(document.querySelector(".home"))) {
        // Example: Smooth scroll for nav links
        const navLinks = document.querySelectorAll(".nav-links a");
        navLinks.forEach(link => {
            link.addEventListener("click", (e) => {
                if (link.getAttribute("href").startsWith("#")) {
                    e.preventDefault();
                    document.querySelector(link.getAttribute("href"))
                        .scrollIntoView({ behavior: "smooth" });
                }
            });
        });

        // Simple text fade-in (if you add .fade-text)
        const fadeText = document.querySelectorAll(".fade-text");
        fadeText.forEach((el, i) => {
            setTimeout(() => {
                el.style.opacity = "1";
                el.style.transform = "translateY(0)";
            }, i * 300);
        });
    }

    /* =========================
       ABOUT PAGE INTERACTIONS
    ========================== */
    if (document.body.contains(document.querySelector(".about"))) {
        // Example: Toggle bio/extra info
        const toggleBtn = document.querySelector(".toggle-info");
        const extraInfo = document.querySelector(".extra-info");
        
        if (toggleBtn && extraInfo) {
            toggleBtn.addEventListener("click", () => {
                extraInfo.classList.toggle("visible");
            });
        }
    }

    /* =========================
       SKILLS & PROJECTS PAGE
    ========================== */
    if (document.body.contains(document.querySelector(".projects"))) {
        // Filter projects
        const filterButtons = document.querySelectorAll(".filter-btn");
        const projects = document.querySelectorAll(".project-card");

        filterButtons.forEach(btn => {
            btn.addEventListener("click", () => {
                const category = btn.getAttribute("data-category");

                projects.forEach(project => {
                    if (category === "all" || project.classList.contains(category)) {
                        project.style.display = "block";
                    } else {
                        project.style.display = "none";
                    }
                });

                // Highlight active filter
                filterButtons.forEach(b => b.classList.remove("active"));
                btn.classList.add("active");
            });
        });
    }