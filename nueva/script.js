lucide.createIcons();
const sidebarItems = document.querySelectorAll(".sidebar-item");
const tabContents = document.querySelectorAll(".tab-content");

// Sidebar tab logic
sidebarItems.forEach(item => {
    item.addEventListener("click", () => {
        document.getElementById(item.dataset.tab).scrollIntoView({ behavior: 'smooth' });
    });
});

// Tema
document.getElementById("themeToggle").addEventListener("click", () => {
    document.body.classList.toggle("dark-theme");
    document.body.classList.toggle("light-theme");
});

// Formulario
document.getElementById('contactForm').addEventListener('submit', function (event) {
    event.preventDefault(); // Evita el envío del formulario

    // Obtener los valores del formulario
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const message = document.getElementById('message').value;

    // Validar que todos los campos estén completos
    if (name && email && message) {
        // Mostrar mensaje de éxito
        document.getElementById('messageResponse').textContent = '¡Formulario enviado con éxito!';

        // Aquí podrías hacer algo más como enviar los datos a un servidor usando fetch() o AJAX
        console.log("Datos enviados: ", { name, email, message });
    } else {
        // Mostrar mensaje de error si faltan campos
        document.getElementById('messageResponse').textContent = 'Por favor, completa todos los campos.';
        document.getElementById('messageResponse').style.color = 'red';
    }

    // Limpiar el formulario
    document.getElementById('contactForm').reset();
});

document.getElementById('contactForm').addEventListener('reset', function (event) {
    document.getElementById('contactForm').reset(); // Limpiar el formulario
});