# Guardians' Playlist Generator (🌔 Galaxy Mix 📼 )

This is a Guardians' Playlist Generator application that generates playlists for each Guardian based on their preferred genre. The application is written in JavaScript and can be run in any environment that supports JavaScript execution, such as a web browser console or a Node.js environment.

## Usage

1. Ensure you have a JavaScript environment set up.
2. Copy the provided JavaScript code into your environment.
3. Run the code.
4. The playlists for each Guardian will be generated and displayed.

## Code Overview

### Songs Array

The `songs` array contains song objects, each with `title`, `artist`, and `genre` properties. At least 5 songs are included in the array.

### Guardians Object

The `guardians` object contains each Guardian's preferred genre. The keys are Guardian names, and the values are their preferred genres.

### Playlist Generation

The `generatePlaylist` function takes the `guardians` object and the `songs` array as arguments and generates playlists for each Guardian based on their preferred genre.

### Displaying Playlists

The `displayPlaylists` function takes the generated playlists and displays them on the webpage. It dynamically creates HTML elements to represent each playlist and its songs.

## Running the Application

To run the application, ensure you have an HTML file that includes a `<div>` element with the id `"playlists"`. The playlists will be displayed within this element.

Include the provided JavaScript code in your HTML file or link it as an external script. Run the code, and the playlists for each Guardian will be displayed on the webpage.

## Additional Notes

- You can add more songs to the `songs` array to expand the playlist options.
- Customize the preferred genres for each Guardian in the `guardians` object as desired.

Enjoy creating and listening to Guardians' playlists!
