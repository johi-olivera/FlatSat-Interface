// Seleccionar elementos del DOM
const openMenu = document.getElementById('openmenu');
const closeMenu = document.getElementById('closemenu');
const nav = document.getElementById('nav');


// Función para abrir el menú
openMenu.addEventListener('click', () => {
    nav.classList.add('visible');
});

// Función para cerrar el menú
closeMenu.addEventListener('click', () => {
    nav.classList.remove('visible');
});

// Cerrar el menú si se hace clic fuera de él
document.addEventListener('click', (e) => {
    if (!nav.contains(e.target) && !openMenu.contains(e.target)) {
        nav.classList.remove('visible');
    }
});

document.querySelectorAll('.module').forEach(module => {
    module.addEventListener('click', function() {
        // Eliminar la clase 'active' de todos los módulos
        document.querySelectorAll('.module').forEach(m => m.classList.remove('active'));
        // Agregar la clase 'active' al módulo clickeado
        this.classList.add('active');
        
        // Hacer que los otros módulos estén en segundo plano
        document.querySelectorAll('.module').forEach(m => {
            if (m !== this) {
                m.classList.add('background');
            } else {
                m.classList.remove('background');
            }
        });
        
        // Activar el fondo oscuro
        document.querySelector('.modules-container').classList.add('active');
    });
});

// Restaurar el estado inicial cuando se hace clic en el fondo
document.querySelector('.modules-container').addEventListener('click', function(e) {
    if (e.target === this) {
        // Eliminar la clase 'active' de todos los módulos
        document.querySelectorAll('.module').forEach(m => {
            m.classList.remove('active');
            m.classList.remove('background');
        });
        // Desactivar el fondo oscuro
        this.classList.remove('active');
    }
});