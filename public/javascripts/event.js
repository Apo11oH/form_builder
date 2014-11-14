var title = "default"
var date = "default"
var time = "default"
var description = "default"

Event = function(title, date, time, description) {
    this.title = title;
    this.date = date;
    this.time = time;
    this.description = description;
}

// Setters
Event.getTitle = function(callback) {
    callback(title);
}
Event.getDate = function(callback) {
    callback(date);
}
Event.getTime = function(callback) {
    callback(time);
}
Event.getDescription = function(callback) {
    callback(description);
}

// Setters
Event.setTitle = function(title, callback) {
    this.title = title;
    callback(null, this.title);
}
Event.setDate = function(date, callback) {
    this.date = date;
    callback(null, this.date);
}
Event.setTime = function(time, callback) {
    this.time = time;
    callback(null, this.time);
}
Event.setDescription = function(description, callback) {
    this.description = description;
    callback(null, this.description);
}

exports.Event = Event;
