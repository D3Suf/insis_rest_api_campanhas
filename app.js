/**
 * 
 * CAMPANHAS REST_API
 * António Carlos Sousa 1170300 // Gonçalo Reais 1170303
 */


/**
 * Load Module dependencies
 */
const express = require('express')
    , bodyParser = require('body-parser')
    , mongoose = require('mongoose')
    , api_helper = require('./controllers/MainControler')
    , routes = new api_helper.routes;

/**
 * Load Config File
 */
const config = require('./config.json');

/**
 * Host Configuration
 */

// como esta aplicação está o "deployed" na cloud temos está configuração obrigatoria para o PORT
// process.env.PORT -> configuração necessária para o heroku executar a API
// config.app_port -> para execução local (DEV)
const PORT = process.env.PORT || config.app_port || 8080;
// ligação necessária apenas nos clientes
// const SERVER_ROOT = config.app_url + ":" + PORT;

/**
 * Database Configuration (MongoDB on ATLAS)
 */
mongoose.connect(config.db_host[0] + config.db_user + ":" + config.db_pass
    + config.db_host[1] + config.db_name + config.db_host[2]);

// uso do Mongoose Promise, para usarmos algumas callbacks em algumas das querys
mongoose.Promise = global.Promise;
var db = mongoose.connection;
db.on('error', console.error.bind(console, "MongoDB connection error: "));

/**
 * Express Object Initialize
 */
// framerwork / library express usada para termos a possiblidade
// de usar Handlers para os diferentes pedidos verbos HTTP
// (e.g GET, POST, DELETE, PUT, PATCH, ...)
var app = express();
// uso do bodyParser para tratarmos os dados provenientes do req.body
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
// set the view engine to ejs
// ejs é um engine de visualização que nos permite facilmente transportar
// dados do backend para o front end, carregando dados dinamicos através
// do js para as nossas paginas HTML. <%= %>
app.set('view engine', 'ejs');

/**
 * Load Routes
 */
app.use('/', routes.index);
app.use('/campanha', routes.campanha);
app.use('/channel', routes.channel);
// make express look in the public directory for assets (css/js/img)
app.use(express.static(__dirname + '/public'));


/**
 * Start Server
 */
app.listen(PORT, function () {
    console.log("Starting Rest Campanha API on PORT: " + PORT);
})



