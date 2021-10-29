const express = require('express')
const handlers = require('./lib/handlers')
const expressHandlebars = require('express-handlebars')
const app = express()
const port = process.env.PORT || 3000


app.engine('handlebars', expressHandlebars({
    defaultLayout: 'main'
}))


app.set('view engine', 'handlebars')

app.get('/', handlers.home)
app.get('/about', handlers.about)

app.use(express.static(__dirname + '/public'))

app.use(handlers.notfound)

app.use(handlers.serverError)


if(require.main === module) {
    app.listen(port, () => console.log(
        `Express started on http://localhost:${port}` + ' Click CTRL+C to close app'
    ));
} else {
    module.exports = app
}

