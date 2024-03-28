// Array of song objects. Add at least 5 songs with title, artist, and genre properties.
const songs = [
    { title: "Hooked on a Feeling", artist: "Blue Swede", genre: "Pop" },
    { title: "Moonage Daydream", artist: "David Bowie", genre: "Rock" },
    { title: "I Want You Back", artist: "The Jackson 5", genre: "Pop" },
    { title: "Spirit in the Sky", artist: "Norman Greenbaum", genre: "Rock" },
    { title: "Cherry Bomb", artist: "The Runaways", genre: "Rock" },
    { title: "Escape (The Piña Colada Song)", artist: "Rupert Holmes", genre: "Pop" },
    { title: "O-O-H Child", artist: "The Five Stairsteps", genre: "R&B" },
    { title: "Ain't No Mountain High Enough", artist: "Marvin Gaye & Tammi Terrell", genre: "R&B" },
    { title: "Come and Get Your Love", artist: "Redbone", genre: "Rock" },
    { title: "I'm Not in Love", artist: "10cc", genre: "Pop" },
    { title: "Fooled Around and Fell in Love", artist: "Elvin Bishop", genre: "Rock" },
    // Feel free to add even more songs
    { }
];

// Object containing each Guardian's preferred genre
const guardians = {
    "Star-Lord": "Rock",
    "Gamora": "Pop",
    "Drax": "R&B",
    "Rocket": "Rock",
    "Groot": "Pop"
};

// Function to generate playlist based on preferred genre
function generatePlaylist(guardians, songs) {
    // Use the map() function to create playlists for each Guardian
    const playlists = Object.keys(guardians).map(guardian => {
        const genre = guardians[guardian];
        const playlist = songs.filter(song => song.genre === genre);
        return { guardian, playlist };
    });
    return playlists;
}

// Function to display playlists
function displayPlaylists(playlists) {
    const playlistsContainer = document.getElementById("playlists");
    playlists.forEach(({ guardian, playlist }) => {
        const playlistDiv = document.createElement("div");
        playlistDiv.classList.add("playlist");
        playlistDiv.innerHTML = `<h2>${guardian}'s Playlist</h2>`;
        
        playlist.forEach(song => {
            const paragraph = document.createElement("p");
            paragraph.classList.add('song');

            const songTitle = document.createElement('span');
            songTitle.classList.add('song-title');
            songTitle.textContent = song.title;

            paragraph.appendChild(songTitle);
            paragraph.innerHTML += ` by ${song.artist}`;
            playlistDiv.appendChild(paragraph);
            
        });
        
        playlistsContainer.appendChild(playlistDiv);
    });
}

// Call generatePlaylist and display the playlists for each Guardian
const playlists = generatePlaylist(guardians, songs);
displayPlaylists(playlists);