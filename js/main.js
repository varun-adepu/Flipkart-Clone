window.addEventListener("scroll", function () {
  console.log(document.documentElement.scrollTop);
  if (
    document.body.scrollTop > 100 ||
    document.documentElement.scrollTop > 100
  ) {
    document.querySelector("header").style.padding = "0 0";
  } else {
    document.querySelector("header").style.padding = "30px 0";
  }
});

$(document).ready(function () {
  $(".owl-carousel").owlCarousel({
    responsive: {
      0: {
        items: 1,
      },
      600: {
        items: 2,
      },
      1000: {
        items: 3,
      },
    },
  });
});
