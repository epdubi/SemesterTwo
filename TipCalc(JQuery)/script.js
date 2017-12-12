 var totalBill = document.getElementById("totalBill");
var tip = document.getElementById("tip");

$(document).ready(function(){
    
     $("#screen").click(function(){
         //.css
    $("#screen").css("background-color", "pink");
});
    
    $(".circle").click(function(){
         //.addClass
    $(".circle").addClass("intro").removeClass("circle");
        alert();
});
    //This click is responsible for all calulations and to display the totals in the end
    //Click
   $("#findTip").click(function(){
       var tipCalc = parseFloat(tip.value * .01);
       var tipper = tipCalc * totalBill.value;
      var total = parseFloat((tipCalc * totalBill.value) + parseFloat(totalBill.value));
       var displayTip = document.getElementById("displayTip");
       displayTip.innerHTML = "Tip : " + "$" + tipper + ".00";
       var displayTotal = document.getElementById("displayTotal");
       displayTotal.innerHTML = "Total : " + "$" + total + ".00";
       //Show
       $("#display").show();
       
       //Hide
       $("#totalBill").hide();
       $("#tip").hide();
       $("#findTip").hide();
       console.log(tipCalc);
       console.log(total);
       
   });
    //This click reloads the page to reset the 'screen'
    $('#circle').click(function() {
    location.reload();
});
  
   
    
    
    
    
    
    
    
});