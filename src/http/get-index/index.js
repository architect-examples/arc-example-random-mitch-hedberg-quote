const arc = require('@architect/functions')
const quoth = require('random-mitch-hedberg-quote')

async function route(req) {
  return {
    html: quoth()
  }
}

exports.handler = arc.http.async(route)
