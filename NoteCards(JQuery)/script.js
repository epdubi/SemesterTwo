var noteCard = document.getElementById("notecard");
var title = ["Defintion", "Term"];
var info = ["it is a lightweight, write less, do more javascript library", "All major browsers", "Add jQuery library or from a Content Delivery Network", "with jQuery you select (query) HTML elements and perform actions on them", "Want to prevent any jQuery code from running before the document is finished loading.", "Make it much easier to use javascript", "fadeIn, fadeOut, fadeToggle, fadeTo", "slideDown, slideUp, slideToggle", "the animate() function lets you create custom animations", "HTML/DOM manipulation, CSS manipulation, HTML event methods, Effects and animations, AJAX, utilities"];
var terms = ["What is jQuery?", "What is jQuery supported by?", "How to add jQuery?", "What is the jQuery Syntax?", "Document ready event", "What is the purpose of jQuery?", "jQuery effects - fading", "jQuery effects - sliding", "jQuery Effects - Animation", "What feature does jQuery have?"];
var counter = 0;
$(document).ready(function(){
    //Next Button
      $("#moveNext").click(function(){
          if (counter === 10){
              counter = -1;
          }else {
                    counter++;
        $("#def").text(info[counter]);
          console.log(terms[counter]);
        console.log(info[counter]);
          }
  
           });
    
     //Back Button
      $("#moveBack").click(function(){
          if (counter === -1){
              counter = 0;
          } else {
                counter--;
        $("#def").text(info[counter]);
        console.log(counter);
          }
      
           });
    
    //Hide on load
    $("#notecard").hide();
    $("#exit").click(function(){
        $("#notecard").hide();
        });
    
    //When link is clicked notecard is showed
    $("#notePop").click(function(){
       $("#notecard").show();
        $("#title").show();
        $("#title").text(title[0]);
        $("#def").text(info[0]);
        });
    
    //Switches Between definition and terms
    $("#showTerm").click(function(){
        
        if ($("#title").text() === "Defintion"){
            $("#title").text(title[1]);
            $("#def").text(terms[counter]);
            $("#showTerm").val("Show Definition");
            
        
        } else {
            $("#title").text(title[0]);
            $("#def").text(info[counter]);
            $("#showTerm").val("Show Term");
            
        }
        
        console.log("hellur");
    });
    
    $("#showTerm").click(function(){
        
        if ($("#title").text() === "Defintion"){
                $("#title").removeClass("addclass");
        $("#def").removeClass("addclass");
        
            
        } else{
        $("#def").addClass("addclass");
            
        }
           });
    
    
  
    


                 
                 
                 
                 
                 
                 
});