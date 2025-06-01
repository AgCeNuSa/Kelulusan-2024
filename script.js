// Create stars background
        document.addEventListener('DOMContentLoaded', function() {
            const starsContainer = document.getElementById('stars-container');
            const starCount = 100;
            
            if (starsContainer) {
                for (let i = 0; i < starCount; i++) {
                    const star = document.createElement('div');
                    star.classList.add('stars');
                    star.style.left = `${Math.random() * 100}%`;
                    star.style.top = `${Math.random() * 100}%`;
                    star.style.animationDelay = `${Math.random() * 5}s`;
                    starsContainer.appendChild(star);
                }
            }
            
            // Countdown Timer
            const countDownDate = new Date("Jun 2, 2025 00:00:00").getTime();
            
            function updateCountdown() {
                const now = new Date().getTime();
                const distance = countDownDate - now;
                
                const days = Math.floor(distance / (1000 * 60 * 60 * 24));
                const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
                const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
                const seconds = Math.floor((distance % (1000 * 60)) / 1000);
                
                const daysElem = document.getElementById("days");
                const hoursElem = document.getElementById("hours");
                const minutesElem = document.getElementById("minutes");
                const secondsElem = document.getElementById("seconds");
                if (daysElem && hoursElem && minutesElem && secondsElem) {
                    daysElem.innerHTML = days.toString().padStart(2, '0');
                    hoursElem.innerHTML = hours.toString().padStart(2, '0');
                    minutesElem.innerHTML = minutes.toString().padStart(2, '0');
                    secondsElem.innerHTML = seconds.toString().padStart(2, '0');
                }
            }
            
            updateCountdown();
            setInterval(updateCountdown, 1000);
            
            // Button Event Listeners
            const checkBtn = document.getElementById('check-btn');
            if (checkBtn) {
                checkBtn.addEventListener('click', function() {
                    document.getElementById('welcome-page').classList.add('hidden');
                    document.getElementById('result-page').classList.remove('hidden');
                    setTimeout(() => {
                        document.getElementById('name').focus();
                    }, 100);
                });
            }
            
            const backBtn = document.getElementById('back-btn');
            if (backBtn) {
                backBtn.addEventListener('click', function() {
                    document.getElementById('result-page')?.classList.add('hidden');
                    document.getElementById('welcome-page')?.classList.remove('hidden');
                });
            }
            
            const searchBtn = document.getElementById('search-btn');
            if (searchBtn) {
                searchBtn.addEventListener('click', function() {
                    const nameInput = document.getElementById('name');
                    const name = nameInput && nameInput.value ? nameInput.value.trim() : '';
                    const resultContainer = document.getElementById('result-container');
                    const graduationMessage = document.getElementById('graduation-message');
                    const notFoundMessage = document.getElementById('not-found-message');
                    const resultStatus = document.getElementById('result-status');
                    const studentName = document.getElementById('student-name');
                    const studentNisn = document.getElementById('student-nisn');
                    
                    if (resultContainer) {
                        resultContainer.classList.remove('hidden');
                    }
                    
                    // Sample data for demonstration
                    const students = [
                        { nisn: "0131697429", name: "APRILIA UTAMI" },
                        { nisn: "0133599156", name: "ADEVA MEISHA AZAHRA" },
                        { nisn: "0134417911", name: "ALYA RIZKIA MUKHBITA" },
                        { nisn: "0138425368", name: "ADZAM SYIFAUL DZIKRI" },
                        { nisn: "0139659764", name: "ALINADIF MAZDHAN HAMMAD" },
                        { nisn: "0133729131", name: "BASUKI WIBOWO" },
                        { nisn: "3131188862", name: "FARHAN ALI DASTAN SETIA ABQARI" },
                        { nisn: "3139393862", name: "FATHAN AL MAHESA ZHAFAR" },
                        { nisn: "3131331815", name: "GALANG HAFIZ ALKAZ" },
                        { nisn: "3133751270", name: "HAFIZ ANDIKA AGLENSY" },
                        { nisn: "0132852236", name: "IQBAL ZAINURI ILHAM" },
                        { nisn: "0126168641", name: "MUTHIATUN SHOBRIYYAH" },
                        { nisn: "0121905929", name: "MARATULLATIFA" },
                        { nisn: "0123990035", name: "NAURA DIKTA AZIZAH" },
                        { nisn: "0135411147", name: "NAURA RIFATUL AINI" },
                        { nisn: "0131630580", name: "PRASASTI AJENG KARTIKA" },
                        { nisn: "0132398612", name: "REINISSA ZHAFIRA RAMADANI" },
                        { nisn: "0137664134", name: "RESTI MAHARANI" },
                        { nisn: "0133545649", name: "SEPTIAN DWI CAHYO" },
                        { nisn: "0138493532", name: "SAHILLA CESYA AURORA" },
                        { nisn: "0136531491", name: "VIONA AUDRY CANTIKA" },
                        { nisn: "3123521621", name: "ALDI PRASETIYO" },
                        { nisn: "0125916283", name: "Q NAYLA EVIRA" }
                    ];
                    
                    const student = students.find(
    s => s.name.trim().toLowerCase() === name.toLowerCase()
);
                    
                    if (student) {
                        if (graduationMessage) {
                            graduationMessage.classList.remove('hidden');
                        }
                        if (notFoundMessage) {
                            notFoundMessage.classList.add('hidden');
                        }
                        if (resultStatus) {
                            resultStatus.innerHTML = `<div class="inline-block px-6 py-2 bg-green-100 text-green-800 rounded-full font-bold text-lg">LULUS</div>`;
                        }
                        if (studentName) {
                            studentName.textContent = student.name;
                        }
                        if (studentNisn) {
                            studentNisn.textContent = `NISN: ${student.nisn}`;
                        }
                        
                        // Create spectacular fireworks for successful result
                        createSpectacularFireworks();
                        
                        // Show celebration texts
                        showCelebrationTexts();
                    } else {
                        if (graduationMessage) {
                            graduationMessage.classList.add('hidden');
                        }
                        if (notFoundMessage) {
                            notFoundMessage.classList.remove('hidden');
                        }
                        if (resultStatus) {
                            resultStatus.innerHTML = '';
                        }
                        if (studentName) {
                            studentName.textContent = '';
                        }
                        if (studentNisn) {
                            studentNisn.textContent = '';
                        }
                    }
                });
            }
            
            document.getElementById('name').addEventListener('keydown', function(e) {
                if (e.key === 'Enter') {
                    e.preventDefault();
                    document.getElementById('search-btn').click();
                }
            });
        });
        
        // Create confetti effect
        function createConfetti() {
            const confettiCount = 150;
            const container = document.body;
            
            for (let i = 0; i < confettiCount; i++) {
                const confetti = document.createElement('div');
                confetti.classList.add('confetti');
                
                // Random position
                confetti.style.left = Math.random() * 100 + 'vw';
                
                // Random color
                const colors = ['#22d3ee', '#4f46e5', '#c026d3', '#fbbf24', '#34d399', '#ec4899', '#f43f5e', '#8b5cf6'];
                confetti.style.backgroundColor = colors[Math.floor(Math.random() * colors.length)];
                
                // Random size
                const size = Math.random() * 12 + 5;
                confetti.style.width = size + 'px';
                confetti.style.height = size + 'px';
                
                // Random shape
                if (Math.random() > 0.5) {
                    confetti.style.borderRadius = '50%';
                } else if (Math.random() > 0.5) {
                    confetti.style.borderRadius = '0';
                    confetti.style.transform = `rotate(${Math.random() * 360}deg)`;
                } else {
                    confetti.style.width = size / 2 + 'px';
                    confetti.style.height = size + 'px';
                    confetti.style.borderRadius = '50% 50% 0 0';
                }
                
                // Random animation duration
                confetti.style.animationDuration = (Math.random() * 3 + 2) + 's';
                
                // Random delay
                confetti.style.animationDelay = (Math.random() * 2) + 's';
                
                container.appendChild(confetti);
                
                // Remove after animation completes
                setTimeout(() => {
                    confetti.remove();
                }, 5000);
            }
        }
        
        // Create spectacular fireworks effect
        function createSpectacularFireworks() {
            const fireworksContainer = document.getElementById('fireworks-container');
            const colors = ['#22d3ee', '#4f46e5', '#c026d3', '#fbbf24', '#34d399', '#ec4899', '#f43f5e', '#8b5cf6'];
            
            // Clear any existing fireworks
            if (!fireworksContainer) return;
            fireworksContainer.innerHTML = '';
            
            // Create confetti rain
            createConfetti();
            
            // Launch multiple fireworks in sequence
            for (let i = 0; i < 15; i++) {
                setTimeout(() => {
                    launchFirework(fireworksContainer, colors);
                }, i * 400);
            }
            
            // Launch rockets from bottom
            for (let i = 0; i < 10; i++) {
                setTimeout(() => {
                    launchRocket(fireworksContainer, colors);
                }, i * 600 + 1000);
            }
        }
        
        function launchFirework(container, colors) {
            // Create the main firework element
            const firework = document.createElement('div');
            firework.classList.add('firework');
            
            // Random position (x: 10%-90% of screen, y: 10%-70% of screen)
            const posX = 10 + Math.random() * 80;
            const posY = 10 + Math.random() * 60;
            firework.style.top = `${posY}%`;
            firework.style.left = `${posX}%`;
            
            // Random color
            const color = colors[Math.floor(Math.random() * colors.length)];
            firework.style.backgroundColor = color;
            firework.style.boxShadow = `0 0 10px ${color}, 0 0 20px ${color}`;
            
            // Add animation
            firework.style.animation = 'firework-animation 0.5s forwards';
            
            container.appendChild(firework);
            
            // Create particles after the main firework animation
            setTimeout(() => {
                createParticles(container, posX, posY, color, colors);
                firework.remove();
            }, 500);
        }
        
        function createParticles(container, x, y, mainColor, colors) {
            const particleCount = 100; // Increased particle count
            
            for (let i = 0; i < particleCount; i++) {
                const particle = document.createElement('div');
                particle.classList.add('particle');
                
                // Position at the firework center
                particle.style.top = `${y}%`;
                particle.style.left = `${x}%`;
                
                // Random color (either main color or random)
                const useMainColor = Math.random() > 0.3;
                const color = useMainColor ? mainColor : colors[Math.floor(Math.random() * colors.length)];
                particle.style.backgroundColor = color;
                particle.style.boxShadow = `0 0 3px ${color}, 0 0 5px ${color}`;
                
                // Random size
                const size = Math.random() * 6 + 2;
                particle.style.width = `${size}px`;
                particle.style.height = `${size}px`;
                
                // Random direction
                const angle = Math.random() * Math.PI * 2;
                const distance = Math.random() * 150 + 50; // Increased distance
                const xMove = Math.cos(angle) * distance;
                const yMove = Math.sin(angle) * distance;
                
                // Set CSS variables for the animation
                particle.style.setProperty('--x', `${xMove}px`);
                particle.style.setProperty('--y', `${yMove}px`);
                
                // Add animation
                particle.style.animation = `particle-animation ${Math.random() * 1.5 + 1}s forwards`;
                
                container.appendChild(particle);
                
                // Remove after animation completes
                setTimeout(() => {
                    particle.remove();
                }, 2500);
            }
            
            // Add sparkles for extra effect
            createSparkles(container, x, y, colors);
        }
        
        function createSparkles(container, x, y, colors) {
            const sparkleCount = 30;
            
            for (let i = 0; i < sparkleCount; i++) {
                setTimeout(() => {
                    const sparkle = document.createElement('div');
                    sparkle.classList.add('sparkle');
                    
                    // Position near the firework center with some randomness
                    const offsetX = (Math.random() - 0.5) * 40;
                    const offsetY = (Math.random() - 0.5) * 40;
                    sparkle.style.top = `calc(${y}% + ${offsetY}px)`;
                    sparkle.style.left = `calc(${x}% + ${offsetX}px)`;
                    
                    // Random color
                    const color = colors[Math.floor(Math.random() * colors.length)];
                    sparkle.style.backgroundColor = color;
                    sparkle.style.boxShadow = `0 0 5px ${color}, 0 0 10px ${color}`;
                    
                    // Random size
                    const size = Math.random() * 3 + 1;
                    sparkle.style.width = `${size}px`;
                    sparkle.style.height = `${size}px`;
                    
                    // Random direction
                    const angle = Math.random() * Math.PI * 2;
                    const distance = Math.random() * 30 + 10;
                    const xMove = Math.cos(angle) * distance;
                    const yMove = Math.sin(angle) * distance;
                    
                    // Set CSS variables for the animation
                    sparkle.style.setProperty('--x', `${xMove}px`);
                    sparkle.style.setProperty('--y', `${yMove}px`);
                    
                    // Add animation
                    sparkle.style.animation = `sparkle-animation ${Math.random() * 0.8 + 0.5}s forwards`;
                    
                    container.appendChild(sparkle);
                    
                    // Remove after animation completes
                    setTimeout(() => {
                        sparkle.remove();
                    }, 1300);
                }, i * 50);
            }
        }
        
        function launchRocket(container, colors) {
            const rocket = document.createElement('div');
            rocket.classList.add('rocket');
            
            // Random horizontal position
            const posX = 10 + Math.random() * 80;
            rocket.style.left = `${posX}%`;
            rocket.style.bottom = '0';
            
            // Random target height
            const targetY = -(20 + Math.random() * 60);
            rocket.style.setProperty('--target-y', `${targetY}vh`);
            
            // Random color
            const color = colors[Math.floor(Math.random() * colors.length)];
            rocket.style.background = `linear-gradient(to top, ${color}, #ffffff)`;
            rocket.style.boxShadow = `0 0 10px ${color}, 0 0 20px ${color}`;
            
            // Add animation
            rocket.style.animation = `rocket-animation ${Math.random() * 0.5 + 0.8}s forwards`;
            
            container.appendChild(rocket);
            
            // Create explosion at the end of rocket path
            setTimeout(() => {
                // Calculate where the rocket will be when it explodes
                const rocketRect = rocket.getBoundingClientRect();
                const containerRect = container.getBoundingClientRect();
                
                const explosionX = ((rocketRect.left + rocketRect.width/2) - containerRect.left) / containerRect.width * 100;
                const explosionY = ((rocketRect.top + rocketRect.height/2) - containerRect.top) / containerRect.height * 100;
                
                createParticles(container, explosionX, explosionY, color, colors);
                rocket.remove();
            }, (Math.random() * 0.5 + 0.8) * 1000);
        }
        
        function showCelebrationTexts() {
            const container = document.getElementById('fireworks-container');
            const celebrations = [
                "SELAMAT!", 
                "HEBAT!", 
                "LULUS!", 
                "SUKSES!", 
                "BRAVO!"
            ];
            
            const colors = ['#22d3ee', '#4f46e5', '#c026d3', '#fbbf24', '#34d399', '#ec4899'];
            
            for (let i = 0; i < celebrations.length; i++) {
                setTimeout(() => {
                    const text = document.createElement('div');
                    text.classList.add('celebration-text');
                    text.textContent = celebrations[i];
                    
                    // Random position
                    const posX = 20 + Math.random() * 60;
                    const posY = 20 + Math.random() * 60;
                    text.style.left = `${posX}%`;
                    text.style.top = `${posY}%`;
                    
                    // Random color
                    const color = colors[Math.floor(Math.random() * colors.length)];
                    text.style.color = color;
                    text.style.textShadow = `0 0 10px ${color}, 0 0 20px ${color}`;
                    
                    if (container) {
                        container.appendChild(text);
                    }
                    
                    // Remove after animation completes
                    setTimeout(() => {
                        text.remove();
                    }, 2000);
                }, i * 800 + 500);
            }
        }
        
        // Tanggal pengumuman: 2 Juni 2025, 10:00:00 UTC+7
const announcementDate = new Date('2025-06-02T03:00:00Z'); // 10:00 WIB (UTC+7)
const checkBtn = document.getElementById('check-btn');

// Fungsi update tombol
function updateCheckButtonState() {
    const now = new Date();
    if (now < announcementDate) {
        checkBtn.disabled = true;
        checkBtn.classList.add('opacity-60', 'cursor-not-allowed');
        checkBtn.setAttribute('title', 'Cek kelulusan hanya bisa diakses pada 2 Juni 2025 pukul 10:00 WIB');
    } else {
        checkBtn.disabled = false;
        checkBtn.classList.remove('opacity-60', 'cursor-not-allowed');
        checkBtn.removeAttribute('title');
    }
}

// Jalankan saat halaman dimuat
updateCheckButtonState();

// Update otomatis setiap detik agar tombol aktif tanpa reload
setInterval(updateCheckButtonState, 1000);
