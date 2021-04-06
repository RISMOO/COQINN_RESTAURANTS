
  $(document).ready(function(){
    $(".guip").mouseover(function(){
      $("#coq").hide();



      
    });

  


    $(".guip").mouseover(function(){
        $("#coq").show();
      });
});


$(function () {
  $('.example-popover').popover({
    container: 'body'
  })
})


$('.carousel').carousel()

$(document).ready(function(){

    
    $("#coq").mouseover(function(){
        $('#coq').attr('src','assets/images/liv.png');
    });
    $("#coq2").mouseover(function(){
        $('#coq2').attr('src','assets/images/liv.png');
      });
      

});


   $(document).ready(function () {
    setTimeout(function () {
        $('#').attr('src','assets/images/liv.png');
      
    }, 2000);

});

$(function () {
  $('[data-toggle="tooltip"]').tooltip()
})

$(document).ready(function(){
  $("#carte2").click(function(){
    $("#carte3").slideToggle("slow");
  });
});


$("#dec").click(function(){
  $("#h1").toggle("fast");
  $("#social").toggle("slow");
  $("#img1").toggle("slow");
  $("#car").toggle("slow");
  $("#cart2").toggle("slow");

$("#cart").toggle("slow");

$("#restau").toggle("fast");
});




$("#coq").click(function(){
    $("#coq").hide();
  });
  $("#coq2").click(function(){
    $("#coq2").hide();
  });


  $("#close1").click(function(){
    $("#coq").show();
    $('#coq').attr('src','assets/images/c.png');
   
  });

 $("#close").click(function(){
    $("#coq2").show();
    $('#coq2').attr('src','assets/images/c.png')
  });







$("[data-toggle=popover]")
.popover({html:true})





$('#but').click(function () {
  setTimeout(function () {
    $(".popover").hide();
  }, 5000);

});

$('#but').click(function () {
  
    $(".popover").show();
 

});

$('#myModal').modal()


