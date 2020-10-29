$("#read-more").on("click", function() {

  const mywork = $(".my-work").position().top;

  $("html, body").animate({

    scrollTop: mywork

  }, 900);

});
