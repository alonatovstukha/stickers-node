const {Schema, model} = require('mongoose');

const schema = new Schema ({
  title:
  {
    type: String,
    default: 'abc'
  }  
})

module.exports = model('Sticker', schema)