$(document).ready(function() {

$("#no_Second").hide();
$("section").hide();

function setRestaurantOne() {
  $("img").prop("src", "https://www.foodnut.com/i/The-House-San-Francisco/The-House-San-Francisco-Exterior-New.jpg")
  $(".name").html("Name: The House");
  $(".address").html("Address: 1230 Grant Ave San Francisco, CA 94133 at Broadway St ");
  $(".description").html("Larry and Angela Tse opened this original location of The House in May of 1994 bringing their unique brand of Asian American food to San Francisco's North Beach neighborhood. The House embodies the entrepreneurial spirit of growing up Asian in America with an emphasis on freshness and quality of ingredients, and a distinctively Asian philosophy towards food preparation. Simple, classic, soulful food...");
}

setRestaurantOne();


$(".no").on('click', function() {
  $("img").prop("src", "https://s.hdnux.com/photos/06/70/75/1806169/15/1024x1024.jpg")
  $(".name").html("Name: Barbacco");
  $(".address").html("Address: 220 California St, San Francisco, CA 94111");
  $(".description").html("Welcome to barbacco, a trattoria that was inspired by an idea that began to take shape before we even opened Perbacco, our restaurant next door. In contrast, we wanted to create a casual place with an emphasis on simple, delicious Italian food, drawing inspiration from all the regions of Italy. On one of our trips to Italy, we had lunch at a small trattoria in a town on the Ligurian coast. The place had been there for a long time and had become an institution with the locals. Furnished with small tables side-by-side, this trattoria gave us the inspiration for the type of place we wanted to create. A place with high energy and a convivial atmosphere, where our guests could come often for a satisfying meal. We created barbacco as a modern trattoria, reflecting a part of San Francisco’s city life, a casual dining experience that still delivers quality food and wine and attentive, personable service. Come join us and experience what inspired us.");

  $("#no_First").hide();
  $("#no_Second").show();
});

$("#no_Second").on("click", function() {
  $("img").prop("src", "https://media.timeout.com/images/103217540/630/472/image.jpg")
  $(".name").html("Name: Nopa");
  $(".address").html("Address: 560 Divisadero St. San Francisco, CA 94117");
  $(".description").html("Specializing in organic wood-fired cuisine, we serve simple food created with seasonal ingredients sourced from local purveyors. This philosophy is shared by our organic Mexican kitchen, Nopalito.");
});

$(".yes").on('click', function() {
  $("img").hide();
  $("ul").hide();
  $("p").hide();
  $("form").hide();
  $("section").show();

})

});
