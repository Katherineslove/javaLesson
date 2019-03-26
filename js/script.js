console.log("External JS is working");
$(document).ready(function() {
      console.log("jQuery has loaded");
      // $("div").hide();
      // $("#box2").hide();
      // $(".box").hide();
      // $("#box4").show();

      $("#box1").click(function(){
            // console.log("red box hasbeen clicked");
            // $("#box2").hide(2000);
            // $("#box2").toggle();
            // $("#box2").fadeToggle();
            // $("#box2").toggleClass("boxLarge orange");
            // $("#box2").css("width" ,"400px")
            // $("#box2").css("width":"400px" , "height": "300px");
      })

      $("#box3").click(function(){
            // console.log("red box hasbeen clicked");
            $("#box2").show(2000);
      })

      $("#box6").dblclick(function() {
          console.log("Double click is working");
      });

      $("#box7").mouseover(function() {
          console.log("mouseover is working");
      });

      $("#box4").mouseleave(function() {
            console.log("mouseleave is working");
      });

      $("#box5").hover(function() {
          console.log("Hover is working");
      })
})
