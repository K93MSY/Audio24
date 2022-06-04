var express = require('express');
var app = express();

var listener = app.listen(80,function(){

    console.log(listener.address().port);

    app.use(express.static('sounds'));

    //var sn=require('./sounds-info.json');
    //var readinfo=JSON.parse(sn);
    //var ana = Math.random(readinfo.nm);
    var ana;
    const data = require('./sounds-info.json');

    for (const key in data) {
        ana=data[key];
    }          
    ana = Math.ceil(ana);
    app.use('/24', express.static(__dirname + '/sounds/an/' + ana + '.mp3'));
    app.use('/24/', express.static(__dirname + '/sounds/an/' + ana + '.mp3'));

    app.use('/', express.static(__dirname + '/sounds'));

});
