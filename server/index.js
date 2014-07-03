var app             = require('http').createServer(handler)
var argv            = require('yargs').argv;
var _               = require('lodash');
var path            = require('path');
var staticproxy     = require('./static-proxy');
var socket          = require('./socket');
var serveIndex      = require('./serve-index');
var utils           = require('./utils');
var config          = require('./config');
var prettyjson      = require('prettyjson');
var blankline       = console.log;
var port            = argv.port || config.get('app.port');
var host            = argv.host || config.get('app.host');
var defaultProject  = config.get('projects.default');

process.title = config.get('general.process-name');

if (defaultProject === 'cwd') {
    defaultProject = process.cwd();
}

var url     = 'http://' + host + ':' + port + '/' + defaultProject;
var open    = _.has(argv, 'open') ? argv.open : config.get('app.open');

app.listen(port);

blankline();
console.log(prettyjson.render({'Configuration used': config.get()}, {noColor: true}));

if (open) {
    var open = require("open");
    open(url);
} else {
    blankline();
    console.log('Open your browser at ' + url + ' to access the IDE')
}

function handler (req, res) {
    if (!path.extname(req.url)) {
        serveIndex(req, res);
    }

    staticproxy('/bower_components', req, res);
    staticproxy('/client', req, res);
}

/**
 * HERE STARTS THE FUN!
 */
socket.startTheFun(app);