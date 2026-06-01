function createHeart() {
            const heart = document.createElement('div');
            heart.className = 'heart text-4xl';
            heart.innerHTML = ['❤️', '💖', '💗', '💘'][Math.floor(Math.random() * 4)];
            
            const left = Math.random() * 100;
            heart.style.left = `${left}vw`;
            heart.style.animationDuration = `${Math.random() * 6 + 7}s`;
            heart.style.fontSize = `${Math.random() * 20 + 25}px`;
            heart.style.opacity = Math.random() * 0.6 + 0.4;
            
            document.getElementById('hearts-container').appendChild(heart);
            
            setTimeout(() => {
                heart.remove();
            }, 15000);
        }
        
        // Generate floating hearts
        function startHearts() {
            setInterval(() => {
                if (Math.random() > 0.4) createHeart();
            }, 300);
        }
        
        // Navigation
        let currentPage = 'home';
        
        function navigateTo(page) {
            document.querySelectorAll('section').forEach(section => {
                section.classList.add('hidden');
            });
            
            document.getElementById(page).classList.remove('hidden');
            
            // Update active nav
            document.querySelectorAll('.nav-link').forEach(link => {
                link.classList.remove('active', 'text-rose-400');
                if (link.getAttribute('href') === `#${page}`) {
                    link.classList.add('active', 'text-rose-400');
                }
            });
            
            currentPage = page;
        }
        
        // Send heart effect
        function sendHeart() {
            const notif = document.createElement('div');
            notif.className = 'fixed bottom-10 right-10 bg-rose-500 text-white px-6 py-3 rounded-2xl flex items-center gap-3 shadow-2xl z-50';
            notif.innerHTML = `
                ❤️ Heart sent to her!
                <span class="text-xs opacity-70">She felt it</span>
            `;
            document.body.appendChild(notif);
            
            setTimeout(() => {
                notif.style.transition = 'all 0.6s';
                notif.style.opacity = '0';
                notif.style.transform = 'translateY(20px)';
                setTimeout(() => notif.remove(), 600);
            }, 2200);
            
            // Extra hearts
            for (let i = 0; i < 8; i++) {
                setTimeout(() => createHeart(), i * 80);
            }
        }
        
        // Keyboard navigation
        document.addEventListener('keydown', (e) => {
            if (e.key === "ArrowRight") {
                const pages = ['home', 'apology', 'poems'];
                let idx = pages.indexOf(currentPage);
                navigateTo(pages[(idx + 1) % pages.length]);
            }
        });
        
        // Initialize
        window.onload = function() {
            startHearts();
            // Show home by default
            document.getElementById('home').classList.remove('hidden');
            
            // Add some initial hearts
            for (let i = 0; i < 15; i++) {
                setTimeout(createHeart, i * 80);
            }
            
            console.log('%c❤️ Built with love for the Daughter of Rizwan Irshad ❤️', 'color: #e11d48; font-family: Dancing Script; font-size: 18px');
        };