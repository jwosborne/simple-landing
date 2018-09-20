// Animate Smooth Scroll
$(".button").on("click", function() {
  const images = $("#section-a").position().top;

  $("html, body").animate(
    {
      scrollTop: images
    },
    900
  );
});
