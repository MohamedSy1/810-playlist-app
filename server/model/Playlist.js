const Song = require('./Song.js')
const getId = require("../utils/getId")

class PlayList {
    static #allPlaylists = []

    constructor(name) {
        this.name = name
        this.songs = []
        this.id = getId();

        PlayList.#allPlaylists.push(this);
    }

    static list() {
        return [...PlayList.#allPlaylists];
    }

    listSongs() {
        return this.songs
    }

    addSong(songName) {
        // if (typeof song !== 'string') return 'song must be a string';
        const song = new Song(songName)
        this.songs.push(song)
    }
}

const Favorites = new PlayList('Hello World')
Favorites.addSong('Spoon');
Favorites.addSong("Spoony")
console.log(PlayList.list())




module.exports = PlayList;
