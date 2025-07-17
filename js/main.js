   // Initialize AOS animation library
        AOS.init({
            duration: 800,
            once: true,
            easing: 'ease-in-out',
        });

        // Mobile menu functionality
        const menuButton = document.querySelector('button[class*="md:hidden"]');
        const mobileMenu = document.getElementById('mobileMenu');
        const closeMenu = document.getElementById('closeMenu');

        menuButton.addEventListener('click', () => {
            mobileMenu.classList.remove('hidden');
            mobileMenu.classList.add('flex');
            document.body.style.overflow = 'hidden';
        });

        closeMenu.addEventListener('click', () => {
            mobileMenu.classList.add('hidden');
            mobileMenu.classList.remove('flex');
            document.body.style.overflow = '';
        });

        // Close mobile menu when clicking on a link
        document.querySelectorAll('#mobileMenu a').forEach(link => {
            link.addEventListener('click', () => {
                mobileMenu.classList.add('hidden');
                mobileMenu.classList.remove('flex');
                document.body.style.overflow = '';
            });
        });

        // Navbar scroll effect
        window.addEventListener('scroll', function() {
            const header = document.querySelector('header');
            if (window.scrollY > 100) {
                header.classList.add('bg-dark/95');
                header.classList.remove('bg-dark/80');
            } else {
                header.classList.add('bg-dark/80');
                header.classList.remove('bg-dark/95');
            }
        });

        // Glow effect for project cards
        const projectCards = document.querySelectorAll('.group.relative.overflow-hidden.rounded-lg');
        projectCards.forEach(card => {
            card.addEventListener('mouseenter', () => {
                card.style.boxShadow = '0 0 20px rgba(212, 175, 55, 0.4)';
            });
            card.addEventListener('mouseleave', () => {
                card.style.boxShadow = '';
            });
        });

            // Modal functions
    function openModal(title, imageUrl, description, tags, year) {
        document.getElementById('modalTitle').textContent = title;
        document.getElementById('modalImage').src = imageUrl;
        document.getElementById('modalImage').alt = title;
        document.getElementById('modalDescription').textContent = description;
        document.getElementById('modalYear').textContent = year;
        
        // Clear and add tags
        const tagsContainer = document.getElementById('modalTags');
        tagsContainer.innerHTML = '';
        tags.split(', ').forEach(tag => {
            const span = document.createElement('span');
            span.className = 'text-xs px-2 py-1 bg-gold/20 text-gold rounded-full';
            span.textContent = tag;
            tagsContainer.appendChild(span);
        });
        
        // Show modal
        document.getElementById('projectModal').classList.remove('hidden');
        document.body.style.overflow = 'hidden';
    }
    
    function closeModal() {
        document.getElementById('projectModal').classList.add('hidden');
        document.body.style.overflow = '';
    }
    
    // Close modal when clicking outside content
    document.getElementById('projectModal').addEventListener('click', function(e) {
        if (e.target === this) {
            closeModal();
        }
    });
    
    // Close modal with Escape key
    document.addEventListener('keydown', function(e) {
        if (e.key === 'Escape' && !document.getElementById('projectModal').classList.contains('hidden')) {
            closeModal();
        }
    });