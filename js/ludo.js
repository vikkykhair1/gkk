const freeDownload = document.querySelector("#free20-download-now-div");

// const allSections = document.querySelectorAll('.section');

const fixedSection = function (entries, observer) {
   const [entry] = entries;

   if (entry.isIntersecting) {
      freeDownload.classList.add("new");
      sectionObserver.observe(freeDownload);
   } else {
      freeDownload.classList.remove("new");
      observer.unobserve(entry.target);
   }
   // console.log(entry);
};

const sectionObserver = new IntersectionObserver(fixedSection, {
   root: null,
   threshold: 0,
});

sectionObserver.observe(freeDownload);

$(document).ready(function () {
   // -------------------
   // OFFER TOP BAR & Scroll to top btn
   // -------------------
   const offerTopBar = document.querySelector(".offerTopBar");

   function showOfferTopBar(show = true) {
      show ? offerTopBar.classList.add("show") : offerTopBar.classList.remove("show");
   }

   $("#features").waypoint({
      offset: 100,
      handler: function (direction) {
         if (direction === "up") {
            showOfferTopBar(true);
            return;
         }

         showOfferTopBar(false);
      },
   });

   // --------------------
   // illustrations animations
   // --------------------

   // header illustration
   const headerIllustration = document.querySelector(".header-img-container");

   function showHeaderIllustration(show = true) {
      if (show) {
         headerIllustration?.classList.add("show");
      } else {
         headerIllustration?.classList.remove("show");
      }
   }

   $("html").waypoint({
      handler: function (direction) {
         showHeaderIllustration(true);
      },
   });

   // features illustration
   const featuresIllustration = document.querySelector(".features-illustration");

   function showFeaturesIllustration(show = true) {
      if (show) {
         featuresIllustration.classList.add("show");
      } else {
         featuresIllustration.classList.remove("show");
      }
   }

   $("#features").waypoint({
      offset: "35%",
      handler: function (direction) {
         if (direction === "down") {
            // hide header illustration
            showHeaderIllustration(false);

            // show features illus
            showFeaturesIllustration(true);
         } else {
            showHeaderIllustration(true);
            showFeaturesIllustration(false);
         }
      },
   });

   // how to install illustration
   const installInstructIllustration = document.querySelector(".install-instruct-illustration");

   function showInstallInstructIllustration(show = true) {
      if (show) {
         installInstructIllustration?.classList.add("show");
      } else {
         installInstructIllustration?.classList.remove("show");
      }
   }

   $("#install-instructions").waypoint({
      offset: 200,
      handler: function (direction) {
         if (direction === "down") {
            // hide features illustration
            showFeaturesIllustration(false);

            // show install instructions illus
            showInstallInstructIllustration(true);
         } else {
            showFeaturesIllustration(true);
            showInstallInstructIllustration(false);
         }
      },
   });

   // winners
   const winnersIllustration = document.querySelector(".winners-section-illustration");

   function showWinnersIllustration(show = true) {
      if (show) {
         winnersIllustration?.classList.add("show");
      } else {
         winnersIllustration?.classList.remove("show");
      }
   }

   $("#winners").waypoint({
      offset: 200,
      handler: function (direction) {
         if (direction === "down") {
            // hide install instruct illustration
            showInstallInstructIllustration(false);

            // show install instructions illus
            showWinnersIllustration(true);
         } else {
            showInstallInstructIllustration(true);
            showWinnersIllustration(false);
         }
      },
   });

   $("#partners").waypoint({
      offset: 200,
      handler: function (direction) {
         if (direction === "down") {
            showWinnersIllustration(false);
         } else {
            showWinnersIllustration(true);
         }
      },
   });

   // --------------------
   // carousel settings
   // --------------------
   $(".install-instruct-section .owl-carousel").owlCarousel({
      center: true,
      items: 1,
      margin: 30,
      responsive: {
         0: {
            stagePadding: 50,
            items: 1,
         },

         700: {
            stagePadding: 0,
            items: 2,
         },

         800: {
            stagePadding: 50,
            items: 2,
         },
         1000: {
            stagePadding: 100,
            items: 1,
         },
      },
   });

   $(".winners-section .owl-carousel").owlCarousel({
      loop: true,
      center: true,
      margin: 50,
      stagePadding: 50,
      responsive: {
         0: {
            items: 1,
            stagePadding: 50,
            margin: 24,
         },

         500: {
            items: 1,
            stagePadding: 100,
         },

         700: {
            items: 2,
            stagePadding: 40,
            margin: 30,
         },

         800: {
            items: 2,
            stagePadding: 40,
         },

         1000: {
            items: 3,
            stagePadding: 80,
         },

         1200: {
            items: 3,
            stagePadding: 80,
         },

         1400: {
            items: 3,
            stagePadding: 150,
         },
      },
   });

   // footer current year
   document.querySelector("#year").innerHTML = new Date().getFullYear();
});

// footer js for mobile view

$(function () {
   $(".accordion-content:not(:first-of-type)").css("display", "none");
   $(".js-accordion-title:first-of-type").addClass("open");

   $(".js-accordion-title").click(function () {
      $(".open").not(this).removeClass("open").next().slideUp(300);
      $(this).toggleClass("open").next().slideToggle(300);
   });
});

const toggleAbout = document.querySelector(".toggleAbout");
const moreABout = document.querySelector(".moreABout");
const lessAbout = document.querySelector(".lessAbout");

moreABout.addEventListener("click", () => {
   toggleAbout.classList.add("show");
   moreABout.innerHTML = ""
})

lessAbout.addEventListener("click", () => {
   toggleAbout.classList.remove("show");
   moreABout.innerHTML = ".....More"
})


