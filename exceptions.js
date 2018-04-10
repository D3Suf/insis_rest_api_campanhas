/**
 * Util for Handler Exceptions from API REQUESTS
 */

function NotFoundError(campanha){
    this.name = "NotFoundError";
    this.message = companha || "Object not found.";
    this.stack = (new Error()).stack;
}

NotFoundError.prototype = Object.create(Error.prototype);
NotFoundError.prototype.constructor = NotFoundError;

/**
 * Module Exports
 */
module.exports.NotFoundError = NotFoundError;