const EventEmmiter = require('events');
const util = require('util');

function NewEvent() {
    this.on('start', function(name) {
        console.log(name);
    });
}

util.inherits(NewEvent, EventEmmiter);

NewEvent.prototype.start = function(name) {
    this.emit('start', name);
}

module.exports = NewEvent;