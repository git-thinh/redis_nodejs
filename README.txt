

npm install yargs cron body-parser express shoe -S

npm install redis -S


----------------------------------------------------------------------------------

node --max-old-space-size=4096 app.js
node --max-old-space-size=4096 app.js --port 3000

Options:
--help     Show help
--version  Show version number
--port     http port                                                [required]
--cfg      path to toml config file
--cert     path to ssl/tls cert file
--key      path to ssl/tls private key 
--webroot  path to webroot, defaults to $PWD 
--debug    debug output to console 