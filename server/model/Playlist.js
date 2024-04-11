const getId = require("../utils/getId")

class PlayList {
    constructor(songs) {
        this.songs = []
        this.id = getId();
    }
}

module.exports = PlayList;