module.exports = function(x, y, callback) {

    var rect = {
        perimeter: function() {
            return (2*(x+y));
        },
        area: function() {
            return (x * y);
        }
    };

    try {
        if(x < 0 || y < 0) {
            throw new Error("x and y values are less then 0");
        }
        else {
            callback(null,rect);
        }
    } catch(error) {
        callback(error, null);
    }
}