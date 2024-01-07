const express = require("express");
require("./utils/configs");
const app = express();
const PORT = 5000;
const VideoModel = require("./schemas/VideoSchema");
const cors = require("cors");

app.use(express.json());
app.use(cors());

app.get("/working", (req, res) => {
  return res.send("Working...");
});

app.post("/videoProceed", async (req, res) => {
  try {
    const { videoHeading, videoURL, subtitle } = req.body;

    const newVideo = new VideoModel({
      videoHeading,
      videoURL,
      subtitle,
    });

    const savedVideo = await newVideo.save();

    return res.status(201).json("savedVideo");
  } catch (error) {
    console.error("Error creating video:", error);
    return res.status(500).json({ error: "Internal Server Error" });
  }
});

app.get("/processedVideos", async (req, res) => {
  try {
    const allVideos = await VideoModel.find();
    return res.send(allVideos);
  } catch (error) {
    console.error("Error fetching videos:", error);
    return res.status(500).json({ error: "Internal Server Error" });
  }
});

app.listen(PORT);
