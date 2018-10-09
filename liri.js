require("dotenv").config();
const request = require("request");
const fs = require("fs");
const moment = require("moment");
const Spotify = require("node-spotify-api");

const keys = require("./keys.js");
const spotify = new Spotify(keys.spotify);

const input = process.argv;
const command = input[2];
let name = "";

for (i = 3; i < input.length; i++) {
  name = name + " " + input[i];
}

name = name.trim().replace(" ", "+");

if (command === "spotify-this-song") {
  if (name === "") {
    name = "The Sign";
  }

  spotify.search({ type: "track", query: name, limit: 6 }, function(err, data) {
    if (err) {
      return console.log("Error occurred: " + err);
    }

    var track = data.tracks.items[5];
    var mySong =
      "-----------------------------------------------------------------------" +
      "\r\n" +
      "Song Title: " +
      name +
      "\r\n" +
      "Artist: " +
      track.artists[0].name +
      "\r\n" +
      "Album: " +
      track.album.name +
      "\r\n" +
      "Preview Link: " +
      track.preview_url +
      "\r\n" +
      "-----------------------------------------------------------------------" +
      "\r\n";

    console.log(mySong);
  });
}

const addMovie = () => {
  request(
    `http://www.omdbapi.com/?t=${process.argv.splice(3).toString()}&apikey=trilogy`,
    function(error, response, body) {
      // If the request is successful
      if (!error && response.statusCode === 200) {
        // console.log(error);

        console.log(
          "-----------------------------------------------------------------------" +
            "\r\n" +
            "Title: " +
            JSON.parse(body).Title);
        console.log("Release Year: " + JSON.parse(body).Year);
        console.log("IMDB Rating: " + JSON.parse(body).Ratings[0].Value);
        console.log("Rotten Tomatoes Rating: " + JSON.parse(body).Ratings[1].Value);
        console.log("Country: " + JSON.parse(body).Country);
        console.log("Language: " + JSON.parse(body).Language);
        console.log("Plot: " + JSON.parse(body).Plot);
        console.log(
          "Actors: " +
          JSON.parse(body).Actors + "\r\n" +
            "-----------------------------------------------------------------------" +
            "\r\n"
        );
      }
    }
  );
};

const addConcert = () => {
  request(
    `https://rest.bandsintown.com/artists/${process.argv[3]}/events?app_id=codingbootcamp`,
    function(error, response, body) {
      if (!error && response.statusCode === 200) {
        var parsedJSON = JSON.parse(body);
        for (var i = 0; i < parsedJSON.length; i++) {
          console.log("-----------------------------------------------------------------------" + "\r\n" +
           "Name of Venue: " + parsedJSON[i].venue.name);
          console.log("Venue Location: " + parsedJSON[i].venue.city +
              ", " + parsedJSON[i].venue.region);
          console.log("Date of Event: " + moment(parsedJSON[i].datetime).format("MM DD YYYY") 
            + "\r\n"
            +
            "-----------------------------------------------------------------------" +
            "\r\n"
          );
        }
      }
    }
  );
};

const doWhatItSays = ()  => {
  fs.readFile("random.txt", "utf8", function (error, data) {
    if (error) {
     return console.log(error);
  }

    var nameArr = data.split(",");
    name = nameArr[1]

    spotify.search({ type: 'track', query: name, limit: 1 }, function (err, data) {
      if (err) {
        return console.log('Error occurred: ' + err);
      }

      var track = data.tracks.items[0];
      var randSong =

        "-----------------------------------------------------------------------" + "\r\n" +

        "Song Title: " + name + "\r\n" +

        "Artist: " + track.artists[0].name + "\r\n" +

        "Album: " + track.album.name + "\r\n" +

        "Preview Link: " + track.preview_url + "\r\n" +

        "-----------------------------------------------------------------------" + "\r\n"

      console.log(randSong);      
    })
  });
}


switch (process.argv[2]) {
  case "movie-this":
    addMovie();
    break;
  case "concert-this":
    addConcert();
    break;
  case "do-what-it-says":
    doWhatItSays();
    break;
}
