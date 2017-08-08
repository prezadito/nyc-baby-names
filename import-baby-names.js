// Access file system
var fs = require('fs');

// Pass it file to be read and then execute function
fs.readFile('baby-names.csv', function(err, data) {
    if (err) {
        console.log(err);
        throw err;
    }
    var parsedData = data.toString('utf-8');

    console.log(parsedData.split('\n'));
})