const mongoose = require("mongoose");

const SubtitleSchema = new mongoose.Schema(
  {
    text: {
      type: String,
      required: [true, "Subtitle Text Not Found !!!"],
    },
    time: {
      type: String,
      required: [true, "Subtitle Time Not Found !!!"],
    },
  },
  { _id: false }
);
const VideoSchema = new mongoose.Schema({
  videoHeading: {
    type: String,
    required: [true, "Video Heading Not Found !!!"],
  },
  videoURL: {
    type: String,
    required: [true, "Video URL Not Found !!!"],
  },
  subtitle: [SubtitleSchema],
},{timestamps:true});

const VideoModel = mongoose.model("Video", VideoSchema);

module.exports = VideoModel;
