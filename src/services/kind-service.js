var mongoose = require('mongoose');

var KindSchema = new mongoose.Schema({
  name: String,
  url: String
});

var KindService = mongoose.model('Kind', KindSchema);

module.exports = KindService;
