document.addEventListener('DOMContentLoaded', function() {
    // Bloquear scroll al hacer clic en el checkbox del menú hamburguesa
    const menuToggle = document.getElementById('menu-toggle');

    if (menuToggle) {  // Verificar si el menú toggle existe en la página actual
        menuToggle.addEventListener('change', function() {
            if (this.checked) {
                document.body.classList.add('no-scroll');
            } else {
                document.body.classList.remove('no-scroll');
            }
        });

        const menuLinks = document.querySelectorAll('.sidebar-nav a');
        menuLinks.forEach(link => {
            link.addEventListener('click', () => {
                menuToggle.checked = false;
                document.body.classList.remove('no-scroll');
            });
        });
    }
});