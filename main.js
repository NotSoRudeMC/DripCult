$('.navTrigger').click(function () {
    $(this).toggleClass('active');
    console.log("Clicked menu");
    $("#mainListDiv").toggleClass("show_list");
    $("#mainListDiv").fadeIn();

});
var audio = new Audio('audio_file.mp3');
audio.play();

$(function(){

	var howler_example = new Howl({
		src: ['/audio/sample/SampleAudio_0.4mb.mp3'],
		volume: 0.5
	});

	$("#howler-play").on("click", function(){
		howler_example.play();
	});

	$("#howler-pause").on("click", function(){
		howler_example.pause();
	});

	$("#howler-stop").on("click", function(){
		howler_example.stop();
	});

	$("#howler-volup").on("click", function(){
		var vol = howler_example.volume();
		vol += 0.1;
		if (vol > 1) {
			vol = 1;
		}
		howler_example.volume(vol);
	});

	$("#howler-voldown").on("click", function(){
		var vol = howler_example.volume();
		vol -= 0.1;
		if (vol < 0) {
			vol = 0;
		}
		howler_example.volume(vol);
	});

});
