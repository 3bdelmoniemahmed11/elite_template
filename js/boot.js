$(function () {
  "use strict";
  var winh = $(window).height(),
    navbar = $(".navbar").innerHeight();
  $(".slider,.carousel-item").height(winh - navbar);
  $(".work ul li").on("click", function () {
    $(this).addClass("active").siblings().removeClass("active");
    if ($(this).data("class") === ".all") {
      $(".shuffle .col-md").css("opacity", "1");
    } else {
      $(".shuffle .col-md").css("opacity", "0.09");
      $($(this).data("class")).parent().css("opacity", "1");
    }
  });
});

let navLinks = document.querySelectorAll(".nav-link");
navLinks.forEach((navLink) => {
  navLink.addEventListener("click", () => {
    navLinks.forEach((nL) => {
      nL.classList.remove("active");
    });

    navLink.classList.add("active");
  });
});
