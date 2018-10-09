# LIRI Bot

### Project Overview
This project was to create a language interpretation and recognition interface. Using the command line in Node.js you can console songs, movies and concerts that are searched.

### Getting Started
To build this project you will need to use:

* Javascript
* Node.js
* NPMs
  - Spotify <https://www.npmjs.com/package/node-spotify-api>
  - Moment  <https://www.npmjs.com/package/moment>
  - Request <https://www.npmjs.com/package/request>
  - Dotenv  <https://www.npmjs.com/package/dotenv>

* API keys from:
  - OMDB <http://www.omdbapi.com/apikey.aspx>
  - Spotify <https://developer.spotify.com/>
  - BandsInTown <http://www.artists.bandsintown.com/bandsintown-api>

  You will need to creat a .env file to store you spotify api keys. Plus, you will need to install the nmp packages mentioned above in the package.json file.

### Instructions
 In your node terminal, type in "node liri.js" and you can type one of four commands in the command line:
  
* spotify-this-song
* movie-this
* concert-this

 After you type in the command you can enter in the name of a song, movie or artist and hit enter to print data to the console. Some examples of your command line could be one of these:
  
  * node liri.js spotify-this-song Thriller
  * node liri.js movie-this Forrest Gump
  * node liri.js concert-this Drake

  ### What Each Command Does
  
  #### **node liri.js spotify-this-song <song name here>**
  
  * This will show the following information about the song in your terminal/bash window
  * Artist(s)
  * The song's name
  * A preview link of the song from Spotify
  * The album that the song is from

  #### **node liri.js concert-this <artist name here>**
  * This will search the Bands in Town Artist Events API for an artist and render the following information about each event to the terminal:

  * Name of the venue
  * Venue location
  * Date of the Event (use moment to format this as "MM/DD/YYYY")
  
  ![concert](https://user-images.githubusercontent.com/38358730/46650170-6826de00-cb50-11e8-9ebf-b9fc4e1cd950.gif)

  #### **node liri.js movie-this <movie name here>**

  * This will output the following information to your terminal/bash window:

       * Title of the movie.
       * Year the movie came out.
       * IMDB Rating of the movie.
       * Rotten Tomatoes Rating of the movie.
       * Country where the movie was produced.
       * Language of the movie.
       * Plot of the movie.
       * Actors in the movie.
       
   ![movie](https://user-images.githubusercontent.com/38358730/46650153-5c3b1c00-cb50-11e8-8f57-a736682725a2.gif)

 #### **node liri.js do-what-it-says <movie name here>**
  * Using the `fs` Node package, LIRI will take the text inside of random.txt and then use it to call one of LIRI's commands.

  * It should run `spotify-this-song` for "I Want it That Way," as follows the text in `random.txt`.
  
  ![whatitsays](https://user-images.githubusercontent.com/38358730/46650174-707f1900-cb50-11e8-86a1-0b52ea8a18fd.gif)




