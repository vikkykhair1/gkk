window.onload = function () {
   const onelinkGenerator = new window.AF.OneLinkUrlGenerator({
      oneLinkURL: "https://khiladiadda.onelink.me/g37F",
      pidKeysList: ["af_pid", "utm_source"],
      campaignKeysList: ["af_c", "utm_campaign"],
   });

   onelinkGenerator.setAdset("adset");
   onelinkGenerator.setAd("ad");
   onelinkGenerator.setAfSub1("utm_medium");
   onelinkGenerator.setAfSub2("keyword");
   onelinkGenerator.setAfSub5("gclid");
   const url = onelinkGenerator.generateUrl();
   console.log("generatedUrl:", url);

   if (url) {
      document.querySelectorAll("#download_link").forEach((el) => {
         console.log("inside for each", { url });
         el.setAttribute("href", url);
      });
      //   document.getElementById('ios_link').setAttribute('href', url);
      // document.getElementById('output_url').innerHTML = 'https://khiladiadda-live.ap-south-1.linodeobjects.com/KhiladiAdda_2.1.4.apk';
   }

   //   document.getElementById('input_url').innerHTML = window.location.href;
   // const onelinkGenerator = new window.AF.OneLinkUrlGenerator({
   //    oneLinkURL: "https://khiladiadda.onelink.me/g37F",
   //    pidKeysList: ["af_pid", "utm_source"],
   //    campaignKeysList: ["af_c", "utm_campaign"],
   // });
   // onelinkGenerator.setAdset("adset");
   // onelinkGenerator.setAd("ad");
   // onelinkGenerator.setAfSub1("utm_medium");
   // onelinkGenerator.setAfSub2("keyword");
   // onelinkGenerator.setAfSub5("gclid");
   // const url = onelinkGenerator.generateUrl();
   // console.log("generatedUrl:", url);
   // // onelink is generated
   // if (url) {
   //    document.querySelectorAll("#download_link").forEach((el) => {
   //       console.log("inside for each", { url });
   //       el.setAttribute("href", url);
   //    });
   //    //   document.getElementById('ios_link').setAttribute('href', url);
   //    // document.getElementById('output_url').innerHTML = 'https://khiladiadda-apk.ap-south-1.linodeobjects.com/KhiladiAdda-U2.1.0.apk';
   // }
};

$(".owl-carousel").owlCarousel({
   loop: true,
   margin: 20,
   nav: false,
   dots: true,
   stagePadding: 10,
   center: true,
   autoplay: true,
   responsive: {
      0: {
         items: 1,
         stagePadding: 30,
         margin: 5,
         //   dots: true
      },
      400: {
         items: 1,
         margin: 10,
         stagePadding: 30,
         //   dots: true
      },
      600: {
         items: 1,
         stagePadding: 100,
         //   dots: true
      },
      780: {
         items: 2,
         stagePadding: 0,
         //   dots: true
      },
      1000: {
         items: 3.8,
      },
   },
});

// navbar

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
      navbar.classList.remove("show");
      navbar.classList.add("hide");
   } else {
      // show navbar
      navbar.classList.remove("hide");
      navbar.classList.add("show");
      // clearTimeout(timeout);

      // timeout = setTimeout(() => {
      // 	if (
      // 		currentScroll > 350
      // 		// !document.querySelector("#nav-icon").classList.contains("open")
      // 	) {
      // 		navbar.classList.remove("show");
      // 		navbar.classList.add("hide");
      // 	}
      // }, 3000);
   }

   lastScroll = currentScroll;
});

//////////////////////////WAYPOINT

$("#features").waypoint({
   offset: 0,
   handler: function (direction) {
      document.querySelector(".navbar-link" + ".active").classList.remove("active");
      document.querySelector(".navbar-link:nth-child(2)").classList.add("active");
      document.querySelector(".sidemenu-link" + ".active").classList.remove("active");
      document.querySelector(".sidemenu-link:nth-child(2)").classList.add("active");
      toggleButtonTitle.forEach((btn) => (btn.textContent = "features"));
   },
});
$("#reviews").waypoint({
   offset: 0,
   handler: function (direction) {
      document.querySelector(".navbar-link" + ".active").classList.remove("active");
      document.querySelector(".navbar-link:nth-child(4)").classList.add("active");
      document.querySelector(".sidemenu-link" + ".active").classList.remove("active");
      document.querySelector(".sidemenu-link:nth-child(4)").classList.add("active");
      toggleButtonTitle.forEach((btn) => (btn.textContent = "reviews"));
   },
});
$("#download").waypoint({
   offset: 0,
   handler: function (direction) {
      document.querySelector(".navbar-link" + ".active").classList.remove("active");
      document.querySelector(".navbar-link:nth-child(5)").classList.add("active");
      document.querySelector(".sidemenu-link" + ".active").classList.remove("active");
      document.querySelector(".sidemenu-link:nth-child(5)").classList.add("active");
      toggleButtonTitle.forEach((btn) => (btn.textContent = "download"));
   },
});
$("#home").waypoint({
   offset: -100,
   handler: function (direction) {
      document.querySelector(".navbar-link" + ".active").classList.remove("active");
      document.querySelector(".navbar-link:nth-child(1)").classList.add("active");
      document.querySelector(".sidemenu-link" + ".active").classList.remove("active");
      document.querySelector(".sidemenu-link:nth-child(1)").classList.add("active");
      toggleButtonTitle.forEach((btn) => (btn.textContent = "home"));
   },
});
$("#offerings").waypoint({
   offset: -100,
   handler: function (direction) {
      document.querySelector(".navbar-link" + ".active").classList.remove("active");
      document.querySelector(".navbar-link:nth-child(3)").classList.add("active");
      document.querySelector(".sidemenu-link" + ".active").classList.remove("active");
      document.querySelector(".sidemenu-link:nth-child(3)").classList.add("active");
      toggleButtonTitle.forEach((btn) => (btn.textContent = "our offerings"));
   },
});
