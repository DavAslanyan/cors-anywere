require('dotenv').config()

const  host = process.env.HOST || 'localhost';
const  port = process.env.PORT || 8080;

async function init () {

  const  cors_proxy = require('cors-anywhere');
  cors_proxy.createServer({
    originWhitelist: [], // Allow all origins
    requireHeader: ['origin', 'x-requested-with'],
    removeHeaders: ['cookie', 'cookie2']
  }).listen(port, host, function() {
    console.log('Running CORS Anywhere on ' + host + ':' + port);
  });

}

module.exports = init().catch(err=>{
  console.log('Error when run cors server', err)
})
