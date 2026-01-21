// Inisialisasi variabel dan fungsi
document.addEventListener('DOMContentLoaded', function () {
    // Set tanggal dan tahun saat ini
    const currentDate = new Date();
    document.getElementById('current-date').textContent = currentDate.toLocaleDateString('id-ID', {
        weekday: 'long',
        year: 'numeric',
        month: 'long',
        day: 'numeric'
    });

    document.getElementById('current-year').textContent = currentDate.getFullYear();
    
    // Navigasi antar section
    const navLinks = document.querySelectorAll('.nav-link');
    const sections = document.querySelectorAll('.section');
    const primaryBtns = document.querySelectorAll('.btn.btn-primary');
    const secondaryBtns = document.querySelectorAll('.btn.btn-secondary');

    [...navLinks, ...primaryBtns, ...secondaryBtns].forEach(link => {
        link.addEventListener('click', function (e) {
            e.preventDefault();

            // Hapus kelas active dari semua link
            [...navLinks, ...primaryBtns, ...secondaryBtns].forEach(item => item.classList.remove('active'));

            // Tambah kelas active ke link yang diklik
            this.classList.add('active');

            // Sembunyikan semua section
            sections.forEach(section => section.classList.remove('active'));

            // Tampilkan section yang sesuai
            const targetId = this.getAttribute('href');
            document.querySelector(targetId).classList.add('active');

            // Efek animasi hacking saat berpindah section
            triggerHackingAnimation();
        });
    });


    



    // Efek typing untuk teks di home section
    const typingText = document.querySelector('.typing-text');
    if (typingText) {
        const text = "Welcome to Sunday's Exp"
        let i = 0;

        function typeWriter() {
            if (i < text.length) {
                typingText.innerHTML = text.substring(0, i + 1) + '<span class="highlight">|</span>';
                i++;
                setTimeout(typeWriter, 100);
            } else {
                typingText.innerHTML = text.substring(0, i) + '<span class="highlight">|</span>';
                // Blink cursor setelah selesai
                setInterval(() => {
                    const cursor = typingText.querySelector('.highlight');
                    cursor.style.visibility = cursor.style.visibility === 'hidden' ? 'visible' : 'hidden';
                }, 500);
            }
        }

        // Mulai efek typing setelah delay
        setTimeout(typeWriter, 500);
    }

    // Animasi untuk data flow di about section
    const dataNodes = document.querySelectorAll('.data-node');
    const connectionLines = document.querySelectorAll('.connection-line');

    function animateDataFlow() {
        dataNodes.forEach((node, index) => {
            // Reset posisi node
            node.style.transform = 'scale(1)';

            // Animasi node
            setTimeout(() => {
                node.style.transition = 'transform 0.5s ease';
                node.style.transform = 'scale(1.1)';

                // Kembali ke ukuran semula
                setTimeout(() => {
                    node.style.transform = 'scale(1)';
                }, 500);
            }, index * 300);
        });

        // Animasi garis koneksi
        connectionLines.forEach((line, index) => {
            line.style.width = '0';
            line.style.transition = 'width 1s ease';

            setTimeout(() => {
                if (index === 0) line.style.width = '100px';
                if (index === 1) line.style.width = '180px';
                if (index === 2) line.style.width = '100px';
            }, index * 300 + 300);

            // Reset animasi setelah selesai
            setTimeout(() => {
                line.style.width = '0';
            }, 3000);
        });

        // Ulangi animasi setiap 3.5 detik
        setTimeout(animateDataFlow, 3500);
    }

    // Mulai animasi data flow
    setTimeout(animateDataFlow, 1000);

    // Animasi skill bars saat section skills terlihat
    function animateSkillBars() {
        const skillLevels = document.querySelectorAll('.skill-level');
        skillLevels.forEach(level => {
            const width = level.style.width;
            level.style.width = '0';

            setTimeout(() => {
                level.style.transition = 'width 2s ease-out';
                level.style.width = width;
            }, 100);
        });
    }

    // Observer untuk trigger animasi skill bars saat section skills masuk viewport
    const skillsSection = document.getElementById('skills');
    if (skillsSection) {
        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    animateSkillBars();
                    observer.unobserve(entry.target);
                }
            });
        }, { threshold: 0.3 });

        observer.observe(skillsSection);
    }

    // Form submission handler
    const messageForm = document.getElementById('messageForm');
    if (messageForm) {
        messageForm.addEventListener('submit', function (e) {
            e.preventDefault();

            // Ambil nilai form
            const name = document.getElementById('name').value;
            const email = document.getElementById('email').value;
            const subject = document.getElementById('subject').value;
            const message = document.getElementById('message').value;

            // Tampilkan animasi hacking
            triggerHackingAnimation();

            // Simulasi pengiriman pesan
            setTimeout(() => {
                // Reset form
                messageForm.reset();

                // Tampilkan pesan sukses dalam bentuk terminal
                const terminalBox = document.querySelector('.terminal-box');
                const successMessage = document.createElement('p');
                successMessage.className = 'terminal-line';
                successMessage.style.color = '#00ff00';
                successMessage.innerHTML = '> Pesan berhasil dikirim! Terima kasih atas pesannya.';

                terminalBox.appendChild(successMessage);

                // Hapus pesan setelah beberapa detik
                setTimeout(() => {
                    successMessage.remove();
                }, 5000);
            }, 2000);
        });
    }

    // Fungsi untuk trigger animasi hacking
    function triggerHackingAnimation() {
        const hackingAnim = document.getElementById('hackingAnim');
        hackingAnim.style.display = 'flex';

        // Generate random binary code
        const binaryCode = document.querySelector('.binary-code');
        let binaryText = '';
        for (let i = 0; i < 100; i++) {
            for (let j = 0; j < 50; j++) {
                binaryText += Math.random() > 0.5 ? '1' : '0';
            }
            binaryText += '\n';
        }
        binaryCode.textContent = binaryText;

        // Sembunyikan animasi setelah 1.5 detik
        setTimeout(() => {
            hackingAnim.style.display = 'none';
        }, 1500);
    }

    // Efek matrix code untuk background home section
    function createMatrixEffect() {
        const matrixCode = document.querySelector('.matrix-code');
        if (!matrixCode) return;

        const chars = "01";
        const columns = Math.floor(window.innerWidth / 20);

        for (let i = 0; i < columns; i++) {
            const column = document.createElement('div');
            column.className = 'matrix-column';
            column.style.position = 'absolute';
            column.style.left = `${i * 20}px`;
            column.style.width = '20px';
            column.style.fontSize = '18px';
            column.style.color = '#00ff00';
            column.style.textShadow = '0 0 5px #00ff00';
            column.style.fontFamily = 'Source Code Pro, monospace';

            // Buat karakter untuk kolom
            let columnContent = '';
            const rows = 20;

            for (let j = 0; j < rows; j++) {
                const char = chars[Math.floor(Math.random() * chars.length)];
                columnContent += char;

                if (j < rows - 1) {
                    columnContent += '<br>';
                }
            }

            column.innerHTML = columnContent;
            matrixCode.appendChild(column);

            // Animasi kolom
            let position = -300;
            function animateColumn() {
                position += 2;
                column.style.top = `${position}px`;

                if (position < 150) {
                    requestAnimationFrame(animateColumn);
                } else {
                    // Reset kolom
                    position = -300;

                    // Update karakter secara acak
                    let newContent = '';
                    for (let j = 0; j < rows; j++) {
                        const char = chars[Math.floor(Math.random() * chars.length)];
                        newContent += char;

                        if (j < rows - 1) {
                            newContent += '<br>';
                        }
                    }
                    column.innerHTML = newContent;

                    requestAnimationFrame(animateColumn);
                }
            }

            // Delay start yang berbeda untuk setiap kolom
            setTimeout(() => {
                requestAnimationFrame(animateColumn);
            }, i * 100);
        }
    }

    // Jalankan efek matrix setelah halaman dimuat
    setTimeout(createMatrixEffect, 1000);

    // Navigasi dengan keyboard
    document.addEventListener('keydown', function (e) {
        const activeLink = document.querySelector('.nav-link.active');
        let activeIndex = 0;

        // Cari index dari link aktif
        navLinks.forEach((link, index) => {
            if (link === activeLink) {
                activeIndex = index;
            }
        });

        // Navigasi dengan Tab
        if (e.key === 'Tab') {
            e.preventDefault();

            // Tentukan link berikutnya
            let nextIndex;
            if (e.shiftKey) {
                // Shift+Tab untuk navigasi mundur
                nextIndex = activeIndex > 0 ? activeIndex - 1 : navLinks.length - 1;
            } else {
                // Tab untuk navigasi maju
                nextIndex = activeIndex < navLinks.length - 1 ? activeIndex + 1 : 0;
            }

            // Klik link berikutnya
            navLinks[nextIndex].click();
        }

        // Enter untuk trigger form submit jika fokus di form
        if (e.key === 'Enter' && e.target.tagName !== 'TEXTAREA' && e.target.tagName !== 'INPUT') {
            if (activeLink) {
                activeLink.click();
            }
        }
    });

    // Efek hover untuk project cards
    const projectCards = document.querySelectorAll('.project-card');
    projectCards.forEach(card => {
        card.addEventListener('mouseenter', function () {
            this.style.transform = 'translateY(-10px)';
            this.style.boxShadow = '0 15px 30px rgba(0, 255, 0, 0.3)';
        });

        card.addEventListener('mouseleave', function () {
            this.style.transform = 'translateY(0)';
            this.style.boxShadow = 'none';
        });
    });

    // Efek terminal button interaksi
    const terminalButtons = document.querySelectorAll('.terminal-buttons div');
    terminalButtons.forEach(button => {
        button.addEventListener('click', function () {
            // Efek visual saat diklik
            this.style.transform = 'scale(0.9)';
            setTimeout(() => {
                this.style.transform = 'scale(1)';
            }, 150);

            // Trigger hacking animation untuk close button
            if (this.classList.contains('close-btn')) {
                triggerHackingAnimation();

                // Tampilkan pesan "system shutdown" setelah animasi
                setTimeout(() => {
                    document.body.innerHTML = `
                    <div style="
                        background-color: #0a0a0a;
                        color: #00ff00;
                        height: 100vh;
                        display: flex;
                        flex-direction: column;
                        justify-content: center;
                        align-items: center;
                        font-family: 'Source Code Pro', monospace;
                        padding: 20px;
                        text-align: center;
                    ">
                        <h1 style="font-size: 36px; margin-bottom: 20px;">SYSTEM SHUTDOWN</h1>
                        <p style="font-size: 18px; margin-bottom: 30px;">Portofolio telah ditutup.</p>
                        <p style="font-size: 14px; color: #aaa;">Klik refresh untuk membuka kembali.</p>
                        <button onclick="window.location.reload()" style="
                            margin-top: 30px;
                            padding: 10px 20px;
                            background-color: #003300;
                            color: #00ff00;
                            border: 1px solid #00ff00;
                            border-radius: 5px;
                            font-family: 'Source Code Pro', monospace;
                            cursor: pointer;
                        ">RELOAD</button>
                    </div>
                    `;
                }, 2000);
            }
        });
    });
});