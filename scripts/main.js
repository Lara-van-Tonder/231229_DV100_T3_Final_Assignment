// ----------------------------------------------------------------------------------------------------
// TRIPS ARRAY
// ----------------------------------------------------------------------------------------------------

const trips = [
    {
      "name": "TRONDHEIM",
      "price": 5000,
      "description": "Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci tation ullamcorper suscipit lobortis nisl ut aliquip ex ea commodo consequat. Duis autem vel eum iriure dolor in hendrerit in vulputate velit esse molestie consequat, vel illum dolore eu.",
      "image": "trondheim.jpg"
    },
    {
      "name": "NORTHERN LIGHTS",
      "price": 7500,
      "description": "Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci tation ullamcorper suscipit lobortis nisl ut aliquip ex ea commodo consequat. Duis autem vel eum iriure dolor in hendrerit in vulputate velit esse molestie consequat, vel illum dolore eu.",
      "image": "northernLights.jpg"
    },
    {
      "name": "THRILL SEEKER",
      "price": 7000,
      "description": "Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci tation ullamcorper suscipit lobortis nisl ut aliquip ex ea commodo consequat. Duis autem vel eum iriure dolor in hendrerit in vulputate velit esse molestie consequat, vel illum dolore eu.",
      "image": "thrillSeeker.jpg"
    },
    {
      "name": "FJORDS",
      "price": 6000,
      "description": "Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci tation ullamcorper suscipit lobortis nisl ut aliquip ex ea commodo consequat. Duis autem vel eum iriure dolor in hendrerit in vulputate velit esse molestie consequat, vel illum dolore eu.",
      "image": "fjords.jpg"
    },
    {
      "name": "SCENIC ROUTE",
      "price": 5000,
      "description": "Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci tation ullamcorper suscipit lobortis nisl ut aliquip ex ea commodo consequat. Duis autem vel eum iriure dolor in hendrerit in vulputate velit esse molestie consequat, vel illum dolore eu.",
      "image": "scenicRoute.jpg"
    },
    {
        "name": "WHALE WATCHING",
        "price": 6500,
        "description": "Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci tation ullamcorper suscipit lobortis nisl ut aliquip ex ea commodo consequat. Duis autem vel eum iriure dolor in hendrerit in vulputate velit esse molestie consequat, vel illum dolore eu.",
        "image": "whaleWatching.jpg"
      }
  ];





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

function loadTrips() {

    // Load and display all the trips
    for (let i = 0; i < trips.length; i++) {
        const trip = trips[i];
        
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
// WHEN A TRIP CARD IS CLICKED
// ----------------------------------------------------------------------------------------------------

$("#tripsContainer").on('click', '.card', function(){

    // Toggle the description text
    $(this).find("#moreInfo").toggle();
    $(this).find("#descriptionText").toggle();
  
    // Resize the image to fit the additional content
    $(this).find(".card-img-top").toggleClass("small");
  
  });