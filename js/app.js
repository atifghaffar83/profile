$( document ).ready(function() {
  $(".sidebar-toggle").on("click", function(){
    $(".navbarsection").toggle();
    $("nav").removeClass("navbar");
    $("nav").addClass("navmob");
    $(".mainsec").on("click", function(){
      $(".navbarsection").hide();
      $("nav").addClass("navbar");
      $("nav").removeClass("navmob");
    });
  });

  /////contact form submit
  $("#formcontact").on("submit", function(e){
    $(".sentmsg").html("");
    $("#submitbtn").html("Please wait ...");
    $("#submitbtn").attr("disabled", true);
    
    $.ajax({
      url: "./php/contact.php",
      type: "post",
      data: $("#formcontact").serialize(),
      dataType: "text",
      success: function(data){
        if(data == 200){
          //console.log("what");
        }
        //console.log(typeof data);
        if(data != 200){
          
          $("form .alert").show();
          $("form .alert").addClass("alert-danger");
          $("form .alert").removeClass("alert-success");
          $(".sentmsg").html("Error: "+data);
          $("#submitbtn").html("CONTACT ME");
          $("#submitbtn").attr("disabled", false);

        } else{
          
            $("form .alert").show();
            $("form .alert").addClass("alert-success");
            $("form .alert").removeClass("alert-danger");
            
            $(".sentmsg").html(`Email sent ok`);

            setTimeout (function(){
              $("form .alert").fadeOut(3000);
            }, 4000)
            
            
            $("#submitbtn").html("CONTACT ME");
            $("#submitbtn").attr("disabled", false);
            $("#formcontact")[0].reset();
        }

       
      }

    });

    e.preventDefault();
  

  });

});