function smoothScroll(target) {
    const element = document.querySelector(target);
    if (element) {
        element.scrollIntoView({
            behavior: 'smooth',
            block: 'start'
        });
    }
}

document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        
        this.classList.add('transform', 'scale-95', 'transition', 'duration-100');
        
        setTimeout(() => {
            this.classList.remove('transform', 'scale-95', 'transition', 'duration-100');
        }, 100);

        const target = this.getAttribute('href');
        smoothScroll(target);
    });
});

document.getElementById('registrationForm').addEventListener('submit', function(event) {
    event.preventDefault();
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const phone = document.getElementById('phone').value;

    if (name && email && phone) {
        alert(`Terima kasih, ${name}! Anda berhasil mendaftar.`);
        this.reset(); // Reset formulir
    } else {
        alert('Mohon lengkapi semua field pendaftaran.');
    }
});