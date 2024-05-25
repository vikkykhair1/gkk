
const navigationMenu = document.querySelector("#nav-menu");
const reviewCardWrapper = document.querySelector(".review-card-wrapper");
const reviewTrack = document.querySelector(".review-track");
const reviewTrackReverse = document.querySelector(".review-track-reverse");
const links = document.querySelectorAll(".header-link > li");

const linksClickHandler = (e) => {
   document.querySelector(".active").classList.remove("active");
   e.classList.add("active");
};
const pauseTracks = () => {
   reviewTrack.style.animationPlayState = "paused";
   reviewTrackReverse.style.animationPlayState = "paused";
};
const playTracks = () => {
   reviewTrack.style.animationPlayState = "running";
   reviewTrackReverse.style.animationPlayState = "running";
};


reviewCardWrapper?.addEventListener("mouseenter", pauseTracks);
reviewCardWrapper?.addEventListener("mouseleave", playTracks);
links.forEach((link) => link.addEventListener("click", linksClickHandler.bind(this, link)));

///////////////////////code for owl corusel
$("#corusel").owlCarousel({
   loop: true,
   margin: 10,
   nav: false,
   dots: false,
   autoplay: true,
   responsive: {
      0: {
         items: 1,
      },
   },
});

///////////////////////////CODE FOR WAY POINT LIB

$("#home").waypoint({
   offset: -100,
   handler: function (direction) {
      document.querySelector(".active").classList.remove("active");
      document.querySelector(".header-link > li:nth-child(1)").classList.add("active");
   },
});
$("#feature").waypoint({
   offset: 0,
   handler: function (direction) {
      document.querySelector(".active").classList.remove("active");
      document.querySelector(".header-link > li:nth-child(2)").classList.add("active");
   },
});

$("#reviews").waypoint({
   offset: 0,
   handler: function () {
      document.querySelector(".active").classList.remove("active");
      document.querySelector(".header-link > li:nth-child(3)")?.classList?.add("active");
   },
});

