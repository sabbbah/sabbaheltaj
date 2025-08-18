lucide.createIcons();

// AOS
AOS.init({
    // Global settings:
    disable: false, // accepts following values: 'phone', 'tablet', 'mobile', boolean, expression or function
    startEvent: 'DOMContentLoaded', // name of the event dispatched on the document, that AOS should initialize on
    initClassName: 'aos-init', // class applied after initialization
    animatedClassName: 'aos-animate', // class applied on animation
    useClassNames: false, // if true, will add content of `data-aos` as classes on scroll
    disableMutationObserver: false, // disables automatic mutations' detections (advanced)
    debounceDelay: 50, // the delay on debounce used while resizing window (advanced)
    throttleDelay: 99, // the delay on throttle used while scrolling the page (advanced)


    // Settings that can be overridden on per-element basis, by `data-aos-*` attributes:
    offset: 120, // offset (in px) from the original trigger point
    delay: 0, // values from 0 to 3000, with step 50ms
    duration: 400, // values from 0 to 3000, with step 50ms
    easing: 'ease', // default easing for AOS animations
    once: false, // whether animation should happen only once - while scrolling down
    mirror: false, // whether elements should animate out while scrolling past them
    anchorPlacement: 'top-bottom', // defines which position of the element regarding to window should trigger the animation

});


// CLICKING ON HUMBURGER ICON
// TO TOGGLE THE LINKS MENU
$(".menu").click(function () {
    $(".navbar .links").toggle(600);
});


// IF THE USER IS USING MOBILE PHONE
// HIDE THE LINKS MENU AFTER CLICKING
// ON EACH OF THE LINKS

let screenWidth = window.innerWidth;
if (screenWidth <= 500) {
    $(".links a").click(function () {
        $(".links").hide(1000);
    });
}


// TOGGLE THE TO-TOP-BUTTON
// ON THE SCROLLING 
$(window).scroll(function () {
    if (window.scrollY >= 500) {
        $(".navbar").addClass("navbarOnScroll");
        $(".toTop").css("right", "1.5rem");
    } else {
        $(".navbar").removeClass("navbarOnScroll");
        $(".toTop").css("right", "-20rem");
    }
})

if (window.scrollY >= 500) {
    $(".navbar").addClass("navbarOnScroll");
    $(".toTop").css("right", "1.5rem");
} else {
    $(".navbar").removeClass("navbarOnScroll");
    $(".toTop").css("right", "-20rem");
}

$(".toTop").click(function () {
    window.scrollTo({
        left: 0,
        top: 0,
        behavior: "smooth"
    });
});



// MATRIX BACKGROUND
const canvas = $("#matrixCanvas")[0];
const ctx = canvas.getContext('2d');

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

const chars = '0123456ABCDEF';
const fontSize = 16;
const cols = canvas.width / fontSize;
const drops = Array.from({ length: cols }).fill(1);


function draw() {
    ctx.fillStyle = 'rgba(255, 255, 255, 0.1)';
    ctx.fillRect(0, 0, canvas.width, canvas.height);

    ctx.fillStyle = 'rgb(75, 220, 75)';
    ctx.fillStyle = 'rgb(0, 193, 183)';
    ctx.font = `${fontSize}px monospace`;


    drops.forEach((y, ind) => {
        const txt = chars.charAt(Math.floor(Math.random() * chars.length));
        const x = ind * fontSize;
        ctx.fillText(txt, x, y * fontSize);

        if (y * fontSize > canvas.height && Math.random() > 0.975) {
            drops[ind] = 0;
        }
        drops[ind]++;
    });
}

// setInterval(() => { draw(); }, 40);