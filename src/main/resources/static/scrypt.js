
$(document).ready(function(){
  $("form").submit(function(e){
	  e.preventDefault();
	  const url = $("input").val();
	  console.log(url);
	$.post("/create", {url: url})
	  .done(function( data ) {
	   console.log(data);
	   const p = "<p>"+data.msg+"</p>"
	   $(".alert").html(p).css("display","block");
	  
	  });
	 
  });
});








  	













