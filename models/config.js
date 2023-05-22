const mongoose = require('mongoose');

const ConfigSchema = new mongoose.Schema({
  maintenance: { type: Boolean, default: false },
});
console.log("here1")
module.exports = mongoose.model('Config', ConfigSchema);
console.log("here2")