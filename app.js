const express = require('express'),
  app = express(),
  mongoose = require('mongoose')

const mongoUrl = process.env.NODE_ENV === 'docker-development' ? 'dockerized_mongo' : 'localhost'
mongoose.connect(`mongodb://${mongoUrl}/starter-db`)
mongoose.Promise = global.Promise
const Dog = mongoose.model('Dog', { name: String})

app.get('/', (req, res) => res.send(`<ul>
                                      <li>GET /api/v1/dogs</li>
                                      <li>POST /api/v1/dog</li>
                                    </ul>`))

app.get('/api/v1/dogs', (req, res) => {
  Dog
    .find()
    .then((allDogs) => res.json(allDogs))
})

app.post('/api/v1/dog', (req, res) => {
  new Dog({name: `Wunderdog ${new Date().getMilliseconds()}`})
    .save()
    .then((saved) => res.json(saved))
})

app.listen(3000, () => console.log('starter-app listening on port 3000!'))
