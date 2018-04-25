/**
 * Load Module dependencies
 * [EndPoint wiki]
 */
const express = require('express')
    , router = express.Router();

/**
 * 
 * @Return documentation about API
 * @Method [GET]
 */
router.get('/', function (req, res) {
    // res.status(200).render('index');
    // exemplo para passagem de dados (argumentos, objetos, etc) para
    // o frontend atráves do EJS
    let infoArray = {
        owners: [
            {
                name: "António Carlos Alves de Sousa",
                number: "1170300"
            },
            {
                name: "Gonçalo Reais",
                number: "1170303"
            }
        ],
        version: "0.0.1"
    }
    res.status(200).render('index', { title: "Index Page", infoArray: infoArray });
});


module.exports = router;