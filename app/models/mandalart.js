// Mandalart model

var mongoose = require('mongoose'),
  Schema = mongoose.Schema;

var MandalartSchema = new Schema({
  _id: Number,
  title: String,
  description: String,
  cells: [{ id: Number, title: String }]
});

MandalartSchema.virtual('date')
  .get(function(){
    return this._id.getTimestamp();
  });

mongoose.model('Mandalart', MandalartSchema);
