window.addEventListener('load', function () {
    document.getElementById('preloader').style.display = 'none';
    // Afișează conținutul paginii
    document.getElementById('content').style.display = 'block';
});
window.addEventListener('scroll', function() {
    const parallax = document.querySelector('.parallax');
    let offset = window.pageYOffset; 
    parallax.style.backgroundPosition = 'center ' + (offset * 0.5) + 'px';
});

// Preloader 
window.addEventListener('load', function() {
    document.getElementById('preloader').style.display = 'none';
    document.getElementById('content').style.display = 'block';
});

window.onscroll = function() {
    if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
        document.getElementById("scrollTop").style.display = "block";
    } else {
        document.getElementById("scrollTop").style.display = "none";
    }
};

function scrollToTop() {
    window.scrollTo({ top: 0, behavior: 'smooth' });
}
