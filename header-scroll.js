// JavaScript untuk mengatur perilaku header saat scrolling
document.addEventListener('DOMContentLoaded', function() {
    const header = document.querySelector('header');
    
    // Tambahkan kelas untuk memastikan header selalu terlihat
    header.classList.add('always-visible');
    
    // Tidak perlu menambahkan event listener untuk scroll karena header akan selalu terlihat
    // Namun, kita bisa menambahkan efek shadow saat scroll untuk memberikan kesan kedalaman
    window.addEventListener('scroll', function() {
        if (window.scrollY > 10) {
            header.classList.add('scrolled');
        } else {
            header.classList.remove('scrolled');
        }
    });
});
