// write your code to ping the weather.gov API here!
// don't forget you can always console.log the result of your API calls to see what they return!
// here's a starting point. i've set up a request and a jsonResponse for you. now use the data in the response to make the weather appear on the page!

var queryUrl = ("https://api.weather.gov/gridpoints/MTR/88,126/forecast/hourly");

$.ajax({
  url: queryUrl,
  method: "GET"
}).done(function(jsonResponse) {
  const res = jsonResponse.properties.periods[0];
console.log(res);
$("#weather").append(`<img src="${res.icon}">`);
$("#weather").append(`<p>${res.shortForecast}</p>`);
$("#weather").append(`<p>${res.windSpeed} ${res.windDirection}</p>`);
$("#weather").css('background-color', 'grey');
})

.fail(function(jsonResponse) {
  const res = jsonResponse.responseJSON;
  console.log(res);
  $("#weather").append(`<p>${res.title}</p>`);
  $("#weather").css("background-color", "brown");
})

//create a variable names Query URL