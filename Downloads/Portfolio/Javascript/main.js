function toggleMenu(){
    const menu = document.querySelector(".menu-links");
    const icon = document.querySelector(".ham-icon");
    menu.classList.toggle("open");
    icon.classList.toggle("open");
}
const projectsContainer= document.getElementById('projectsContainer');
const arrowicon = document.querySelector('.right_arrow');
function checkOverflow() {
    arrowIcon.style.display = projectsContainer.scrollWidth > projectsContainer.clientWidth ? 'block' : 'none';
}

function scrollProjects(direction) {
    const scrollAmount = 300; // Adjust the scroll distance as needed

    if (direction === 'right') {
        projectsContainer.scrollLeft += scrollAmount;
    } else if (direction === 'left') {
        projectsContainer.scrollLeft -= scrollAmount;
    }

    checkOverflow();
}

// Check for overflow on page load and window resize
window.addEventListener('load', checkOverflow);
window.addEventListener('resize', checkOverflow);