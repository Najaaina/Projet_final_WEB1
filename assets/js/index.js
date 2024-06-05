function openNav() {
    document.getElementById("mySidenav").style.width = "250px";
}

/* Set the width of the side navigation to 0 */
function closeNav() {
    document.getElementById("mySidenav").style.width = "0";
}

// script.js
window.addEventListener('scroll', function() {
    const brand = document.getElementById('brand');
    
    if(window.scrollY) {
        brand.classList.add('bg-scroll');
    } else {
        brand.classList.remove('bg-scroll');
    }
});
