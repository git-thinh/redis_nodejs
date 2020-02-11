let PORT_HTTP = 4040;
const _PATH = require('path');

const _SHOE = require('shoe');

// HTTP
const _HTTP_EXPRESS = require('express');
const _HTTP_BODY_PARSER = require('body-parser');
const _HTTP_APP = _HTTP_EXPRESS();

const _HTTP_SERVER = require('http').createServer(_HTTP_APP);

//#region [ HTTP ]

let ADDRESS_PORT = {};


_HTTP_APP.use(_HTTP_EXPRESS.static(_PATH.join(__dirname, 'htdocs')));

_HTTP_APP.use(_HTTP_BODY_PARSER.json());
_HTTP_APP.use((error, req, res, next) => {
    if ($.CACHE_STORE.IS_BUSY) {
        return res.json({ ok: false, state: $.CACHE_STORE.STATE, mesage: 'Api is caching ...' });
    }
    if (error !== null) {
        return res.json({ ok: false, mesage: 'Invalid json ' + error.toString() });
    }
    return next();
});

_HTTP_APP.get('/info', function (req, res) {
    res.json({
        ok: true,
        http: {
            port: PORT_HTTP
        }
    });
});
  

//#endregion


const _SOCK = _SHOE(function (stream) {
    var iv = setInterval(function () {
        stream.write(Math.floor(Math.random() * 2));
    }, 250);

    stream.on('end', function () {
        clearInterval(iv);
    });

    //stream.pipe(process.stdout, { end: false });
});

// *** must pass expcess/connect apps like this:
_SOCK.install(_HTTP_SERVER.listen(PORT_HTTP, '127.0.0.1', () => {
    ADDRESS_PORT = _HTTP_SERVER.address();
    console.log('HTTP_API: ', ADDRESS_PORT);
    http___on_ready();
}), '/stream-shoe');

const http___on_ready = () => {

};