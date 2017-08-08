// Access file system
var fs = require('fs');

// Pass it file to be read and then execute function
fs.readFile('baby-names.csv', function(err, data) {
    if (err) {
        console.log(err);
        throw err;
    }
    var parsedData = data.toString('utf-8');

    var result = parsedData.split('\n').slice(1).map(function(intel) {
        var pieceOfData = intel.split(',');
        return {
            birthYear: parseInt(pieceOfData[0]),
            gender: pieceOfData[1],
            ethnicity: pieceOfData[2],
            name: pieceOfData[3],
            count: parseInt(pieceOfData[4]),
            rank: parseInt(pieceOfData[5]),
        }
    }).sort(function(a, b) {
        if (a.count > a.count) return 1
        if (a.count < a.count) return -1
        if (a.count === a.count) return 0
    })
    console.log(result[0]);
})