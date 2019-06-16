$(document).ready(function() {  
  var caller = 0;
  Cookies.set("caller","g");
  
  //general Button Event Handler
  $("button").click(function() {
    $("#table").html("");    
    $("#table").append(
        "<tr class='tr' id='headTr'>"+
        "<td class='td headTd'>" + "Function"+
        "</td><td class='td headTd'>" + "Description" +
        "</td></tr>");
  
  	//cookie based event handler, intuitive button response
    var id = $(event.srcElement).attr('id');
    Cookies.set("reciever", id);
    var c = Cookies.get("caller");
    if(c !== id) { 	
      $("table").show(); 
    } else { 
      $("table").toggle(); 
      if($("table").not(':visible')) {
      	trigger();
      }
    }
    Cookies.set("caller",id);

    imageDance();

    //Image hiding
    function imageDance(){
      if($(".lightblue").is(':visible')){
        $(".h3").hide();
  	  } else {
        $(".h3").show();
  		$(".h3").text("Remember, code reviewers are violent psychopaths who knows where you live.");
  		$(".h3").append("<img src='src/main/resources/images/logo2.jpg'/>");
  	  }
    } 

  //Text Updates for no tables shown
  function trigger() {  	
    $("h1").text("Fullstack Web Development");
    $("h2").text("It isn't about what you know, it's about what do with what you know.");
  };
  });
});
