// Navigation Menu JS

$(function () {
	$(".menu-link").click(function (e) {
		e.preventDefault();
		$(".menu-overlay").toggleClass("open");
		$(".menu").toggleClass("open");
	});
});

// Studio Trailer

var PLAY_VIDEO_COMMAND = JSON.stringify({func: "playVideo", event: "command", args: ""})
var PAUSE_VIDEO_COMMAND = JSON.stringify({func: "pauseVideo", event: "command", args: ""})

function stopStudioTrailer() {
  if($("#studio-trailer").hasClass("in-pop-up")) {
    $("#studio-trailer").removeClass("in-pop-up")
    $("#studio-trailer").find("iframe").get(0).contentWindow.postMessage(PAUSE_VIDEO_COMMAND, '*')
  }
}

function playStudioTrailer() {
  $("#studio-trailer").addClass("in-pop-up")
  $("#studio-trailer").find("iframe").get(0).contentWindow.postMessage(PLAY_VIDEO_COMMAND, '*')
}

$("[href='#play']").on("click", function(event) {
  playStudioTrailer()
})

$("#studio-trailer").on("click", function(event) {
  stopStudioTrailer()
})

$(document).on("scroll", function(event) {
  stopStudioTrailer()
})