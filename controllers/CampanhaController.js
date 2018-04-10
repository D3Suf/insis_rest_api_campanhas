/**
 * [Campanha Controller]
 * Method's [createCampanha, getCampanha, editStatus, editContentBody, getContentByChannel]
 */

/**
 * Load Model
 */
const Campanha = require('../models/Campanha');

/**
 * Method Create Campanha
 */
exports.createCampanha = function (req, res) {

    // Validate payload (body) request  || (Search for valid mongoose schema on the future) ** 
    if (req.body.name && req.body.goal) {

        // Find Objects with same attribute
        Campanha.find({ name: req.body.name }).lean().exec(function (err, campanha) {

            // Validate Unique
            if (campanha.length > 0) {
                let customMessage = "Campanha already exist";
                res.status(409).send("Conflict " + customMessage);
            }

            // Internal Server Error
            if (err) {
                res.status(500).send("Internal Server Error " + err);
            }
        });

        let new_campanha = new Campanha({
            name: req.body.name,
            goal: req.body.goal
        });

        if (new_campanha) {
            new_campanha.save(function (err) {
                if (!err) {
                    res.status(201).json(new_campanha);
                }
            });
        }

    } else {
        // Implement exceptions file for the same behavior (on the future) **
        res.status(400).send('Bad Request');
    }
};

/**
 * Method Get Campanha by :id
 */
exports.getCampanha = function (req, res) {

    // Validate Query Params 
    if (req.params.id) {

        // Find Campanha by id
        Campanha.findOne({ _id: req.params.id }).lean().exec(function (err, campanha) {

            if (campanha) {
                res.status(200).json(campanha);
            } else {
                res.status(404).send("Not Found");
            }

        });

    } else {
        // Implement exceptions file for the same behavior (on the future) **
        res.status(400).send('Bad Request');
    }
}

/**
 * Method Edit Campanha Status
 */
exports.editStatus = function (req, res) {

    // Validate Query Params & Payload (Body) request
    if (req.params.id && req.body.status) {

        // Find Campanha by id
        Campanha.findOne({ _id: req.params.id }).lean().exec(function (err, campanha) {

            if (campanha) {
                // Atualizar
                Campanha.update(
                    { _id: campanha._id },
                    { status: req.body.status }, function (err, updatedCampanha) {

                        if (updatedCampanha) {
                            res.status(202).json("Accepted");
                        }

                        if (err) {
                            res.status(500).send("Internal Server Error");
                        }
                    });

            } else {
                res.status(404).send("Not Found");
            }

        });

    } else {
        // Implement exceptions file for the same behavior (on the future) **
        res.status(400).send('Bad Request');
    }
}

/**
 * Method Edit Campanha Content &/ Channel
 */
exports.editContentBody = function (req, res) {

    // Validate Query Params & Payload (Body) request
    if (req.params.id && req.body.contentBody) {

        // Find Campanha by id
        Campanha.findOne({ _id: req.params.id }).lean().exec(function (err, campanha) {

            if (campanha) {
                // Parse new Content Body
                let newContentBody = [];
                req.body.contentBody.forEach(element => {
                    newContentBody.push(element);
                });
                Campanha.update(
                    { _id: campanha._id },
                    {
                        contentBody: newContentBody
                    }, function (err, updatedCampanha) {

                        if (updatedCampanha) {
                            res.status(202).json("Accepted");
                        }

                        if (err) {
                            res.status(500).send("Internal Server Error");
                        }
                    });

            } else {
                res.status(404).send("Not Found");
            }

        });

    } else {
        // Implement exceptions file for the same behavior (on the future) **
        res.status(400).send('Bad Request');
    }
}

/**
 * Method Get Campanha Content by Channel
 */

exports.getContentByChannel = function (req, res) {

    // Validate Query Params
    if (req.params.id && req.params.id_channel) {

        Campanha.findOne({ _id: req.params.id }).lean().exec(function (err, campanha) {
            let getContentByChannel = [];
            if (campanha.contentBody) {

                campanha.contentBody.forEach(element => {
                    if (element.channel == req.params.id_channel) {
                        getContentByChannel.push(element.content);
                    }
                });

                if (getContentByChannel.length > 0) {
                    res.status(200).json(getContentByChannel);
                } else {
                    res.status(404).send("Not Found");
                }

            } else {
                res.status(404).send("Not Found");
            }
        });

    } else {
        // Implement exceptions file for the same behavior (on the future) **
        res.status(400).send('Bad Request');
    }

}