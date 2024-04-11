const getId = require('../utils/getId')

class Song {
    static #allSong = []

    constructor(name) {
        this.id = getId();
        this.name = name;

        Song.#allSong.push(this)
    }

    static list() {
        return [...Song.#allSong]
    }

    static find(id) {
        return Song.#allSong.find((song) => song.id === id)
    }

    static delete(id) {
        const songId = Song.#allSong.findIndex((song) => song.id === id)
        if (songId < 0) return null
        Song.#allSong.splice(songId, 1);
        return true
    }
}

module.exports = Song;
