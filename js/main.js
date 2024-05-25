// const accordionLinks = document.querySelectorAll(
//    ".footer-mobile-view .accordion-container .accordion-content .footer-links ul li a"
// );
// console.log(accordionLinks);

window.onload = function () {
   /// webscript start
   const onelinkGenerator = new window.AF.OneLinkUrlGenerator({
      oneLinkURL: "https://khiladiadda.onelink.me/g37F",
      pidKeysList: ["af_pid", "utm_source"],
      campaignKeysList: ["af_c", "utm_campaign"],
   });

   window.onresize = function (event) {
      $("#free20-download-now-div").css("bottom", 0);
   };

   onelinkGenerator.setAdset("adset");
   onelinkGenerator.setAd("ad");
   onelinkGenerator.setAfSub1("utm_medium");
   onelinkGenerator.setAfSub2("keyword");
   onelinkGenerator.setAfSub5("gclid");
   const url = onelinkGenerator.generateUrl();
   console.log("generatedUrl:", url);

   // // onelink is generated
   if (url) {
      document.querySelectorAll("#download_link").forEach((el) => {
         console.log("inside for each", { url });
         el.setAttribute("href", url);
      });
      //   document.getElementById('ios_link').setAttribute('href', url);
      // document.getElementById('output_url').innerHTML = 'https://khiladiadda-live.ap-south-1.linodeobjects.com/KhiladiAdda_2.1.4.apk';
   }

   // webscript ends

   //adding click functionality to freefire icon
   const freeFireCard = document.querySelector("#freefire-card");
   freeFireCard?.addEventListener("click", () => {
      window.open("https://www.freefire.khiladiadda.com/", "_blank");
   });

   // navbar toggle for mobile
   const navOpenBtn = document.querySelector(".navbar-toggle-btn");
   const navCloseBtn = document.querySelector(".sidemenu-toggle-btn");
   const sidemenu = document.querySelector(".sidemenu");
   const navBarLinks = document.querySelectorAll(".navbar-link");
   const sideMenuLinks = document.querySelectorAll(".sidemenu-link");
   const toggleButtonTitle = document.querySelectorAll(".toggle-btn-title");

   function openMenu(e) {
      sidemenu.classList.add("active");
   }

   function closeMenu(e) {
      sidemenu.classList.remove("active");
   }

   const linkClickHandler = (link, className) => () => {
      document.querySelector(className + ".active").classList.remove("active");
      link.classList.add("active");
      if (className === ".sidemenu-link") {
         toggleButtonTitle.forEach((btn) => (btn.textContent = link.textContent));
         closeMenu();
      }
   };

   navOpenBtn?.addEventListener("click", openMenu);
   navCloseBtn?.addEventListener("click", closeMenu);
   navBarLinks?.forEach((link) =>
      link.addEventListener("click", linkClickHandler(link, ".navbar-link"))
   );
   sideMenuLinks?.forEach((link) =>
      link.addEventListener("click", linkClickHandler(link, ".sidemenu-link"))
   );

   // hide navbar on scroll
   const navbar = document.querySelector(".navbar");
   let lastScroll = 0;

   window.addEventListener("scroll", (e) => {
      const currentScroll = window.pageYOffset;

      if (
         currentScroll - lastScroll > 0 &&
         currentScroll > 350
         // !document.querySelector("#nav-icon").classList.contains("open")
      ) {
         // hide navbar
         navbar?.classList?.remove("show");
         navbar?.classList?.add("hide");
      } else {
         // show navbar
         navbar?.classList?.remove("hide");
         navbar?.classList?.add("show");
      }

      lastScroll = currentScroll;
   });

   // leagues animation
   const leaguesCards = document.querySelectorAll(".leagues-card");

   leaguesCards.forEach((card) => {
      card.addEventListener("mouseenter", (e) => {
         leaguesCards.forEach((c) => c.classList.remove("active"));
         e.target.classList.add("active");

         const currentActiveSlide = document.querySelector(".leagues-slide.active");
         const targetSlideClass = card.dataset.target;
         const nextActiveSlide = document.querySelector(`.${targetSlideClass}`);

         // don't run if already the active slide.
         if (currentActiveSlide === nextActiveSlide) return;

         currentActiveSlide.classList.remove("active");
         nextActiveSlide.classList.add("active");
      });
   });

   // reviews section
   $(".review1").owlCarousel({
      loop: true,
      margin: 40,
      nav: false,
      dots: false,
      stagePadding: 10,
      center: true,
      autoplay: true,
      responsive: {
         0: {
            items: 1,
            margin: 15,
            stagePadding: 40,
         },
         400: {
            items: 1,
            margin: 15,
            stagePadding: 40,
         },
         600: {
            items: 1,
            margin: 15,
            stagePadding: 30,
         },
         780: {
            items: 2,
            stagePadding: 20,
         },
         1000: {
            items: 2,
         },
      },
   });

   // add shadows to review cards
   const reviewCards = document.querySelectorAll(".reviews-card");
   const colors = [
      `0px 1px 1.4rem 5px rgba(219, 255, 0, 0.22)`,
      `0px 1px 1.4rem 5px rgba(34, 245, 0, 0.22)`,
      `0px 1px 1.4rem 5px rgba(235, 28, 36, 0.41)`,
      `0px 1px 1.4rem 5px rgba(3, 179, 254, 0.22)`,
   ];

   reviewCards.forEach((card, i) => {
      card.style.boxShadow = colors[i % colors.length];
   });
   ////////////////////CODE FOR waypoint

   // var viewport = $('meta[name="viewport"]');
   // viewport.attr("content", "width=device-width, height=device-height, initial-scale=1");

   // let hardReload =
   //    !localStorage.getItem("windowHeight") || $(window).height() / $(window).width() < 2.5;

   // if (hardReload) {
   //    localStorage.setItem("windowHeight", $(window).height());
   //    $("#free20-download-now-div").css("bottom", 0);
   // } else {
   //    let difference = $(window).height() - localStorage.getItem("windowHeight");
   //    $("#free20-download-now-div").css("bottom", difference);
   // }
   const freeDownload = document.querySelector("#free20-download-now-div");

   // const allSections = document.querySelectorAll('.section');

   const fixedSection = function (entries, observer) {
      const [entry] = entries;

      if (entry.isIntersecting) {
         freeDownload.classList.add("new");
      } else {
         freeDownload.classList.remove("new");

         observer.unobserve(entry.target);
      }
      // console.log(entry);
   };

   const sectionObserver = new IntersectionObserver(fixedSection, {
      root: null,
      threshold: 1,
   });

   sectionObserver.observe(freeDownload);

   $("#features").waypoint({
      offset: 0,
      handler: function (direction) {
         document.querySelector(".navbar-link" + ".active")?.classList.remove("active");
         document.querySelector(".navbar-link:nth-child(2)")?.classList.add("active");
         document.querySelector(".sidemenu-link" + ".active")?.classList.remove("active");
         document.querySelector(".sidemenu-link:nth-child(2)")?.classList.add("active");
         toggleButtonTitle.forEach((btn) => (btn.textContent = "features"));
      },
   });
   $("#live-stream").waypoint({
      offset: 0,
      handler: function (direction) {
         document.querySelector(".navbar-link" + ".active")?.classList.remove("active");
         document.querySelector(".navbar-link:nth-child(4)")?.classList.add("active");
         document.querySelector(".sidemenu-link" + ".active")?.classList.remove("active");
         document.querySelector(".sidemenu-link:nth-child(4)")?.classList.add("active");
         toggleButtonTitle.forEach((btn) => (btn.textContent = "reviews"));
      },
   });
   $("#how-to-install").waypoint({
      offset: 0,
      handler: function (direction) {
         document.querySelector(".navbar-link" + ".active")?.classList.remove("active");
         document.querySelector(".navbar-link:nth-child(5)")?.classList.add("active");
         document.querySelector(".sidemenu-link" + ".active")?.classList.remove("active");
         document.querySelector(".sidemenu-link:nth-child(5)")?.classList.add("active");
         toggleButtonTitle.forEach((btn) => (btn.textContent = "download"));
      },
   });
   $("#testimonial").waypoint({
      offset: -100,
      handler: function (direction) {
         document.querySelector(".navbar-link" + ".active")?.classList.remove("active");
         document.querySelector(".navbar-link:nth-child(1)")?.classList.add("active");
         document.querySelector(".sidemenu-link" + ".active")?.classList.remove("active");
         document.querySelector(".sidemenu-link:nth-child(1)")?.classList.add("active");
         toggleButtonTitle.forEach((btn) => (btn.textContent = "home"));
      },
   });
   $("#partners").waypoint({
      offset: -100,
      handler: function (direction) {
         document.querySelector(".navbar-link" + ".active")?.classList.remove("active");
         document.querySelector(".navbar-link:nth-child(3)")?.classList.add("active");
         document.querySelector(".sidemenu-link" + ".active")?.classList.remove("active");
         document.querySelector(".sidemenu-link:nth-child(3)")?.classList.add("active");
         toggleButtonTitle.forEach((btn) => (btn.textContent = "our offerings"));
      },
   });
};

// footer js for mobile view

$(function () {
   $(".accordion-content:not(:first-of-type)")?.css("display", "none");
   $(".js-accordion-title:first-of-type")?.addClass("open");
   $(".js-accordion-title")?.click(function () {
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


