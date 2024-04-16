const express = require('express')
const path = require('path')
const PlayList = require('./model/Playlist.js')
const app = express()

const directPathToDist = path.join(__dirname, '..', 'website', 'dist')

const logRoutes = (req, res, next) => {
    const time = (new Date()).toLocaleString();
    console.log(`${req.method}: ${req.originalUrl} - ${time}`)
    next();
}

const serveAllPlaylist = (req, res, next) => {
    res.send(PlayList.list())
}

app.use(logRoutes)
app.use(express.static(directPathToDist))


app.get('/api/songs', serveAllPlaylist)

app.listen(8080, () => {
    console.log(`Server is now running on http://localhost:${8080}`)
})