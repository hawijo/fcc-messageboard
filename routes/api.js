'use strict';

let mongodb = require('mongodb')
let mongoose = require('mongoose')

module.exports = function (app) { 
  let uri = 'mongodb+srv://joshuahawi24:' + process.env.PW + '@w3-tutorial.q90bo.mongodb.net/message_board?retryWrites=true&w=majority&appName=W3-Tutorial'
	mongoose.connect(uri, { useNewUrlParser: true, useUnifiedTopology: true })

  let replySchema = new mongoose.Schema({
    text: {type: String, required: true},
    delete_password: {type: String, required: true},
    createdon_ : {type: Date, required: true},
    reported: {type: Boolean, required: true}
  })
  
  let threadSchema = new mongoose.Schema({
    text: {type: String, required: true},
    delete_password: {type: String, required: true},
    board: {type: String, required: true},
    createdon_: {type: Date, required: true},
    bumpedon_: {type: Date, required: true},
    reported: {type: Boolean, required: true},
    replies: [replySchema]
  })
  
  let Reply = mongoose.model('Reply', replySchema)
  let Thread = mongoose.model('Thread', threadSchema)
  

  app.route('/api/threads/:board');
    
  app.route('/api/replies/:board');

};
