
$(document).ready(function(){

    $(".btn-warning").attr("class", "btn btn-outline-warning drum-pad h-100 m-1 fs-4");
    $(".btn-primary").attr("class", "btn btn-outline-primary drum-pad h-100 m-1 fs-4");
    $(".btn-danger").attr("class", "btn btn-outline-danger drum-pad h-100 m-1 fs-4");

    $("#drum-machine").attr("class", 'd-flex flex-row justify-content-center align-items-center vw-100 vh-100');
    $("#drum-machine-table").attr("class", 'd-flex flex-row');

    $(".keyboard-col").attr("class", 'keyboard-col h-100 d-flex flex-column justify-content-center align-items-center');
    $(".keyboard-row").attr("class", 'keyboard-row w-100 h-100 d-flex flex-row justify-content-center align-items-center m-1');

    $("#console").attr("class", 'd-flex flex-column justify-content-center align-items-center');
    $("#display-box").attr("class", 'd-flex flex-row justify-content-center align-items-center w-75');

    let sources = {
      Q: 'resources/audio/mixkit-guitar-stroke-down-slow-2339.wav',
      W: 'resources/audio/mixkit-bass-guitar-single-note-2331.wav',
      E: 'resources/audio/mixkit-nylon-guitar-single-note-2332.wav',
      A: 'resources/audio/mixkit-hand-tribal-drum-562.wav',
      S: 'resources/audio/mixkit-hard-horror-hit-drum-565.wav',
      D: 'resources/audio/mixkit-drum-deep-impact-563.wav',
      Z: 'resources/audio/Chord_1.mp3',
      X: 'resources/audio/Chord_2.mp3',
      C: 'resources/audio/Chord_3.mp3',
    };
    $.each(sources, function (indexInArray, valueOfElement) { 
       $('#'+indexInArray).attr("src",valueOfElement);
    });

    /*
     $("#chord1").click(function() {
      $("#Q").currentTime = 0;
      $("#Q").get(0).play();
    });
    */

    
    $("button.drum-pad").click(function(){
      let ID = "#" + $(this).text();
      let t = $(this).attr("id");
      $(ID).currentTime = 0;
      $(ID).get(0).play();
      $("#display").text(t);
    });
    
    $(document).keydown(function(event){
      let ID = "#" + String.fromCharCode(event.which);
      $(ID).parent().click();
    });


  });

