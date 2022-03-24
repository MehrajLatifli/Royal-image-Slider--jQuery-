$(document).ready(function()
{

    var imagecontent;

    imagecontent+=
    `
       <div class="slide1">
            
       <img src="images/1.jpg" alt="">



    </div>

    `;

    for (let index = 2; index < 12; index++) {
   
        imagecontent+=
        `
           <div class="slide${index}">
            
           <img src="images/${index}.jpg" alt="">

           </div>

           `;

           $(".slide"+index+"").addClass(".slide");

          
    }

    $(".slides").html(imagecontent.substring('undefined'.length));


    $("#leftbtn").fadeOut();

    for (let index = 6; index < 12; index++) {

        $("#btn_"+index+"").fadeOut();
        
    }

    $( "#rightbtn" ).on( "click", function() {
        
        for (let index = 1; index < 6; index++) {

            $("#btn_"+index+"").fadeOut();
            
        }

  

        for (let index = 6; index < 12; index++) {

            $("#btn_"+index+"").fadeIn();
            
        }

        $("#leftbtn").fadeIn();

        $("#rightbtn").fadeOut();

    });


    $( "#leftbtn" ).on( "click", function() {
        
        for (let index = 1; index < 6; index++) {

            $("#btn_"+index+"").fadeIn();
            
        }

  

        for (let index = 6; index < 12; index++) {

            $("#btn_"+index+"").fadeOut();
            
        }

        $("#leftbtn").fadeOut();

        $("#rightbtn").fadeIn();

    });

    var fadeOutcounter=4;
    var fadeOut=0;

    let indexclone;

    for (let index = 5; index < 12; index++) {
     
   
        $("#btn_"+index+"").click( function() {

            $("#btn_"+index+"").nextAll().fadeIn("slow", function(){

                
                $("#btn_"+(index)+"").prevAll().fadeOut("slow", function(){

                    if(index>=6){

                        $("#leftbtn").fadeIn();


                    }

                });
            });

            

            

        });


  
        
    }

    

    for (let i = 1; i <12; i++) {

        $("#btn_"+i+"").click( function() {
      
            console.log($("#btn_"+i+"").eq(1).text());

            $(".slides").css({

                "width": "500%",
                "height": "500px",
                "display": "flex",
            
                "position":"relative",
                "animation-name": "autoslide"+i+"",
                "animation-duration": "30s",
                "animation-iteration-count":"calc(100)",
                "animation-direction": "alternate",
                "animation-play-state": "running"

            });

         


        });
    }
 
 

});