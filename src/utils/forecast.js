const request = require("request");

const forecast = (lat, long, callback) => {
  const url = `https://api.darksky.net/forecast/662a5a6c23420b20704950d5fab4ddf6/${lat},${long}?units=si`;

  request({ url, json: true }, (error, { body }) => {
    if (error) {
      callback("Unable to connect to weather services");
    } else if (body.error) {
      callback("coordinate error");
    } else {
      callback(
        undefined,
        body.daily.data[0].summary +
          ` Its currently ${body.currently.temperature}. The min is expexted to be ${body.daily.data[0].temperatureLow} and the max ${body.daily.data[0].temperatureHigh}`
      );
    }
  });
};

module.exports = forecast;
