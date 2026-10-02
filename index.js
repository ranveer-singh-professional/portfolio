// Portfolio Interactions & Runtime Logic
document.addEventListener('DOMContentLoaded', () => {
    console.log("Ranveer Singh's Portfolio loaded successfully!");

    // Color Theme Switcher Functionality
    const themeDots = document.querySelectorAll('.theme-dot');
    const root = document.documentElement;

    // Load saved color theme preference from localStorage if available
    const savedAccent = localStorage.getItem('portfolio_accent');
    const savedGlow = localStorage.getItem('portfolio_glow');

    if (savedAccent && savedGlow) {
        root.style.setProperty('--accent', savedAccent);
        root.style.setProperty('--accent-glow', savedGlow);
        
        themeDots.forEach(dot => {
            if (dot.getAttribute('data-accent') === savedAccent) {
                dot.classList.add('active');
            } else {
                dot.classList.remove('active');
            }
        });
    } else {
        // Set first dot (Blue) as active by default
        if (themeDots.length > 0) {
            themeDots[0].classList.add('active');
        }
    }

    // Add click listeners to theme circles
    themeDots.forEach(dot => {
        dot.addEventListener('click', () => {
            const accent = dot.getAttribute('data-accent');
            const glow = dot.getAttribute('data-glow');

            // Apply new variables to root
            root.style.setProperty('--accent', accent);
            root.style.setProperty('--accent-glow', glow);

            // Update active ring style on circles
            themeDots.forEach(d => d.classList.remove('active'));
            dot.classList.add('active');

            // Save user preference
            localStorage.setItem('portfolio_accent', accent);
            localStorage.setItem('portfolio_glow', glow);
        });
    });
});