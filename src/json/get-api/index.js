var arc = require('@architect/functions')
var quoth = require('random-mitch-hedberg-quote')

function route(req, res) {
  res({
    json: {quote: quoth()}
  })
}

exports.handler = arc.json.get(route)
