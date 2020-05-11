/*-----Toggling According -----*/
$(document).ready(function() {
	$("#accordian .details h1").click(function() {
	  //$('.details h1').addClass('checked');
	  //$('.contactForm h1').addClass('small'); 
	  $("#accordian .contactForm").animate(
		{ flexBasis: "34.75%"}, 500);
	  $("#accordian .details").animate(
		{ flexBasis: "34.75%"}, 500);
	  $("#accordian .details > div").show(500);
	  $(".registeringContactForm").hide(500);
	  $(".mainContactForm").show(500);
	  //$("#accordian .contactForm > div").hide(500);
	  $('.contactForm h1').removeClass('checked');
	  $('.details h1').removeClass('small');

	  document.getElementById("detailsHeading").innerHTML = "Contact Us";
	});
	
	
	$("#accordian .contactForm h1").click(function() {
	  
	});
  });

  function radioRegisterClick(){
	$('.contactForm h1').addClass('checked'); 
	$('.details h1').addClass('small');      
	$("#accordian .details").animate(
	  { flexBasis: "6%" }, 500);
	$("#accordian .contactForm").animate(
	  { flexBasis: "70.55%" }, 500);
	$("#accordian > .contactForm > div").show(500);
	$("#accordian > .details > div").hide(500);
	$("#accordian > .contactForm > mapsContainer").hide(500);
	document.getElementById("detailsHeading").innerHTML = "Back >";
	$('.details h1').removeClass('checked');
	$('.contactForm h1').removeClass('small');
	$(".mainContactForm").hide(500);
  }