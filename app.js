var $ = require("jquery");

$(".read-more-button").on("click", () => {

  const mywork = $(".my-work").position().top;

	animateScrollTop("200px", 600);

//   $("html, body").animate({
//     scrollTop: "400px"
//   }, 400, swing);

});

function animateScrollTop(target, duration) {
    duration = duration || 16;

    var $window = $(window);
    var scrollTopProxy = { value: $window.scrollTop() };
    var expectedScrollTop = scrollTopProxy.value;

    if (scrollTopProxy.value != target) {
        $(scrollTopProxy).animate(
            { value: target },
            {
                duration: duration,

                step: function (stepValue) {
                    var roundedValue = Math.round(stepValue);
                    if ($window.scrollTop() !== expectedScrollTop) {
                        // The user has tried to scroll the page
                        $(scrollTopProxy).stop();
                    }
                    $window.scrollTop(roundedValue);
                    expectedScrollTop = roundedValue;
                },

                complete: function () {
                    if ($window.scrollTop() != target) {
                        setTimeout(function () {
                            animateScrollTop(target);
                        }, 16);
                    }
                }
            }
        );
    }
}
