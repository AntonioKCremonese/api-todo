const mongoose = require('mongoose');
mongoose.Promise = global.Promise;
module.exports = mongoose.connect('mongodb://admin:admin123@ds051625.mlab.com:51625/todo');
