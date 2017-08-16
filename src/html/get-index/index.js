var arc = require('@architect/functions')
var quoth = require('random-mitch-hedberg-quote')

function route(req, res) {
  res({
    html: quoth()
  })
}

exports.handler = arc.html.get(route)
