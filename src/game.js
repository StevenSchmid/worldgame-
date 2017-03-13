/**
 * Created by stevenschmid on 10.03.17.
 */
//Been to variables
beenhome = true;
//
//Item variable
toy = false;
//
//Current room
currentroom = "_kitchen";
//
//Counter
var counter = 0;


$(document).ready(function() {

    Array.prototype.random = function () {
        return this[Math.floor((Math.random()*this.length))];
    }

    var name = ["Steven", "Dave", "Virginia", "Jane"].random();

    $("#console").fadeIn(3000);
   $("form").submit(function () {
       var input = $("#command_line").val();
       var check = false;
       
       function check() {
           check = true;
       }


       function checkCounter() {
           if(counter == 10){
               $("<p>I'm thirsty</p>").hide().insertBefore("#placeholder").fadeIn(1000);}

               else if(counter == 15){
                   $("<p>I'm really thirsty</p>").hide().insertBefore("#placeholder").fadeIn(1000);
               }

               else if(counter == 20) {
                   $("<p>I'm really thirsty - go to kitchen!</p>").hide().insertBefore("#placeholder").fadeIn(1000);
               }

               else if(counter == 25) {
                   $("<p>Sorry you died! GAME OVER!</p>").hide().insertBefore("#placeholder").fadeIn(1000);
               }


       }






       //help

       if (input == "help" ) {
         $("#message_help").clone().insertBefore("#placeholder").fadeIn(1000);
           checkCounter();
           check();
       }

       //drink
       if (input == "drink") {
           $("<p>Drinking...</p>").hide().insertBefore("#placeholder").fadeIn(1000);
           counter -= 5;
       }

       //name
       if (input == "what is my name") {
           $("<p>Your name is " + name + ".</p>").hide().insertBefore("#placeholder").fadeIn(1000);
           check()

       }

       //take commands
       if (input == "take toy" && currentroom == "_kitchen") {
           counter++;
           $("<p>You picked up a toy.</p>").hide().insertBefore("#placeholder").fadeIn(1000);
           checkCounter();
           check();
       }
       else if(input == "take toy" && currentroom != "_kitchen") {
           $("<p>The toy is not here!</p>").hide().insertBefore("#placeholder").fadeIn(1000);
           check();
       }

       //go to room
           if (input == "go to bedroom" && currentroom == "_kitchen") {
           currentroom = "_bedroom";
           counter++;
               $("<p>You are now in the bedroom.</p>").hide().insertBefore("#placeholder").fadeIn(1000);
               checkCounter();
               check();
       }
           else if (input == "go to bedroom" && currentroom != "_kitchen") {
        $("<p>You can't go that way</p>").hide().insertBefore("#placeholder").fadeIn(1000);
               check();
       }

       if(input == "go to kitchen" && currentroom != "_kitchen")
       {
           currentroom = "_kitchen";
           counter++;
           $("<p>You are now in the kitchen.</p>").hide().insertBefore("#placeholder").fadeIn(1000);
           checkCounter();
           check();
       }



       //don't understand
       else if(check == false){
           $("<p>I do not understand " + input + ".</p>").hide().insertBefore("#placeholder").fadeIn(1000);

       }



       //reset text box
       $("#command_line").val("");
   }) ;

});