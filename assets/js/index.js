// Side navigation functions
function openNav() {
    document.getElementById("mySidenav").style.width = "250px";
}

function closeNav() {
    document.getElementById("mySidenav").style.width = "0";
}

// Change the pseudo nav at the top on scroll
window.addEventListener('scroll', function () {
    const brand = document.getElementById('brand');

    if (window.scrollY) {
        brand.classList.add('bg-scroll');
    } else {
        brand.classList.remove('bg-scroll');
    }
});