/**
 * Module for API Manipulation
 */

function routes(){
    this.index = require('../routes/index');
    this.campanha = require('../routes/campanha');
    this.channel = require('../routes/channel');
}

module.exports.routes = routes;