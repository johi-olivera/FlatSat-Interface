// Check login status
function checkLogin() {
    const isLoggedIn = localStorage.getItem('isLoggedIn');
    if (!isLoggedIn && !window.location.href.includes('login.html')) {
        window.location.href = '../login.html';
    }
}

// Run check on page load
checkLogin();

// Logout function
function logout() {
    localStorage.removeItem('isLoggedIn');
    localStorage.removeItem('username');
    window.location.href = '../login.html';
}

// Add logout handler
document.getElementById('logout-btn')?.addEventListener('click', logout);

// Menu functionality
const openMenu = document.getElementById('openmenu');
const closeMenu = document.getElementById('closemenu');
const nav = document.getElementById('nav');

openMenu?.addEventListener('click', () => {
    nav.classList.add('visible');
});

closeMenu?.addEventListener('click', () => {
    nav.classList.remove('visible');
});

document.addEventListener('click', (e) => {
    if (!nav.contains(e.target) && !openMenu.contains(e.target)) {
        nav.classList.remove('visible');
    }
});

// Module grid functionality
const modulesContainer = document.querySelector('.modules-container');
if (modulesContainer) {
    const modules = document.querySelectorAll('.module');
    let activeModule = null;
    let originalPositions = [];

    // Store original positions
    modules.forEach(module => {
        const rect = module.getBoundingClientRect();
        originalPositions.push({
            left: rect.left,
            top: rect.top
        });
    });

    modules.forEach((module, index) => {
        module.addEventListener('click', function() {
            if (activeModule === this) {
                // If clicking the active module, reset everything
                resetModules();
            } else {
                // Activate clicked module
                if (activeModule) {
                    resetModules();
                }
                
                activeModule = this;
                modules.forEach(m => m.style.transition = 'all 0.3s ease-in-out');
                
                // Make other modules static in their original positions
                modules.forEach((m, i) => {
                    if (m !== this) {
                        m.style.position = 'fixed';
                        m.style.left = originalPositions[i].left + 'px';
                        m.style.top = originalPositions[i].top + 'px';
                        m.classList.add('background');
                    }
                });

                // Activate selected module
                this.classList.add('active');
                modulesContainer.classList.add('active');
            }
        });
    });

    // Reset function
    function resetModules() {
        modules.forEach(m => {
            m.classList.remove('active', 'background');
            m.style.position = '';
            m.style.left = '';
            m.style.top = '';
        });
        modulesContainer.classList.remove('active');
        activeModule = null;
    }

    // Close on background click
    modulesContainer.addEventListener('click', function(e) {
        if (e.target === this && activeModule) {
            resetModules();
        }
    });
}