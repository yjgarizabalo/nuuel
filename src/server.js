const path = require('path')
const express  = require('express')
const morgan = require('morgan')

const app = express()

// configuracion
app.set('port', process.env.PORT || 7700)
app.set('views', path.join(__dirname, 'views'))
app.set('view engine', 'ejs')

// middleware
app.use(morgan('dev'))

// rutas
app.use(require('./routes/index.routes'))
app.use(express.urlencoded({extended: false}))

// archivos estaticos


// Servidor
app.listen(app.get('port'), () => {
    console.log('[nuuel] || Servidor corriendo:', app.get('port'))
})