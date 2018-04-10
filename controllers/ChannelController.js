/**
 * [Channel Controller]
 * Method's [createChannel]
 */

/**
 * Load Model
 */
const Channel = require('../models/Channel');

/**
 * Method Create Channel
 */
exports.createChannel = function (req, res) {

    // Validate payload (body) request  || (Search for valid mongoose schema on the future) ** 
    if (req.body.name) {

        // Find Objects with same attribute
        Channel.find({ name: req.body.name }).lean().exec(function (err, channel) {

            // Validate Unique
            if (channel.length > 0) {
                let customMessage = "Channel already exist";
                res.status(409).send("Conflict " + customMessage);
            }

            // Internal Server Error
            if (err) {
                res.status(500).send("Internal Server Error " + err);
            }
        });

        let new_Channel = new Channel({
            name: req.body.name,
        });

        if (new_Channel) {
            new_Channel.save(function (err) {
                if (!err) {
                    res.status(201).json(new_Channel);
                }
            });
        }

    } else {
        // Implement exceptions file for the same behavior (on the future) **
        res.status(400).send('Bad Request');
    }
};