const express = require('express')
const path = require('path')
const Song = require('./model/Song.js')
const PlayList = require('./model/Playlist.js')
const app = express()

const directPathToDist = path.join(__dirname, '..', 'website', 'dist')

const logRoutes = (req, res, next) => {
    const time = (new Date()).toLocaleString();
    console.log(`${req.method}: ${req.originalUrl} - ${time}`)
    next();
}

app.use(logRoutes)
app.use(express.static(directPathToDist))

app.listen(process.env.PORT, () => {
    `Server is now running on http://localhost:${process.env.PORT}`
})