'use strict';

////////////////////********************VARIABLES GLOBALES***************************///////////////////////
var selectedDay; 

var selectedDays = ["TUES", "FRID"]; 
////////////////////********************VARIABLES GLOBALES***************************///////////////////////


////////////////////*****************************FUNCTIONS***************************///////////////////////

function applySelectedColorDays(button){
  button.css("background-color", "#099");
  button.css("color", "white");
  button.css("border", "#099");
}

////////////////////*****************************FUNCTIONS***************************///////////////////////
/*
 document.write (days);
 console.log(days);
 console.log(days.length);
 */

$(document).ready(function(){
    
  console.log("Shoud be executed only once");

  for(var i=0; i<selectedDays.length; i++)
  {

    var buttonId = selectedDays [i];
    console.log($("#" + buttonId));
    applySelectedColorDays($("#" + buttonId));
   
  }
    //$(document).onload(function()){
    //Boucle for........
  
      $("button").click(function(){
    console.log($(this));
        console.log("BEFORE IF   ===> "+selectedDays);  
        //"rgb(0, 153, 153)==> designe la couleur verte donc de selection
          if($(this).css("background-color")=="rgb(0, 153, 153)" ){
            //UNSELECTED COLOR STATE
            console.log("UNSELECTED COLOR STATE:" + $(this).attr('id'));
             $(this).css("background-color", "white");
             $(this).css("color", "black");
             $(this).css("border", "solid"); 
             selectedDay = $(this).attr('id');

             var temp = [];

             for(var i=0; i<selectedDays.length; i++)
             {
               if (selectedDays [i] != selectedDay)
               {
                   temp.push(selectedDays[i]);
                   console.log(temp);
               }
             };
             selectedDays = temp;
          }else{
            //SELECTED COLOR STATE
            console.log("SELECTED COLOR STATE");

            /*
             les 3 lignes = la fonction applySelectedColorDays($(this)); 
             $(this).css("background-color", "#099");
             $(this).css("color", "white");
             $(this).css("border", "#099");
             */
             applySelectedColorDays($(this));
             selectedDay = $(this).attr('id');
             selectedDays.push(selectedDay);
             //selectedDays.splice(index, 1);
             
          }

          console.log("AFTER IF   ===> "+selectedDays); 
          

        });           
  }); 
 

  
/* jQuery

 $(document).ready(function(){
});
or (the same thing for jQuery)
 $(function(){
});



 $('#MOND').hide(3000).show(4000); effet de cacher et reaparaittre en 3 et 4s.nurseryProject
 $('#MOND').css({color:'red'});
*/

/*
$(funcion(){
  $('#MOND').on('mouseover', function(){
    $('#SUND').fadeOut(300);
  });
  $('#TUES').on('mouseover', function(){
    $('#SATU').fadeOut(300);
  });

  $('#WEND').on('mouseover', function(){
    $('#FRID').fadeOut(300);
  });

});
*/