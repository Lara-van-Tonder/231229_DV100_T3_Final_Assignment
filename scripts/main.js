// ----------------------------------------------------------------------------------------------------
// TRIPS ARRAY
// ----------------------------------------------------------------------------------------------------

const trips = [
    {
      name: "TRONDHEIM",
      price: 5000,
      description: "Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci tation ullamcorper suscipit lobortis nisl ut aliquip ex ea commodo consequat. Duis autem vel eum iriure dolor in hendrerit in vulputate velit esse molestie consequat, vel illum dolore eu.",
      image: "trondheim.jpg",
      duration: "short",
      origin: "Trondheim"
    },
    {
      name: "NORTHERN LIGHTS",
      price: 7500,
      description: "Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci tation ullamcorper suscipit lobortis nisl ut aliquip ex ea commodo consequat. Duis autem vel eum iriure dolor in hendrerit in vulputate velit esse molestie consequat, vel illum dolore eu.",
      image: "northernLights.jpg",
      duration: "long",
      origin: "Tromsø"
    },
    {
      name: "THRILL SEEKER",
      price: 7000,
      description: "Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci tation ullamcorper suscipit lobortis nisl ut aliquip ex ea commodo consequat. Duis autem vel eum iriure dolor in hendrerit in vulputate velit esse molestie consequat, vel illum dolore eu.",
      image: "thrillSeeker.jpg",
      duration: "long",
      origin: "Lofoten"
    },
    {
      name: "FJORDS",
      price: 6000,
      description: "Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci tation ullamcorper suscipit lobortis nisl ut aliquip ex ea commodo consequat. Duis autem vel eum iriure dolor in hendrerit in vulputate velit esse molestie consequat, vel illum dolore eu.",
      image: "fjords.jpg",
      duration: "short",
      origin: "Geirangerfjord"
    },
    {
      name: "SCENIC ROUTE",
      price: 5000,
      description: "Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci tation ullamcorper suscipit lobortis nisl ut aliquip ex ea commodo consequat. Duis autem vel eum iriure dolor in hendrerit in vulputate velit esse molestie consequat, vel illum dolore eu.",
      image: "scenicRoute.jpg",
      duration: "long",
      origin: "Bergen"
    },
    {
      name: "WHALE WATCHING",
      price: 6500,
      description: "Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci tation ullamcorper suscipit lobortis nisl ut aliquip ex ea commodo consequat. Duis autem vel eum iriure dolor in hendrerit in vulputate velit esse molestie consequat, vel illum dolore eu.",
      image: "whaleWatching.jpg",
      duration: "short",
      origin: "Svolvær"
      }
  ];

  let appliedFilter = "";





// ----------------------------------------------------------------------------------------------------
// WHEN THE DOCUMENT LOADS
// ----------------------------------------------------------------------------------------------------

$(document).ready(function(){

    console.log("Hello");

    // Trips Page
    loadTrips();

}); 





// ----------------------------------------------------------------------------------------------------
// LOAD TRIPS
// ----------------------------------------------------------------------------------------------------

function loadTrips(tripsToShow) {

  $("#tripsContainer").empty();



    // Load and display all the trips
    for (let i = 0; i < tripsToShow.length; i++) {
        const trip = tripsToShow[i];
        
        console.log(trip);





        // 1: Select the trips container and add the plant card to it (current array plant)
        $("#tripsContainer").append($("#tripCardTemplate").html());

        // 2: Create a variable that contains the most recently added trip card
        let currentChild = $("#tripsContainer").children().eq(i+1);

        // 3: Set the content for the current trip card from the plant array
        $(currentChild).find(".card-img-top").attr('src','assets/' + trip.image);
        $(currentChild).find("#nameText").text(trip.name);
        $(currentChild).find("#priceText").text('R' + trip.price + '.00 pp.');
        $(currentChild).find("#descriptionText").text(trip.description);

        // 4: Hide the description text from the current trip card
        $(currentChild).find("#descriptionText").hide();

    }
}





// ----------------------------------------------------------------------------------------------------
// WHEN A FILTER OPTION IS CLICKED
// ----------------------------------------------------------------------------------------------------

// For Filter buttons
$("input[name='filterRadio']").click(function(){ 
  appliedFilter = $(this).attr('value');

  filterSortTrips();
});




function filterSortTrips() {

  let filteredArrTrips = [];

  console.log(appliedFilter);


  if (appliedFilter) {
    filteredArrTrips = trips.filter(trip => trip.duration == appliedFilter);
  } else {
    filteredArrTrips = trips;
  }

  
  loadTrips(filteredArrTrips);

}





// ----------------------------------------------------------------------------------------------------
// WHEN A TRIP CARD IS CLICKED
// ----------------------------------------------------------------------------------------------------

$("#tripsContainer").on('click', '.card', function(){

    // Toggle the description text
    $(this).find("#moreInfo").toggle();
    $(this).find("#descriptionText").toggle();
  
    // Resize the image to fit the additional content
    $(this).find(".card-img-top").toggleClass("small");
  
  });





// ----------------------------------------------------------------------------------------------------
// Weather API
// ----------------------------------------------------------------------------------------------------

$.ajax({
  type: "GET",
  url: "https://api.openweathermap.org/data/2.5/weather?q=Pretoria&appid=0cf68734d1db3840db4a5b0cb848ce9b",
  success: function (data) {
    tempData = data;
    console.log(tempData);
  },
  }).done(function () {

    // Set Temperature
    $(currentChild).find("#apiWeather").text("Current Temp: " + Math.round(tempData.main.temp- 273) + "°C");
  
  });