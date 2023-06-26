import mongoose from "mongoose";

const eventSchema = new mongoose.Schema(
  {
    name: {
        type:String,
        required: true,
    },

    location: {
        type:String,
        required: true,
    },

    time: {
        type:String,
        required: true,
    },

    date: {
        type:String,
        required: true,
    },

    category: {
        type:String,
    },

    image: {
        type:String,
    }
  },
  { timestamps: true }
);

export default mongoose.model("Event", eventSchema);