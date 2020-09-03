const mongoose = require("mongoose");

const SpotSchema = new mongoose.Schema(
  {
    thumbnial: String,
    company: String,
    price: Number,
    techs: [String],
    user: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User"
    }
  },
  {
    toJSON: {
      virtuals: true
    }
  }
);

SpotSchema.virtual("thumbnail_url").get(function() {
  return `http://10.0.0.113:3333/files/${this.thumbnial}`;
});

module.exports = mongoose.model("Spot", SpotSchema);
