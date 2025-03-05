'use strict';

let mongodb = require('mongodb')
let mongoose = require('mongoose')

module.exports = function (app) { 
  let uri = 'mongodb+srv://joshuahawi24:' + process.env.PW + '@w3-tutorial.q90bo.mongodb.net/message_board?retryWrites=true&w=majority&appName=W3-Tutorial'
	mongoose.connect(uri, { useNewUrlParser: true, useUnifiedTopology: true })

  app.route('/api/threads/:board');
    
  app.route('/api/replies/:board');

};
