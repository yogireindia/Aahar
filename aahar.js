tailwind.config = {
    theme: {
      extend: {
        fontFamily: {
          'heading': ['"Playfair Display"', 'serif'],
          'body': ['Poppins', 'sans-serif'],
        },
        colors: {
          'coffee': {
            light: '#E6D5B8',
            DEFAULT: '#A47551',
            dark: '#6F4E37',
          }
        }
      }
    }
  }

  const menuToggle = document.getElementById('menu-toggle');
    const mobileMenu = document.getElementById('mobile-menu');

    menuToggle.addEventListener('click', () => {
        mobileMenu.classList.toggle('hidden');
    });

    // Close mobile menu when clicking outside
    document.addEventListener('click', (e) => {
        if (!menuToggle.contains(e.target) && !mobileMenu.contains(e.target)) {
            mobileMenu.classList.add('hidden');
        }
    });

    // Close mobile menu when window is resized to desktop size
    window.addEventListener('resize', () => {
        if (window.innerWidth >= 1024) { // lg breakpoint
            mobileMenu.classList.add('hidden');
        }
    });

document.getElementById('contact-link').addEventListener('click', function (e) {
    e.preventDefault(); // Prevent the default anchor behavior
    document.getElementById('contactus').scrollIntoView({ behavior: 'smooth' });
});

document.getElementById('about-link').addEventListener('click', function (e) {
    e.preventDefault(); // Prevent the default anchor behavior
    document.getElementById('mukulsection').scrollIntoView({ behavior: 'smooth' });
});



// Initialize Lucide icons
document.addEventListener('DOMContentLoaded', function() {
    // Initialize any icons if needed
    try {
        if (typeof lucide !== 'undefined') {
            lucide.createIcons();
        }
    } catch (e) {
        console.log('Using Font Awesome fallback icons');
    }


}




