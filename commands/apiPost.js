var util = require('util');
var events = require('events');

function apiPost () {}
util.inherits(apiPost, events.EventEmitter);

apiPost.prototype.command = function (apiUrl, postBody, postHeaders, postAuth, success) {
    var request = require("request");

    var options = {
        uri: apiUrl,
        method: "POST",
        json: postBody
    };

    if (postHeaders !== undefined) {
        options.headers = postHeaders;
    }
    if (postAuth !== undefined) {
        options.auth = postAuth;
    }

    request(options, function (error, response) {
        if (error) {
            console.log(error);
            return;
        }

        success(response);
        this.emit('complete');
    }.bind(this));
};

module.exports = apiPost;