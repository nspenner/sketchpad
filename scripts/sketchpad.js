$(document).ready(function(){
  var gridsize;
  var rowsize;
  $('#gridinput').on('keyup change', function() {
    gridsize = $(this).val();
    /*if(gridsize > 20){
      $('#gridinput').css('background-color', '#F69D9D');
      gridsize = 20;
    }else{
      $('#gridinput').css('background-color', 'white');
    }*/
    $('#grid').empty();
    for(i=0; i<gridsize; i++) {
      rowsize = 500/gridsize
      $('#grid').append('<div class="gridrow"></div>');
    }
    for(j=0; j<gridsize; j++) {
      $('#grid').children().append('<div class="gridcell"></div>')
    }
    $('.gridrow').css('height', rowsize);
    $('.gridcell').css('width', rowsize);
  });
  $(document).on('mouseenter', '.gridcell', function() {
    console.log("hola");
    $(this).css('background-color', 'black');
  });
  $('button').on('click', function() {
    $('.gridcell').css('background-color', 'white');
  });
});
