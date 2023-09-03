// ----------------------------------------------------------------------------------------------------
// HOME PAGE
// ----------------------------------------------------------------------------------------------------
// ----------------------------------------------------------------------------------------------------
// DOCUMENT READY
// ----------------------------------------------------------------------------------------------------

$(document).ready(function(){

  $("#docReady").html("Welcome to NORSK Cruise Line")

})





// ----------------------------------------------------------------------------------------------------
// WEATHER API
// ----------------------------------------------------------------------------------------------------

$(document).ready(function(){

  $.ajax({
      type: "GET",
      url:"https://api.openweathermap.org/data/2.5/weather?q=Trondheim&appid=0cf68734d1db3840db4a5b0cb848ce9b",
      success: function(data){

          tempData = data

          console.log(data);
      }

  }).done(function(){
      $("#temp").html("Current Temperature in Trondheim: " + Math.round(tempData.main.temp - 273.15) + "°C");
  })

})





// ----------------------------------------------------------------------------------------------------
// TRIPS PAGE
// ----------------------------------------------------------------------------------------------------
// ----------------------------------------------------------------------------------------------------
// TRIPS ARRAY
// ----------------------------------------------------------------------------------------------------

const arrTrips = [
{
  name: "TRONDHEIM",
  price: 5000,
  description: "Trondheim is a historic city located in central Norway. It is the third-largest city in Norway by population and serves as the administrative center of Trøndelag County. Trondheim has a wide variety of activities and experiences to explore. There is something for everyone to enjoy!",
  image: "trondheim.jpg",
  duration: "short",
  destination: "single",
  rowBoatSpecial: "rowBoat",
  origin: "Trondheim"
},
{
  name: "TROMSØ",
  price: 7500,
  description: "Tromsø, located in the northern part of Norway, is a popular destination known for its stunning natural beauty and unique Arctic experiences. Experience the Northern Lights in all their glory in one of the best places in the world to view them.",
  image: "northernLights.jpg",
  duration: "long",
  destination: "multi",
  roundTrip: "round",
  origin: "Tromsø"
},
{
  name: "LOFOTEN",
  price: 7000,
  description: "The Lofoten Islands, often referred to simply as Lofoten, are an archipelago located off the northwest coast of Norway, within the Arctic Circle. Lofoten is known for its stunning natural beauty, dramatic landscapes, and vibrant fishing villages. This is a must visit location for thrill seekers.",
  image: "thrillSeeker.jpg",
  duration: "long",
  destination: "multi",
  roundTrip: "round",
  origin: "Reine"
},
{
  name: "GEIRANGERFJORD",
  price: 6000,
  description: "Geirangerfjord is one of the most famous and stunning fjords in Norway, renowned for its awe-inspiring natural beauty and dramatic landscapes. In 2005, Geirangerfjord, along with the nearby Nærøyfjord, was designated as a UNESCO World Heritage Site. This recognition was due to its exceptional natural beauty and unique fjord landscape, making it a protected area.",
  image: "fjords.jpg",
  duration: "short",
  destination: "multi",
  rowBoatSpecial: "rowBoat",
  origin: "Norway"
},
{
  name: "BERGEN",
  price: 5000,
  description: "Bergen is a vibrant and historic city located on the southwestern coast of Norway. It is the second-largest city in Norway after Oslo and is often referred to as the Gateway to the Fjords due to its proximity to some of the country's most famous fjords. Bergen is surrounded by natural beauty, including fjords, mountains, and the North Sea. The city itself is nestled between seven hills and features charming, colorful wooden houses along its waterfront, creating a picturesque setting.",
  image: "scenicRoute.jpg",
  duration: "long",
  destination: "single",
  rowBoatSpecial: "rowBoat",
  origin: "Bergen"
},
{
  name: "SVOLVÆR",
  price: 6500,
  description: "Svolvær is a charming coastal town located in the Lofoten archipelago in northern Norway. It is the largest town in the Lofoten Islands and serves as the administrative center of the Vågan Municipality. Svolvær serves as one of the best locations for whale watching enthusiasts to get up close and personal with the gentle giants of the sea.",
  image: "whaleWatching.jpg",
  duration: "short",
  destination: "single",
  roundTrip: "round",
  origin: "Svolvær"
  },
];

let appliedFilter = "";





// ----------------------------------------------------------------------------------------------------
// WHEN THE DOCUMENT LOADS
// ----------------------------------------------------------------------------------------------------

$(document).ready(function(){

console.log("Hello");

// Trips Page
filterTrips();

}); 





// ----------------------------------------------------------------------------------------------------
// LOAD TRIPS
// ----------------------------------------------------------------------------------------------------

function loadTrips(tripsToShow) {

$("#tripsContainer").empty();


// Loop through trips
for (let i = 0; i < tripsToShow.length; i++) {
    const trip = tripsToShow[i];


    // Open Weather API Call
    $.ajax({
      type: "GET",
      url:"https://api.openweathermap.org/data/2.5/weather?q=" + trip.origin + "&appid=0cf68734d1db3840db4a5b0cb848ce9b",
      success: function(data){

          tempData = data

          console.log(data);
      }

    }).done(function(){
        $(currentChild).find("#originTemp").text("Temperature: " + Math.round(tempData.main.temp - 273.15) + "°C");
    })

    // 1: Select the trips container and add the plant card to it (current array plant)
    $("#tripsContainer").append($("#tripCardTemplate").html());

    // 2: Create a variable that contains the most recently added trip card
    let currentChild = $("#tripsContainer").children().eq(i);

    // 3: Set the content for the current trip card from the plant array
    $(currentChild).find(".card-img-top").attr('src','assets/' + trip.image);
    $(currentChild).find("#nameText").text(trip.name);
    $(currentChild).find("#priceText").text('R' + trip.price + '.00 pp.');
    $(currentChild).find("#descriptionText").text(trip.description);

    // 4: Hide the description text from the current trip card
    $(currentChild).find("#descriptionText").hide();
    $(currentChild).find("#originTemp").hide();

};
};





// ----------------------------------------------------------------------------------------------------
// WHEN A FILTER OPTION IS CLICKED
// ----------------------------------------------------------------------------------------------------

$("input[name='filterRadio']").click(function(){

appliedFilter = $(this).attr('value');

filterTrips();

});

function filterTrips() {

let filteredArrTrips = [];

console.log(appliedFilter)

// Filter Trips

if (appliedFilter) {
  filteredArrTrips = arrTrips.filter(trip => trip.duration == appliedFilter);
} else if (appliedFilter) {
  filteredArrTrips = arrTrips.filter(trip => trip.destination == appliedFilter);
} else if (appliedFilter) {
  filteredArrTrips = arrTrips.filter(trip => trip.roundTrip == appliedFilter);
} else if (appliedFilter) {
  filteredArrTrips = arrTrips.filter(trip => trip.rowBoatSpecial == appliedFilter);
} else {
  filteredArrTrips = arrTrips;
}

console.log(filteredArrTrips);

loadTrips(filteredArrTrips);

}





// ----------------------------------------------------------------------------------------------------
// WHEN A TRIP CARD IS CLICKED
// ----------------------------------------------------------------------------------------------------

$("#tripsContainer").on('click', '.card', function() {

// Toggle the description text
$(this).find("#moreInfo").toggle();
$(this).find("#descriptionText").toggle();
$(this).find("#bookNow").toggle();
$(this).find("#originTemp").toggle();

// Resize the image to fit the additional content
$(this).find(".card-img-top").toggleClass("small");

});




