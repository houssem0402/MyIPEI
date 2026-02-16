document.addEventListener('DOMContentLoaded', () => {
    // Console log to verify file load
    console.log('MyIPEI Dashboard JavaScript loaded.');

    // Sidebar Toggle Logic for Mobile
    const sidebar = document.getElementById('sidebar');
    const toggleBtn = document.getElementById('toggle-sidebar');

    if (toggleBtn) {
        toggleBtn.addEventListener('click', () => {
            sidebar.classList.toggle('active');
        });
    }

    // Close sidebar when clicking outside on mobile
    document.addEventListener('click', (e) => {
        if (window.innerWidth <= 768) {
            if (sidebar && !sidebar.contains(e.target) && toggleBtn && !toggleBtn.contains(e.target) && sidebar.classList.contains('active')) {
                sidebar.classList.remove('active');
            }
        }
    });

    // Link highlighting based on current URL
    const currentPath = window.location.pathname.split('/').pop();
    const navLinksAnchors = document.querySelectorAll('.nav-links a, .bottom-menu a');

    navLinksAnchors.forEach(link => {
        const linkPath = link.getAttribute('href');
        // Remove active class first (in case HTML has hardcoded active class on wrong item)
        // But be careful not to remove it if it's the correct one and we rely on HTML
        // Best approach: remove 'active' from all parents first? 
        // No, let's just add to the correct one.
        // Actually, for a multi-page app, we should probably clear all first to be safe, 
        // though strictly speaking only one page is loaded at a time.
        // The HTML has `class="active"` on the <li>. 
        // We can trust the HTML or override it. 
        // Let's override to be sure.

        // Remove active class from all parents first
        if (link.parentElement.classList.contains('active')) {
            link.parentElement.classList.remove('active');
        }

        // Check for exact match
        if (linkPath === currentPath || (currentPath === '' && linkPath === 'index.html')) {
            link.parentElement.classList.add('active');
        }
        // specific handling for course sub-pages
        else if (linkPath === 'courses.html' && (
            currentPath === 'math2.html' ||
            currentPath === 'physics.html' ||
            currentPath === 'biology.html'
        )) {
            link.parentElement.classList.add('active');
        }
    });

    // --- Theme Handling ---
    const themeToggle = document.getElementById('theme-toggle');
    const body = document.body;

    // Check saved theme
    const savedTheme = localStorage.getItem('myipei-theme');
    if (savedTheme === 'dark') {
        body.classList.add('dark-mode');
        if (themeToggle) themeToggle.checked = true;
    }

    // Toggle event
    if (themeToggle) {
        themeToggle.addEventListener('change', () => {
            if (themeToggle.checked) {
                body.classList.add('dark-mode');
                localStorage.setItem('myipei-theme', 'dark');
            } else {
                body.classList.remove('dark-mode');
                localStorage.setItem('myipei-theme', 'light');
            }
        });
    }
});


function toggleCompletionPage(id) {
    const checkbox = document.getElementById('check-' + id);
    if (checkbox) {
        if (checkbox.checked) {
            localStorage.setItem('myipei-completed-' + id, 'true');
        } else {
            localStorage.removeItem('myipei-completed-' + id);
        }
    }
}

// Restore checkboxes and update icons on load
document.addEventListener('DOMContentLoaded', () => {
    // Check for Math 2 Ch 1 on the Chapter Page
    const math2ch1 = localStorage.getItem('myipei-completed-math2-ch1');
    const ch1Checkbox = document.getElementById('check-math2-ch1');
    if (math2ch1 === 'true' && ch1Checkbox) {
        ch1Checkbox.checked = true;
    }

    // Update icons on Course Detail Page (math2.html)
    const iconCh1 = document.getElementById('icon-math2-ch1');
    if (math2ch1 === 'true' && iconCh1) {
        iconCh1.className = 'bx bxs-check-circle chapter-status';
        iconCh1.style.color = 'var(--secondary-color)';
    }
});
