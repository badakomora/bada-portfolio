const tl = gsap.timeline({ defaults: { ease: "power1.out"}});

tl.to('.text', {y: "0%", duration: 1, stagger: 0.25});
tl.to('.slider', {y: "-100%", duration: 1.5, delay: 0.5} );
tl.to('.intro', {y: "-100%", duration: 1.5}, "-=1");
tl.fromTo('nav', {opacity: 0}, {opacity: 1, duration: 1});
tl.fromTo('.big-text', {opacity: 0}, {opacity: 1, duration: 1});


// window.onscroll = () => {
//     const nav = document.querySelector('#navbar');
//     if(this.scroll <= 10) nav.className = ''; else nav.className = 'scroll';
//   };


// function openNav() {
//     document.getElementById("mySidebar").style.width = "100%";
//     document.getElementById("mySidebar").style.display = "block";
//     document.getElementById("barclose").style.display = "none";
// }

// function closeNav() {
//     document.getElementById("mySidebar").style.display = "none";
// }

$(function() {
    $('a[href*=\\#]:not([href=\\#])').on('click', function() {
        var target = $(this.hash);
        target = target.length ? target : $('[name=' + this.hash.substr(1) +']');
        if (target.length) {
            $('html,body').animate({
                scrollTop: target.offset().top
            }, 1000);
            return false;
        }
    });
});