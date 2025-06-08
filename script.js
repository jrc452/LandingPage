lucide.createIcons();
const sidebarItems = document.querySelectorAll(".sidebar-item");
const tabContents = document.querySelectorAll(".tab-content");

// Sidebar tab logic
sidebarItems.forEach(item => {
    item.addEventListener("click", () => {
        // Estilo visual
        sidebarItems.forEach(i => i.classList.remove("active"));
        item.classList.add("active");

        // Mostrar tab
        tabContents.forEach(tab => {
            tab.classList.remove("active");
            tab.style.display = "none";
        });

        const target = document.getElementById(item.dataset.tab);
        target.style.display = "block";
        void target.offsetWidth; // forzar reflujo para reiniciar animación
        target.classList.add("active");
    });
});

// Tema
document.getElementById("themeToggle").addEventListener("click", () => {
    document.body.classList.toggle("dark-theme");
    document.body.classList.toggle("light-theme");
});