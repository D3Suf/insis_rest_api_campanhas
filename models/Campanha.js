/**
 * [Model Campanha]
 * Attributes [name, goal, status, content, country, channel]
 */

/**
 * Load Module dependencies
 */
const mongose = require('mongoose')
    , Schema = mongose.Schema;

/**
 * Campanha Model
 */
const Campanha = new Schema({
    name: {
        type: String,
        require: true,
        unique: true
    },
    goal: {
        type: String,
        require: true
    },
    status: {
        type: String,
        default: "iniciada"
    },
    contentBody: [{
        channel: {
            type: Schema.Types.ObjectId,
            ref: 'Channel',
            require: true
        },
        content: {
            type: String,
            require: true
        }
    }],
    // Create Module Country with location, language and coin. **
    country: {
        type: String
    }
});

/**
 * Export Campanha Model
 */
module.exports = mongose.model('Campanha', Campanha);