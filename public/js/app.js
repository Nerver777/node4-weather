// fetch("http://puzzle.mead.io/puzzle").then(response => {
//   response.json().then(data => {
//     console.log(data);
//   });
// });

// fetch(
//   "https://api.mapbox.com/geocoding/v5/mapbox.places/!.json?access_token=pk.eyJ1IjoiZmF0Y2F5eWF6emkiLCJhIjoiY2s3YnlzeDNxMDZsbTNncGRkaWloejBheSJ9.6H4OOA0xQk4tKA1Asrj8HA&limit=1"
// ).then(response => {
//   response.json().then(data => {
//     if (data.features.length == 0) {
//       return console.log("Incorrect request");
//     }
//     //console.log(data);
//     const lat = data.features[0].center[1];
//     const long = data.features[0].center[0];
//     fetch(
//       `https://cors-anywhere.herokuapp.com/https://api.darksky.net/forecast/662a5a6c23420b20704950d5fab4ddf6/${lat},${long}?units=si`
//     ).then(response => {
//       response.json().then(weather => {
//         console.log(
//           `${weather.daily.data[0].summary} Its currently ${weather.currently.temperature} `
//         );
//       });
//     });
//   });
// });

// fetch("http://localhost:3000/weather?address=kyiv").then(response => {
//   response.json().then(data => {
//     if (data.error) {
//       console.log(data.error);
//     } else {
//       console.log(data.location);
//       console.log(data.forecast);
//     }
//   });
// });

const weatherForm = document.querySelector("form");
const search = document.querySelector("input");
const messageOne = document.querySelector("#message-1");
const messageTwo = document.querySelector("#message-2");

// messageOne.textContent = "From JS";
// messageTwo.textContent = "From JS";

weatherForm.addEventListener("submit", e => {
  e.preventDefault();
  const location = search.value;
  messageOne.textContent = "Loading";
  messageTwo.textContent = "";

  fetch(`/weather?address=${location}`).then(response => {
    response.json().then(data => {
      if (data.error) {
        messageOne.textContent = data.error;
      } else {
        messageOne.textContent = data.location;
        messageTwo.textContent = data.forecast;
      }
    });
  });
});
