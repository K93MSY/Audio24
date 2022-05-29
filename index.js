var express = require('express');
var app = express();

var listener = app.listen(3000,function(){

    console.log(listener.address().port);

    app.use(express.static('sounds'));

    app.use('/', express.static(__dirname + '/sounds'));


    var an =0;
    app.use('/24', express.static(__dirname + '/sounds/an/' + an + '.mp3'));

});