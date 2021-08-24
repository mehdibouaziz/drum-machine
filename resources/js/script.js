
$(document).ready(function(){

    // jQuery methods go here...
    $(".btn-warning").attr("class", "btn btn-outline-warning drum-pad w-100 m-1 flex-grow-1");
    $(".btn-primary").attr("class", "btn btn-outline-primary drum-pad w-100 m-1 flex-grow-1");
    $(".btn-danger").attr("class", "btn btn-outline-danger drum-pad w-100 m-1 flex-grow-1");

    $("#drum-machine").attr("class", 'd-flex flex-row');
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
      var ID = "#" + $(this).text();
      console.log(ID);
      $(ID).currentTime = 0;
      $(ID).get(0).play();
    });
    


  });

