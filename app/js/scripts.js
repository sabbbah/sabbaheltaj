lucide.createIcons();
// AOS.init();
// import AOS from 'aos';
// import 'aos/dist/aos.css';

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

let anchorLink = $(".links a");

$(".menu").click(function () {
    // anime({
    //     targets: anchorLink,
    //     translateX: 0,
    //     delay: anime.stagger(100, { start: 500 }) // delay starts at 500ms then increase by 100ms for each elements.
    // });

    $(".navbar .links").toggle();
    $(".overlay").toggle();
})


/*
$(document).ready(function () {
    // Split text into character spans
    $(".highlighted .text, .rest-of-title").each(function () {
        const text = $(this).text();
        $(this).html(
            text.split("").map((char) =>
                `<span class="char">${char === " " ? "&nbsp;" : char}</span>`
            ).join("")
        );
    });

    // Initialize timelines array if it doesn't exist
    window.timelines = window.timelines || [];

    // Create animation timeline
    const tl1 = gsap.timeline({ paused: true });
    tl1.to(".style-1 .char", {
        y: 0,
        opacity: 1,
        duration: 1,
        ease: "power3.out",
        stagger: {
            amount: 0.6,
            ease: "power2.inOut"
        }
    });

    // Store timeline in global array
    window.timelines.push(tl1);

    // Start animation when window finishes loading
    window.addEventListener('load', function () {
        window.timelines.forEach((tl) => {
            tl.restart();
        });
    });
});
*/