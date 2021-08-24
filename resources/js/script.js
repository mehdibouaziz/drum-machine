
$(document).ready(function(){

    $(".btn-warning").attr("class", "btn btn-outline-warning drum-pad w-100 m-1 flex-grow-1 fs-4");
    $(".btn-primary").attr("class", "btn btn-outline-primary drum-pad w-100 m-1 flex-grow-1 fs-4");
    $(".btn-danger").attr("class", "btn btn-outline-danger drum-pad w-100 m-1 flex-grow-1 fs-4");

    $("#drum-machine").attr("class", 'd-flex flex-row justify-content-center align-items-center vw-100 vh-100');
    $("#drum-machine-table").attr("class", 'd-flex flex-row');
    $("#keyboard-row").attr("class", 'keyboard-row h-100 d-flex flex-row justify-content-center align-items-center');
    $(".keyboard-col").attr("class", 'keyboard-col h-100 d-flex flex-column justify-content-center align-items-center flex-grow-1 m-1');
    $("#console").attr("class", 'd-flex flex-column justify-content-center align-items-center');
    $("#display-box").attr("class", 'd-flex flex-row justify-content-center align-items-center w-75');

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

